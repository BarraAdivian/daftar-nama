import { useState, useContext } from "react";
import { SiswaDispatchContext } from "./SiswaContext";

export default function SiswaForm() {
  const [form, setForm] = useState({ nama: '', umur: '', kelas: '' });
  const dispatch = useContext(SiswaDispatchContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.nama || !form.umur || !form.kelas) return;
    
    dispatch({
      type: 'TAMBAH_SISWA',
      ...form
    });
    setForm({ nama: '', umur: '', kelas: '' }); // Reset form setelah tambah
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Nama Siswa" value={form.nama} onChange={e => setForm({...form, nama: e.target.value})} />
      <input placeholder="Umur" type="number" value={form.umur} onChange={e => setForm({...form, umur: e.target.value})} />
      <input placeholder="Kelas" value={form.kelas} onChange={e => setForm({...form, kelas: e.target.value})} />
      <button type="submit">Tambah</button>
    </form>
  );
}