import { useContext } from "react";
import { SiswaContext } from "./SiswaContext";
import Siswa from "./Siswa"; // Impor komponen Siswa yang baru dibuat

export default function SiswaList() {
  const listSiswa = useContext(SiswaContext);

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Nama</th>
          <th>Umur</th>
          <th>Kelas</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {listSiswa.map(s => (
          <Siswa key={s.id} dataSiswa={s} />
        ))}
      </tbody>
    </table>
  );
}