const cron = require('node-cron');
const { getCurrentView, getViewOfYesterday } = require('./callAPI');
const { create } = require('./mongodb');
const { getCurrentDate, getCurrentTime, getYesterday } = require('./time');

const scheduler = () => {
  console.log('⛏ Scheduler is working...');

  // '0 0 17 * * *'
  // Thực hiện vào 17:00 giờ mỗi ngày (theo giờ hệ thống của Glitch)
  // -> 00:00 theo giờ Việt Nam
  cron.schedule('0 0 17 * * *', async () => {
    const date = getCurrentDate();
    const time = getCurrentTime();
    const yesterday = getYesterday();

    const username = 'caohuy26';
  
    const view = await getCurrentView(username);
    
    const viewOfYesterday = await getViewOfYesterday(yesterday);
    const differenceView = view - viewOfYesterday;

    const data = {
      username,
      view,
      differenceView,
      date,
      time
    };
    create(data);

    console.log(`[${date} - ${time}]: Done (${view})`);
  });
};

module.exports = scheduler;