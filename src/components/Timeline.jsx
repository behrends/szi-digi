'use client';
import { useState } from 'react';
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
  const [completeData] = useState(rows);
  const [currentData, setCurrentData] = useState(rows);
  const data = [columns, ...currentData];
  return (
    <>
      <label htmlFor="quarter" className="font-medium mr-2">
        Zeige Kurse mit ihren Phasen in diesem Quartal:
      </label>
      <select
        id="quarter"
        className="select select-bordered select-primary select-sm mb-4"
        onChange={(e) => {
          // TODO: filter rows by quarter
          let start, end;
          switch (e.target.value) {
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
              setCurrentData(completeData);
              return;
          }
          const newData = completeData
            .filter((row) => {
              return (
                (row[4] >= start && row[4] <= end) ||
                (row[5] >= start && row[5] <= end) ||
                (row[4] <= start && row[5] >= end)
              );
            })
            .map((row) => {
              const newRow = [...row];
              newRow[4] = newRow[4] <= start ? start : newRow[4];
              newRow[5] = newRow[5] >= end ? end : newRow[5];
              return newRow;
            });
          setCurrentData(newData);
        }}
      >
        <option value="all">Ganzer Zeitraum (alle Quartale)</option>
        <option value="Q223">
          Q223・April-Juni 2023・Sommersemester (aktuelles Quartal)
        </option>
        <option value="Q323">
          Q323・Juli-September 2023・Sommersemester
        </option>
        <option value="Q423">
          Q423・Oktober-Dezember 2023・Wintersemester
        </option>
        <option value="Q124">
          Q124・Januar-März 2024・Wintersemester
        </option>
        <option value="Q224">
          Q224・April-Juni 2024・Sommersemester
        </option>
        <option value="Q324">
          Q324・Juli-September 2024・Sommersemester
        </option>
      </select>
      <Chart
        chartType="Timeline"
        data={data}
        width="100%"
        height="600px"
        options={{
          hAxis: {
            format: 'dd.MM.yyyy',
          },
        }}
      />
    </>
  );
}
