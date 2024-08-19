import React from "react";
import {isRouteErrorResponse, Link, useRouteError} from "react-router-dom";

function ErrorRoute(): React.JSX.Element{
    const error = useRouteError();
    let errorMessage: string;

    if (isRouteErrorResponse(error)) {
        errorMessage = error.data || error.statusText;
    } else if (error instanceof Error) {
        errorMessage = error.message;
    } else if (typeof error === 'string') {
        errorMessage = error;
    } else {
        console.error(error);
        errorMessage = 'Unknown error';
    }

    return(
        <div className="h-svh w-svw flex flex-col items-center justify-center gap-2">
            <h1 className="text-black font-bold text-5xl">Oops!!</h1>
            <p className="text-black font-semibold">You've entered an wrong path, or some unexpected error has been occurred.</p>
            <i className="text-slate-900">{errorMessage}</i>
            <Link className="p-2 border border-blue-500 rounded-md font-bold hover:font-semibold" to={'/'}>Redirect to Home</Link>
        </div>
    )
}

export default ErrorRoute;
