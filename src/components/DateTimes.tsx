import Clock from "./Clock";

function DateTimes(){
    const Times = new Date();
    
    const Days: string[] = [
        "일", "월", "화", "수", "목", "금", "토"
    ];

    const Year = Times.getFullYear();
    const Month = Times.getMonth() + 1;
    const date = Times.getDate();
    const day = Times.getDay();

    return (
        <div>
            <h4>{Year}년 {Month}월 {date}일 {Days[day]}요일</h4>
            <Clock />
        </div>
    );
}

export default DateTimes;