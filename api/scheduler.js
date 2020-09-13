const cron = require('node-cron');
const { getCurrentView } = require('./callAPI');
const { insertData } = require('./lowdb');
const getCurrentTime = require('./time');

const scheduler = () => {
  console.log('⛏ Scheduler is working...');

  // Thực hiện sau mỗi 1 phút
  cron.schedule('*/1 * * * *', async () => {
    const time = getCurrentTime();
    const username = 'caohuy26';
  
    const view = await getCurrentView(username);

    const data = {
      id: new Date().getTime(),
      username,
      view,
      time
    };
    insertData(data);

    console.log(`[${time}]: Done (${view})`);
  });
};

module.exports = scheduler;