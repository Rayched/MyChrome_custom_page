import { KeyboardEvent, useState } from "react";

function SearchBar(){
    const [Keyword, setKeyword] = useState("");

    //Input 요소에 입력된 텍스트를 state에 저장
    const getKeywords = (event: any) => {  
        setKeyword(event.target.value);
    }

    //검색어에 대한 구글 검색 결과를 요청하는 함수
    const ShowResult = () => {
        let SearchWord = Keyword;
        window.location.href = `https://www.google.com/search?q=${SearchWord}&sourceid=chrome&ie=UTF-8`;
        setKeyword("");
    }

    //Enter키를 누르면 특정 logic 실행
    const EnterKeys = (event: KeyboardEvent) => {
        if(event.code === "Enter"){
            console.log(Keyword);
            ShowResult();
        }
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder="검색어를 입력해주세요." 
                value={Keyword}
                onChange={getKeywords}
                onKeyDown={EnterKeys}
            />
        </div>
    );
}

export default SearchBar;