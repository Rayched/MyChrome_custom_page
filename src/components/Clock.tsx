//시계 Logic

import { useEffect, useState } from "react";

const modifyNumber = (num: number) => {
    if (num < 10){
        return "0" + String(num);
    } else {
        return String(num);
    }
}

function Clock(){
    let DateObj = new Date();

    const [Hours, setHours] = useState(DateObj.getHours());
    const [Minutes, setMinutes] = useState(DateObj.getMinutes());
    //Date 객체를 생성할 때 시간 정보는 생성된 시점의 시간 정보이다.
    //즉, Date 객체를 생성하고 이를 변수에 할당하면
    //해당 변수에 저장되는 것은 Date 객체 생성 시점의 시간 정보이다.

    //useEffect는 React Component가 re-render될 때 실행되는 함수
    //정확히 말하자면 re-rendering되면 Callback으로 전달한
    //Effect 함수가 실행된다.
    //해당 함수는 0.5초마다 한번씩 Hours, Minutes State 갱신
    //State 값이 바뀌므로 re-rendering 요청이 작업 리스트에 들어감.
    //이후 해당 Interval을 초기화한다.
    //어떻게보면 일종의 무한 루프라고 봐도 무방하다.

    //처음 랜더링 -> 랜더링 완료 후 useEffect 실행
    //0.5초마다 Hours, Minutes State 값 갱신
    //State 값 갱신 후 설정한 Interval은 해체된다.

    //이때 Hour, Minute 정보에 변화가 있으면
    //해당 Component는 Re-rendering된다.
    //State 값이 변화하면 Re-render가 발생하는
    //React의 특성을 활용한 일종의 무한 루프

    //현재 날짜만 return하는 DateTimes component에
    //지금 Logic을 추가하면 문제 없이 동작을 할까?
    //바로 시험해보고 싶긴 한디...
    //시간이 없다. 알바를 가야한다.
    

    useEffect(() => {
        const ID = setInterval(() => {
            DateObj = new Date();

            setHours(DateObj.getHours());
            setMinutes(DateObj.getMinutes());
        }, 500);

        return (() => clearInterval(ID));
    })

    return (
        <div>
            <h4>
                {modifyNumber(Hours)} : {modifyNumber(Minutes)}
            </h4>
        </div>
    );
}

export default Clock;