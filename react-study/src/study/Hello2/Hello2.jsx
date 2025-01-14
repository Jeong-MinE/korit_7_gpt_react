import "../Hello2/style.css";

// default가 아니면 export는 함수 앞에 작성
export function printConslo(){
    console.log("hello2 파일 입니다.")
}

export function printConslo2(){
    console.log("hello2 파일 입니다.")
}


function Hello2() {
    const h1Text = 'Hello React!!';
    const h1 = <h1>{h1Text}</h1>;

    // For문 사용 대신 htmlFor문 사용
    // class 대신 classbox 사용
    return <>
        {h1}
        <label className="box" htmlFor="username"></label>
    </>
}

export default Hello2;
