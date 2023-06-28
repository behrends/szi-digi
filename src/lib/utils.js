// TODOs:
// - TypeScript
// - generate tests with GPT

export function calcDiffInWeeks(start, end) {
  const diffInMs = Math.abs(end.getTime() - start.getTime());
  return Math.round(diffInMs / (1000 * 60 * 60 * 24 * 7));
}
