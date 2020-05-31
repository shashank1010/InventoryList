import React from "react";
import { useParams } from 'react-router-dom';

export default () => {
    const params = useParams();
    console.log(params);

    return <div>Category: {params.categoryId}</div>
}