
import { useLoaderData } from "react-router-dom";
import Container from "../../Components/shared/Container/Container";
import Swal from "sweetalert2";
import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";


const Details = () => {
    const [disable, setDisable] = useState(false);
    const data = useLoaderData();
    const axiosPublic = useAxiosPublic();
    const {user}=useAuth();
    const email=user.email;
    const userName=user.displayName;

    const formatDate = (dateString) => {
        const dateObj = new Date(dateString);
        const day = dateObj.getDate();
        const month = dateObj.getMonth() + 1;
        const year = dateObj.getFullYear();
        return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
    };
    const time = formatDate(data.postingDate);

    const handleBook = async (id) => {
        try {
            // Prepare the data for booking
            const bookInfo = {
                email,
                userName,
                id: id,
                image:data.image,
                name: data.name,
                price: data.price,
                slots: data.slots,
            };

            if (data.slots == 0) {
                setDisable(true)
            }
            // Make a POST request to book the test
            axiosPublic.post('/book', bookInfo)
                .then((res) => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Booked successfully!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // axiosPublic.patch(`/tests/${id}`)
                        //     .then((res) => {
                        //         console.log(res.data);
                        //         if (res.data.modifiedCount > 0) {
                        //             Swal.fire({
                        //                     position: "center",
                        //                     icon: "success",
                        //                     title: "Booked successfully!",
                        //                     showConfirmButton: false,
                        //                     timer: 1500
                        //                 }); 
                        //             }
                        // })

                    }
                })

        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <Container>
            <div className="mt-20 text-center md:text-start md:flex gap-4 md:gap-20">
                <div className="h-80 w-42">
                    <img src={data.image} className="w-full h-full" alt="" />
                </div>
                <div>
                    <h1 className="mb-4 text-2xl font-serif font-bold text-[#219f85]">{data.name}</h1>
                    <p className="text-xl font-serif">Test-Details:{data.details}</p>
                    <h1 className="text-lg font-serif font-semibold">Price:${data.price}</h1>
                    <h1 className="text-lg font-serif font-semibold">Available slots:{data.slots}</h1>
                    <h1 className="text-lg font-serif font-semibold">Date:{time}</h1>

                    <button disabled={disable} onClick={() => handleBook(data._id)} className=" mt-6 text-lg text-white font-serif px-2 py-1 bg-[#219f85]">
                        Book Now
                    </button>
                </div>

            </div>
        </Container>
    );
};

export default Details;