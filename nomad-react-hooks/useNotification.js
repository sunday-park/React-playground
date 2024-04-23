import { useState, useEffect, useRef } from "react"

export const useNotification = (title, options) => {
    if (!("Notification"in window)){
        console.log("This browser does not support desktop notification");
        return;
    }
    const fireNotif = () => {
        if (Notification.permission !== "granted"){ // 사용자가 알림허용을 하지 않았을 때
        Notification.requestPermission() // 사용자에게 알림허용을 요구함
        .then(permission => { // 사용자의 응답별 분기
            if (Notification.permission === "granted"){
            new Notification(title, options);
            } else {
            return;
            }
        });
        } else { // 사용자가 알림을 허용한 경우
        new Notification(title, options);
        }
    }
    return fireNotif;
    };

    export default function App() {
    const triggerNotif = useNotification("Can I steal your wallet?", {
        body: "I need your money"
    }); //title과 option을 전달해줌
    return (
    <div className="App">
        <button onClick={triggerNotif}>Test</button>
    </div>
    );
};