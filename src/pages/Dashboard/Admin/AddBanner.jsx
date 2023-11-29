import Swal from "sweetalert2";
import Text from "../../../Components/shared/Text.jsx/Text";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { imageUpload } from "../../../hooks/useImages";

const AddBanner = () => {

    const axiosSecure = useAxiosSecure()

    const handleSubmit = async (e) => {

        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const title = form.title.value;
        const details = form.details.value;
        const cuponname = form.cuponname.value;
        const cuponrate = form.cuponrate.value;
        const image = form.image.files[0];
        const imageData = await imageUpload(image);
        console.log(imageData);
        // console.log(postingDate,name,price,slots,details,imageData);
        const testItems = {
            name,
            title,
            details,
            cuponrate,
            cuponname,
            isActive: 'false',
            image: imageData?.data?.display_url
        }
        console.log(testItems);

        axiosSecure.post('/banners', testItems)
            .then((res) => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Banner added successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }


    return (
        <div className=" ">
            <div>
                <Text Heading={'add an item'} ></Text>
            </div>
            <div className=" m-2 px-4 md:m-24 md:px-10 md:py-4 py-2 bg-[#219f85] ">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col md:flex-row gap-4 py-4">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="text-lg font-serif text-white"> Name</span>
                            </label>
                            <input type="text" placeholder="Test name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="text-lg font-serif text-white">Select Image:</span>
                            </label>
                            <input
                                required
                                type='file'
                                id='image'
                                name='image'
                                accept='image/*'
                                className="text-base font-serif text-white"
                            />
                        </div>

                    </div>
                    <div className=" flex flex-col md:flex-row gap-4 py-4">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="text-lg font-serif text-white">Title</span>
                            </label>
                            <input type="text" placeholder="Title" name="title" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="text-lg font-serif text-white">Description</span>
                            </label>
                            <textarea placeholder="write details.." name="details" className="textarea textarea-bordered textarea-lg w-full" required ></textarea>
                        </div>


                    </div>
                    <div className=" flex flex-col md:flex-row gap-4 py-4">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="text-lg font-serif text-white">Cupon code name</span>
                            </label>
                            <input type='test' placeholder="Cupon code name.." name="cuponname" required className="input input-bordered"></input>
                        </div>
                        <div className="form-control flex-1">

                            <label className="label">
                                <span className="text-lg font-serif text-white">Cupon rate</span>
                            </label>
                            <input type='test' placeholder="Cupon rate" name="cuponrate" required className="input input-bordered"></input>

                        </div>
                    </div>
                    <div className=" pt-4">
                        <button className=" bg-[#fff] text-black flex gap-1 px-4 py-1 text-lg">
                            <h1>ADD Banner</h1>
                        </button>
                    </div>
                </form>


            </div>

        </div>
    );
};

export default AddBanner;