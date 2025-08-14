import { AdminAuthGuard } from "@/components/admin-auth-guard"
import { AdminNavigation } from "@/components/admin-navigation"
import { MovieUploadForm } from "@/components/movie-upload-form"

export default function AdminUploadPage() {
  return (
    <AdminAuthGuard>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-black">
        <AdminNavigation />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-green-800 mb-2 font-serif">آپلود فیلم جدید</h1>
              <p className="text-green-700">فیلم جدید خود را به مجموعه گلابیو اضافه کنید</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <MovieUploadForm />
            </div>
          </div>
        </div>
      </div>
    </AdminAuthGuard>
  )
}
