import { Link } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import { useContext } from "react";
import {AuthContext} from "/src/Providers/AuthProvider"

const Register = () => {
    const { createUser } = useContext(AuthContext)

    // Register
    const handleReg = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        const photoUrl = form.get('photoUrl')
        // Create User
        createUser(email, password)
        .then(res => {
            console.log(res.user);
        })
        .catch(err => console.log(err.status))

        console.log(name, email, password, photoUrl);
    }

    return (
        <div>
            {/* Navbar */}
      <Navbar />
      {/* Login Form */}
      <div>
        <div className="hero min-h-screen bg-base-200 rounded-md shadow-md px-10 mb-5">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Create your account</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ml-10">
              <form onSubmit={handleReg} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="input input-bordered"
                   
                  />
                </div>
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
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photoUrl"
                    placeholder="Photo URL"
                    className="input input-bordered"
                    
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
                <div className="form-control">
                  <button className="btn btn-primary">Register</button>
                </div>
                <hr className="my-2" />
                <div className="flex px-7">
                  <p className="text-gray-700/60">Already have an account?</p>
                  <Link to='/login' className="text-gray-700/60 hover:underline hover:text-black">Login</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Register;