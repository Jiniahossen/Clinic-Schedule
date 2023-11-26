import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const GoogleSignIn = () => {

    const {signInWithGoogle}=useAuth();
    const navigate=useNavigate();
    const axiosPublic=useAxiosPublic();

    const handleGoogleSignIn=()=>{
       signInWithGoogle()
       .then(res=>{

        const userInfo={
            email:res.user.email,
            name:res.user.displayName
        }

        axiosPublic.post('/users',userInfo)

        .then((res)=>{
            console.log(res.data);
                Swal.fire('Hola you are here!')
                navigate('/')
            
        })
       }
       )
       .catch(error=>{
        console.log('Error is :--',error);
       })

    }
    return (
        <div>
            <div className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer' onClick={handleGoogleSignIn}>
                <FcGoogle size={32} />

                <p>Continue with Google</p>
            </div>
        </div>
    );
};

export default GoogleSignIn;