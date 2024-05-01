import React, {useState} from 'react'
import { useForm } from "react-hook-form"
import { Link, useNavigate }  from 'react-router-dom'


const LoginForm = ({setAccessToken}) => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    console.log(errors);
    const navigate = useNavigate();

   // const [accessToken, setAccessToken] = useState(null); // State to store access token
    const [error, setError] = useState(null); // State to store error messages

    const onSubmit = async (data) => {
        try {
            const response = await fetch('https://lokker-room-3ce86819d936.herokuapp.com/api/login', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(data);
            console.log(response);
            if (response.ok) {
                const  accessToken  = await response.json();
                //console.log(accessToken);
                const token = accessToken.accessToken;
                //console.log(token);
                setAccessToken(token);

                localStorage.setItem('accessToken', token);
                navigate("/chat");

                /* await new Promise((resolve) => setTimeout(resolve, 1000));
                console.log(data); */
            } else {
                const { error } = await response.json();
                setError(error);
                navigate("");
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setError('An unexpected error occurred. Please try again later.');
        }
    }

    return (
        <>  
            <div className="">   
                <div className="">
                    <div className="">
                        <h2 className="">Log In</h2>
                        <form className="" onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("email", { required: "The email is required" })} className='email' type='email' placeholder='Email'/>
                            <p className=''>{errors.email && errors.email.message}</p>
                            <input {...register("password", { required: "The password is required" })} className='pwd' type='password' placeholder='Password'/>
                            <p className=''>{errors.password && errors.password.message}</p>
                            <button className='submit-btn' disabled={isSubmitting} type='submit'>
                                {isSubmitting ? "Loading..." : "Submit"}
                            </button>
                        </form>
                        <div className="">
                            <Link to="#" className="">Forgot Your Password ?</Link>
                            <div className="">
                                <p>Don't Have An Account ?</p>
                                <Link to="/register" className="">Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        {/* <div className="login-page bg-black min-h-screen flex flex-col items-center justify-center">
            <div className="w-96 p-8 bg-gray-800 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-white mb-6">Sign In</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-blue-400" type='email' placeholder='Email' />
                    <input className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-blue-400" type='password' placeholder='Password' />
                    <button className="w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition duration-200" type='submit'>Sign In</button>
                </form>
                <div className="text-white mt-4">
                    <Link to="#" className="text-blue-500">Forgot Your Password?</Link>
                    <p>Don't Have An Account?</p>
                    <Link to="/register" className="text-blue-500">Sign Up</Link>
                </div>
            </div>
        </div> */}
        </>
    );
};

export default LoginForm