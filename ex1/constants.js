require('dotenv').config();

const { DB_HOST, DB_USER, DB_PASS } = process.env;

module.exports = {
    DB_HOST,
    DB_USER,
    DB_PASS
};
