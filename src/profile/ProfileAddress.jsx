import { useContext } from "react";
import { ProfileContext } from "./ProfileContext.jsx";

export default function ProfileAddress() {
    const {alamat} = useContext(ProfileContext);
    return (
        <>
            <h2>Profile Address</h2>
            <p>Alamat : {alamat}</p>
        </>
    )
}