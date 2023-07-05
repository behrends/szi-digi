'use client';
import { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { calcDiffInWeeks, germanLocale } from '@/lib/utils.js';

d3.timeFormatDefaultLocale(germanLocale);

export default function Timeline({
  courses,
  data,
  domainStart,
  domainEnd,
}) {
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

  const height = courses.length * 30 + marginTop + marginBottom;
  const courseNames = courses.map((course) => course.name);

  const x = d3
    .scaleUtc()
    .domain([domainStart, domainEnd])
    .range([marginLeft, width - marginRight]);

  const y = d3
    .scaleBand()
    .domain(courseNames)
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
      .data(data)
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
          .style('top', `${event.pageY - 28}px`)
      )
      .on('mouseleave', () =>
        tooltip.transition().duration(500).style('opacity', 0)
      );

    d3.select(todayLine.current).raise(); // move todayLine to front

    d3.select(gx.current).call(d3.axisBottom(x));
    d3.select(gy.current).call(d3.axisLeft(y));
  }, []);

  return (
    <div className="flex w-full" ref={divRef}>
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
  );
}
