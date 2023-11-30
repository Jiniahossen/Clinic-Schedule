import Text from "../../../Components/shared/Text.jsx/Text";
import useAppointments from "../../../hooks/useAppointments";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { RxCross1 } from "react-icons/rx";
import Swal from "sweetalert2";

const Appointments = () => {
    const [book, refetch] = useAppointments();
    const axiosSecure = useAxiosSecure();

    console.log(book);

    const handleDelete = (id) => {
        Swal.fire({
            title: "You want to cancle it?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancle it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/book/${id}`)
                    .then((res) => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Cancled!",
                                text: "Your test has been cancled.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>

            <div>
                <Text Heading={'booked items'}></Text>
            </div>
            <div>
                {
                    <div className=" p-4">
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
                                            <th className=" text-lg font-serif text-white">Time</th>
                                            <th className=" text-lg font-serif text-white">Report Status</th>
                                            <th className=" text-lg font-serif text-white">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className=" items-center justify-center">
                                        {
                                            book.map((item, index) =>
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
                                                        <h1 className=" text-base font-serif">{item.time}</h1>
                                                    </td>
                                                    <td className="">
                                                        <h1 className="ps-4 text-base font-serif text-blue-600">{item.report}</h1>
                                                    </td>
                                                    <th className="flex  gap-4 items-center text-center">
                                                        <button className="pt-6 ps-4 text-xl md:ps-4 md:pt-4 text-red-500" onClick={() => handleDelete(item._id)}>
                                                          <RxCross1></RxCross1>  
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

export default Appointments;