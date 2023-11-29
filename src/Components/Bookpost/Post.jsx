import React from 'react';
import { FcRight } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Post = ({ item }) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className='h-36 mb-6'>
                    <figure className="px-10 pt-10">
                        <img src={item.image} alt="Shoes" className="rounded-xl h-36 w-full" />
                    </figure>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{item.name}</h2>
                </div>
                <div className=' mx-auto mb-4 text-center'>
                    <Link to={`/all-tests`}>
                        <div className="flex items-center">
                            <button className="px-2 py-1 text-lg font-serif text-[#219f85]">View Details</button>
                            <FcRight className="text-2xl"></FcRight>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
};


export default Post;