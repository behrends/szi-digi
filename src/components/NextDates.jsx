export default function NextDates({ dates }) {
  return (
    <div className="mt-10">
      <div className="text-2xl text-dhbwGrey">
        Termine in den nächsten drei Monaten
      </div>
      <table className="table table-xs">
        {dates.map(
          ({ exam_date, exam_date_id, description, name }) => {
            return (
              <tr key={exam_date_id}>
                <td>
                  {`${exam_date.toLocaleDateString('de', {
                    dateStyle: 'short',
                  })}`}
                </td>
                <td>{name}</td>
                <td
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </tr>
            );
          }
        )}
      </table>
    </div>
  );
}
