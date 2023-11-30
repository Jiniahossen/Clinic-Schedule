
import { useEffect, useState } from "react";


const useAllBanners = () => {
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://diagnostic-center-server-azure.vercel.app/banners')
            .then((res) => res.json())
            .then((data) => {
                setBanners(data)
                setLoading(false)
            })
    }, [])
    return [banners, loading];
};

export default useAllBanners;