import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Play, Star, Clock, Search, Menu, Film, Tv, LogIn, UserPlus } from "lucide-react"

export default function HomePage() {
  // Sample Persian movie data
  const featuredMovies = [
    {
      id: 1,
      title: "سینمای ایران",
      director: "کارگردان نمونه",
      year: "1402",
      duration: "120 دقیقه",
      rating: 4.8,
      genre: "درام",
      poster: "/persian-cinema-poster.png",
      type: "movie",
    },
    {
      id: 2,
      title: "داستان عشق",
      director: "کارگردان دوم",
      year: "1401",
      duration: "95 دقیقه",
      rating: 4.5,
      genre: "عاشقانه",
      poster: "/persian-romance-movie-poster.png",
      type: "movie",
    },
    {
      id: 3,
      title: "ماجراجویی بزرگ",
      director: "کارگردان سوم",
      year: "1403",
      duration: "110 دقیقه",
      rating: 4.7,
      genre: "ماجراجویی",
      poster: "/placeholder-x9x8x.png",
      type: "movie",
    },
    {
      id: 4,
      title: "کمدی ایرانی",
      director: "کارگردان چهارم",
      year: "1402",
      duration: "85 دقیقه",
      rating: 4.3,
      genre: "کمدی",
      poster: "/persian-comedy-movie-poster.png",
      type: "movie",
    },
  ]

  // Sample Persian series data
  const featuredSeries = [
    {
      id: 5,
      title: "سریال درام",
      director: "کارگردان سریال",
      year: "1403",
      episodes: "12 قسمت",
      rating: 4.6,
      genre: "درام",
      poster: "/persian-drama-series-poster.png",
      type: "series",
    },
    {
      id: 6,
      title: "کمدی خانوادگی",
      director: "کارگردان کمدی",
      year: "1402",
      episodes: "20 قسمت",
      rating: 4.4,
      genre: "کمدی",
      poster: "/persian-family-comedy-poster.png",
      type: "series",
    },
    {
      id: 7,
      title: "تاریخی ایران",
      director: "کارگردان تاریخی",
      year: "1401",
      episodes: "15 قسمت",
      rating: 4.8,
      genre: "تاریخی",
      poster: "/persian-historical-series-poster.png",
      type: "series",
    },
    {
      id: 8,
      title: "ماجراجویی جوانان",
      director: "کارگردان جوان",
      year: "1403",
      episodes: "10 قسمت",
      rating: 4.2,
      genre: "ماجراجویی",
      poster: "/persian-youth-adventure-poster.png",
      type: "series",
    },
  ]

  const foreignMovies = [
    {
      id: 9,
      title: "The Dark Knight",
      director: "Christopher Nolan",
      year: "2008",
      duration: "152 min",
      rating: 4.9,
      genre: "Action",
      poster: "/dark-knight-poster.png",
      type: "movie",
    },
    {
      id: 10,
      title: "Inception",
      director: "Christopher Nolan",
      year: "2010",
      duration: "148 min",
      rating: 4.8,
      genre: "Sci-Fi",
      poster: "/inception-movie-poster.png",
      type: "movie",
    },
    {
      id: 11,
      title: "Parasite",
      director: "Bong Joon-ho",
      year: "2019",
      duration: "132 min",
      rating: 4.7,
      genre: "Thriller",
      poster: "/parasite-movie-poster.png",
      type: "movie",
    },
    {
      id: 12,
      title: "Interstellar",
      director: "Christopher Nolan",
      year: "2014",
      duration: "169 min",
      rating: 4.6,
      genre: "Sci-Fi",
      poster: "/interstellar-inspired-poster.png",
      type: "movie",
    },
  ]

  const foreignSeries = [
    {
      id: 13,
      title: "Breaking Bad",
      director: "Vince Gilligan",
      year: "2008",
      episodes: "62 episodes",
      rating: 4.9,
      genre: "Crime",
      poster: "/breaking-bad-poster.png",
      type: "series",
    },
    {
      id: 14,
      title: "Game of Thrones",
      director: "David Benioff",
      year: "2011",
      episodes: "73 episodes",
      rating: 4.5,
      genre: "Fantasy",
      poster: "/game-of-thrones-poster.png",
      type: "series",
    },
    {
      id: 15,
      title: "Stranger Things",
      director: "Duffer Brothers",
      year: "2016",
      episodes: "42 episodes",
      rating: 4.7,
      genre: "Sci-Fi",
      poster: "/stranger-things-poster.png",
      type: "series",
    },
    {
      id: 16,
      title: "The Crown",
      director: "Peter Morgan",
      year: "2016",
      episodes: "60 episodes",
      rating: 4.4,
      genre: "Drama",
      poster: "/the-crown-inspired-poster.png",
      type: "series",
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-black/98 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <Play className="w-6 h-6 text-black" />
              </div>
              <h1 className="text-2xl font-serif font-bold text-green-400">گلابیو</h1>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                <Input
                  placeholder="جستجوی فیلم و سریال..."
                  className="bg-gray-950 border-gray-800 text-gray-200 placeholder-gray-500 pr-10 focus:border-green-500"
                />
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2">
                <Film className="w-4 h-4" />
                فیلم‌ها
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2">
                <Tv className="w-4 h-4" />
                سریال‌ها
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                دسته‌بندی
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                درباره ما
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black hidden sm:flex bg-transparent"
              >
                <LogIn className="w-4 h-4 ml-2" />
                ورود
              </Button>
              <Button
                variant="outline"
                className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black hidden sm:flex bg-transparent"
              >
                <UserPlus className="w-4 h-4 ml-2" />
                ثبت نام
              </Button>
              <Button variant="ghost" className="lg:hidden text-gray-400">
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden mt-4">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
              <Input
                placeholder="جستجوی فیلم و سریال..."
                className="bg-gray-950 border-gray-800 text-gray-200 placeholder-gray-500 pr-10 focus:border-green-500"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-950 to-green-950/30">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-green-400 mb-6">قلب سینمای جهان را کشف کنید</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            فیلم‌های ایرانی و خارجی را استریم کنید، به اشتراک بگذارید و هنر سینما را جشن بگیرید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-black px-8 py-3">
              <Play className="w-5 h-5 ml-2" />
              شروع تماشا
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black px-8 py-3 bg-transparent"
            >
              کاوش فیلم‌ها
            </Button>
          </div>
        </div>
      </section>

      {/* Persian Movies */}
      <section className="py-16 px-4 bg-gray-950">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-serif font-bold text-green-400 flex items-center gap-3">
              <Film className="w-8 h-8" />
              فیلم‌های ایرانی
            </h3>
            <Button variant="ghost" className="text-green-400 hover:bg-green-500 hover:text-black">
              مشاهده همه
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredMovies.map((movie) => (
              <Card
                key={movie.id}
                className="group hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 hover:-translate-y-2 bg-gray-900 border-gray-800"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={movie.poster || "/placeholder.svg"}
                      alt={movie.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                      <Button
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-green-500 text-black hover:bg-green-600"
                      >
                        <Play className="w-4 h-4 ml-1" />
                        پخش
                      </Button>
                    </div>
                    <Badge className="absolute top-3 right-3 bg-green-500 text-black">{movie.genre}</Badge>
                  </div>

                  <div className="p-4">
                    <h4 className="font-serif font-bold text-lg text-green-400 mb-2">{movie.title}</h4>
                    <p className="text-gray-500 text-sm mb-3">کارگردان: {movie.director}</p>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{movie.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{movie.duration}</span>
                      </div>
                      <span>{movie.year}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-black">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-serif font-bold text-green-400 flex items-center gap-3">
              <Film className="w-8 h-8" />
              فیلم‌های خارجی
            </h3>
            <Button variant="ghost" className="text-green-400 hover:bg-green-500 hover:text-black">
              مشاهده همه
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {foreignMovies.map((movie) => (
              <Card
                key={movie.id}
                className="group hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 hover:-translate-y-2 bg-gray-900 border-gray-800"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={movie.poster || "/placeholder.svg"}
                      alt={movie.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                      <Button
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-green-500 text-black hover:bg-green-600"
                      >
                        <Play className="w-4 h-4 ml-1" />
                        پخش
                      </Button>
                    </div>
                    <Badge className="absolute top-3 right-3 bg-green-500 text-black">{movie.genre}</Badge>
                  </div>

                  <div className="p-4">
                    <h4 className="font-serif font-bold text-lg text-green-400 mb-2">{movie.title}</h4>
                    <p className="text-gray-500 text-sm mb-3">Director: {movie.director}</p>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{movie.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{movie.duration}</span>
                      </div>
                      <span>{movie.year}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Persian Series */}
      <section className="py-16 px-4 bg-gray-950">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-serif font-bold text-green-400 flex items-center gap-3">
              <Tv className="w-8 h-8" />
              سریال‌های ایرانی
            </h3>
            <Button variant="ghost" className="text-green-400 hover:bg-green-500 hover:text-black">
              مشاهده همه
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredSeries.map((series) => (
              <Card
                key={series.id}
                className="group hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 hover:-translate-y-2 bg-gray-900 border-gray-800"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={series.poster || "/placeholder.svg"}
                      alt={series.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                      <Button
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-green-500 text-black hover:bg-green-600"
                      >
                        <Play className="w-4 h-4 ml-1" />
                        پخش
                      </Button>
                    </div>
                    <Badge className="absolute top-3 right-3 bg-green-500 text-black">{series.genre}</Badge>
                  </div>

                  <div className="p-4">
                    <h4 className="font-serif font-bold text-lg text-green-400 mb-2">{series.title}</h4>
                    <p className="text-gray-500 text-sm mb-3">کارگردان: {series.director}</p>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{series.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Tv className="w-4 h-4" />
                        <span>{series.episodes}</span>
                      </div>
                      <span>{series.year}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-black">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-serif font-bold text-green-400 flex items-center gap-3">
              <Tv className="w-8 h-8" />
              سریال‌های خارجی
            </h3>
            <Button variant="ghost" className="text-green-400 hover:bg-green-500 hover:text-black">
              مشاهده همه
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {foreignSeries.map((series) => (
              <Card
                key={series.id}
                className="group hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 hover:-translate-y-2 bg-gray-900 border-gray-800"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={series.poster || "/placeholder.svg"}
                      alt={series.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                      <Button
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-green-500 text-black hover:bg-green-600"
                      >
                        <Play className="w-4 h-4 ml-1" />
                        پخش
                      </Button>
                    </div>
                    <Badge className="absolute top-3 right-3 bg-green-500 text-black">{series.genre}</Badge>
                  </div>

                  <div className="p-4">
                    <h4 className="font-serif font-bold text-lg text-green-400 mb-2">{series.title}</h4>
                    <p className="text-gray-500 text-sm mb-3">Director: {series.director}</p>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{series.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Tv className="w-4 h-4" />
                        <span>{series.episodes}</span>
                      </div>
                      <span>{series.year}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 bg-gray-950">
        <div className="container mx-auto">
          <h3 className="text-3xl font-serif font-bold text-green-400 mb-12 text-center">دسته‌بندی‌ها</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["درام", "کمدی", "عاشقانه", "ماجراجویی", "تاریخی", "مستند", "کوتاه", "انیمیشن"].map((category) => (
              <Card
                key={category}
                className="hover:shadow-lg hover:shadow-green-500/30 transition-all cursor-pointer bg-gray-900 border-gray-800 hover:border-green-500"
              >
                <CardContent className="p-6 text-center">
                  <h4 className="font-serif font-bold text-green-400">{category}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <Play className="w-5 h-5 text-black" />
                </div>
                <h4 className="text-xl font-serif font-bold text-green-400">گلابیو</h4>
              </div>
              <p className="text-gray-500 leading-relaxed">
                پلتفرم استریم فیلم‌های ایرانی و خارجی که بهترین سینمای جهان را به خانه شما می‌آورد.
              </p>
            </div>

            <div>
              <h5 className="font-serif font-bold mb-4 text-green-400">لینک‌های مفید</h5>
              <ul className="space-y-2 text-gray-500">
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    درباره ما
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    تماس با ما
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    قوانین و مقررات
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    حریم خصوصی
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-serif font-bold mb-4 text-green-400">دسته‌بندی‌ها</h5>
              <ul className="space-y-2 text-gray-500">
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    فیلم‌های ایرانی
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    فیلم‌های خارجی
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    سریال‌های ایرانی
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    سریال‌های خارجی
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-900 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 1403 گلابیو. تمامی حقوق محفوظ است.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
