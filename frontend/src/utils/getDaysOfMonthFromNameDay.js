import * as luxon from "luxon";

const getDaysFromMonth = (month, year = 2023) =>
  new Date(year, month, 0).getDate();

const getDaysOfMonthFromNameDay = async (nameDay) => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  // const preselectedDays = [];
  const findDayFromNameDayPromise = () =>
    new Promise((res, rej) => {
      let dayIndex = 1;
      let dayMonth = luxon.DateTime.local(year, month, dayIndex);
      const findDayFromNameDay = () => {
        try {
          if (
            dayMonth.weekdayLong === nameDay ||
            dayMonth.weekdayShort === nameDay
          ) {
            res(dayMonth);
            return;
          }
          dayIndex += 1;
          dayMonth = luxon.DateTime.local(year, month, dayIndex);
          requestIdleCallback(findDayFromNameDay);
        } catch (err) {
          rej(err);
        }
      };
      findDayFromNameDay();
    });
  const getDaysSelected = (dayMonth) =>
    new Promise((res, rej) => {
      let { day } = dayMonth;
      day -= 1;
      const preselectedDays = [];
      const addDayToListSelected = () => {
        try {
          if (day <= getDaysFromMonth(month, year)) {
            preselectedDays.push({
              year,
              month,
              day,
            });
            day += 7;
            requestIdleCallback(addDayToListSelected);
            return;
          }
          res(preselectedDays);
        } catch (err) {
          rej(err);
        }
      };
      addDayToListSelected();
    });
  const dayMonth = await findDayFromNameDayPromise();
  const daysSelected = await getDaysSelected(dayMonth);
  return daysSelected;
};

export default getDaysOfMonthFromNameDay;
