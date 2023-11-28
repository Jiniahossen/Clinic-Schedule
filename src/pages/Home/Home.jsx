import Container from "../../Components/shared/Container/Container";
import FeaturedPost from "./Shared/Featuredpost/FeaturedPost";
import Recommend from "./Shared/Recommendations/Recommend";


const Home = () => {
    return (
        <Container>
            <div>
                {/* banner section */}
                <div>

                </div>

                {/* body section */}
                <div className="flex mt-20 gap-6 mb-20">
                    <div className="">
                        <h1 className=" text-3xl font-serif font-bold mb-6">Our Doctors Recommendations:</h1>
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

            </div>
        </Container>
    );
};

export default Home;