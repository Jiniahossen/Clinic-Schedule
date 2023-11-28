import { useState } from "react";
import Container from "../../Components/shared/Container/Container";
import Test from "../../Components/shared/Test/Test";
import useTests from "../../hooks/useTests";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Alltest = () => {
    const [items, loading] = useTests();
    const [startDate, setStartDate] = useState(null);

    // Format a date string in the format
    const formatDate = (dateString) => {
        const dateObj = new Date(dateString);
        const day = dateObj.getDate();
        const month = dateObj.getMonth() + 1;
        const year = dateObj.getFullYear();
        return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
    };

    // Filter items based on the selected date
    const filteredItems = startDate
        ? items.filter(item => {
              const itemDate = new Date(item.postingDate);
              return formatDate(itemDate.toDateString()) === formatDate(startDate.toDateString());
          })
        : items;

    return (
        <Container>
            <div className="flex items-center max-w-3xl my-20">
                <h1 className="text-xl font-semibold font-serif">Filter By Date:</h1>
                <div className="form-control flex-1">
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className="input input-bordered w-full"
                        dateFormat="dd/MM/yyyy"
                        isClearable 
                    />
                </div>
            </div>
            <div>
                {filteredItems.length === 0 && startDate ? (
                    <p>No tests available for the selected date.</p>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filteredItems.map(item => (
                            <Test key={item._id} item={item}></Test>
                        ))}
                    </div>
                )}
            </div>
        </Container>
    );
};

export default Alltest;
