const port = process.env.PORT  || 3000

const DB_HOST = process.env.DB_HOST || 'localhost'
const DB_USER = process.env.DB_USER || 'root'
const DB_PASS = process.env.DB_PASS || 'abcd1234'
const DB_PORT = process.env.DB_PORT || 3306
const DB_NAME = process.env.DB_NAME || 'nodemysqlcrud'

module.exports = {port, DB_HOST,DB_NAME,DB_PASS,DB_PORT,DB_USER}