import { useRouteError } from "react-router-dom";
import { FaSadCry } from "react-icons/fa";

export default function ErrorPage(){
    const error = useRouteError();

    return(
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <FaSadCry size={60} />
            <p className="text-xl m-3">Sorry! an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}