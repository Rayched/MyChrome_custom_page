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