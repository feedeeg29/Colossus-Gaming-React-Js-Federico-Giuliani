import React from "react";
import GPUs from "./GPUs";

export default function GPUList({ gpuList }) {
    return (
        <>
            {gpuList.map(gpu => (
                <GPUs
                    key={gpu.id}
                    name={gpu.name}
                    image={gpu.image} />
            ))}
        </>
    );
}