import { useEffect, useState } from "react";


const useAllUser = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://diagnostic-center-server-azure.vercel.app/users')
            .then((res) => res.json())
            .then((data) => {
                setUsers(data)
                setLoading(false)
            })
    }, [])
    return [users, loading];
};

export default useAllUser;

