import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import logo from "/assets/logo.png";

const Auth = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const { login, signup } = useAuth();
  const navigate = useNavigate();

  // --- LOGIN HANDLER ---
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const isLoggedIn = login(loginEmail, loginPassword);

    if (isLoggedIn) {
      toast.success("Login successful!");
      navigate("/");
    } else {
      toast.error("Invalid credentials. Please try again.");
    }
  };

  // --- SIGNUP HANDLER ---
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    const isSignedUp = signup(signupEmail, signupPassword, signupName);

    if (isSignedUp) {
      toast.success("Account created successfully!");
      navigate("/");
    } else {
      toast.error("User already exists. Try logging in instead.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary/30 to-background px-4">
      <div className="w-full max-w-md">
        {/* --- LOGO & HEADER --- */}
        <div className="text-center mb-8">
          <img src={logo} alt="Royal Aurum " className="h-16 mx-auto mb-4" />
          <h1 className="text-3xl font-bold">Welcome to Royal Aurum</h1>
        </div>

        {/* --- BUYER / ADMIN TABS --- */}
        <Tabs defaultValue="buyer" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="buyer">Buyer</TabsTrigger>
            <TabsTrigger value="admin">Admin</TabsTrigger>
          </TabsList>

          {/* --- BUYER SECTION --- */}
          <TabsContent value="buyer">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              {/* --- BUYER LOGIN --- */}
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label>Password</Label>
                    <Input
                      type="password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
                </form>
              </TabsContent>

              {/* --- BUYER SIGNUP --- */}
              <TabsContent value="signup">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div>
                    <Label>Name</Label>
                    <Input
                      value={signupName}
                      onChange={(e) => setSignupName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      value={signupEmail}
                      onChange={(e) => setSignupEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label>Password</Label>
                    <Input
                      type="password"
                      value={signupPassword}
                      onChange={(e) => setSignupPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Create Account
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </TabsContent>

          {/* --- ADMIN LOGIN --- */}
          <TabsContent value="admin">
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label>Email</Label>
                <Input
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label>Password</Label>
                <Input
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Admin Login
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Auth;
