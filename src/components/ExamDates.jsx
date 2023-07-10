export default function ExamDates({ examDates }) {
  return (
    <div className="flex flex-col justify-center items-center mt-4">
      <h3 className="text-2xl">Prüfungsrelevante Termine</h3>
      <p>
        Klausurwoche: jeweils circa die letzte Woche der Theoriephase
      </p>
      <p>
        Die folgenden Termine sind jeweils die späteste Möglichkeit
        zur Anmeldung und zur Abgabe (jeweils bis spätestens 12:00
        Uhr).
      </p>
      <table className="table table-xs w-3/4">
        <tbody>
          {examDates.map(({ id, description, exam_date, fixed }) => (
            <tr className="border-slate-300" key={id}>
              <td>
                {fixed
                  ? exam_date.toLocaleDateString('de', {
                      dateStyle: 'short',
                    })
                  : exam_date.toLocaleDateString('de', {
                      month: 'long',
                      year: 'numeric',
                    })}
              </td>
              <td dangerouslySetInnerHTML={{ __html: description }} />
              {/* TODO: make sure sanitized data is stored in DB */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
