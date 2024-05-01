import React from 'react'
import { useForm } from "react-hook-form"
import { Link }  from 'react-router-dom'



const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
   // console.log(errors);
   const onSubmit = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
}
    return (
        <>  
            <div className="">   

                <div className="">
                    <div className="">
                        <h2 className="">Sign Up</h2>
                        <form className="" onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("nickname", { required: "Nickname is a required field", minLength: {value: 3, message:"At least 3 characters are required"} })} className='nickname' type='text' placeholder='Nickname'/>
                            <p className=''>{errors.nickname && errors.nickname.message}</p>
                            <input {...register("email", { required: "A unique email is required" })} className='email' type='email' placeholder='Email'/>
                            <p className=''>{errors.email && errors.email.message}</p>
                            <input {...register("password", { required: "A password is required", minLength: {value: 6, message:"At least 6 characters are required"} })} className='pwd' type='password' placeholder='Password'/>
                            <p className=''>{errors.password && errors.password.message}</p>
                            <select {...register("status", { required: "You need to select your status" })} id="status" className='select-status'>
                                <option value="">--Your Status--</option>
                                <option value="member">member</option>
                                <option value="admin">admin</option>
                            </select>
                            <button className='submit-btn' disabled={isSubmitting} type='submit'>
                                {isSubmitting ? "Loading..." : "Submit"}
                            </button>
                        </form>
                        <div className="">
                            <p>Already Have An Account ?</p>
                            <Link to="/" className="">Log In</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterForm