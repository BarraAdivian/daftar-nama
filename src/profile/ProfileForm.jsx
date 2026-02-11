export default function ProfileForm({name, setName, alamat, setAlamat}) {
    function handleNameChange(event) {
        setName(event.target.value)
    }

    function handleAlamatChange(event) {
        setAlamat(event.target.value)
    }

    return (
        <>
            <h2>Profile Form</h2>
            <input type="text" value={name} onChange={handleNameChange} placeholder="Nama Anda" />
            <input type="text" value={alamat} onChange={handleAlamatChange} placeholder="Alamat Anda" />
        </>
    )
}