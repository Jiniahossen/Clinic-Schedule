import Container from "../../Components/shared/Container/Container";
import FeaturedPost from "./Shared/Featuredpost/FeaturedPost";
import Recommend from "./Shared/Recommendations/Recommend";
import FaqSection from './Shared/F&Q-section/FaqSection'


const Home = () => {
    return (
        <Container>
            <div>
                {/* banner section */}
                <div>
                  
                </div>

                {/* body section */}
                <div className="flex flex-col md:flex-row mt-20 gap-6 mb-20">
                    <div className="">
                        <h1 className=" text-center md:text-start text-3xl font-serif font-bold mb-6">Our Doctors Recommendations:</h1>
                        <div>
                            <Recommend></Recommend>
                        </div>
                    </div>
                    <div className="w-96 items-end">
                        <h1 className="text-xl font-serif font-semibold text-center">Featured Test:</h1>
                        <div>
                            <FeaturedPost></FeaturedPost>
                        </div>
                    </div>
                </div>

                {/* FAQ section */}

                <div>
                    <h1 className="text-center text-3xl font-serif my-10 font-bold">Questions Of our Patients About our services</h1>
                    <FaqSection></FaqSection>
                </div>

            </div>
        </Container>
    );
};

export default Home;