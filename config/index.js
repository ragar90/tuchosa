if (!process.env.TUCHOSA_ENV || process.env.TUCHOSA_ENV === 'LOCAL') {
	console.log('===> Loading .env file')
	require('dotenv').config()
}
module.exports ={
	DATABASE_URL: process.env.TUCHOSA_ENV  !== 'TEST' ? process.env.DATABASE_URL : process.env.TEST_DATABASE_URL,
	VERBOSE: process.env.VERBOSE
}