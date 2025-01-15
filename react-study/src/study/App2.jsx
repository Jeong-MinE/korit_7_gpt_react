import { useState } from "react";

function App2() {
    const [ num, setNum ] = useState(0); 
    // 비구조할당 안할 시
    // const numState = useState(0);
    // const num = numState[0];
    // const setNum = numState[1];

    // 증가
    const handleIncreaseOnClick = () => {
            setNum(num + 1); //numstate[1](numstate[0]) + 1);
    }

    // 감소
    const handleDecreaseOnClick = () => {
        setNum(num - 1);
    }

    return <>
        <h1>{num}</h1>
        <button onClick={handleIncreaseOnClick}>1증가</button>
        <button onClick={handleDecreaseOnClick}>1감소</button>
    </>
}


export default App2;