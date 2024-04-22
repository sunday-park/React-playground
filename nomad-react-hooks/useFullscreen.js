import { useState, useEffect, useRef } from "react"
// 이미지를 fullscreen으로 전환하는 버튼을 만듬
export const useFullscreen = (callback) => {
    const element = useRef();
    const runCb = (isFull) => {
        if (callback && typeof callback === "function") callback(isFull);
    };

    const makeFull = () => {
        if (element.current){
        if (element.current.requestFullscreen){
            element.current.requestFullscreen();
        } else if (element.current.webkitRequestFullscreen){ // opera
            element.current.webkitRequestFullscreen();
        } else if (element.current.mozRequestFullscreen){ // firefox
            element.current.mozRequestFullscreen();
        } else if (element.current.msRequestFullscreen){ // ms
            element.current.msRequestFullscreen();
        }
        runCb(true)
        }
    }
    const exitFull = () => {
    document.exitFullscreen()
        if (document.exitFullscreen) {
        document.exitFullscreen()
        } else if (document.mozCancelFullscreen) {
        document.mozExitFullscreen()
        } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
        } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
        }
        runCb(false)
    }
    return { element, makeFull, exitFull }
    };

    export default function App() {

    const exitBtn = document.querySelector('exit-btn');
    const onFullS = (isFull) => {
        console.log(isFull ? "fullscreen now" : "not Full");
    }
    const {element, makeFull, exitFull} = useFullscreen(onFullS);

    return (
    <div className="App">
        <h2>Test</h2>
        <div ref={element}>
        <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="250"/>
        <button className="exit-btn" onClick={exitFull}>exit Fullscreen</button>
        </div>
        <br/>
        <button onClick={makeFull}>make Fullscreen</button>
    </div>
    );
};