import { ERROR_URL } from "../utils/constants";
import { useRouteError } from "react-router";
import { Link } from "react-router";

const Error= () => {
    const err= useRouteError();
    console.log(err);

    return (
        <div className="error">
            <h3> {err.status} : { err.statusText}</h3>
            <Link to="/">
            <img className="error-img" src={ERROR_URL}/>
            </Link>
        </div>
    )
}

export default Error;