import { useState, useEffect, useRef } from "react"
// useRef는 컴포넌트의 한 부분을 선택할 수 있게하는 hook이다.
// document.getElementById 같은 느낌
const useClick = (onClick) => {
    const element = useRef();
    if (typeof onClick !== "function"){
        return;
    }

    useEffect(() => {
        if (element.current){
        element.current.addEventListener("click", onClick);
        }
        return () => {
            if (element.current){
                element.current.removeEventListener("click", onClick);
            }
        }
    }, [])
        return element;
    };

    export default function App() {
    const title = useClick();
    const sayHello = () => { console.log("HELLO") }

    return (
    <div className="App">
        <h2 ref={title} onClick={sayHello}>MEMO</h2>
    </div>
    );
};