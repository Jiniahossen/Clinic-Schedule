import Swal from "sweetalert2";
import Container from "../../Components/shared/Container/Container";

const ContactUs = () => {

    const handleEmail=()=>{
        Swal.fire('Email sent successfully!')
    }
    return (
        <Container>
            <div>
                <h1 className="text-3xl font-serif text-center">If you have any Query call us on : +8801302000000</h1>
                <h1 className="text-3xl font-serif text-center"> or email us :</h1>

            </div>
            <div>
                <div className=" ">
                    <div className=" m-2 px-4 md:m-24 md:px-10 md:py-4 py-2 bg-[#219f85] ">
                        <form onSubmit={handleEmail}>
                            <div className="flex flex-col md:flex-row gap-4 py-4">
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="text-lg font-serif text-white"> Name</span>
                                    </label>
                                    <input type="text" placeholder="Test name" name="name" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className=" flex flex-col md:flex-row gap-4 py-4">
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="text-lg font-serif text-white">Feedback</span>
                                    </label>
                                    <textarea placeholder="write details.." name="details" className="textarea textarea-bordered textarea-lg w-full" required ></textarea>
                                </div>
                            </div>
                            <div className=" pt-4">
                                <button className=" bg-[#fff] text-black flex gap-1 px-4 py-1 text-lg">
                                    <h1>Send Feedback</h1>
                                </button>
                            </div>
                        </form>


                    </div>

                </div>
            </div>
        </Container>
    );
};

export default ContactUs;