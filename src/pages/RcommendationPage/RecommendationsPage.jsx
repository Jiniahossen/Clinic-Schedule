import RecomPost from "../../Components/RecomPost/RecomPost";
import Container from "../../Components/shared/Container/Container";
import useReccom from "../../hooks/useReccom";


const RecommendationsPage = () => {
    const [items] = useReccom();
    console.log(items);
    return (
        <Container>
            <div className=" my-20">
            <h1 className=" text-3xl font-serif font-bold mb-6">Our Doctors Recommendations:</h1>
                <div className="grid grid-cols-1 gap-10">
                    {
                        items.map(item => (
                            <RecomPost key={item._id} item={item}></RecomPost>
                        ))
                    }
                </div>
            </div>
        </Container>
    );
};

export default RecommendationsPage;