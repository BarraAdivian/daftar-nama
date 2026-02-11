import Profile from "./Profile.jsx";
import ProfileAddress from "./ProfileAddress.jsx";
import { ProfileContext } from "./ProfileContext.jsx";
import ProfileForm from "./ProfileForm.jsx";
import { useState } from "react";

export default function ProfileApp() {

    const [name, setName] = useState("");
    const [alamat, setAlamat] = useState("");

    return (
        <>
            <ProfileContext.Provider value={{name, alamat}}>
                <h1>Profile App</h1>
                <ProfileForm name={name} setName={setName} alamat={alamat} setAlamat={setAlamat}/>
                <Profile />
                <ProfileAddress />
            </ProfileContext.Provider>
        </>
    )
}