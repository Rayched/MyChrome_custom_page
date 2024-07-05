import { useState } from "react";
import styled from "styled-components";
import Bookmark_Items from "./Bookmark_Items";

interface BookmarkBar {
    BmkWidth: number
}

const Bookmark_Bar = styled.div<BookmarkBar>`
    border: 2px solid black;
    width: ${(props) => props.BmkWidth + "px"};
    height: 100%;
    position: absolute;
    top: 50px; right: 0px;
    padding: 10px 30px;
`;

function Bookmarks(){
    const [Btns, setBtns] = useState("open");
    const [BmkWidth, setWidth] = useState(70);

    const BtnClicks = () => {
        if (Btns === "open"){
            setBtns("close");
            setWidth(250);
            console.log(Btns);
        } else {
            setBtns("open");
            setWidth(70);
            console.log(Btns);
        }
    }

    return (
        <div>
            <Bookmark_Bar BmkWidth={BmkWidth}>
                <div onClick={BtnClicks}>{Btns}</div>
                <Bookmark_Items Bar_is={Btns}/>
            </Bookmark_Bar>
        </div>
    );
}

export default Bookmarks;