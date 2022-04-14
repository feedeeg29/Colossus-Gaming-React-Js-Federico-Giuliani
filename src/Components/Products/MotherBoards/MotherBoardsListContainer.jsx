import React, { useState, useEffect } from "react";
import CustomFetch from "../../CustomJSFiles/PrivateJS";
import MotherBoardsArray from "./MothersBoardsArray";
import MotherBoardsList from "./MotherBoardsList";

export default function MotherBoardsListContainer() {
    const [motherBoardsList, setMotherBoardsList] = useState([]);
    useEffect(() => {
        CustomFetch(2000, MotherBoardsArray)
            .then(res => setMotherBoardsList(res))
            .catch(err => console.log(err));
    }, [motherBoardsList]);
    return (
        <>
            <div>
                <MotherBoardsList motherBoardsList={motherBoardsList} />
            </div>
        </>
    )
}