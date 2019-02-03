/**
 * this method get timestamp time and convert it to date string
 * @param {Number} time time that you want ot convert it to date
 */
const ConvertToDateString = time => {
  try {
    return new Date(time).toDateString();
  } catch (err) {
    throw new Error();
  }
};
export default ConvertToDateString;
