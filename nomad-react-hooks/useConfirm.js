import { useState, useEffect, useRef } from "react"

export const useConfirm = (message = "", onConfirm, onCancle) => {
    if (onConfirm && typeof onConfirm !== "function") return;
    if (onCancle && typeof onCancle !== "function") return;
    const confirmAction = () => {
        if (confirm(message)){
        onConfirm();
        } else {
        onCancle();
        }
    }
    return confirmAction;
    }

    export default function App() {

    const deletePay = () => console.log("delete your pay......");
    const reject = () => console.log("Ok, i will save your Pay");
    const confirmDelete = useConfirm("ARE YOU SURE??", deletePay, reject);

    return (
    <div className="App">
        <button onClick={confirmDelete}>Delete Your Pay</button>
    </div>
    );
};