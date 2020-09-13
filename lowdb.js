const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({ records: [] }).write();

const insertData = ({ id, username, view, time }) => {
  db.get('records')
    .push({
      id,
      username,
      view,
      time
    })
    .write();
};

module.exports = db;
module.exports.insertData = insertData;