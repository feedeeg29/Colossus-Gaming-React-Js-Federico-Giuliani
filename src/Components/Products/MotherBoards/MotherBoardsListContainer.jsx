import React, { useState, useEffect } from "react";
import customFetch from "../../CustomJSFiles/PrivateJS";
import MotherBoardsArray from "../MotherBoards/MotherBoardsArray";
import MotherBoardsList from "../MotherBoards/MotherBoardsList";

export default function MotherBoardsListContainer() {
    const [motherBList, setMotherB] = useState([]);
    useEffect(() => {
        customFetch(200, MotherBoardsArray)
            .then(res => setMotherB(res))
            .catch(err => console.log(err));
    }, []);
    console.log(motherBList)
    return (

        <div style={{"display": "flex"}}>
            <MotherBoardsList motherboard={motherBList} />
        </div>

    )
}