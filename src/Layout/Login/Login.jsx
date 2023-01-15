import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from "../../Redux/counter/LoginSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userLogin } = useSelector((state) => state.fetchLogin);
  console.log("userXXX", userLogin);

  return (
    <>
      <section
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: "url(https://picsum.photos/2000)",
          objectFit: "cover",
        }}
      >
        <div class="flex min- overflow-hidden">
          <div class="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div class="w-full max-w-xl mx-auto lg:w-96  bg-gray-100 px-10 py-20 rounded-2xl">
              <div>
                <div
                  class="text-blue-600 text-4xl font-extrabold mb-4 font-sans cursor-pointer"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  ANH HAO PAGEs
                </div>
                <h2 class="mt-6 text-4xl font-extrabold text-neutral-600">
                  Sign in.
                </h2>
              </div>

              {/* {
      "taiKhoan": "0901959488",
      "hoTen": "Huynh Quang Minh",
      "email": "quangminh@gmail.com",
      "soDt": "0316546547344",
      "matKhau": "12312345",
      "maLoaiNguoiDung": "QuanTri"
    }, */}
              <Formik
                initialValues={{ taiKhoan: "", matKhau: "" }}
                onSubmit={(values) => {
                  const object = { values, navigate };
                  console.log("values", values);
                  // dispatch(fetchLogin(values, navigate));
                  dispatch(fetchLogin(object));
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <form onSubmit={handleSubmit}>
                    <div class="mt-8">
                      <div class="mt-6">
                        <div class="space-y-6">
                          <div className="mb-3">
                            <label
                              for="email"
                              class="block text-sm font-medium text-neutral-600"
                            >
                              {" "}
                              Email address{" "}
                            </label>
                            <div class="mt-1">
                              <input
                                id="email"
                                name="taiKhoan"
                                // type="email"
                                autocomplete="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                placeholder="Your Email"
                                class="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                              />
                              {/*   {errors.email && touched.email && errors.email} */}
                            </div>
                          </div>

                          <div class="space-y-1">
                            <label
                              for="password"
                              class="block text-sm font-medium text-neutral-600"
                            >
                              {" "}
                              Password{" "}
                            </label>
                            <div class="mt-1">
                              <input
                                id="password"
                                name="matKhau"
                                type="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                autocomplete="current-password"
                                placeholder="Your Password"
                                class="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                              />
                              {/*  {errors.password &&
                                touched.password &&
                                errors.password} */}
                            </div>
                          </div>

                          <div class="flex items-center justify-between">
                            <div class="flex items-center">
                              <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                placeholder="Your password"
                                class="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                              />
                              <label
                                for="remember-me"
                                class="block ml-2 text-sm text-neutral-600"
                              >
                                {" "}
                                Remember me{" "}
                              </label>
                            </div>

                            <div class="text-sm">
                              <a
                                href="#"
                                class="font-medium text-blue-600 hover:text-blue-500"
                              >
                                {" "}
                                Forgot your password?{" "}
                              </a>
                            </div>
                          </div>

                          <div>
                            <button
                              type="submit"
                              // disabled={isSubmitting}
                              class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                              Sign in
                            </button>
                          </div>
                        </div>
                        <div class="relative my-4">
                          <div class="absolute inset-0 flex items-center">
                            <div class="w-full border-t border-gray-300"></div>
                          </div>
                          <div class="relative flex justify-center text-sm">
                            <span class="px-2 bg-white text-neutral-600">
                              {" "}
                              Or continue with{" "}
                            </span>
                          </div>
                        </div>
                        <div>
                          <button
                            type="submit"
                            class="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                          >
                            <div class="flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                class="w-6 h-6"
                                viewBox="0 0 48 48"
                              >
                                <defs>
                                  <path
                                    id="a"
                                    d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                                  ></path>
                                </defs>
                                <clipPath id="b">
                                  <use xlinkHref="#a" overflow="visible"></use>
                                </clipPath>
                                <path
                                  clip-path="url(#b)"
                                  fill="#FBBC05"
                                  d="M0 37V11l17 13z"
                                ></path>
                                <path
                                  clip-path="url(#b)"
                                  fill="#EA4335"
                                  d="M0 11l17 13 7-6.1L48 14V0H0z"
                                ></path>
                                <path
                                  clip-path="url(#b)"
                                  fill="#34A853"
                                  d="M0 37l30-23 7.9 1L48 0v48H0z"
                                ></path>
                                <path
                                  clip-path="url(#b)"
                                  fill="#4285F4"
                                  d="M48 48L17 24l-4-3 35-10z"
                                ></path>
                              </svg>
                              <span class="ml-4"> Log in with Google</span>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
          <div class="relative flex-1 hidden w-0 overflow-hidden lg:block">
            <img
              class="absolute inset-0 object-cover w-full h-full"
              src="/assets/images/placeholders/rectangleWide.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
