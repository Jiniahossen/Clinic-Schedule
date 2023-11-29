import { useQuery } from "@tanstack/react-query";
import Text from "../../../Components/shared/Text.jsx/Text";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";


const AllBanners = () => {

    const axiosSecure = useAxiosSecure();

    const { data: banners = [], refetch } = useQuery({
        queryKey: ['banners'],
        queryFn: async () => {
            const res = await axiosSecure.get('/banners')
            return res.data;
        }
    })

    //delete banner

    const handleDeleteBanner = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result);
            if (result.isConfirmed === true) {
                axiosSecure.delete(`/banners/${id}`)
                    .then((res) => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }




    //update isActive value 

    const handleUpdateBanner = async (id) => {

        try {
            await axiosSecure.put(`/banners/${id}`);
            refetch(); 
        } catch (error) {
            console.error("Error updating banner:", error);
        }
    }




    return (
        <div>
            <div>
                <Text Heading={'all banners'}></Text>
            </div>
            <div className=" p-4">
                <div className="min-h-screen bg-white">
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead className=" bg-[#219f85]">
                                <tr>
                                    <th>
                                    </th>
                                    <th className=" text-lg font-serif text-white">Name</th>
                                    <th className=" text-lg font-serif text-white">Cupon</th>
                                    <th className=" text-lg font-serif text-white">Rate</th>
                                    <th className=" text-lg font-serif text-white">Status</th>
                                    <th className=" text-lg font-serif text-white">Action</th>
                                </tr>
                            </thead>
                            <tbody className="items-center justify-center">
                                {
                                    banners.map((user, index) =>
                                        <tr key={user._id}>
                                            <th>
                                                {index + 1}
                                            </th>
                                            <td>
                                                <h1 className=" text-base font-serif text-black">{user.title}</h1>
                                            </td>
                                            <td>
                                                <h1 className=" text-base font-serif text-black">{user.cuponname}</h1>
                                            </td>
                                            <td>
                                                <h1 className=" text-base font-serif text-black">{user.cuponrate}</h1>
                                            </td>
                                            <td>
                                                <button className=" text-lg font-serif p-1 rounded-sm text-[#b91c1b]" onClick={() => handleUpdateBanner(user._id)}>
                                                    {user.isActive===true?<><h1 className="text-green-600">true</h1></>:<>false</>}
                                                </button>
                                            </td>
                                            <th className="flex items-center gap-4">
                                                <button className=" text-2xl p-1 rounded-sm text-white bg-[#b91c1b]" onClick={() => handleDeleteBanner(user._id)}>
                                                    <RiDeleteBin5Line></RiDeleteBin5Line>
                                                </button>

                                            </th>
                                        </tr>)
                                }

                            </tbody>
                        </table>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default AllBanners;