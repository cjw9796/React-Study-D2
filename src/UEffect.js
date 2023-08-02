/*
2. useEffect 컴포넌트가 렌더링 이후에 어떤 일을 수행해야 하는지 말한다. 
React는 우리가 넘긴 함수를 기억했다가 DOM 업데이트 수행 이후 불러낼 것이다. 
이렇게 UseEffect 이후(마운트가 해제되는 때) 정리를 실행 

첫 번째 인자로는 effect 함수, 두 번째 인자 dependency array
첫 번째 파라미터로 입력한 함수가 호출되는 시점은 컴포넌트가 첫 렌더링 되는 시점과
두 번째 파라미터로 입력 된 dependency array의 각 element 값이 변경됐을 때 

그렇다면 dependency array의 각 element의 값이 변경되는지 판단하는 시점은 언제일까? 

답 : 컴포넌트가 랜더링되는 시점 

컴포넌트가 렌더링 될 때마다 선언해놓은 useEffect 함수가 실행이 되고 (있다면) 
콜백함수와 dependency array 파라미터로 전달

그러면 useEffect 함수의 내부 로직에 의해서 dependency array를 캐싱하고 있고 이전 각 element를 반복하면서 
dependency array의 element와 비교(===) 한 뒤 다르면 첫 번째 파라미터인 콜백을 호출하는 구조 

dependency(의존성) array 
코드에서 두 모듈간의 연결 객체지향언어에서는 두 클래스 간의 관계 
어떤 클래스 A가 다른 클래스 B를 이용할 때 A가 B에 의존한다.  
dependency(의존성) array를 비교하고 싶다면 useEffect가 실행이 되고 난 후 
1. (재)랜더링
2. useEffect 함수 호출(파라미터 콜백함수, dependency array 전달)
3. 이전 dependency array 과 비교. 만약 (3에서 다른 시점 발견 되면 : 콜백 호출)
랜더링이 일어나지 않으면 콜백함수 실행 x 

useEffect 함수 의도
컴포넌트 상태(prop, state)의 상태 변화에 따라 상태를 이용해서 
리액트와 관련없는 부수작업(side effect, api 호출)등 이런 작업을 처리하기 위해 있음 

*/

import { useState } from "react";
import Timer from './Timer';
/*
State 초기화 및 상태설정 
Ref 유지 
Effect 계속적인 변화 
*/

export default function Ueffect(){
    const[timer, setTimer] = useState(false);
    return(
        <div>
            {timer && <Timer />}
            <button onClick={()=> setTimer(!timer)}> 타이머 </button>

        </div>
    );
}