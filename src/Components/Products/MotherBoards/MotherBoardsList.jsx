import React from "react";
import MotherBoards from "./MotherBoards";

export default function MotherBoardsList({ motherboard }) {
    return (
        <>
            {motherboard?.map(m => (
                <MotherBoards
                    key={m.id}
                    name={m.name}
                    image={m.img} />
            ))}
        </>
    );
}