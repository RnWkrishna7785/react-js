import { Outlet, Link } from "react-router-dom";

function User() {


    return (
        <>
            <Link to="settings">settings</Link>
            <Link to="details">Details</Link>
            <Outlet />
        </>
    )
}

export default User;