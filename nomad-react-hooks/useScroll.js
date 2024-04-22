import { useState, useEffect, useRef } from "react"

export const useScroll = () => {
    const [state, setState] = useState({ x: 0, y: 0 })
    const onScroll = () => {
        setState({ y: window.scrollY, x: window.scrollX });
    }
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
        window.removeEventListener("scroll", onScroll);
        }
    }, [])
    return state;
    }

    export default function App() {

    const {y} = useScroll();

    return (
    <div className="App" style={{height: "1000vh"}}>
        <h2>== start ==</h2>
        <h2 style={{position: "fixed", color: y > 100 ? "red" : "blue"}}>Test Y</h2>
    </div>
    );
};