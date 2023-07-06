'use client';
import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import {
  calcDiffInWeeks,
  germanLocale,
  getQuarterDates,
} from '@/lib/utils.js';

d3.timeFormatDefaultLocale(germanLocale);

export default function Timeline({
  courses,
  data,
  domainStart,
  domainEnd,
}) {
  const [completeData] = useState(data);
  const [currentData, setCurrentData] = useState(data);
  const [allCourses] = useState(new Set(courses));
  const [currentCourseNames, setCurrentCourseNames] = useState(
    new Set(courses)
  );
  const [domainRange, setDomainRange] = useState({
    start: domainStart,
    end: domainEnd,
  });
  const [wholeRange] = useState({
    start: domainStart,
    end: domainEnd,
  });

  const gx = useRef(),
    gy = useRef(),
    todayLine = useRef(),
    divRef = useRef(),
    svgRef = useRef();

  const width = 960,
    marginTop = 20,
    marginRight = 20,
    marginBottom = 30,
    marginLeft = 50;

  const height =
    currentCourseNames.size * 30 + marginTop + marginBottom;

  const x = d3
    .scaleUtc()
    .domain([domainRange.start, domainRange.end])
    .range([marginLeft, width - marginRight]);

  const y = d3
    .scaleBand()
    .domain(currentCourseNames)
    .range([height - marginBottom, marginTop])
    .padding(0.08);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const div = d3.select(divRef.current);

    const tooltip = div
      .append('div')
      .attr(
        'class',
        'absolute opacity-0 bg-white border border-gray-300 rounded-md shadow-md'
      );

    svg
      .selectAll('rect')
      .data(currentData)
      .join('rect')
      .attr('x', (d) => x(d.start))
      .attr('y', (d) => y(d.course))
      .attr('width', (d) => x(d.end) - x(d.start))
      .attr('height', y.bandwidth())
      .attr('fill', (d) => (d.theory ? '#E2001A' : '#5C6971'))
      .on(
        'mouseover',
        (_, { start, end, semester, theory, remarks }) => {
          const weeks = calcDiffInWeeks(start, end);
          tooltip.transition().duration(200).style('opacity', 0.9);
          tooltip.html(
            `<div class='p-1 text-base text-center' style='width: 220px;'>
          <p class='text-lg font-bold'>${start.toLocaleDateString(
            'de',
            { dateStyle: 'short' }
          )}-${end.toLocaleDateString('de', {
              dateStyle: 'short',
            })}</p>
          <p class="text-lg">${semester}. Semester</p>
          <p>${theory ? 'Theoriephase' : 'Praxisphase'}</p>
          <p class="text-sm">${weeks} Wochen</p>
          <p class="text-sm">${
            remarks ? remarks.join('<br/>') : ''
          }</p></div>`
          );
        }
      )
      .on('mousemove', (event) =>
        tooltip
          .style('left', `${event.pageX + 10}px`)
          .style('top', `${event.pageY - 108}px`)
      )
      .on('mouseleave', () =>
        tooltip.transition().duration(500).style('opacity', 0)
      );

    d3.select(todayLine.current).raise(); // move todayLine to front

    d3.select(gx.current)
      .transition()
      .duration(300)
      .call(d3.axisBottom(x));
    d3.select(gy.current)
      .transition()
      .duration(300)
      .call(d3.axisLeft(y));
  }, [currentData, currentCourseNames, domainRange]);

  return (
    <>
      <label htmlFor="quarter" className="font-medium mr-2">
        Zeige Kurse mit ihren Phasen in diesem Quartal:
      </label>
      <select
        id="quarter"
        className="select border-dhbwRed select-sm"
        onChange={(e) => {
          let dates = getQuarterDates(e.target.value);
          if (dates === null) {
            setCurrentData(completeData);
            setCurrentCourseNames(allCourses);
            setDomainRange(wholeRange);
            return;
          }
          let { start, end } = dates;
          const newCourses = new Set();
          const newData = completeData
            .filter((item) => {
              return (
                (item.start >= start && item.start <= end) ||
                (item.end >= start && item.end <= end) ||
                (item.start <= start && item.end >= end)
              );
            })
            .map((item) => {
              newCourses.add(item.course);
              const newItem = { ...item };
              newItem.start =
                newItem.start <= start ? start : newItem.start;
              newItem.end = newItem.end >= end ? end : newItem.end;
              return newItem;
            });
          setCurrentData(newData);
          setCurrentCourseNames(newCourses);
          setDomainRange({ start, end });
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
      <div className="flex justify-center w-full" ref={divRef}>
        <svg
          ref={svgRef}
          viewBox={`0 0 ${width} ${height}`}
          style={{ maxHeight: '600px' }}
        >
          <line
            ref={todayLine}
            x1="100"
            y1={0 + marginTop}
            x2="100"
            y2={height - marginBottom}
            stroke="lightgreen"
            strokeWidth="1.25"
          />
          <g
            ref={gx}
            transform={`translate(0,${height - marginBottom})`}
          />
          <g ref={gy} transform={`translate(${marginLeft},0)`} />
        </svg>
      </div>
    </>
  );
}
