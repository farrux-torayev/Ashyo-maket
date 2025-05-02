"use client";
import React, { Dispatch, FC, FormEvent, SetStateAction } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Login, Register } from "@/service/Auth";
import { toast } from 'react-toastify';

export const Auth:FC<{setOpen:Dispatch<SetStateAction<boolean>>}> = ({setOpen}) => {
  const login = Login()
  const register = Register()
  function handleLogin(e:FormEvent){
    e.preventDefault()
    const data = {
      email:(e.target as HTMLFormElement).email.value,
      password:(e.target as HTMLFormElement).password.value
    }
    try {
      toast.success("Tizimga muvaffaqiyatli kirdingiz!");
      setOpen(false)
    } catch (error: any) {
      console.error("Login xatolik:", error);
      toast.error(error?.response?.data?.message || "Login qilishda xatolik yuz berdi");
    }
  }
const handleRegister = async (e: FormEvent) => {
  e.preventDefault();
  const data = {
    fullname: (e.target as HTMLFormElement).fullname.value,
    email: (e.target as HTMLFormElement).email.value,
    password: (e.target as HTMLFormElement).password.value
  };
  try {
    await register.mutateAsync(data);
    toast("Ro'yxatdan muvaffaqiyatli o'tdingiz!");
    setOpen(false);
  } catch (error: any) {
    console.error("Xatolik:", error);
    toast(error?.response?.data?.message || "Ro'yxatdan o'tishda xatolik yuz berdi");
  }
};

  return (
    <div>
      <Tabs defaultValue="login" className="w-[400px] mx-auto border-none">
        <TabsList className="grid w-full grid-cols-2 bg-white">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card className="bg-white border-none">
            <CardHeader>
              <CardTitle>Login</CardTitle>
            </CardHeader>
            <form onSubmit={handleLogin}> 
            <CardContent className="space-y-2 mb-2">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input name="email" autoComplete="off" id="email" placeholder="Email " />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input name="password" autoComplete="off" type="password" id="password" placeholder="**********" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="border bg-black text-white duration-300 cursor-pointer hover:bg-[#282828]" type="submit">Login</Button>
            </CardFooter>
            </form>
          </Card>
        </TabsContent>
        <TabsContent value="register">
          <Card className="bg-white border-none">
            <CardHeader>
              <CardTitle>Register</CardTitle>
            </CardHeader>
            <form onSubmit={handleRegister}>
            <CardContent className="space-y-2 mb-2">
              <div className="space-y-2">
                <Label htmlFor="fullname">Enter your fullname</Label>
                <Input id="fullname" type="text" placeholder="Fullname"/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Enter your email </Label>
                <Input id="email" type="text" placeholder="Email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Enter your Password </Label>
                <Input id="password" type="password"  placeholder="********"/>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="border bg-black text-white duration-300 cursor-pointer hover:bg-[#282828]" type="submit">Register</Button>
            </CardFooter>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Auth;
