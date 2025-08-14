-- Create movies table for Golabio movie website
CREATE TABLE IF NOT EXISTS movies (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  title_en VARCHAR(255),
  description TEXT,
  director VARCHAR(255),
  actors TEXT,
  genre VARCHAR(100),
  release_year INTEGER,
  duration INTEGER, -- in minutes
  rating DECIMAL(3,1) DEFAULT 0.0,
  poster_url TEXT,
  video_url TEXT,
  trailer_url TEXT,
  type VARCHAR(20) DEFAULT 'movie', -- 'movie' or 'series'
  status VARCHAR(20) DEFAULT 'draft', -- 'draft', 'published', 'archived'
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_movies_type ON movies(type);
CREATE INDEX IF NOT EXISTS idx_movies_status ON movies(status);
CREATE INDEX IF NOT EXISTS idx_movies_genre ON movies(genre);
