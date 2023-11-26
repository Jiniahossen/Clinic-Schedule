import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import Text from "../../../Components/shared/Text.jsx/Text";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })

    console.log(users);
    const handleDeleteUser = (id) => {
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
            if (result.isConfirmed===true) {
                axiosSecure.delete(`/users/${id}`)
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

                    refetch();
            }
        });
    }


    // update user

    // const handleUpdateUser = (id) => {
    //     axiosPublic.patch(`/users/admin/${id}`)
    //         .then((res) => {
    //             console.log(res.data);
    //             if (res.data.modifiedCount > 0) {
    //                 refetch()
    //                 Swal.fire(`User successfully update to admin`);
    //             }
    //         })
    // }




    return (
        <div className="bg-[#f6f6f6]">
            <div>
                <Text Heading={'Manage All Users'} subHeading={'How many??'}></Text>
            </div>
            <div className=" p-4">
                <div className="px-6 pt-6 uppercase items-center text-2xl font-serif text-black bg-white">
                    <h1 className=" font-serif font-bold justify-start">
                        Total users : <span className=" font-serif font-bold">{users.length}</span>
                    </h1>
                </div>
                <div className="min-h-screen bg-white">
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead className=" bg-[#d1a054]">
                                <tr>
                                    <th>
                                    </th>
                                    <th className=" text-lg font-serif text-white">Name</th>
                                    <th className=" text-lg font-serif text-white">Email</th>
                                    <th className=" text-lg font-serif text-white">Role</th>
                                    <th className=" text-lg font-serif text-white">Action</th>
                                </tr>
                            </thead>
                            <tbody className=" items-center justify-center">
                                {
                                    users.map((user, index) =>
                                        <tr key={user._id}>
                                            <th>
                                                {index + 1}
                                            </th>
                                            <td>
                                                <h1 className=" text-base font-serif text-black">{user.name}</h1>
                                            </td>
                                            <td>
                                                <h1 className=" text-base font-serif text-black">{user?.email}</h1>
                                            </td>
                                            <td>
                                                {
                                                    user.role === 'admin' ? <><h1 className=" text-base font-serif text-black">Admin</h1></> :
                                                        <button onClick={() => handleUpdateUser(user._id)} className=" text-2xl rounded-sm text-white p-1 bg-[#219f85]">
                                                            <FaUsers></FaUsers>
                                                        </button>
                                                }
                                            </td>
                                            <th>
                                                <button className=" text-2xl p-1 rounded-sm text-white bg-[#b91c1b]" onClick={() => handleDeleteUser(user._id)}>
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

export default AllUsers;