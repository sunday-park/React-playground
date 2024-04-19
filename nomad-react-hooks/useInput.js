import { useState, useEffect } from "react"

export const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
        const { target: {value} } = event;
        let willUpdate = true;
        if (typeof validator === "function"){
        willUpdate = validator(value)
        }
        if (willUpdate){
        setValue(value)
        }
    }
    return { value, onChange };
    };

    export default function App() {

    const maxLen = (value) => value.length <= 10;
    const hasntMail = (value) => !value.includes('@')
    const name = useInput("Mr.",hasntMail)
    console.log();

    return (
        <div className="App">
        <form>
            <input {...name} onChange={name.onChange}/>
            <input placeholder="Email"/>
        </form>

        </div>
    );
};