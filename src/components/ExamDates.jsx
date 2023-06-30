export default function ExamDates({ course }) {
  if (course !== 'TIF22A' && course !== 'TIF22B') return null;
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
          <tr className="border-slate-300">
            <td>
              Anmeldung 1. Projektarbeit
              <br />
              Mitteilung des gewünschten Schwerpunktes
            </td>
            <td>17.07.23</td>
          </tr>
          <tr className="border-slate-300">
            <td>
              Abgabe 1. Projektarbeit
              <br />
              Abgabe Reflexionsbericht, Ablaufplan
            </td>
            <td>02.10.23</td>
          </tr>
          <tr className="border-slate-300">
            <td>Vorbereitung/Briefing 2. Projektarbeit</td>
            <td>Juni 2024</td>
          </tr>
          <tr className="border-slate-300">
            <td>Anmeldung 2. Projektarbeit</td>
            <td>08.07.24</td>
          </tr>
          <tr className="border-slate-300">
            <td>
              Abgabe 2. Projektarbeit
              <br />
              Abgabe Reflexionsbericht, Ablaufplan
            </td>
            <td>30.09.24</td>
          </tr>
          <tr className="border-slate-300">
            <td>Präsentation 2. Projektarbeit</td>
            <td>November 2024</td>
          </tr>
          <tr className="border-slate-300">
            <td>Abgabe der Studienarbeit/Projekt</td>
            <td>30.03.25</td>
          </tr>
          <tr className="border-slate-300">
            <td>Anmeldung 3. Projektarbeit</td>
            <td>28.04.25</td>
          </tr>
          <tr className="border-slate-300">
            <td>Abgabe 3. Projektarbeit</td>
            <td>23.06.25</td>
          </tr>
          <tr className="border-slate-300">
            <td>Vorbereitung/Briefing Bachelorarbeit</td>
            <td>März 2025</td>
          </tr>
          <tr className="border-slate-300">
            <td>Anmeldung Bachelorarbeit</td>
            <td>09.06.25</td>
          </tr>
          <tr className="border-slate-300">
            <td>
              Abgabe Bachelorarbeit
              <br />
              Abgabe Reflexionsbericht, Ablaufplan
            </td>
            <td>01.09.25</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
