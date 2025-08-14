import { type NextRequest, NextResponse } from "next/server"

// Mock database - same as above
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
]

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const movie = movies.find((m) => m.id === Number.parseInt(params.id))

  if (!movie) {
    return NextResponse.json({ error: "Movie not found" }, { status: 404 })
  }

  return NextResponse.json(movie)
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const movieIndex = movies.findIndex((m) => m.id === Number.parseInt(params.id))

    if (movieIndex === -1) {
      return NextResponse.json({ error: "Movie not found" }, { status: 404 })
    }

    movies[movieIndex] = {
      ...movies[movieIndex],
      ...body,
      updated_at: new Date().toISOString(),
    }

    return NextResponse.json(movies[movieIndex])
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const movieIndex = movies.findIndex((m) => m.id === Number.parseInt(params.id))

  if (movieIndex === -1) {
    return NextResponse.json({ error: "Movie not found" }, { status: 404 })
  }

  movies.splice(movieIndex, 1)
  return NextResponse.json({ message: "Movie deleted successfully" })
}
