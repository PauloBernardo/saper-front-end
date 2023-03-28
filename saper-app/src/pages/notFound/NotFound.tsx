import React from "react";
import {useRouteError} from "react-router-dom";

function NotFound() {
    const error: any = useRouteError();

    return <div>
        Not Found
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
    </div>
}


export default NotFound;