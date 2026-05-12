"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

export default function LoginPage() {

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password
        })

        if (error) {
            toast.error(`${error.message}`)
        }
        else {
            toast.success('Sign In successfull')
            redirect('/')
        }

    };



    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-white to-cyan-100 px-4 py-10 overflow-hidden relative">

            {/* Background Blur */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl"></div>

            <Card
                className="relative z-10 w-full max-w-md md:max-w-lg 
        backdrop-blur-xl bg-white/80 border border-white/40 
        shadow-2xl rounded-[32px] px-6 py-8 md:px-10"
            >

                {/* Logo / Brand */}
                <div className="flex flex-col items-center mb-8">


                    <h1 className="text-3xl md:text-4xl font-extrabold bg-linear-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">
                        Welcome Back
                    </h1>

                    <p className="text-gray-500 mt-2 text-sm text-center max-w-sm">
                        Sign in to explore your adventure
                    </p>

                </div>

                <Form
                    className="w-full flex flex-col gap-5"
                    onSubmit={onSubmit}
                >

                    {/* Email */}
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                            ) {
                                return "Please enter a valid email address";
                            }

                            return null;
                        }}
                    >

                        <Label className="text-gray-700 font-medium mb-1">
                            Email Address
                        </Label>

                        <Input
                            placeholder="john@example.com"
                       
                            className={'w-full h-14 rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-md hover:border-blue-400 focus-within:border-blue-500 transition'}
                        />

                        <FieldError />

                    </TextField>

                    {/* Password */}
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {

                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }

                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }

                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }

                            return null;
                        }}
                    >

                        <div className="flex items-center justify-between mb-1">
                            <Label className="text-gray-700 font-medium">
                                Password
                            </Label>

                            <button
                                type="button"
                                className="text-sm text-blue-600 hover:text-blue-700 transition"
                            >
                                Forgot password?
                            </button>
                        </div>

                        <Input
                            placeholder="Enter your password"
                            
                            className={'w-full h-14 rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-md hover:border-blue-400 focus-within:border-blue-500 transition'}
                        />

                        <FieldError />

                    </TextField>

                    {/* Buttons */}
                    <div className="flex gap-3 pt-2">

                        <Button
                            type="submit"
                            className="w-full h-14 rounded-2xl bg-linear-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold text-base shadow-lg transition-all duration-300"
                        >
                            <Check />
                            Login
                        </Button>

                        <Button
                            type="reset"
                            variant="bordered"
                            className="w-full h-14 rounded-2xl border-gray-300 
                    hover:bg-gray-100 text-gray-700 font-semibold"
                        >
                            Reset
                        </Button>

                    </div>

                </Form>

                {/* Divider */}
                <div className="flex items-center gap-3 my-6 w-full">

                    <div className="flex-1 h-px bg-linear-to-r from-transparent to-gray-300"></div>

                    <div className="text-sm text-gray-500 font-semibold tracking-wide">
                        OR CONTINUE WITH
                    </div>

                    <div className="flex-1 h-px bg-linear-to-l from-transparent to-gray-300"></div>

                </div>

                {/* Google Login */}
                <Button
                    variant="bordered"
                    className="w-full border border-gray-200 
            hover:border-blue-400 hover:bg-blue-50
            text-gray-700 font-semibold py-7 rounded-2xl 
            transition-all duration-300 shadow-sm"
                >
                    <FaGoogle className="text-red-500 text-xl" />

                    Continue with Google
                </Button>

                {/* Footer */}
                <p className="text-center mt-6 text-gray-600 text-sm">

                    Don&apos;t have an account?

                    <Link
                        href={'/register'}
                        className="ml-1 font-semibold text-blue-600 hover:text-blue-700 transition"
                    >
                        Register
                    </Link>

                </p>

            </Card>

        </div>
    );
}