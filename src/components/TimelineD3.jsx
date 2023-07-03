'use client';
import { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { germanLocale } from '@/lib/utils.js';

d3.timeFormatDefaultLocale(germanLocale);

export default function Timeline({
  courses,
  data,
  domainStart,
  domainEnd,
}) {
  const gx = useRef(),
    gy = useRef(),
    svgRef = useRef();

  const width = 640,
    marginTop = 20,
    marginRight = 20,
    marginBottom = 30,
    marginLeft = 50;

  const height = courses.length * 35 + marginTop + marginBottom;
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
    d3.select(svgRef.current)
      .selectAll('rect')
      .data(data)
      .join('rect')
      .attr('x', (d) => x(d.start))
      .attr('y', (d) => y(d.course))
      .attr('width', (d) => x(d.end) - x(d.start))
      .attr('height', y.bandwidth())
      .attr('fill', (d) => (d.theory ? '#E2001A' : '#5C6971'))
      .append('title')
      .text((d) => d.course);

    d3.select(gx.current).call(d3.axisBottom(x));
    d3.select(gy.current).call(d3.axisLeft(y));
  }, [gx, gy, svgRef, x, y, courses]);

  return (
    <svg ref={svgRef} width={width} height={height}>
      <g
        ref={gx}
        transform={`translate(0,${height - marginBottom})`}
      />
      <g ref={gy} transform={`translate(${marginLeft},0)`} />
    </svg>
  );
}