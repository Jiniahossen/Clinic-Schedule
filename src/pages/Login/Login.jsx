import { Link, useLocation, useNavigate } from 'react-router-dom'
import GoogleSignIn from '../../Components/shared/GoogleSignIn/GoogleSignIn';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import Container from '../../Components/shared/Container/Container';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';
  const { signIn } = useAuth();

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value || "Not given";
    const password = form.password.value || "Not given";

    signIn(email, password)
      .then(res => {
        const loggedUser = res.user;
        console.log(loggedUser)
        Swal.fire("Login successfully");
        navigate(from, { replace: true });
      })
      .catch(error => {
        Swal.fire(`${error}`);
      });
  }

  return (
    <div className='flex justify-center items-center'>
      <Container>
        <div className='flex gap-20'>
          <div className='w-1/2'>
            <img src="https://i.ibb.co/1nz2WWp/view-messy-office-workspace-with-tablet-device.jpg" alt="" />
          </div>
          <div className='flex min-h-screen flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
            <div className='mb-8 text-center'>
              <h1 className='my-3 text-4xl font-bold'>Log In</h1>
              <p className='text-sm text-[#219f85]'>
                Sign in to access your account
              </p>
            </div>
            <form
              onSubmit={handleLogIn}

              noValidate=''
              action=''
              className='space-y-6 ng-untouched ng-pristine ng-valid'
            >
              <div className='space-y-4'>
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
                    autoComplete='current-password'
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
                Login with social accounts
              </p>
              <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
            </div>

            {/* google sign in */}
            <GoogleSignIn></GoogleSignIn>

            <p className='px-6 text-sm text-center text-gray-400'>
              Don&apos;t have an account yet?{' '}
              <Link
                to='/signup'
                className='hover:underline hover:text-[#219f85] text-gray-600'
              >
                Sign up
              </Link>
              .
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Login;