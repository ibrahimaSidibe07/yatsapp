"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSeparator } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { authClient } from "@/app/lib/auth_client";
import { useRouter } from "next/navigation";
import { Spinner } from "./ui/spinner";
import { AlertDescription } from "./ui/alert";
import Link from "next/link";
interface FormType {
    email: string;
    password: string;
}
export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
    const [loading, SetLoding] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const router = useRouter();
    const [formData, setFormdata] = useState<FormType>({
        email: "",
        password: "",
    });

    const googleSignup = async () => {
        await authClient.signIn.social(
            {
                provider: "google",
            },
            {
                onRequest: () => {
                    SetLoding(true);
                },
                onSuccess: () => {
                    SetLoding(false);

                    router.push("/chat");
                    router.refresh();
                },
                onError: ctx => {
                    SetLoding(false);
                    setError(ctx.error.message);
                    setTimeout(() => {
                        setError(null);
                    }, 3000);
                },
            }
        );
    };
    const handleSignin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await authClient.signIn.email(
            {
                email: formData.email,
                password: formData.password,
            },
            {
                onRequest: () => {
                    SetLoding(true);
                },
                onSuccess: () => {
                    setFormdata({
                        email: "",
                        password: "",
                    });
                    SetLoding(false);
                    router.push("/chat");
                    router.refresh();
                },
                onError: ctx => {
                    SetLoding(false);
                    setError(ctx.error.message);

                    setTimeout(() => {
                        setError(null);
                    }, 3000);
                },
            }
        );
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        try {
            setFormdata(prev => {
                return {
                    ...prev,
                    [e.target.name]: e.target.value,
                };
            });
            console.log(formData);
        } catch (error) {
            console.log("erreur", error);
        }
    };
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Welcome back</CardTitle>
                    <CardDescription>Login with your Apple or Google account</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSignin}>
                        <FieldGroup>
                            <Field>
                                <Button variant="outline" type="button" onClick={googleSignup}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    Login with Google
                                </Button>
                            </Field>
                            <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                                Or continue with
                            </FieldSeparator>
                            <Field>
                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    value={formData.email}
                                    name="email"
                                    required
                                    onChange={handleChange}
                                />
                            </Field>
                            <Field>
                                <div className="flex items-center">
                                    <FieldLabel htmlFor="password">Password</FieldLabel>
                                    <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
                                        Forgot your password?
                                    </a>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    value={formData.password}
                                    name="password"
                                    required
                                    onChange={handleChange}
                                />
                            </Field>
                            {error ? (
                                <AlertDescription
                                    className="border-destructive border p-3 bg-destructive/10 rounded-md"
                                    title="error">
                                    {error}
                                </AlertDescription>
                            ) : (
                                ""
                            )}
                            <Field>
                                <Button type="submit">{loading ? <Spinner /> : "Login"}</Button>
                                <FieldDescription className="text-center">
                                    Don&apos;t have an account? <Link href="/signup">Sign up</Link>
                                </FieldDescription>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
            <FieldDescription className="px-6 text-center">
                By clicking continue, you agree to our <a href="#">Terms of Service</a> and{" "}
                <a href="#">Privacy Policy</a>.
            </FieldDescription>
        </div>
    );
}
