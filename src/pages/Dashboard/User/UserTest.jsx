
import Text from "../../../Components/shared/Text.jsx/Text";
import useAppointments from "../../../hooks/useAppointments";
import { FaDownload } from "react-icons/fa6";
import download from 'downloadjs';

const UserTest = () => {
    const [book, refetch] = useAppointments();
    const filteredBook = book.filter(item => item.report === 'delivered');

    const handleDownload = (imageUrl, fileName) => {
        const extension = imageUrl.split('.').pop(); // Extract the file extension from the URL
        const formattedFileName = `${fileName}.${extension}`;
    
        download(imageUrl, formattedFileName);
    };
    

    return (
        <div>
            <div>
                <Text Heading={'booked items'}></Text>
            </div>
            <div>
                {
                    <div className="p-4">
                        <div className="min-h-screen bg-white pt-10">
                            <div className="overflow-x-auto">
                                <table className="table">
                                    <thead className="bg-[#219f85]">
                                        <tr>
                                            <th></th>
                                            <th className="text-lg font-serif text-white">Test Image</th>
                                            <th className="text-lg font-serif text-white">Test name</th>
                                            <th className="text-lg font-serif text-white">Price</th>
                                            <th className="text-lg font-serif text-white">Time</th>
                                            <th className="text-lg font-serif text-white">Report Status</th>
                                            <th className="text-lg font-serif text-white">Download</th>
                                        </tr>
                                    </thead>
                                    <tbody className="items-center justify-center">
                                        {filteredBook.map((item, index) => (
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
                                                    <h1 className="text-base font-serif">{item.name}</h1>
                                                </td>
                                                <td>
                                                    <h1 className="text-base font-serif">{item.price}</h1>
                                                </td>
                                                <td className="">
                                                    <h1 className="text-base font-serif">{item.time}</h1>
                                                </td>
                                                <td className="">
                                                    <h1 className="ps-4 text-base font-serif text-blue-600">{item.report}</h1>
                                                </td>
                                                <th className="flex gap-4 items-center text-center">
                                                    <button
                                                        className="pt-6 ps-4 text-xl md:ps-10 md:pt-4 text-red-500"
                                                        onClick={() => handleDownload(item.testReport, 'downloaded-image')}
                                                    >
                                                        <FaDownload />
                                                    </button>
                                                </th>
                                            </tr>
                                        ))}
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

export default UserTest;
