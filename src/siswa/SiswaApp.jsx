import { useImmerReducer } from "use-immer";
import { SiswaContext, SiswaDispatchContext } from "./SiswaContext";
import SiswaForm from "./SiswaForm";
import SiswaList from "./SiswaList";

let nextId = 1;
const dataAwal = [
  { id: 0, nama: "John Doe", umur: "100 thn", kelas: "1 SD" }
];

function siswaReducer(draft, action) {
  switch (action.type) {
    case 'TAMBAH_SISWA':
      draft.push({
        id: nextId++,
        nama: action.nama,
        umur: action.umur,
        kelas: action.kelas
      });
      break;
    case 'HAPUS_SISWA':
      return draft.filter(s => s.id !== action.id);
    case 'UPDATE_SISWA':
      const index = draft.findIndex(s => s.id === action.id);
      if (index !== -1) {
        draft[index].nama = action.nama;
        draft[index].umur = action.umur;
        draft[index].kelas = action.kelas;
      }
      break;
    default:
      break;
  }
}

export default function SiswaApp() {
  const [siswa, dispatch] = useImmerReducer(siswaReducer, dataAwal);

  return (
    <SiswaContext.Provider value={siswa}>
      <SiswaDispatchContext.Provider value={dispatch}>
        <div>
          <h1>Manajemen Data Siswa</h1>
          <SiswaForm />
          <SiswaList />
        </div>
      </SiswaDispatchContext.Provider>
    </SiswaContext.Provider>
  );
}