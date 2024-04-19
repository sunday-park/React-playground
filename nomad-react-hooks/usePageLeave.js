import { useState, useEffect, useRef } from "react"

export const usePageLeave = () => {
    const listener = (event) => {
        event.preventDefault();
        event.returnValue = "";
    }
    const enablePrevent = () => window.addEventListener("beforeunload", listener) 
    const disablePrevent = () => window.removeEventListener("beforeunload", listener) 
    return { enablePrevent, disablePrevent };
    }

    export default function App() {

    const { enablePrevent, disablePrevent } = usePageLeave();

    return (
        <div className="App">
            <button onClick={enablePrevent}>Protect</button>
            <br/>
            <button onClick={disablePrevent}>Unprotect</button>
        </div>
    );
};