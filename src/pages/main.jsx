import React from 'react';
import { Outlet} from "react-router";

function Main(props) {
    return (
        <div>

            <Outlet/>
        </div>
    );
}

export default Main;