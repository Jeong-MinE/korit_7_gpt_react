// 꼭 닫혀야 한다(<input>을 보면 평소 /를 넣어 닫지 않았으나,).
// <React.Fragment></> == <></> : 아무것도 입력하지 않는다.

import React from "react";

function Hello() {
    return <>
        <h1>hello react!!</h1>
        <input type="text" /> 
        </>
}

export default Hello;