import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
    const {id}=useParams();
    const data=useLoaderData();
    console.log(data);
    return (
        <div>
            <h1>Deatils....{data._id}</h1>
            
        </div>
    );
};

export default Details;