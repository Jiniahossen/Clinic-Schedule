import { Link } from "react-router-dom";
import Container from "../../Components/shared/Container/Container";


const AboutUs = () => {
    return (
        <Container>
            <div>

                <div className="mb-6 flex flex-col md:flex-row gap-6 items-center">
                    <div className="md:w-1/2">
                        <h1 className="text-2xl mb-4 font-serif font-bold">Dedicated Team of Experts</h1>
                        <p className="font-serif text-base">Behind every test result is a team of dedicated and skilled healthcare professionals committed to your well-being. Our team includes experienced pathologists, radiologists, technicians, and support staff who work collaboratively to ensure the accuracy and reliability of your results.</p>
                    </div>
                    <div className="md:w-1/2">
                        <img src="https://i.ibb.co/26v9rHy/medium-shot-scientists-posing-together.jpg" alt="" />
                    </div>
                </div>
                <div className="mb-10 md:mb-20 flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/2">
                        <img src="https://i.ibb.co/26v9rHy/medium-shot-scientists-posing-together.jpg" alt="" />
                    </div>
                    <div className="md:w-1/2">
                        <h1 className="text-2xl mb-4 font-serif font-bold">Community Engagement</h1>
                        <p className="font-serif text-base">Beyond our doors, we are actively engaged in community health initiatives, awareness programs, and outreach efforts. We believe in giving back to the community by promoting health education and preventive care.</p>
                    </div>
                </div>
                <div className="mb-6 md:mb-10">
                    <div>
                        <h1 className="text-2xl mb-4 font-serif font-bold">Your Health, Our Priority</h1>
                        <p className="font-serif text-base">Thank you for choosing <span className="text-xl font-bold text-[#219f85]"> ClinicShedule </span> for your diagnostic needs. Your health is our top priority, and we are dedicated to providing you with the highest quality of care. Explore our services, meet our team, and discover the difference that precision and compassion can make in your health journey.

                            For appointments or inquiries, please contact us at
                            <Link to={'/contact-us'} className="text-blue-500"> Contact Us</Link></p>
                    </div>
                </div>

            </div>
        </Container>
    );
};

export default AboutUs;