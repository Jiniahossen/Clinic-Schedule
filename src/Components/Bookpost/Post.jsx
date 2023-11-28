import React from 'react';

const Post = ({ item }) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={item.image} alt="Shoes" className="rounded-xl w-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{item.name}</h2>
                </div>
            </div>
        </div>
    )
};


export default Post;