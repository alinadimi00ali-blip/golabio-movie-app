"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      // Redirect to admin dashboard
      window.location.href = "/admin/dashboard"
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-gray-900 border-green-500/20">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-green-400">ورود به گلابیو</CardTitle>
          <CardDescription className="text-gray-400">وارد حساب کاربری خود شوید</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-green-400">
                ایمیل
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 border-green-500/30 text-white focus:border-green-400"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-green-400">
                رمز عبور
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-800 border-green-500/30 text-white focus:border-green-400"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white" disabled={isLoading}>
              {isLoading ? "در حال ورود..." : "ورود"}
            </Button>
          </form>
          <div className="mt-4 text-center">
            <Link href="/auth/register" className="text-green-400 hover:text-green-300 text-sm">
              حساب کاربری ندارید؟ ثبت نام کنید
            </Link>
          </div>
          <div className="mt-2 text-center">
            <Link href="/" className="text-gray-400 hover:text-gray-300 text-sm">
              بازگشت به صفحه اصلی
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
