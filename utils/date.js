const monthNumShortName = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sept",
  9: "Oct",
  10: "Nov",
  11: "Dec",
};

export const getCurrentDateInMMDDYYYY = () => {
  const currentDate = new Date();
  return `${
    monthNumShortName[currentDate.getMonth()]
  }-${currentDate.getDate()}-${currentDate.getFullYear()}`;
};

export const getDateTime = (dateString) => {
  const date = dateString.split("/");
  return new Date(date[2], --date[0], date[1]);
};
