export const coursesBySemester = [
  {
    semester: 2,
    theory: [
      {
        name: 'TIF22A',
        data: {
          start: new Date('2023-04-03'),
          end: new Date('2023-06-25'),
        },
      },
      {
        name: 'TIF22B',
        data: {
          start: new Date('2023-04-03'),
          end: new Date('2023-06-25'),
        },
      },
    ],
    practice: [
      {
        name: 'WWI22A',
        data: {
          start: new Date('2023-04-03'),
          end: new Date('2023-06-25'),
        },
      },
    ],
  },
  {
    semester: 4,
    theory: [
      {
        name: 'TIF21A',
        data: {
          start: new Date('2023-04-03'),
          end: new Date('2023-06-25'),
          dates: [
            {
              description:
                'Mitteilung der gewünschten Schwerpunkte (3.-6. Semester)',
              date: new Date('2023-04-18'),
            },
          ],
        },
      },
      {
        name: 'TIF21B',
        data: {
          start: new Date('2023-04-03'),
          end: new Date('2023-06-25'),
          dates: [
            {
              description:
                'Mitteilung der gewünschten Schwerpunkte (3.-6. Semester)',
              date: new Date('2023-04-18'),
            },
          ],
        },
      },
    ],
    practice: [
      {
        name: 'WWI21A',
        data: {
          start: new Date('2023-03-28'),
          end: new Date('2023-06-19'),
          dates: [
            {
              description: 'Vorbereitung/Briefing 2. Projektarbeit',
              date: 'Juni 2023',
            },
          ],
        },
      },
    ],
  },
  {
    semester: 6,
    theory: [
      {
        name: 'WWI20A',
        data: {
          start: new Date('2023-04-10'),
          end: new Date('2023-07-02'),
        },
      },
    ],
    practice: [
      {
        name: 'TIF20A',
        data: {
          start: new Date('2023-04-03'),
          end: new Date('2023-09-30'),
          dates: [
            {
              description: 'Anmeldung 3. Projektarbeit',
              date: new Date('2023-05-01'),
            },
            {
              description: 'Abgabe 3. Projektarbeit',
              date: new Date('2023-06-26'),
            },
            {
              description: 'Anmeldung Bachelorarbeit (12:00 Uhr)',
              date: new Date('2023-06-12'),
            },
            {
              description: 'Abgabe Bachelorarbeit (12:00 Uhr)',
              date: new Date('2023-09-04'),
            },
          ],
        },
      },
    ],
  },
];

// Backup for draft of complete data structure
const semesterCourses = [
  {
    id: 1,
    name: 'TIF20A',
    phases: [
      {
        semester: 6,
        theory: false,
        start: new Date('2023-04-03'),
        end: new Date('2023-09-30'),
        dates: [
          {
            description: 'Anmeldung 3. Projektarbeit',
            date: new Date('2023-05-01'),
          },
          {
            description: 'Abgabe 3. Projektarbeit',
            date: new Date('2023-06-26'),
          },
          {
            description: 'Anmeldung Bachelorarbeit (12:00 Uhr)',
            date: new Date('2023-06-12'),
          },
          {
            description: 'Abgabe Bachelorarbeit (12:00 Uhr)',
            date: new Date('2023-09-04'),
          },
        ],
      },
    ],
  },
];
