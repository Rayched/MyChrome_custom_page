import { KeyboardEvent, useState } from "react";
import styled from "styled-components";

const SearchBars = styled.input.attrs(
    {
        type: "text", 
        placeholder: "검색어를 입력해주세요."
    }
)`
    border: 3px solid black;
    border-radius: 10px;
    margin: 10px;
    width: 300px;
    height: 35px;
    font-size: 16px;
`;

function SearchBar(){
    const [Keyword, setKeyword] = useState("");

    //Input 요소에 입력된 텍스트를 state에 저장
    const getKeywords = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {currentTarget: {value},} = event; 
        setKeyword(value);
    }

    const ShowResult = () => {
        console.log(Keyword);
        window.location.href = `https://www.google.com/search?q=${Keyword}`;
        setKeyword("");
    }

    //Enter키를 누르면, state에 저장된 검색어로
    //구글 검색을 시도하는 함수 EnterKeys
    const EnterKeys = (event: KeyboardEvent) => {
        if(event.code === "Enter" && event.nativeEvent.isComposing === false){
            ShowResult();
        }
    }

    return (
        <div>
            <SearchBars
                type="text" 
                placeholder="검색어를 입력해주세요." 
                onChange={getKeywords}
                onKeyDown={EnterKeys}
                value={Keyword}
            />
        </div>
    );
}

export default SearchBar;


/**
 * issue / 2024.06.22
 * 
 * 검색창에 한글을 입력했을 때
 * 앞 글자는 잘리고, 마지막 글자만 검색되는 오류 확인하였음.
 * 
 * 한글만 이렇고, 영어는 문제 없음
 * 
 * input에 입력한 텍스트를 state에 저장하는 과정에서
 * 문제가 있는 것 같다...
 * 
 * 당장은 해결을 할 수 있는 마땅한 방법이 떠오르지는 않는다
 * 일단은 보류 처리하고, 방법을 찾으면 그때 수정하도록 하자!!
 * 
 * 입력한 텍스트가 state에 어떻게 전송되는 지를 확인했는데
 * 예를 들어서 '테스트'라는 텍스트를 입력하면
 * 처음엔 '테스트'라는 텍스트가 그대로 state에 저장되지만
 * 이후에 커서가 있던 부분인 '트' 부분이 다시 state에 저장된다
 * 즉, state에 입력 값을 저장하는 현상이 두 번 일어나기에
 * 이러한 문제가 발생하는 것이다
 * 
 * 근본적인 원인을 키워드로 구글링 시도
 * 다행히 좋은 solution을 찾았고 바로 적용을 시도
 * state에 입력 값을 두번 저장하는 일 없이
 * 처음 입력 값이 저장되고, 이후 추가 저장되는 경우가 없어졌다
 * 
 * Enterkey 함수 실행 시 실행할 조건문의 조건식을
 * 아래와 같이 수정하는 것으로 해결하였다
 * 
 * Before
 * 'event.code === "Enter"
 * 
 * After
 * 'event.code === "Enter" && event.nativeEvent.isComposing === false'
 * 
 * 여기서 기존 조건문에 추가된 부분에 대해서는
 * 원리를 파악하지 못했다.
 * 방금 막 본 Solution을 적용'만'했을 뿐이지
 * 원리를 이해한 상태에서 적용한 경우는 아니기 때문이다.
 * 
 * 역시 뭐라도 만들다보면 그 과정에서 모르는게 나오고
 * 그걸 알아가는 과정 자체가 생각보다 달달하다.
 * 그냥 무지성으로 공부하던 것보다는 효율적이다.
 * 결론은 '이론 공부'와 '실습', 이 두가지를 잘 조합해서
 * 최상의 시너지를 발생시켜야 한다는 것이다.
 */