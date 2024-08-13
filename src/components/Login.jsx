import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const navigetor = useNavigate();
  const { signInUser, goggleLogin } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        event.target.reset();
        console.log(result.user);
        alert("User login Successfully");
        navigetor("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoggleLogin = () => {
    goggleLogin()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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
            <div>
              <h2>
                New this site Please
                <Link to="/registration">
                  <button className="btn btn-link">Registration</button>
                </Link>
              </h2>
            </div>
          </form>

          <div className="form-control mt-6">
            <button
              onClick={handleGoggleLogin}
              className="btn mx-4 my-4 btn-primary"
            >
              Goggle Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
