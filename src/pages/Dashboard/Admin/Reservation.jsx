import { RxCross1 } from "react-icons/rx";
import Text from "../../../Components/shared/Text.jsx/Text";
import useAllBooks from "../../../hooks/useAllBooks";
import { useState } from "react";

const Reservation = () => {
    const [books, loading] = useAllBooks();
    const [searchEmail, setSearchEmail] = useState('');

    const handleSearch = () => {
        // Perform a case-insensitive search by email
        const filteredBooks = books.filter((book) =>
            book.email.toLowerCase().includes(searchEmail.toLowerCase())
        );
        return filteredBooks;
    };

    const handlCancle = (id) => {
        console.log(id);
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
                                        <td className="flex gap-4 items-center">
                                            <button
                                                className="text-2xl text-red-500"
                                                onClick={() => handlCancle(item._id)}
                                            >
                                                <RxCross1></RxCross1>
                                            </button>
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
