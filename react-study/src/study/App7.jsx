/**
 * 도서정보 등록 및 조회
 * 도서명, isbn, 저자명 입력
 * 
 * bookList에 저장
 * table
 * tbody
 * tr
 * td
 * 
 * 등록, 조회 나눔 검색
 */
import React, { useState } from 'react';



function App7(props) {

    const [bookList, setBookList] = useState([]);

    const [signupInputValue, setSignupInputValue] = useState({
        bookname: "",
        isbn: "",
        author: "",
    })

    const [signinInputValue, setSigninInputValue] = useState({
        bookname: "",
        isbn: "",
        author: "",
    })

    const handleSignupInputOnChange = (e) => {
        setSignupInputValue({
            ...signupInputValue,
            [e.target.name]: e.target.value,
        });
    };

    const handlePutButtonOnClick = () => {
        setBookList([
            ...bookList,
            signupInputValue,
        ]);

        alert("등록완료")

        setSignupInputValue({
            bookname: "",
            isbn: "",
            author: "",
        });
    };

    const handleSigninInputOnChange = (e) => {
        setSigninInputValue({
            ...signinInputValue,
            [e.target.name]: e.target.value,
    });
    };

    const handleSearchButtonOnClick = () => {
        setBookList([
            ...bookList,
            signinInputValue,
        ])

        alert("조회완료")

        setSigninInputValue({
            bookname: "",
            isbn: "",
            author: "",
        })
    }
   



    return (
    <div>
            <h1>등록</h1>
            <input type="text" name="bookname" placeholder="bookname" onChange={handleSignupInputOnChange} value={signupInputValue.bookname}/>
            <input type="text" name="isbn" placeholder="isbn" onChange={handleSignupInputOnChange} value={signupInputValue.isbn}/>
            <input type="text" name="author" placeholder="author" onChange={handleSignupInputOnChange} value={signupInputValue.author}/>
        <div>
             <button onClick={handlePutButtonOnClick}>등록</button>
        </div>
            <h1>조회</h1>
            <input type="text" name="bookname" placeholder="bookname" onChange={handleSigninInputOnChange} value={signinInputValue.bookname}/>
            <input type="text" name="isbn" placeholder="isbn" onChange={handleSigninInputOnChange} value={signinInputValue.isbn}/>
            <input type="text" name="author" placeholder="author" onChange={handleSigninInputOnChange} value={signinInputValue.author}/>
        <div>
            <button onClick={handleSearchButtonOnClick}>조회</button>
        </div>
    </div>
            
    );
}

export default App7;
