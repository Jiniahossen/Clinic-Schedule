
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import Text from "../../../Components/shared/Text.jsx/Text";
import { useQuery } from "@tanstack/react-query";
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
            if (result.isConfirmed === true) {
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
            }
        });
    }


    // update user

    const handleUpdateUser = (id) => {
        axiosSecure.patch(`/users/admin/${id}`)
            .then((res) => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire(`User successfully update to admin`);
                }
            })
    }

    const handleDeleteStatus = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, block!"
        }).then((result) => {
            console.log(result);
            if (result.isConfirmed === true) {
                axiosSecure.patch(`/users/blocked/${id}`)
                    .then((res) => {
                        console.log(res.data);
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire(`You have blockeed the user!`);
                        }
                    })

                refetch();
            }
        });
    }

    return (
        <div className="">
            <div>
                <Text Heading={'Manage All Users'} subHeading={'How many??'}></Text>
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
                                    <th className=" text-lg font-serif text-white">Role</th>
                                    <th className=" text-lg font-serif text-white">Status</th>
                                    <th className=" text-lg font-serif text-white">See info</th>
                                    <th className=" text-lg font-serif text-white">Action</th>
                                </tr>
                            </thead>
                            <tbody className="items-center justify-center">
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
                                                {
                                                    user.role === 'admin' ? <><h1 className=" text-base font-serif text-black">Admin</h1></> :
                                                        <button onClick={() => handleUpdateUser(user._id)} className=" text-2xl rounded-sm text-white p-1 bg-[#219f85]">
                                                            <FaUsers></FaUsers>
                                                        </button>
                                                }
                                            </td>
                                            <td>
                                                {
                                                    user.status === 'blocked' ? <><h1 className=" text-base font-serif text-black">Blocked</h1></> :
                                                        <button className=" text-md p-1 rounded-sm text-white font-serif bg-green-600" onClick={() => handleDeleteStatus(user._id)}>
                                                            Active
                                                        </button>
                                                }
                                            </td>
                                            <td>
                                                <button className="bg-[#219f85] px-2 py-1 rounded-sm text-white font-serif" onClick={() => document.getElementById('my_modal_5').showModal()}>See info</button>
                                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                                    <div className="modal-box">
                                                        <div className="p-6">
                                                            <h1 className=" text-base font-serif text-black">Name:{user.name}</h1>
                                                            <h1 className=" text-base font-serif text-black">Email:{user.email}</h1>
                                                            {/* {
                                                                user.role?<><h1 className=" text-base font-serif text-black">Role:{user.role}</h1></>:<><h1 className=" text-base font-serif text-black">User</h1></>
                                                            } */}
                                                        </div>
                                                        <div className="modal-action">
                                                            <form method="dialog text-center">
                                                                <button className="bg-[#219f85] px-2 py-1 rounded-sm text-white font-serif">Close</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </dialog>
                                            </td>
                                            <th className="flex items-center gap-4">
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