import { useContext, useState } from "react";
import image from "../../assets/loginPhoto.png";
import AuthContext from "../../context/authContext";

const Login = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const {
    loginResponse: { login, loading, error, success },
  } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      username,
      password,
    };
    await login(payload);
  };
  console.log(loading, error, success);

  return (
    <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-primary-light sm:py-10">
      <div className="flex sm:flex-row flex-col 2xl:w-[56vw] xl:w-[70vw] lg:w-[80vw] w-[90vw] h-auto md:p-8 p-2">
        <div className="sm:w-1/2 w-full flex flex-wrap content-center justify-center rounded-2xl sm:rounded-none sm:rounded-l-2xl bg-white p-4">
          <div className="w-full md:p-8 p-2">
            <h1 className="title">Welcome back</h1>
            {error && !loading ? (
              <small className="text-accent-red">
                This combination of username and password is invalid.
              </small>
            ) : (
              <small className="text-base-500">
                Welcome back! Please enter your details
              </small>
            )}

            <form className="mt-4" onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  type="text"
                  placeholder="Enter your email"
                  className="block w-full rounded-md border border-gray-300 focus:border-primary-light focus:outline-none focus:ring-1 focus:ring-primary-light py-2 px-2.5 text-gray-500"
                />
              </div>

              <div className="mb-3">
                <input
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="*****"
                  className="block w-full rounded-md border border-gray-300 focus:border-primary-light focus:outline-none focus:ring-1 focus:ring-primary-light py-2 px-2.5 text-gray-500"
                />
              </div>

              <div className="mb-6 flex flex-wrap content-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="mr-1 checked:bg-primary-light"
                />{" "}
                <label
                  htmlFor="remember"
                  className="mr-auto text-xs font-semibold"
                >
                  Remember for 30 days
                </label>
                <a
                  href="#"
                  className="text-xs font-semibold text-primary-light"
                >
                  Forgot password?
                </a>
              </div>

              <div className="mb-3">
                <button
                  disabled={loading}
                  className={`${
                    loading ? "bg-base-500 cursor-wait" : "bg-primary-light"
                  } w-full text-center text-white hover:bg-primary-dark px-2 py-2.5 rounded-md`}
                >
                  Sign in
                </button>
              </div>
            </form>

            <div className="text-center">
              <span className="text-xs text-base-500 font-semibold">
                Dont have account?
              </span>
              <a href="#" className="text-xs font-semibold text-primary-light">
                Sign up
              </a>
            </div>
          </div>
        </div>

        <div className="w-1/2 sm:flex hidden flex-wrap content-center justify-center rounded-r-2xl bg-white p-4">
          <img
            className="w-96 h-full bg-center bg-no-repeat bg-cover rounded-r-2xl object-contain"
            src={image}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
