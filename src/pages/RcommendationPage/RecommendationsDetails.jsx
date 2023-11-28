import { useLoaderData } from "react-router-dom";
import Container from "../../Components/shared/Container/Container";


const RecommendationsDetails = () => {
    const data = useLoaderData();
    console.log(data);

    return (
        <Container>
            <div  className="max-w-3xl mx-auto my-20">
                <div>
                    <img src={data.image} alt="" className="w-full" />
                </div>
                <div>
                    <h1 className=" text-xl font-serif font-bold">{data.title}</h1>
                    <p className=" text-base">{data.description}</p>
                </div>
            </div>
        </Container>
    );
};

export default RecommendationsDetails;