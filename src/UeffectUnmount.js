/* 코드가 탄생하고 변화되는 시점 */
import { useEffect, useState } from "react";

function UnmountSample(){
    useEffect(() => {
        console.log("마운트 됐습니다.");

        return () => {
            // Unmount 시점에서 실행됨 
            console.log("마운트가 제거 되었습니다.")
        };

    }, []);
    return <div>Unmount 제거 컴포넌트 </div>
}

export default function Ueffectsample(){
    //count에 사용할 const state, input에 사용될 text state 

    /**
     * 업데이트는 생성과 달리 업데이트 될 때마다 콘솔창에 나타나는 것을 확인할 수 있다. 
     */

     //unmount const 
    const[isUnmount, setIsUnmount] = useState(false);
    const toggle = () => setIsUnmount(!isUnmount);

    return(
        <div>
            {/**die */}
            <div>
                <button onClick={toggle}>on/off</button>
                {isUnmount && <UnmountSample />}
            </div>
        </div>
    );
}