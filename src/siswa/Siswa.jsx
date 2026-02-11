import { useContext } from "react";
import { SiswaDispatchContext } from "./SiswaContext";

export default function Siswa({ dataSiswa }) {
  const dispatch = useContext(SiswaDispatchContext);

  function handleEdit() {
    const namaBaru = prompt("Ubah Nama:", dataSiswa.nama);
    const umurBaru = prompt("Ubah Umur:", dataSiswa.umur);
    const kelasBaru = prompt("Ubah Kelas:", dataSiswa.kelas);

    if (namaBaru && umurBaru && kelasBaru) {
      dispatch({
        type: 'UPDATE_SISWA',
        id: dataSiswa.id,
        nama: namaBaru,
        umur: parseInt(umurBaru),
        kelas: kelasBaru
      });
    }
  }

  return (
    <tr>
      <td>{dataSiswa.nama}</td>
      <td>{dataSiswa.umur}</td>
      <td>{dataSiswa.kelas}</td>
      <td>
        <button onClick={handleEdit}>Edit</button>
        <button 
          onClick={() => dispatch({ type: 'HAPUS_SISWA', id: dataSiswa.id })}
          style={{ marginLeft: '5px' }}
        >
          Hapus
        </button>
      </td>
    </tr>
  );
}