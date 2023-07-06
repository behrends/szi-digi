// TODOs:
// - TypeScript
// - generate tests with GPT
export const germanLocale = {
  dateTime: '%A, der %e. %B %Y, %X',
  date: '%d.%m.%Y',
  time: '%H:%M:%S',
  periods: ['AM', 'PM'],
  days: [
    'Sonntag',
    'Montag',
    'Dienstag',
    'Mittwoch',
    'Donnerstag',
    'Freitag',
    'Samstag',
  ],
  shortDays: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
  months: [
    'Januar',
    'Februar',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember',
  ],
  shortMonths: [
    'Jan',
    'Feb',
    'Mrz',
    'Apr',
    'Mai',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Okt',
    'Nov',
    'Dez',
  ],
};

export function calcDiffInWeeks(start, end) {
  const diffInMs = Math.abs(end.getTime() - start.getTime());
  return Math.round(diffInMs / (1000 * 60 * 60 * 24 * 7));
}

export function filterPeriods(data, start, end) {
  const courses = new Set();
  const periods = data
    .filter((item) => {
      return (
        (item.start >= start && item.start <= end) ||
        (item.end >= start && item.end <= end) ||
        (item.start <= start && item.end >= end)
      );
    })
    .map((item) => {
      courses.add(item.course);
      const newItem = { ...item };
      newItem.start = newItem.start <= start ? start : newItem.start;
      newItem.end = newItem.end >= end ? end : newItem.end;
      return newItem;
    });
  return { periods, courses };
}
