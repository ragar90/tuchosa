const moment = require('moment');
module.exports = [
  {
    name: 'Plazo corto',
    description: 'Plazo de contrato corto de por lo menos 3 meses',
    duration: 3,
    created_at: moment().format(),
    updated_at: moment().format()
  },
  {
    name: 'Plazo mediano',
    description: 'Plazo de contrato mediano de por lo menos 6 meses',
    duration: 6,
    created_at: moment().format(),
    updated_at: moment().format()
  },
  {
    name: 'Plazo largo',
    description: 'Plazo de contrato largo de por lo menos 12 meses',
    duration: 12,
    created_at: moment().format(),
    updated_at: moment().format()
  },
  {
    name: 'Plazo indefindo',
    description: 'Plazo de contrato indefindo',
    created_at: moment().format(),
    updated_at: moment().format()
  }
]