"use client";
import React, { useState, useContext, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FormikHelpers } from "formik";
import app from "../../../firebase";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/contexts/AuthContext";
import dotenv from 'dotenv';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email"),
  password: Yup.string().required("Please enter your password"),
});

export default function LogIn() {
  const [errorWhileLogingIn, setErrorWhileLoggingIn] = useState(false);
  const router = useRouter();

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (currentUser) {
      router.push("/generate");
    }
  });

  const onSubmit = async (
    values: {
      email: string;
      password: string;
      remember: boolean;
    },
    {
      setSubmitting,
    }: FormikHelpers<{
      email: string;
      password: string;
      remember: boolean;
    }>
  ) => {
    setErrorWhileLoggingIn(false);
    const auth = getAuth(app);

    try {
      if (values.remember) {
        await setPersistence(auth, browserLocalPersistence);
      }
      await signInWithEmailAndPassword(auth, values.email, values.password);
      const clientId = process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID;
      const redirectUri = encodeURIComponent(
        "http://localhost:8888/auth/linkedin/callback"
      );
      const state = "randomString";
      const scope = encodeURIComponent(
        "r_liteprofile r_emailaddress w_member_social"
      );
      const responseType = "code";

      const url = `https://www.linkedin.com/oauth/v2/authorization?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=${scope}`;

      // window.location.href = url;

      router.push("/generate");
    } catch (error) {
      setErrorWhileLoggingIn(true);
      console.error(error);
    }
    setSubmitting(false);
  };

  return (
    <section className="bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex text-black items-center mb-6 text-2xl font-semibold text-slate-100"
        >
          Sumariz.ai
        </a>
        <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Log in
            </h1>
            <Formik
              initialValues={{ email: "", password: "", remember: true }}
              validationSchema={LoginSchema}
              onSubmit={onSubmit}
            >
              <Form className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <Field
                        type="checkbox"
                        id="remember"
                        name="remember"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500">
                  Don’t have an account yet?{" "}
                  <Link
                    href="/signup"
                    className="font-medium text-primary-600 hover:underline"
                  >
                    Sign up
                  </Link>
                </p>
              </Form>
            </Formik>
            {errorWhileLogingIn && (
              <div className="text-red-500 text-sm mt-2">
                Unable to log in. Please try again.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
