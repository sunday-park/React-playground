import { useState, useEffect, useRef } from "react"

export const useFadeIn = (duration = 1, delay = 0) => {
    if (typeof duration !== "number" || typeof delay !== "number") return;
    const element = useRef();
    useEffect(() => {
        // console.log("[element.current]",element.current);
    if (element.current){ // h2태그 전부
        const { current } = element;
        current.style.transition = `all ${duration}s ease-in-out ${delay}s`;
        current.style.opacity = 1;
    }
    }, [])
    return { ref: element, style: {opacity: 0} };
    }

    export default function App() {
    const fadeInH2 = useFadeIn(1,2);
    const fandInP = useFadeIn(5,5);

    return (
    <div className="App">
        <h2 {...fadeInH2}>TEST</h2>
        {/* 객체의 모든 프로퍼티를 태그에 전달(리턴을 객체로 하니까 그냥 이렇게 하셈) */}
        <p {...fandInP}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    );
};