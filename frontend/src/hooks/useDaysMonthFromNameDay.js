import getDaysOfMonthFromNameDay from "@utils/getDaysOfMonthFromNameDay";
import { Info } from "luxon";
import { useEffect, useState } from "react";

export const spanishLocale = {
  months: Info.months("long").map((month) =>
    month.at(0).toUpperCase().concat(month.slice(1))
  ),
  weekDays: Info.weekdays("long").map((weekDay, i) => ({
    name: weekDay, // used for accessibility
    short: Info.weekdays("short").at(i), // displayed at the top of days' rows
    isWeekend: ["sábado", "domingo"].includes(weekDay),
  })),
  weekStartingIndex: 0,
  getToday: (gregorainTodayObject) => gregorainTodayObject,
  // return a native JavaScript date here
  toNativeDate: (date) => new Date(date.year, date.month - 1, date.day),

  // return a number for date's month length
  getMonthLength: (date) => new Date(date.year, date.month, 0).getDate(),

  // return a transformed digit to your locale
  transformDigit: (digit) => digit,
  from: "from",
  to: "to",
  digitSeparator: ",",

  yearLetterSkip: 0,

  isRtl: false,
};

export default function useDaysMonthFromNameDay(daysNamesString) {
  const daysNames = daysNamesString
    .replace(/(-|\/)/g, "~")
    .split("~")
    .map((dayName) => dayName.trim().toLowerCase());
  const [selectedDays, setSelectedDays] = useState([]);
  const getSelectedDays = async () => {
    const selectedDaysGetted = await Promise.all(
      daysNames.map(async (dayName) => {
        const daysOfMonthFromNameDay = await getDaysOfMonthFromNameDay(dayName);
        return daysOfMonthFromNameDay;
      })
    );
    setSelectedDays(selectedDaysGetted.flat(1));
  };
  useEffect(() => {
    getSelectedDays();
  }, [daysNamesString]);
  return selectedDays;
}
