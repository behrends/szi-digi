'use client';
import { Chart } from 'react-google-charts';

const columns = [
  { type: 'string', id: 'Course' },
  { type: 'string', id: 'dummy bar label' },
  { type: 'string', role: 'tooltip' },
  { type: 'string', id: 'style', role: 'style' },
  { type: 'date', id: 'Start' },
  { type: 'date', id: 'End' },
];

export default function Timeline({ rows }) {
  const data = [columns, ...rows];
  return (
    <Chart
      chartType="Timeline"
      data={data}
      width="100%"
      height="400px"
      options={{
        hAxis: {
          format: 'dd.MM.yy',
        },
      }}
    />
  );
}
