export type Artist = {
  role: 'DIRECTOR' | 'ACTOR'
  name: string
  character?: string
  imagePath: string
}

export interface DetailItem {
  id: number
  title: string
  engTitle: string
  genres: Array<string>
  releaseYear: number
  runningTime: number
  ageLimit: number
  score: number
  detail: string
  posterImage: string
  detailImage: string
  country: string
  artists: Array<Artist>
  keywords: Array<string>
}
