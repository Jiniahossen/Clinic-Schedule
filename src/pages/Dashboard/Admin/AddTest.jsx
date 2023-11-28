import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { imageUpload } from "../../../hooks/useImages";
import Text from "../../../Components/shared/Text.jsx/Text";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Swal from "sweetalert2";


const AddTest = () => {
    const [startDate, setStartDate] = useState(new Date());

    const axiosPublic = useAxiosPublic();
    const handleSubmit = async (e) => {

        e.preventDefault();
        const form = e.target;
        const postingDate = startDate;
        const name = form.name.value;
        const price = form.price.value;
        const details=form.details.value;
        const slots=form.slot.value;
        const image = form.image.files[0];
        const imageData = await imageUpload(image);
        console.log(imageData);
        // console.log(postingDate,name,price,slots,details,imageData);
        const testItems={
            postingDate,
            name,
            price,
            details,
            slots,
            image:imageData?.data?.display_url
        }
        console.log(testItems);

           axiosPublic.post('/tests',testItems)
           .then((res)=>{
            console.log(res.data);
            if(res.data.insertedId){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Test added successfully!",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
           })
        }
    

    return (
        <div className=" ">
            <div>
                <Text Heading={'add an item'} subHeading={"What's New?"}></Text>
            </div>
            <div className=" m-24 px-10 py-4 bg-[#f6f6f6] ">
                <form onSubmit={handleSubmit}>
                    <div className="flex gap-4 py-4">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="text-lg font-serif text-black">Test Name</span>
                            </label>
                            <input type="text" placeholder="Test name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="text-lg font-serif text-black">Select Image:</span>
                            </label>
                            <input
                                required
                                type='file'
                                id='image'
                                name='image'
                                accept='image/*'
                            />
                        </div>

                    </div>
                    <div className=" flex gap-4 py-4">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="text-lg font-serif text-black">Price</span>
                            </label>
                            <input type="text" placeholder="Price" name="price" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="text-lg font-serif text-black">Date</span>
                            </label>
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}
                            className="input input-bordered w-full"
                                dateFormat="dd/MM/yyyy"
                                required
                            />
                        </div>

                    </div>
                    <div className=" flex gap-4 py-4">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="text-lg font-serif text-black">Slots</span>
                            </label>
                            <input type='number' placeholder="Available slots" name="slot" required className="input input-bordered"></input>
                        </div>
                        <div className="form-control flex-1">

                            <label className="label">
                                <span className="text-lg font-serif text-black">Test Details</span>
                            </label>
                            <textarea placeholder="write details.." name="details" className="textarea textarea-bordered textarea-lg w-full" required ></textarea>

                        </div>
                    </div>
                    <div className=" pt-4">
                        <button className=" bg-[#d1a054] text-white flex gap-1 px-4 py-1 text-lg">
                            <h1>ADD Test</h1>
                        </button>
                    </div>
                </form>


            </div>

        </div>
    );
};

export default AddTest;