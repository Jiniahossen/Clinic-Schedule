import RecomPost from "../../../../Components/RecomPost/RecomPost";
import Container from "../../../../Components/shared/Container/Container";
import useReccom from "../../../../hooks/useReccom";


const Recommend = () => {
    const [items] = useReccom();
    console.log(items);
    return (
        
        <div className="grid grid-cols-1 gap-10">
            {
                items.map(item => (
                    <RecomPost key={item._id} item={item}></RecomPost>
                ))
            }
        </div>

    );
};

export default Recommend;
