module.exports ={
	DATABASE_URL: process.env.ECOMANDA_ENV  !== 'TEST' ? process.env.DATABASE_URL : process.env.TEST_DATABASE_URL,
	VERBOSE: process.env.VERBOSE
}