import React from "react";
import MotherBoards from "./MotherBoards";

export default function MotherBoardsList({ motherboard }) {
    return (
        <>
            {motherboard?.map(m => (
                <MotherBoards
                    key={m.id}
                    id={m.id}
                    nombre={m.name}                    
                    img={m.img} />
            ))}
        </>
    );
}