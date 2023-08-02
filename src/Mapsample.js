
export default function Mapsample() {
    const menus = ['마라탕', '바나커피', '새우볶음밥']
    //JSX JavaScript Xml
    /**
     * map 이란? 각 배열의 요소를 돌면서 인자로 전달된 함수를 사용해서 
     * 처리된 새로운 결과를 새로운 배열에 담아서 반환하는 함수
     * map 사용 공식 const 변수명 = 데이터.map((사용할 데이터 변수) => ({데이터 변수}))  
     *              
     */
    const menuList = menus.map((data) => (<li>{data}</li>))
    const menuList2 = menus.map((data) => (<p>{data}</p>))

    //map key 
    /*
        key는 리스트의 다른 항목들 사이에서 해당 항목을 고유하게 식별할 수 있는 문자열을 사용해야 한다. 
        리액트에서 컴포넌트를 렌더링할 때는 어떤 원소가 변경되었는지 빠르게 감지하기 위해서 사용 
        만약에 key가 설정되어 있지 않았다면 가상 DOM을 순차적으로 비교하면서 감지하기 때문에 key가 없을 때보다 속도가 느리다.
        .toString(): 가지고 있는 정보나 값을들 문자열로 만들어 준다. [1,2,3,4,5] => ["1","2","3","4","5"]
    */ 

    const numbers =[1,2,3,4,5]; //["1","2","3","4","5"]
    const listItems = numbers.map((number)=> <li key={number.toString()}>{number}</li>);

    const animals = [{},
        {key:1, value: "lion"},
        {key:2, value: "rabbit"},
        {key:3, value: "dog"}
    ];
    const animalList = animals.map((index, data) => (<li key={index}>{data}</li>))
    return(
        <div>
            <ul>
                {menuList}
                {menuList2}
                {listItems}
            </ul>
        </div>
    );
}
