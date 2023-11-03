import { useState } from "react";
import "../../index.css";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const CustomerLogin = () => {
  const [password, setPassword] = useState(false);
  const handlePassword = () => {
    setPassword((prev) => !prev);
  };
  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-3xl font-semibold dark:text-white hover:text-red-600 font-title no-underline"
          >
            <h1 className="font-title">ATHLARK</h1>
          </a>
          <div className="w-full bg-transparent rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 shadow-xl ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 font-text">
              <h1 className="text-2xl font-bold leading-tight tracking-tight text-white md:text-2xl ml-16">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required="please enter your email"
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <div className="flex items-center bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <input
                      type={password ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      class="flex-1 bg-transparent outline-none"
                      required=""
                      pattern=".{8,}"
                      required
                      title="8 characters minimum"
                    />
                    {password ? (
                      <AiOutlineEye onClick={handlePassword} />
                    ) : (
                      <AiOutlineEyeInvisible onClick={handlePassword} />
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 "
                        required=""
                      />
                    </div>
                    <div className="ml-2 text-sm">
                      <label
                        for="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-cyan-600 underline-offset-2"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-blue-800"
                >
                  Sign in
                </button>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-2 ml-16">
                  Don’t have an account yet?{" "}
                  <a
                    href="#"
                    className="font-medium text-cyan-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerLogin;
