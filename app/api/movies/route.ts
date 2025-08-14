import { type NextRequest, NextResponse } from "next/server"

// Mock database - in real app, this would connect to actual database
const movies = [
  {
    id: 1,
    title: "خانه‌ای در تاریکی",
    title_en: "A House in Darkness",
    description: "داستان خانواده‌ای که در خانه‌ای مرموز زندگی می‌کنند",
    director: "احمد رضایی",
    actors: "علی نصیریان، فاطمه معتمدآریا",
    genre: "درام",
    release_year: 2023,
    duration: 105,
    rating: 8.2,
    poster_url: "/persian-cinema-poster.png",
    type: "movie",
    status: "published",
  },
  {
    id: 2,
    title: "سریال پایتخت",
    title_en: "Paytakht Series",
    description: "کمدی محبوب ایرانی درباره زندگی در تهران",
    director: "سیروس مقدم",
    actors: "سعید آقاخانی، جواد رضویان",
    genre: "کمدی",
    release_year: 2011,
    duration: 45,
    rating: 9.1,
    poster_url: "/persian-drama-series-poster.png",
    type: "series",
    status: "published",
  },
]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get("type")
  const search = searchParams.get("search")
  const genre = searchParams.get("genre")

  let filteredMovies = movies.filter((movie) => movie.status === "published")

  if (type) {
    filteredMovies = filteredMovies.filter((movie) => movie.type === type)
  }

  if (search) {
    filteredMovies = filteredMovies.filter(
      (movie) =>
        movie.title.includes(search) ||
        movie.title_en?.toLowerCase().includes(search.toLowerCase()) ||
        movie.description.includes(search),
    )
  }

  if (genre) {
    filteredMovies = filteredMovies.filter((movie) => movie.genre === genre)
  }

  return NextResponse.json(filteredMovies)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const newMovie = {
      id: movies.length + 1,
      ...body,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }

    movies.push(newMovie)
    return NextResponse.json(newMovie, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}
