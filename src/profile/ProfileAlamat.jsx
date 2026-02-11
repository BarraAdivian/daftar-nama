export default function ProfileAlamat({alamat, setAlamat}) {
    function handleChange(event) {
        setAlamat(event.target.value)
    }

    return (
        <>
            <h2>Profile Form</h2>
            <input type="text" value={alamat} onChange={handleChange} />
        </>
    )
}