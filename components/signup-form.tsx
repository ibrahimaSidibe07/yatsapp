"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { authClient } from "@/app/lib/auth_client";
import { useRouter } from "next/navigation";
import { Spinner } from "./ui/spinner";
import { AlertDescription } from "./ui/alert";
import Link from "next/link";

interface FormType {
  name: string;
  email: string;
  password: string;
  Confirmpasswprd: string;
}

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [loading, SetLoding] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const [formData, setFormdata] = useState<FormType>({
    name: "",
    email: "",
    password: "",
    Confirmpasswprd: "",
  });

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.Confirmpasswprd) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }

    await authClient.signUp.email(
      {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      },
      {
        onRequest: () => {
          SetLoding(true);
        },
        onSuccess: () => {
          SetLoding(false);
          setFormdata({
            name: "",
            email: "",
            password: "",
            Confirmpasswprd: "",
          });
          router.push("/chat");
        },
        onError: (ctx) => {
          SetLoding(false);
          setError(ctx.error.message);
          setTimeout(() => {
            setError(null);
          }, 3000);
        },
      },
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      setFormdata((prev) => {
        return {
          ...prev,
          [e.target.name]: e.target.value,
        };
      });
      console.log(formData);
    } catch (error) {
      console.log("eruuer", error);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Create your account</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignup}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Full Name</FieldLabel>
                <Input
                  id="name"
                  type="text"
                  placeholder="Micheal Jackson"
                  name="name"
                  value={formData.name}
                  required
                  onChange={handleChange}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="mj@example.com"
                  name="email"
                  value={formData.email}
                  required
                  onChange={handleChange}
                />
              </Field>
              <Field>
                <Field className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input
                      id="password"
                      type="password"
                      name="password"
                      value={formData.password}
                      required
                      onChange={handleChange}
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="confirm-password">
                      Confirm Password
                    </FieldLabel>
                    <Input
                      id="confirm-password"
                      type="password"
                      name="Confirmpasswprd"
                      value={formData.Confirmpasswprd}
                      required
                      onChange={handleChange}
                    />
                  </Field>
                </Field>
                <FieldDescription>
                  Must be at least 8 characters long.
                </FieldDescription>
              </Field>
              {error ? (
                <AlertDescription
                  className="border-destructive border p-3 bg-destructive/10 rounded-md"
                  title="error"
                >
                  {error}
                </AlertDescription>
              ) : (
                ""
              )}
              <Field>
                <Button type="submit">
                  {loading ? <Spinner /> : "Create Account"}
                </Button>
                <FieldDescription className="text-center">
                  Already have an account? <Link href="/login">Sign in</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  );
}
