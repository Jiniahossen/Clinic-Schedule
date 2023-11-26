import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import Text from "../../../Components/shared/Text.jsx/Text";
import useTests from "../../../hooks/useTests";

const AllTests = () => {

    const [items] = useTests();
    console.log(items);

    const handleDelete=()=>{

    }


    const handleUpdate=()=>{

    }
    return (
        <div>

            <div>
                <Text subHeading={'More Items moree'} Heading={'All items'}></Text>
            </div>
            <div>
                   {
                    <div className=" p-4">
                    <div className=" flex justify-around uppercase items-center text-2xl font-serif text-black bg-white pt-6">
                        <h1 className=" font-serif font-bold">
                            Total Test : <span className=" font-serif font-bold">{items.length}</span>
                        </h1>
                    </div>
                    <div className="min-h-screen bg-white pt-10">
                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead className=" bg-[#219f85]">
                                    <tr>
                                        <th>
                                        </th>
                                        <th className=" text-lg font-serif text-white">Test Image</th>
                                        <th className=" text-lg font-serif text-white">Test name</th>
                                        <th className=" text-lg font-serif text-white">Price</th>
                                        <th className=" text-lg font-serif text-white">Reservations</th>
                                        <th className=" text-lg font-serif text-white">Action</th>
                                    </tr>
                                </thead>
                                <tbody className=" items-center justify-center">
                                    {
                                        items.map((item, index) =>
                                            <tr key={item._id}>
                                                <th>
                                                    {index + 1}
                                                </th>
                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <div className="avatar">
                                                            <div className=" w-12 h-12 rounded-md">
                                                                <img src={item.image} className=" rounded-md" alt="Avatar Tailwind CSS Component" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <h1 className=" text-base font-serif">{item.name}</h1>
                                                </td>
                                                <td>
                                                    <h1 className=" text-base font-serif">{item.price}</h1>
                                                </td>
                                                <td className="">
                                                    <h1 className=" text-base font-serif">{item.slots}</h1>
                                                </td>
                                                <th className="flex gap-4 items-center">
                                                    <button className=" text-2xl text-red-500" onClick={() => handleDelete(item._id)}>
                                                        <RiDeleteBin5Line></RiDeleteBin5Line>
                                                    </button>
                                                    <button className=" text-2xl text-green-600" onClick={() => handleUpdate(item._id)}>
                                                        <FaEdit></FaEdit>
                                                    </button>
                                                </th>
                                            </tr>)
                                    }
    
    
                                </tbody>
                            </table>
                        </div>
    
    
                    </div>
                </div>
                   }
            </div>

        </div>
    );
};

export default AllTests;