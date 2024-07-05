//북마크 추가 form

import { useState } from "react";
import styled from "styled-components";

const BookmarkAddForm = styled.div`
    display: block;
    border: 1px solid black;
`;


function Bookmark_Addform(){
    const [B_Name, setName] = useState("");
    const [B_URL, setURL] = useState("");
    const [Items, setItems] = useState({});

    const onSubmit = () => {
        if(B_Name === "" || B_URL === "") return;
        
        setItems({name: B_Name, url: B_URL});
        console.log(Items);

        setName("");
        setURL("");
    }

    const Name_onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.currentTarget.value);
    }

    const URL_onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setURL(event.currentTarget.value);
    }

    return (
        <div>
            <BookmarkAddForm>
                <div>이름 <input type="text" value={B_Name} onChange={Name_onChange}/></div>
                <div>주소 <input type="text" value={B_URL} onChange={URL_onChange}/></div>
                <button onClick={onSubmit}>추가</button>
                <button>삭제</button>
            </BookmarkAddForm>
        </div>
    );
}

export default Bookmark_Addform;