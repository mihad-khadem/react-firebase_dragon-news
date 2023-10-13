import React, { useContext } from "react";
import Navbar from "../../Navbar/Navbar";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Login = () => {
  const {signIn} = useContext(AuthContext)
  const location =  useLocation()
  const navigate = useNavigate()
  console.log( 'Home',location);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    signIn(email, password)
    .then(res => {
      console.log(res.user);
      // Navigate after login
      navigate(location?.state ? location.state : '/')

    })
    .catch(err => console.log(err))
  };
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Login Form */}
      <div>
        <div className="hero min-h-screen bg-base-200 rounded-md shadow-md px-10 mb-5">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ml-10">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                <hr className="my-2" />
                <div className="flex px-7">
                  <p className="text-gray-700/60">Do not have an account?</p>
                  <Link
                    to="/register"
                    className="text-gray-700/60 hover:underline hover:text-black"
                  >
                    sign in
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
