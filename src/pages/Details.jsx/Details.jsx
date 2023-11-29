import { useLoaderData } from "react-router-dom";
import Container from "../../Components/shared/Container/Container";
import Swal from "sweetalert2";
import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import useAllBanners from "../../hooks/useAllbanners";

const Details = () => {
    const [banners] = useAllBanners();
    const activeBanner = banners.find(banner => banner.isActive === true);
    const [disable, setDisable] = useState(false);
    const [promoCode, setPromoCode] = useState('');
    const data = useLoaderData();
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const email = user?.email || '';
    const userName = user?.displayName || '';

    const formatDate = (dateString) => {
        const dateObj = new Date(dateString);
        const day = dateObj.getDate();
        const month = dateObj.getMonth() + 1;
        const year = dateObj.getFullYear();
        return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
    };
    const time = formatDate(data.postingDate);


    const calculateDiscountedAmount = () => {
        // Convert data.price to a number, and check if it's a valid number
        const price = Number(data.price);

        if (isNaN(price)) {
            console.error('Invalid price:', data.price);
            return '0.00';
        }

        // Assuming the discount applies only for the "TEST06" promo code
        if (promoCode.toUpperCase() === activeBanner?.cuponname) {
            const discountPercentage = activeBanner?.cuponrate; // 10% discount
            const discountAmount = (price * discountPercentage) / 100;
            const discountedAmount = price - discountAmount;
            return discountedAmount >= 0 ? discountedAmount.toFixed(2) : '0.00';
        }

        return price;
    };



    const handleBook = async (id) => {
        try {
            // Calculate discounted amount
            const discountedAmount = calculateDiscountedAmount();

            // Prepare the data for booking
            const bookInfo = {
                email,
                userName,
                time,
                id: id,
                image: data.image,
                name: data.name,
                price: discountedAmount,
                slots: data.slots,
                report:'pending'
            };

            if (data.slots === 0) {
                setDisable(true);
            }

            // Make a POST request to book the test
            const res = await axiosPublic.post('/book', bookInfo);

            console.log(res.data);

            if (res.data.insertedId) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Booked successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <Container>
            <div className="my-20 text-center md:text-start md:flex gap-4 md:gap-20">
                <div className="h-80 w-full md:w-[600px]">
                    <img src={data.image} className="w-full h-full" alt="" />
                </div>
                <div>
                    <h1 className="mb-4 text-2xl font-serif font-bold text-[#219f85]">{data.name}</h1>
                    <p className="text-xl font-serif mb-4">Test-Details:{data.details}</p>
                    <h1 className="text-lg font-serif font-semibold mb-2">Price:${data.price}</h1>
                    <h1 className="text-lg font-serif font-semibold mb-2">Available slots:  <span className="text-blue-500">{data.slots}</span></h1>
                    <h1 className="text-lg font-serif font-semibold mb-2">Date:{time}</h1>
                    <button disabled={disable} className=" mt-6 text-lg text-white font-serif px-2 py-1 bg-[#219f85]">
                        <button className="" onClick={() => document.getElementById('my_modal_5').showModal()}>Book Now</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h1 className="text-black">Your Amount:${data.price}</h1>
                                <div className="flex items-center my-4">
                                    <input
                                        type='text'
                                        name='promoCode'
                                        id='promoCode'
                                        placeholder='Type promo code'
                                        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                        data-temp-mail-org='0'
                                        value={promoCode}
                                        onChange={(e) => setPromoCode(e.target.value)}
                                    />
                                    <button className="rounded-sm px-2 py-2 bg-[#219f85]" onClick={(e) => { e.preventDefault(); }}>Apply</button>
                                </div>
                                <div className="text-black">
                                    <p>Final Total: ${calculateDiscountedAmount()}</p>
                                </div>
                                <div>
                                </div>
                                <div className="modal-action">
                                    <form method="dialog" className="flex gap-6">
                                        <button className="btn">Cancle</button>
                                        <button onClick={() => handleBook(data._id)} className="btn">Make Payment</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </button>
                </div>
            </div>
            {/* <div className="">
                <PopularPost></PopularPost>
            </div> */}
        </Container>
    );
};

export default Details;
