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

    //useEffect는 React Component가 re-render될 때

    /**
     * 'useEffect()'는 React Component가 re-rendering될 때마다
     * Callback으로 전달한 Effect 함수를 실행하는 React Hook이다
     * 시간 정보를 나타내는 Component가 Rendering이 완료된 뒤
     * Effect 함수가 실행된다.
     * setInterval 함수의 Callback으로
     * Date 객체를 생성하고, Hours, Minutes State에
     * Date 객체의 메서드 실행 결과를 전달하는 코드가 존재한다
     * 
     * setInterval() 함수는 약 0.5초 뒤에 Callback 실행
     * (Hour, Minutes State에 새로운 시간 정보 전달)
     * 이후 clearInterval() 함수를 통해 위의 반복 작업을 취소한다
     * 
     * state 값이 변경됨에 따라 React Component가 re-rendering된다.
     * 
     * 그리고 Component가 re-rendering됐기에
     * useEffect() Hook은 Callback인 Effect 함수를 실행시킨다...
     */
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