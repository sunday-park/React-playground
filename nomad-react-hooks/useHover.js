import { useState, useEffect, useRef } from "react"

export const useHover = (onHover) => {
    if (typeof onHover !== "function"){
        return;
    }
    const element = useRef();
    useEffect(() => {
        if(element.current){
        element.current.addEventListener("mouseenter", onHover);
        }
        return () => {
        if(element.current){
            element.current.removeEventListener("mouseenter", onHover);
        }
        }
    }, [])
    }

    export default function App() {
    const mouseee = useHover();
    const onHover = () => console.log("oaaaa");
    return (
    <div className="App">
        <h1 ref={mouseee} onMouseEnter={onHover} >mouse ON</h1>
    </div>
    );
};