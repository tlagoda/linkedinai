"use client";

import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  getAuth,
  createUserWithEmailAndPassword,
  User,
  onAuthStateChanged,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import app from "../../../firebase";
import { useEffect, useState } from "react";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(40, "Too Long!")
    .required("Please enter a password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});

export default function SignUp() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [errorWhileSigningUp, setErrorWhileSigningUp] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (currentUser) {
      router.push("/generate");
    }
  }, [currentUser, router]);

  const onSubmit = async (values: { email: string; password: string }) => {
    setErrorWhileSigningUp(false);
    const auth = getAuth(app);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        hasAuthorizedLinkedIn: false,
        firstName: "John",
        lastName: "Doe",
        company: "Company",
        job: "Job",
        linkedInPP: "",
        linkedInId: "",
        linkedInToken: "",
        linkedInTokenExpiresAt: "",
        personUrn: "",
        canGenerate: false,
        useOwnApiKey: false,
        apiKey: "",
      });

      router.push("/generate");
    } catch (error) {
      setErrorWhileSigningUp(true);
      console.error(error);
    }
  };
  return (
    <section className="bg-myblue-500 h-screen flex">
      <Link
        href="/"
        className="flex absolute top-4 left-4 text-black items-center mb-6 text-2xl font-semibold text-slate-100"
      >
        <span className="text-emerald-400">A</span>ppName
      </Link>
      <div className="flex flex-col w-4/5 md:w-2/5 items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white border-2 border-emerald-400 rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
              Create an account
            </h1>
            <Formik
              initialValues={{ email: "", password: "", confirmPassword: "" }}
              validationSchema={SignupSchema}
              validateOnChange={false}
              onSubmit={onSubmit}
            >
              <Form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Your email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Choose a password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Confirm your password
                  </label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    id="confirm-password"
                    placeholder="Confirm Password"
                    className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-myviolet-500 text-emerald-400 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-black">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-medium text-primary-600 hover:underline"
                  >
                    Login here
                  </Link>
                </p>
              </Form>
            </Formik>
            {errorWhileSigningUp && (
              <div className="text-red-500 text-sm mt-2">
                An error occurred.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
