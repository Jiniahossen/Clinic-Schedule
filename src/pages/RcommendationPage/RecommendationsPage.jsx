import { useQuery } from "@tanstack/react-query";
import RecomPost from "../../Components/RecomPost/RecomPost";
import Container from "../../Components/shared/Container/Container"
import useAxiosSecure from "../../hooks/useAxiosSecure";


const RecommendationsPage = () => {

    const axiosSecure = useAxiosSecure();
    const { data: post = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/recommendations')
            return res.data;
        }
    })



    return (
        <Container>
            <div className=" my-20">
            <h1 className=" text-3xl font-serif font-bold mb-6">Our Doctors Recommendations:</h1>
                <div className="grid grid-cols-1 gap-10">
                    {
                        post.map(item => (
                            <RecomPost key={item._id} item={item}></RecomPost>
                        ))
                    }
                </div>
            </div>
        </Container>
    );
};

export default RecommendationsPage;