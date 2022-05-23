import React from 'react';
import login from '../../../../assets/images/login.png'
import googleLogo from '../../../../assets/images/google-logo.png'
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';
import useToken from '../../../../hooks/useToken';
const Login = () => {
    let errorTag;
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
  
    // google signup auth
    const [signInWithGoogle,
        googleUser, googleLoading,
        googleError] = useSignInWithGoogle(auth);
    // sign in with email and pass auth 
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
      //get token
      const [token] = useToken(user || googleUser)
    const { register, handleSubmit } = useForm();
    const onSubmit = async (loginData) => {
        const { email, password } = loginData;
        await signInWithEmailAndPassword(email, password)

    };
    // loading
    if (googleLoading || loading) {
        return <Loading></Loading>
    }
    // error tag 
    if (error || googleError) {

        errorTag = <p className='text-danger'>Error: {error.message}</p>;

    }

    if (token) {
        navigate(from, { replace: true });
    }



    // google auth
    const handleGoogleLogin = async () => {
        await signInWithGoogle()
    }
    return (
        <div className='mt-12 lg:flex'>
            <div className='flex-1 flex justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <h4 className=' text-2xl text-center'>Login</h4>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("email", { required: true })} type="text" placeholder="Email" className="input input-bordered input-primary w-full max-w-xs" />
                            <input {...register("password", { required: true })} type="password" placeholder="Password" className="input input-bordered input-primary mt-5 w-full max-w-xs" />
                            {errorTag}
                            <input type="submit" value="Login" className=" btn btn-secondary  mt-5 w-full max-w-xs" />
                        </form>
                        <div>
                            <p>Don't Have an Account? <Link className='btn-link text-secondary' to='/signup'> Signup</Link></p>
                        </div>
                        <div className="divider">OR</div>
                        <button
                            onClick={() => handleGoogleLogin()}
                            className="btn btn-outline w-full max-w-xs "> <img className='w-[40px] float-left' src={googleLogo} alt="" /> continue with google</button>
                    </div>
                </div>
            </div>

            <div className='flex-1 flex justify-center items-center'>
                <img className='w-[70%]' src={login} alt="" />
            </div>
        </div>
    );
};

export default Login;