'use client';
import { useState } from 'react';
import SelectQuarters from '@/components/SelectQuarters';
import Timeline from '@/components/Timeline';

export default function PeriodChart({ periods, start, end }) {
  const [range, setRange] = useState({ start, end });

  /* TODOs: 
    Nur aktuelles und zukünftige Quartale? Oder auch vergangene?
    Auswählbare Quartale aus DB ableiten?
    Völlig dynamische Start- und Endzeiten? Slider von links/rechts? 
  */
  function getQuarterDates(quarter) {
    let start, end;
    switch (quarter) {
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

  function handleSelectQuarter(quarter) {
    const dates = getQuarterDates(quarter) ?? { start, end };
    setRange(dates);
  }

  return (
    <>
      <SelectQuarters onChange={handleSelectQuarter} />
      <Timeline
        periodData={periods}
        start={range.start}
        end={range.end}
      />
    </>
  );
}
