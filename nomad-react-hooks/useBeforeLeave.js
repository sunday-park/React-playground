import { useState, useEffect, useRef } from "react"

export const useBeforeLeave = (onBefore) => {
    if (typeof onBefore !== "function"){
        return;
    }
    // 클라에서 함수가 들어오면 (모든 렌더링이 끝나고 컴포넌트가 마운트되는 시점에) 
    // 돔에 마우스가 떠나는 이벤트 발생 시 핸들함수에 적힌 리빙이 실행되고,
    // 언마운트(컴포넌트 사라짐)의 시점에는 핸들함수의 이벤트 핸들러를 제거한다.
    // const handle = () => console.log("leaving");
    // const handle = () => onBefore();
    const handle = () => {
        const { clientY } = event;
        if (clientY <= 0){ // 마우스가 화면의 위에서 벗어났을 때만 실행
        onBefore();
        }
    }
    useEffect(() => {
        document.addEventListener('mouseleave', handle)
        return () => {
        document.removeEventListener('mouseleave', handle)
        }
    }, [])
    }

    export default function App() {
    // 여기에서는 useBeforeLeave HOOK을 사용하기 위해 페이지떠나기전 보여줄 함수를 하나 생성한 뒤
    // 해당 HOOK에 함수를 인자로 전해준다.

    const dontLeave = () => console.log("dont Leave me");
    useBeforeLeave(dontLeave);

    return (
    <div className="App">
        <h2>TEST</h2>
    </div>
    );
};