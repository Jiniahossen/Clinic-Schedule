import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAppointments = () => {
    const axiosSecure=useAxiosSecure();
    const {user}=useAuth();

   const {refetch, data:book=[]}=useQuery({
    queryKey:['book',user?.email],
    queryFn: async()=>{
        const res= await axiosSecure.get(`/book/${user.email}`)
        return res.data;
    }
   })
   return [book,refetch];
};

export default useAppointments;