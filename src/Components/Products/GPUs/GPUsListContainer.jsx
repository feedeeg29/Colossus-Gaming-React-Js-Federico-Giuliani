import React, { useState, useEffect } from 'react';
import CustomFetch from '../../CustomJSFiles/PrivateJS';
import GPUList from './GPUList';
import GPUsArray from './GPUsArrayJS';

export default function GPUsListContainer() {
    const [gpuList, setGPUList] = useState([]);
    useEffect(() => {
        CustomFetch(200, GPUsArray)
            .then(res => setGPUList(res))
            .catch(err => console.log(err));
    }, []);
    console.log(JSON.stringify(GPUsArray,null,2))
    return (
        <>
            <div>
                <GPUList gpuList={gpuList} />
            </div>
        </>
    )
}