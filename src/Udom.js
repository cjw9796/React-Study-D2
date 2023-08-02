/*
Udom.js 

DOM 돔 요소에 접근 
로그인 화면이 보여졌을때 ID를 넣는 INPUT을 굳이 클릭하지 않아도 
자동적으로 포커스가 되어 있게 해주면 바로 키보드를 입력해서 id를 입력할 수 있게 해줌 
*/

import { useRef,useEffect } from "react";

export default function Udom() {

    const inputRef = useRef();

    useEffect(() => {
        console.log(inputRef);
        inputRef.current.focus();
    }, [])

    const loginAlert = () => {
        alert("welcome to my world. ${input.current.value} ");
        inputRef.current.focus();

    }
    return(
        <div>
            <input ref={inputRef} type="text" placeholder="id" />
            <button>Login</button>

        </div>
    );
} 