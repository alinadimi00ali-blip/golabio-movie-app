import { AdminAuthGuard } from "@/components/admin-auth-guard"
import { AdminNavigation } from "@/components/admin-navigation"
import { MovieManagementDashboard } from "@/components/movie-management-dashboard"

export default function AdminDashboardPage() {
  return (
    <AdminAuthGuard>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-black">
        <AdminNavigation />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-green-800 mb-2 font-serif">مدیریت فیلم‌ها</h1>
              <p className="text-green-700">مدیریت و ویرایش فیلم‌های آپلود شده</p>
            </div>

            <MovieManagementDashboard />
          </div>
        </div>
      </div>
    </AdminAuthGuard>
  )
}
