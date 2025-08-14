"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Film, Upload, BarChart3 } from "lucide-react"

export function AdminNavigation() {
  const pathname = usePathname()

  const navItems = [
    {
      href: "/admin/dashboard",
      label: "داشبورد",
      icon: BarChart3,
    },
    {
      href: "/admin/upload",
      label: "آپلود فیلم",
      icon: Upload,
    },
    {
      href: "/",
      label: "مشاهده سایت",
      icon: Film,
    },
  ]

  return (
    <nav className="bg-white shadow-sm border-b border-purple-200 mb-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8 space-x-reverse">
            <Link href="/admin/dashboard" className="flex items-center space-x-2 space-x-reverse">
              <Film className="w-8 h-8 text-purple-600" />
              <span className="text-xl font-bold text-purple-900 font-serif">گلابیو ادمین</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4 space-x-reverse">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href

              return (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className={`flex items-center space-x-2 space-x-reverse ${
                      isActive ? "bg-purple-600 text-white" : "text-purple-700 hover:text-purple-900 hover:bg-purple-50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Button>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
