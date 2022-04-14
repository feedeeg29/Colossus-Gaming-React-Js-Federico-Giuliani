import React from "react";
import MotherBoards from "./MotherBoards";

export default function MotherBoardsList({ motherboardList }) {
    return (
        <>
            {motherboardList.map(mother => (
                <MotherBoards
                    key={mother.id}
                    name={mother.name}
                    image={mother.img} />
            ))}
        </>
    );
}