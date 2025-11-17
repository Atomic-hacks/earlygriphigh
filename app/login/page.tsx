"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const mockUsers = [
  { username: "student1", password: "password123", role: "student" },
  { username: "admin", password: "admin123", role: "admin" },
];

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const hasInputError = useMemo(
    () => error.length > 0 && (!username.trim() || !password.trim()),
    [error, username, password]
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!username.trim() || !password.trim()) {
      setError("Please enter both your ID and password.");
      return;
    }

    const userMatch = mockUsers.find(
      (user) =>
        user.username.toLowerCase() === username.trim().toLowerCase() &&
        user.password === password
    );

    if (userMatch) {
      setError("");
      router.push("/dashboard");
      return;
    }

    setError("The credentials you entered do not match our records.");
  };

  return (
    <main className="min-h-screen bg-background px-4 py-16">
      <div className="mx-auto flex max-w-3xl flex-col gap-8 rounded-2xl border border-border bg-card/30 p-8 text-center shadow-sm">
        <header className="flex flex-col gap-2">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Welcome back
          </p>
          <h1 className="text-3xl font-semibold text-foreground">
            Access Your School Space
          </h1>
          <p className="text-base text-muted-foreground">
            Choose an option below to continue.
          </p>
        </header>

        <div className="flex flex-col gap-6 md:flex-row">
          <Card className="flex-1 bg-background/70 shadow-none">
            <CardHeader className="px-0 pb-4">
              <CardTitle className="text-lg font-semibold">
                See Results
              </CardTitle>
              <CardDescription className="text-base text-muted-foreground">
                View the latest examination updates in one click.
              </CardDescription>
            </CardHeader>
            <CardContent className="px-0">
              <Button
                className="w-full rounded-none border border-border bg-transparent text-foreground hover:bg-muted"
                variant="outline"
                onClick={() => router.push("/results")}
              >
                Go to Results
              </Button>
            </CardContent>
          </Card>

          <Card className="flex-1 bg-background/70 shadow-none">
            <CardHeader className="px-0 pb-4">
              <CardTitle className="text-lg font-semibold">
                Login to School Portal
              </CardTitle>
              <CardDescription className="text-base text-muted-foreground">
                Enter your details to reach your dashboard.
              </CardDescription>
            </CardHeader>
            <CardContent className="px-0">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="text-left">
                  <label
                    className="mb-1 block text-sm font-medium text-muted-foreground"
                    htmlFor="username"
                  >
                    Email or Matric Number
                  </label>
                  <Input
                    id="username"
                    name="username"
                    placeholder="e.g. student1"
                    value={username}
                    aria-invalid={hasInputError}
                    onChange={(event) => setUsername(event.target.value)}
                    required
                  />
                </div>

                <div className="text-left">
                  <label
                    className="mb-1 block text-sm font-medium text-muted-foreground"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    aria-invalid={hasInputError}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                  />
                </div>

                {error && (
                  <p className="text-left text-sm text-destructive">{error}</p>
                )}

                <Button className="w-full rounded-none" type="submit">
                  Login
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
