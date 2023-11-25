import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../hooks/useAuth";

const GoogleSignIn = () => {

    const {signInWithGoogle}=useAuth();

    const handleGoogleSignIn=()=>{
       signInWithGoogle()
       .then(res=>{
        console.log(res.user);
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