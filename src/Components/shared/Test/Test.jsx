
import { Link } from "react-router-dom";
import { FcRight } from "react-icons/fc";


const Test = ({ item }) => {
    console.log(item);
    const { name, price, details, slots, postingDate, image, _id } = item || {};


    // Format the dates string in the format


    const formatDate = (dateString) => {
        const dateObj = new Date(dateString);
        const day = dateObj.getDate();
        const month = dateObj.getMonth() + 1;
        const year = dateObj.getFullYear();
        return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
    };
    const time = formatDate(postingDate)
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl h-20 font-serif text-[#219f85] ">{name}</h2>
                    <p className="font-serif text-sm h-36">{details}</p>
                    <h1 className="font-medium">Price: ${price}</h1>
                    <h1 className="font-medium">Available slots:{slots}</h1>
                    <h1 className="font-medium">Date:{time}</h1>
                </div>
                <div className="h-52">
                    <figure><img src={image} className=" h-52 w-full" alt="Shoes" /></figure>
                </div>
                <div className="mx-auto w-1/2 text-center py-6">
                    <Link to={`/details/${_id}`}>
                        <div className="flex items-center">
                            <button className="px-2 py-1 text-lg font-serif text-[#219f85]">View Details</button>
                            <FcRight className="text-2xl"></FcRight>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Test;