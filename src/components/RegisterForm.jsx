import React, {useState} from 'react'
import { useForm } from "react-hook-form"
import { Link, useNavigate }  from 'react-router-dom'



const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
   
    const [notification, setNotification] = useState(null);
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        try {
            const response = await fetch(`https://lokker-room-3ce86819d936.herokuapp.com/api/register`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(data);
            console.log(response);
            if (response.ok) {
                const  newUser  = await response.json();
                console.log(newUser);
                setNotification({ type: 'success', message: 'You have been successfully registered ! You can log in now with your email.' });
                navigate("/");
            } else {
                const { error } = await response.json();
                setNotification({ type: 'error', message: `Registration failed: ${error}` });
            }
        } catch (error) {
            console.error('Error while posting a message :', error);
            setNotification({ type: 'error', message: 'An error occurred. Please try again later.' });
        }
    }

    return (
        <>  
            <div className="register-container">
                <div className="register-main">
                    <h2 className="register">Sign Up</h2>
                    {notification && (
                        <div className={`notification : ${notification.type}`}>
                            {notification.message}
                        </div>
                    )}
                    <form className="form-register" onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("nickname", { required: "Nickname is a required field", minLength: {value: 3, message:"At least 3 characters are required"} })} name="nickname" className='nickname' type='text' placeholder='Nickname'/>
                        <p className=''>{errors.nickname && errors.nickname.message}</p>
                        <input {...register("email", { required: "A unique email is required" })} name="email" className='email' type='email' placeholder='Email'/>
                        <p className=''>{errors.email && errors.email.message}</p>
                        <input {...register("password", { required: "A password is required", minLength: {value: 4, message:"At least 4 characters are required"} })} name="password" className='pwd' type='password' placeholder='Password'/>
                        <p className=''>{errors.password && errors.password.message}</p>
                        <select {...register("role", { required: "You need to select your status" })} name="role" id="status" className='select-status'>
                            <option value="">--Your Status--</option>
                            <option value="member">Member</option>
                            <option value="admin">Admin</option>
                        </select>
                        <p className=''>{errors.status && errors.status.message}</p>
                        <button className='submit-register' disabled={isSubmitting} type='submit'>
                            {isSubmitting ? "Loading..." : "Submit"}
                        </button>
                    </form>
                    <div className="register-add-info">
                        <p>Already Have An Account ?</p>
                        <Link to="/" className="logIn">Log In</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterForm