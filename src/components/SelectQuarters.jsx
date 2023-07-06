export default function SelectQuarters({ onChange }) {
  return (
    <>
      <label htmlFor="quarter" className="font-medium mr-2">
        Zeige Kurse mit ihren Phasen in diesem Quartal:
      </label>
      <select
        id="quarter"
        className="select border-dhbwRed select-sm"
        onChange={(event) => onChange(event.target.value)}
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
    </>
  );
}
