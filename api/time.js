const getCurrentTime = () => {
  return new Date()
  .toLocaleString('vn-vi', 
    {
      timeZone: 'Asia/Ho_Chi_Minh'
    }
  );
};

module.exports = getCurrentTime;