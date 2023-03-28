import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import profile from '../../.././assets/images/avater.png';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
const MyProfile = () => {
    const navigate = useNavigate()
    const [user, loading] = useAuthState(auth);
    const [edit, setEdit] = useState(false)
    const [education, setEducation] = useState(false)
    const [link, setLink] = useState(false)
    const { displayName, email, photoURL } = user;

    const { isLoading, error, data: usersData, refetch } = useQuery('user-data', () =>
        fetch(`https://drillco.onrender.com/user/${email}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json()))

    const handleEdit = () => {
        setEdit(true)

    }
    const handleUpdate = () => {
        // setEdit(false)
    }
    const handleEducation = () => {
        setEducation(true)
        setLink(false)
    }
    const handleLink = () => {
        setLink(true)
        setEducation(false)

    }
    const handleCancel = () => {
        setEdit(false)


    }

    const { register, handleSubmit: handleEduSubmit } = useForm();
    const onSubmitEdu = eduData => {
        const updatedDoc = { eduData };

        fetch(`https://drillco.onrender.com/user/${email}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(updatedDoc)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('successfully add edu info')
                    refetch()
                    setEdit(false)
                    setEducation(false)
                    setLink(false)

                }
            })



    };
    let { register: registerLink, handleSubmit: handleLinkSubmit } = useForm();
    const onSubmitLink = linkData => {
        const updatedDoc = { linkData };
        fetch(`https://drillco.onrender.com/user/${email}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(updatedDoc)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('successfully add important Links info')
                    refetch()
                    setEdit(false)
                    setEducation(false)
                    setLink(false)

                }
            })
    };



    if (loading || isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="card lg:w-[80%] mt-12 bg-base-100 shadow-xl p">
            <div className="card-body">
                <ToastContainer></ToastContainer>
                <div className=' lg:flex'>
                    <div className=' lg:w-[25%]'>
                        <img className="mask mask-circle w-[100px]" src={photoURL ? photoURL : profile} alt='' />

                        {
                            edit && <>
                                <button onClick={() => handleUpdate()} className=' btn btn-xs btn-secondary rounded-3xl mt-5'>update profile</button>

                                <div className=' mt-12'>
                                    <button onClick={() => handleEducation()} className=' btn-error btn btn-xs'>education</button>
                                    <button onClick={() => handleLink()} className=' btn-error btn btn-xs mt-2'>important links</button>
                                </div>



                            </>

                        }
                        {
                            !edit && <button onClick={() => handleEdit()} className=' btn btn-xs btn-secondary rounded-3xl mt-5'>Edit profile</button>
                        }
                    </div>
                    <div className='lg:w-[75%]'>
                        <span className="card-title">Full name</span>
                        <h2 >{displayName}</h2>
                        <span className="card-title mt-5">Email</span>
                        <p>{email}</p>
                        <div>
                            {
                                edit && <>
                                    <div className="divider"></div>
                                    <h4>update info</h4>
                                    <p> click edit education or important link</p>
                                    {
                                        education &&
                                        <form onSubmit={handleEduSubmit(onSubmitEdu)} >

                                            <label className=" text-info mt-5">
                                                <p>your Education level</p>
                                            </label>
                                            <input {...register("eduLevel")} type="text" className="input input-bordered input-xs w-full max-w-xs" />
                                            <label className=" text-info mt-5">
                                                <p>Exam/Degree Title</p>
                                            </label>
                                            <input {...register("Degree")} type="text" className="input input-bordered input-xs w-full max-w-xs" />
                                            <label className=" text-info mt-5">
                                                <p>Institution Name</p>
                                            </label>
                                            <input {...register("Institution")} type="text" className="input input-bordered input-xs w-full max-w-xs" />
                                            <label className=" text-info mt-5">
                                                <p>Passing year</p>
                                            </label>
                                            <input {...register("Passing")} type="number" className="input input-bordered input-xs w-full max-w-xs" />
                                            <br />
                                            <input type='submit' className=' btn btn-xs btn-primary my-3 ' value='update edu'></input>

                                        </form>
                                    }

                                    {
                                        link && <>
                                            <form onSubmit={handleLinkSubmit(onSubmitLink)} >

                                                <label className=" text-info mt-5">
                                                    <p>your Linkedin Profile link</p>
                                                </label>
                                                <input {...registerLink("Linkedin")} type="text" className="input input-bordered input-xs w-full max-w-xs" />
                                                <label className=" text-info mt-5">
                                                    <p>your gitHub Profile link</p>
                                                </label>
                                                <input {...registerLink("gitHub")} type="text" className="input input-bordered input-xs w-full max-w-xs" />
                                                <label className=" text-info mt-5">
                                                    <p>your stackoverflow Profile link</p>
                                                </label>
                                                <input {...registerLink("stackoverflow")} type="text" className="input input-bordered input-xs w-full max-w-xs" />
                                                <br />
                                                <input type='submit' className=' btn btn-xs btn-primary my-3' value='update link'></input>



                                            </form>
                                        </>
                                    }



                                </>

                            }
                            {education || link ? <button onClick={() => handleCancel()} className=' btn btn-error btn-xs'>cencle</button> : ''
                            }

                            {
                                !edit && <>
                                    <span className="card-title mt-5">education</span>
                                    <p className=' text-primary'> <p>
                                        Your Education level : {usersData?.eduData?.eduLevel}.
                                    </p> <p>Exam/Degree Title : {usersData?.eduData?.Degree}.</p>Institution Name : {usersData?.eduData?.Institution}.
                                        <p> Passing year {usersData?.eduData?.Passing} </p>
                                    </p>

                                    <span className="card-title mt-5">important links</span>
                                    <p className=" mt-5 ">LinkedIn: </p>
                                    <a href={usersData?.linkData?.Linkedin} target='_blank' className=' link-hover text-blue-900 font-bold' rel="noreferrer">{usersData?.linkData?.Linkedin}</a>
                                    <p className=" mt-5">gitHub: </p>
                                    <a target='_blank' href={usersData?.linkData?.gitHub} className=' link-hover text-blue-900 font-bold' rel="noreferrer">{usersData?.linkData?.gitHub}</a>
                                    <p className=" mt-5">stackoverflow: </p>
                                    <a target='_blank' href={usersData?.linkData?.stackoverflow} className=' link-hover text-blue-900 font-bold' rel="noreferrer">{usersData?.linkData?.stackoverflow}</a>

                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;