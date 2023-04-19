import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Register = () => {
   const [show, setShow] = useState(true);
    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext);

   const handleSignUp = event =>{
    event.preventDefault();
    setError('')
    const form = event.target;
    const email = form.email.value;
    const pass = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, pass, confirm);

    if(pass !== confirm){
        setError('Your password did not match')
    }
    else if (pass.length <6){
        setError('Add at leaste 6  caracter')
    }

    createUser(email, pass)
    .then(result=>{
        const loggedUser = result.user;
        console.log(loggedUser)
    })
    .catch(error=>{
        console.log(error.message);
        setError(error.message)
    })

   }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center">Register now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input  type="text" placeholder="name" name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input required type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input required type={!show ? 'text' : "password"} name='password' placeholder="password" className="input input-bordered" />
                                
                               
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input required type={!show ? "text" : "password"} name='confirm'  placeholder="confirm password" className="input input-bordered" />
                                <h2 onClick={()=>setShow(!show)}>Show Password</h2>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <h2 className='text-red-500'>{error}</h2>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <h2>Already have an accunt ? <Link to='/login'>Login</Link></h2>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;