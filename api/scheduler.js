const cron = require('node-cron');
const { getCurrentView } = require('./callAPI');
const { create } = require('./mongodb');
const { getCurrentDate, getCurrentTime } = require('./time');

const scheduler = () => {
  console.log('⛏ Scheduler is working...');

  // Thực hiện vào 00:00 giờ mỗi ngày
  cron.schedule('0 0 0 * * *', async () => {
    const date = getCurrentDate();
    const time = getCurrentTime();

    const username = 'caohuy26';
  
    const view = await getCurrentView(username);

    const data = {
      username,
      view,
      date,
      time
    };
    create(data);

    console.log(`[${date} - ${time}]: Done (${view})`);
  });
};

module.exports = scheduler;