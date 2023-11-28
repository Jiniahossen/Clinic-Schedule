import { Link } from "react-router-dom";


const RecomPost = ({ item }) => {
    console.log(item);
    return (
        <div className="flex gap-6">
            <div className="w-80">
                <img src={item.image} alt="" className="" />
            </div>
            <div>
                <h1 className=" font-serif font-bold text-xl mb-4">{item.title}</h1>
                <p>{item.description}</p>
                <Link to={`/recommendation-details/${item._id}`}>
                    <button className="text-blue-600 font-serif mt-4 text-base">View Details</button>
                </Link>
            </div>
            <div>

            </div>
        </div>
    );
};

export default RecomPost;