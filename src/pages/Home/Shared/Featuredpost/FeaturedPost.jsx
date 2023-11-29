import Post from "../../../../Components/Bookpost/Post";
import useFeatured from "../../../../hooks/useFeatured";


const FeaturedPost = () => {
    const [items] = useFeatured();
    console.log(items);
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {
                items.map(item => 
                    <Post key={item._id} item={item}></Post>)
            }
        </div>
    );
};

export default FeaturedPost;