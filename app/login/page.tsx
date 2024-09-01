'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useFormStatus } from "react-dom";

import { Route } from "next";
import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"
import type { SignInResponse } from "next-auth/react";

//import { authenticate } from "@/lib/actions/auth";
//import { useFormState, useFormStatus } from "react-dom";


export default function LoginPage(){
    
    const router = useRouter();
    const searchParams = useSearchParams();

    async function login(formData: FormData) {

        const { email, password } = Object.fromEntries(formData);
        const callbackUrl = searchParams.get("callbackUrl");
        
        signIn("credentials", {
            email: email,
            password: password,
            redirect: false,
        })
            .then((res: SignInResponse | undefined) => {

                console.log("===== RES =======")
                console.log(res)

                if (!res) {
                    alert("No response!")
                    return
                }

                if (!res.ok)
                    alert("Something went wrong!")
                else if (res.error) {
                    console.log(res.error)

                    if (res.error == "CallbackRouteError")
                        alert("Could not login! Please check your credentials.")
                    else
                        alert(`Internal Server Error: ${res.error}`)
                } else {
                    if (callbackUrl)
                        router.push(callbackUrl as Route)
                    else
                        router.push("/dashboard")
                }
            })
    }

    //the useFormStatus Hook will inform the client about the status of their form submission
    // TODO : Check if status is comming??
    //const [errorMessage, formAction] = useFormState(authenticate, undefined);

    return(
        <form action={login}>
            <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
                <div className="w-full m-auto sm:max-w-lg px-4">
                    <Card>
                        <CardHeader className="space-y-1">
                            <CardTitle className="tex-2xl text-center">Sign in</CardTitle>
                            <CardDescription className="text-center">Enter your userid and password to login</CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <Input type="email" placeholder="Email" name="email"></Input>
                            <Input type="password" placeholder="Password" name="password"></Input>
                        </CardContent>
                        <CardFooter className="flex flex-col">
                            <LoginButton/>
                            <p className="mt-2 text-xs text-center text-gray-700">
                                Don't have an account? 
                                <Link href="/register" className="text-blue-600 hover:underline">Sign up</Link>
                            </p>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </form>
    )
}

function LoginButton() {
    const { pending } = useFormStatus();
    console.log("Login state:", pending);
    return (
        <Button className="mt-4 w-full" disabled={pending}>
            Log in
        </Button>
    );
}

