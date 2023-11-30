import { RxCross1 } from "react-icons/rx";
import Text from "../../../Components/shared/Text.jsx/Text";
import useAllBooks from "../../../hooks/useAllBooks";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { imageUpload } from "../../../hooks/useImages";

const Reservation = () => {
    const [books, refetch] = useAllBooks();
    const [selectedUser, setSelectedUser] = useState(null);
    const [searchEmail, setSearchEmail] = useState('');
    const axiosSecure = useAxiosSecure();

    const handleSearch = () => {
        const filteredBooks = books.filter((book) =>
            book.email.toLowerCase().includes(searchEmail.toLowerCase())
        );
        return filteredBooks;
    };

    const handleSeeInfo = (user) => {
        setSelectedUser(user);
        document.getElementById('my_modal_5').showModal();
    };

    const handleCloseModal = () => {

        setSelectedUser(null);
        document.getElementById('my_modal_5').close();
    };

    const handleUpdateReport = async (e) => {
        e.preventDefault();
        const form = e.target;
        const id = selectedUser._id;
        const image = form.elements.image.files[0];

        if (!image) {
            return Swal.fire('Please select an image for the report.');
        }

        const imageData = await imageUpload(image);

        try {
            await axiosSecure.put(`/book/${id}`, {
                testReport: imageData?.data?.display_url,
            });

            Swal.fire('Report submitted successfully!');
            refetch();
            handleCloseModal();
        } catch (error) {
            console.error("Error updating report:", error);
            Swal.fire('Error submitting report. Please try again.');
        }
    }


    const handleDelete = (id) => {
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
                axiosSecure.delete(`/book/${id}`)
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



    return (
        <div>
            <div>
                <Text Heading={'All Reservations of Clients'}></Text>
            </div>
            <div>
                <div className="min-h-screen bg-white pt-10">
                    <div className="flex mb-10 max-w-4xl">
                        <input
                            type='text'
                            name='name'
                            id='name'
                            placeholder='Search user by email.....'
                            className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                            value={searchEmail}
                            onChange={(e) => setSearchEmail(e.target.value)}
                        />
                        <button
                            className="bg-[#219f85] text-white rounded-sm px-2 py-1"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead className="bg-[#219f85]">
                                <tr>
                                    <th></th>
                                    <th className="text-lg font-serif text-white">Test Image</th>
                                    <th className="text-lg font-serif text-white">Name</th>
                                    <th className="text-lg font-serif text-white">Email</th>
                                    <th className="text-lg font-serif text-white">Price</th>
                                    <th className="text-lg font-serif text-white">Action</th>
                                    <th className="text-lg font-serif text-white">Report</th>
                                </tr>
                            </thead>
                            <tbody className="items-center justify-center">
                                {handleSearch().map((item, index) => (
                                    <tr key={item._id}>
                                        <th>{index + 1}</th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="w-12 h-12 rounded-md">
                                                        <img
                                                            src={item.image}
                                                            className="rounded-md"
                                                            alt="Avatar Tailwind CSS Component"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h1 className="text-base font-serif">{item.userName}</h1>
                                        </td>
                                        <td>
                                            <h1 className="text-base font-serif">{item.email}</h1>
                                        </td>
                                        <td className="">
                                            <h1 className="text-base font-serif">{item.price}</h1>
                                        </td>
                                        <td className=" gap-4 items-center">
                                            <button
                                                className="text-2xl text-red-500"
                                                onClick={() => handleDelete(item._id)}
                                            >
                                                <RxCross1></RxCross1>
                                            </button>
                                        </td>
                                        <td className="gap-4 items-center">
                                            {
                                                item?.report === 'delivered' ? <> <h1 className="text-base font-serif">Submitted</h1></> : <><button
                                                    className="bg-[#219f85] px-2 py-1 rounded-sm text-white font-serif"
                                                    onClick={() => handleSeeInfo(item)}
                                                >
                                                    Submit Report
                                                </button></>
                                            }
                                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                                {/* ... */}
                                                <div className="modal-box">
                                                    <div className="p-6">
                                                        {selectedUser && (
                                                            <>
                                                                <h1 className="text-base font-serif text-black">Email: {selectedUser.email}</h1>
                                                                <form onSubmit={(e) => { e.preventDefault(); handleUpdateReport(e); }}>
                                                                    <div className="mb-6">
                                                                        <label className="label">
                                                                            <span className="text-lg font-serif text-white">Report:</span>
                                                                        </label>
                                                                        <input
                                                                            required
                                                                            type='file'
                                                                            id='image'
                                                                            name='image'
                                                                            accept='image/*'
                                                                            className="text-base font-serif text-black"
                                                                        />
                                                                    </div>
                                                                    <div className="flex gap-6">
                                                                        <button
                                                                            type="submit"
                                                                            className="bg-[#219f85] px-2 py-1 rounded-sm text-white font-serif"
                                                                        >
                                                                            Upload report
                                                                        </button>
                                                                        <button
                                                                            className="bg-[#219f85] px-2 py-1 rounded-sm text-white font-serif"
                                                                            onClick={handleCloseModal}
                                                                        >
                                                                            Close
                                                                        </button>
                                                                    </div>
                                                                </form>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </dialog>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reservation;
