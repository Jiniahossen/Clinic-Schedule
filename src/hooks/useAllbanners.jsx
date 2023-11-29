
import { useEffect, useState } from "react";


const useAllBanners = () => {
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/banners')
            .then((res) => res.json())
            .then((data) => {
                setBanners(data)
                setLoading(false)
            })
    }, [])
    return [banners, loading];
};

export default useAllBanners;