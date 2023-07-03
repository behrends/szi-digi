import { cache } from 'react';
// TODOs:
// - TypeScript
// - generate tests with GPT

export function calcDiffInWeeks(start, end) {
  const diffInMs = Math.abs(end.getTime() - start.getTime());
  return Math.round(diffInMs / (1000 * 60 * 60 * 24 * 7));
}

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
