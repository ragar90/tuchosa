const Bookshelf = require('../../config/bookshelf');
const Property = require('./property');
const sha256 = require('sha256');
const randomString = require('../helpers/random_token_helper');
const moment = require('moment');

Bookshelf.plugin('registry');
Bookshelf.plugin('pagination');

const LandLord = Bookshelf.Model.extend({
  tableName: 'landlords',
  hasTimestamps: true,
  properties: function () {
    return this.hasMany(Rental);
  },
  singOut: () => {
    this.set({ session_token: null}).save()
  }
},{
  authenticate: function (email, password, ipAddress) {
    return new Promise((resolve, reject) => {
      if (!email || !password) 
        throw new Error('Email and password are both required');;
      return this.forge({ email: email.toLowerCase().trim() })
        .fetch({ require: true })
        .then( (landlord) => {
          return bcrypt.compare(password, landlord.get('password'))
            .then((res) => {
              if (!res) {
                throw new Error('Invalid password');
              } else {
                const token = sha256(randomString(64));
                const currentSignInAt = moment().format();
                const currentSignInIp = ipAddress;
                const lastSignInAt = landlord.get('current_sign_in');
                const lastSignInIp = landlord.get('current_sign_in_ip');
                const params = {
                  session_token: token,
                  current_sign_in_at: currentSignInAt,
                  current_sign_in_ip: currentSignInIp,
                  last_sign_in_at: lastSignInAt,
                  last_sign_in_ip: lastSignInIp
                }
                return landlord.set(params).save()
              }
            })
        })
        .then((lanlord) => {
          resolve(lanlord)
        })
        .catch((error) => {
          reject(error);
        })
    })
  }
})

module.exports = Bookshelf.model('LandLord', LandLord);