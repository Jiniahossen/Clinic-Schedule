import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
import GoogleSignIn from '../../Components/shared/GoogleSignIn/GoogleSignIn';
import { imageUpload } from '../../hooks/useImages';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';


const SignUp = () => {
  const navigate = useNavigate()
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUserProfile } = useAuth()

  const handleSignUp = async (e) => {

    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Image:", image);
    const imageData = await imageUpload(image);

    createUser(email, password)
      .then(res => {
        const user = res.user;
        console.log(user);
        updateUserProfile(name, imageData?.data?.display_url)
          .then(() => {
            const userInfo = {
              name: form.name.value,
              email: form.email.value,

            }
            axiosPublic.post('/users', userInfo)
              .then((res) => {
                if (res.data.insertedId) {
                  Swal.fire("Account create successfully");
                  navigate('/')
                }
              })
          })
      })
      .catch(error => {
        console.log(error);
        Swal.fire(`${error}`);
      });

  };

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
          <p className='text-sm text-[#219f85'>Welcome to ClinisSchedule</p>
        </div>
        <form
          onSubmit={handleSignUp}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='image' className='block mb-2 text-sm'>
                Select Image:
              </label>
              <input
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#219f85] bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                autoComplete='new-password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#219f85] bg-gray-200 text-gray-900'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='bg-[#219f85] w-full rounded-md py-3 text-white'
            >
              Continue
            </button>
          </div>
        </form>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Signup with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>

        {/* google sign in */}

        <GoogleSignIn></GoogleSignIn>
        <p className='px-6 text-sm text-center text-gray-400'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='hover:underline hover:text-[#219f85] text-gray-600'
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default SignUp;