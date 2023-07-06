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

export function getQuarterDates(quarter) {
  let start, end;
  switch (quarter) {
    case 'Q223':
      start = new Date('2023-04-01T00:00:00');
      end = new Date('2023-06-30T00:00:00');
      break;
    case 'Q323':
      start = new Date('2023-06-30T00:00:00');
      end = new Date('2023-09-30T00:00:00');
      break;
    case 'Q423':
      start = new Date('2023-10-01T00:00:00');
      end = new Date('2023-12-31T00:00:00');
      break;
    case 'Q124':
      start = new Date('2024-01-01T00:00:00');
      end = new Date('2024-03-31T00:00:00');
      break;
    case 'Q224':
      start = new Date('2024-04-01T00:00:00');
      end = new Date('2024-06-30T00:00:00');
      break;
    case 'Q324':
      start = new Date('2024-07-01T00:00:00');
      end = new Date('2024-09-30T00:00:00');
      break;
    default:
      return null;
  }
  return { start, end };
}
