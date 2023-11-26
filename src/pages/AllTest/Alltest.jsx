
import { useState } from "react";
import Container from "../../Components/shared/Container/Container";
import Test from "../../Components/shared/Test/Test";
import useTests from "../../hooks/useTests";

const Alltest = () => {
    const [items, loading] = useTests();
   

    return (
        <Container>
            <div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {
                        items?.map(item => <Test key={item._id} item={item}></Test>)
                    }
                </div>

            </div>
        </Container>
    );
};

export default Alltest;