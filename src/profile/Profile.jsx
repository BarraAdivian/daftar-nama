import { ProfileContext } from "./ProfileContext";
import { useContext } from "react";

export default function Profile() {
    const {name} = useContext(ProfileContext);
    return (
        <>
            <h2>Profile</h2>
            <p>Hello {name}</p>
        </>
    )
}