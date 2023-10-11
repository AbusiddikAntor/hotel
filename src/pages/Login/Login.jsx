import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";


function Login(props) {
    return (
        <div>
           <div className="min-h-screen bg-base-200 mx-auto">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left w-1/2">
          <h1 className="text-5xl font-bold ">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form 
            // onSubmit={handleLogin}
            
            >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="Login"  className="btn btn-primary" />
            </div>
            </form>
            <div>
              <p className="text-center"> are you new? sign In here.. ??  <Link to='/signIn' className="text-center text-red-600">SignIn</Link></p>
            
            </div>
            <div className="mx-auto">

            <button className="btn btn-outline btn-success"
            //  onClick={handleGoogleSignIn}
             > <FaGoogle className="text-red-600 me-2"/> Google Login</button>
   
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
}

export default Login;