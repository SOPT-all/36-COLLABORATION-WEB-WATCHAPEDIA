export type MovieType = 'MOVIE' | 'SERIES'

export interface DDayCard {
  id: number
  untilRelease: number
  isWishedCount: number
  imagePath: string
  title: string
  releaseYear: string
  type: 'dDay'
}

export interface BoxofficeOrSeriesCard {
  id: number
  movieType: MovieType
  imagePath: string
  title: string
  type: 'boxoffice' | 'series'
  isWishedCount: number
  releaseYear: string
  untilRelease?: number
}

export interface RankCard {
  id?: number
  imagePath: string
  title: string
  score: number
  tag?: string[]
  type: 'rank'
}

export type MovieCardPreset = DDayCard | BoxofficeOrSeriesCard | RankCard
