
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllBook = () => {
    const axiosSecure = useAxiosSecure();
    const { refetch, data: book = [] } = useQuery({
        queryKey: ['book'],
        queryFn: async() => {
            const res = await axiosSecure.get(`/book`);
            return res.data;
        }
    })

    return [book, refetch]
};

export default useAllBook;