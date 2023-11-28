import { useEffect, useState } from 'react';

const useFeatured = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/book')
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
                setLoading(false);
            })
    }, [])
    return [items, loading];
};

export default useFeatured;