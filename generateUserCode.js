const dotenv = require('dotenv');
const crypto = require('crypto');

dotenv.config();

const md5_key = process.env.MD5_KEY;

const generateUserCode = (username) => {
  return crypto.createHash('md5')
    .update(username, 'utf8')
    .update(md5_key, 'utf8')
    .digest('hex');
};

module.exports = generateUserCode;