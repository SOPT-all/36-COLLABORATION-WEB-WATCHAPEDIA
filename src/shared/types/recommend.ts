export type MovieKeyword = {
  keyword: string
}

export type Movie = {
  id: number
  imagePath: string
  title: string
  score: number
  keyword: MovieKeyword[]
}

export type PreferenceCategory = {
  description: string
  keyword: string
  movies: Movie[]
}

export type PreferenceResponse = {
  preferenceMovies: PreferenceCategory[]
}
