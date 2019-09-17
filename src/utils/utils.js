import moment from 'moment-timezone';

const utils = {
  getLocalTime : (time, timezone) =>{
    return moment.tz(time, timezone).format('HH:mm, dddd, MMMM Do YYYY');
  },
}

export default utils;
