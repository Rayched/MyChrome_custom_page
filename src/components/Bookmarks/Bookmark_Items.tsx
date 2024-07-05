//북마크 아이템

import { useEffect, useState } from "react";
import Bookmark_Addform from "./Add_Bookmark";

interface Bookmark_Bars {
    Bar_is: string,
}

function Bookmark_Items({Bar_is}: Bookmark_Bars){
    const [AddBtnis, setBtnis] = useState(false);

    const AddBtnOnClick = () => {
        setBtnis(true);
        if (AddBtnis == true){
            setBtnis(false);
        }
    }

    return (
        <div>
            {
                (Bar_is === "close")
                ? (
                    <div>
                        <div>
                            <button onClick={AddBtnOnClick}>추가</button>
                            <button>수정 / 삭제</button>
                        </div>
                        {
                            (AddBtnis === true) ? 
                            <Bookmark_Addform />
                            : undefined
                        }
                        <ul>
                            <li>북마크 1</li>
                            <li>북마크 2</li>
                            <li>북마크 3</li>
                            <li>북마크 4</li>
                        </ul>
                    </div>
                ) : (
                    <div>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                        </ul>
                    </div>
                )
            }
        </div>
    );
}

export default Bookmark_Items;