import { HTMLInputTypeAttribute, KeyboardEvent, ReactElement, useState } from "react";

function SearchBar(){
    const [Keyword, setKeyword] = useState("");

    const getKeywords = (event: any) => {
        setKeyword(event.target.value);
    }

    //Enter키를 누르면 특정 logic 실행
    const EnterKeys = (event: KeyboardEvent) => {
        if(event.code === "Enter"){
            console.log(Keyword);
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