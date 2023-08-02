import { useEffect } from "react";
export default function Timer(){
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("타이머 작동하는 중입니다.");
        },1000)
    },[])
    return(
        <div>
            <span> 타이머 시작</span>
        </div>
        
        );
};