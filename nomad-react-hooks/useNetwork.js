import { useState, useEffect, useRef } from "react"
// navigator가 online 또는 offline이 되는 것을 막아준다.
export const useNetwork = (onChange) => {
    const [status, setStatus] = useState(navigator.onLine); // 웹이 온라인인지 아닌지 boolean
    const handleChange = () => {
        if (typeof onChange === "function"){
        onChange(navigator.onLine)
        }
        setStatus(navigator.onLine)
    }
    useEffect(() => {
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);
        return () => {
        window.removeEventListener("online", handleChange);
        window.removeEventListener("offline", handleChange);
        }
    }, [])
    return status;
    }

    export default function App() {
    const handleNetworkChange = (onLine) => {
        console.log(onLine? "We just went Online" : "We are Offline")
    } 
    const onLine = useNetwork(handleNetworkChange);

    return (
    <div className="App">
        <h2>Network Test: {onLine? "onLine" : "offLine"}</h2>
    </div>
    );
};