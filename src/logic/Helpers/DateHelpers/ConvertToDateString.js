const ConvertToDateString = time => {
  try {
    return new Date(time).toDateString();
  } catch (err) {
    throw new Error();
  }
};
export default ConvertToDateString;
