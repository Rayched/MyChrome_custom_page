import { useState } from "react";
import styled from "styled-components";

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
    const [Btns, setBtns] = useState("close");
    const [BmkWidth, setWidth] = useState(0);

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
                <div onClick={BtnClicks}>
                    {
                        (Btns === "close") ? "Open" : "Close"
                    }
                </div>
                {
                    (Btns === "open")
                    ? (
                    <div>
                        <ul>
                            <li>북1</li>
                            <li>북2</li>
                            <li>북3</li>
                            <li>북4</li>
                        </ul>
                    </div>)
                    : <div>
                        <hr/>
                        <button>추가</button>
                        <ul>
                            <li>북마크 1</li>
                            <li>북마크 2</li>
                            <li>북마크 3</li>
                            <li>북마크 4</li>
                        </ul>
                    </div>
                }
            </Bookmark_Bar>
        </div>
    );
}

export default Bookmarks;