import { useState, useEffect, useRef } from "react"
import defaultAxios from "axios";

// 클라가 axios instance를 자동으로 얻지 못한다면 패키지의 defaultAxios를 넘겨주도록 설정
export const useAxios = (opts, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        data: null,
        error: null
    });
    const [trigger, setTrigger] = useState(0);
    if (!opts.url) return;

    const refetch = () => {
        setState({
            ...state,
            loading: true,
        })
        setTrigger(Date.now())
    }
    useEffect(() => {
        axiosInstance(opts).then(res => {
            setState({
                ...state,
                loading: false,
                data: res.data,
            })
        })
        .catch(error => {
            setState({
                ...state,
                loading: false,
                error
            })
        })
    }, [trigger])
    return {...state, refetch}
};

// export default useAxios;

// import { useState, useEffect, useRef } from "react"
// import useAxios from "./myHooks/useAxios"

export default function App() {

    const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json"
    })
    console.log(`loading: ${loading}\ndata: ${JSON.stringify(data)}\nerror: ${error}`);
    
    return (
    <div className="App">
        <h2>{data && data.status}</h2>
        <h2>{loading && "...loading"}</h2>
        <button onClick={refetch}>Refetch</button>
        <br/>
    </div>
    );
};