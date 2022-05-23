import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../../firebase.init';
import useToken from '../../../../hooks/useToken';
import Loading from '../../../Shared/Loading/Loading';
import googleLogo from '../../../../assets/images/google-logo.png'
import signup from '../../../../assets/images/signup.png';
const Signup = () => {
    let errorTag;
    const { register, handleSubmit, reset } = useForm();
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
    // update profile
    const [updateProfile] = useUpdateProfile(auth);

    // google sign up
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    // signup with email and password 
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    // get token and send user
    const [token] = useToken(user || googleUser)

    // error 
    if (error || googleError) {

        errorTag = <p className=' text-red-700 mt-5'>Error: {error.message}</p>;

    }
    // loading
    if (loading || googleLoading) {
        return <Loading></Loading>
    }
    // navigate user 
    if (token) {
        navigate(from, { replace: true });
    }

    // get input value and create user

    const onSubmit = async (data) => {
        const { name, email, password, confirmPassword } = data;
        if (password === confirmPassword) {
            await createUserWithEmailAndPassword(email, password)
            await updateProfile({ displayName: name });
             toast.success('successfully create account');
            // on submit reset input
            reset()

        } else {
            toast.error('password mismatch', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

    }


    // google auth
    const handleGoogleLogin = async () => {
        await signInWithGoogle()

    }
    return (
        <div className='mt-12 lg:flex  '>
            <div className='flex-1 flex justify-end items-center'>
                <img className='w-[90%]' src={signup} alt="" />
            </div>
            <div className='flex-1 flex justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <h4 className=' text-2xl text-center'>Sign Up</h4>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                className='input input-bordered input-primary w-full max-w-xs'
                                type='text'
                                {...register("name", { required: true })}
                                placeholder='Full Name'

                            />
                            <input {...register("email", { required: true })} type="text" placeholder="Email" className=" mt-5 input input-bordered input-primary w-full max-w-xs" />
                            <input {...register("password", { required: true })} type="password" placeholder="Password" className="input input-bordered input-primary mt-5 w-full max-w-xs" />
                            <input type='password'
                                {...register("confirmPassword", { required: true })}
                                placeholder='confirm password'
                                className='input input-bordered input-primary mt-5 w-full max-w-xs'
                            />
                            {errorTag}
                            <input type="submit" value="Sign Up" className=" btn btn-secondary  mt-5 w-full max-w-xs" />
                        </form>
                        <div>
                            <p>already Have an Account? <Link className='btn-link text-secondary' to='/login'>Login</Link></p>
                        </div>
                        <div className="divider">OR</div>
                        <button
                            onClick={() => handleGoogleLogin()}
                            className="btn btn-outline w-full max-w-xs "> <img className='w-[40px] float-left' src={googleLogo} alt="" /> continue with google</button>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />


        </div>
    );
};

export default Signup;