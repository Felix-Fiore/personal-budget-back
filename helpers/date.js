const moment = require('moment');

const date = (date) => {
  if (!date) {
    return false;
  }

  const actualDate = moment(date);
  if (actualDate.isValid()) {
    return true;
  } else {
    return false;
  }
};

module.exports = { date };
