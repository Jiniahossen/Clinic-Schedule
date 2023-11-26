import { axiosSecure } from "./useAxiosSecure"


export const saveUser = async user => {
    const currentUser = {
      email: user.email,
      role: 'user',
      status: 'active',
    }
    const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser)
    return data;
  }