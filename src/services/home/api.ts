export type MovieType = 'MOVIE' | 'SERIES'

interface UpcomingMovieItem {
  untilRelease: number
  isWishedCount: number
  imagePath: string
  title: string
  releaseYear: string
}

interface TopRankingItem {
  movieImagePath: string
  movieTitle: string
  expectScore: number
  movieKeywordList: string[]
}

export const getdDay = async (
  movieType: MovieType = 'MOVIE', // 기본값은 'MOVIE'
): Promise<UpcomingMovieItem[]> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  const res = await fetch(`${apiUrl}/posts/posts/soon?movieType=${movieType}`)

  if (!res.ok) {
    throw new Error('개봉 예정작 데이터를 가져오는 데 실패했습니다.')
  }

  const json = await res.json()
  return json.data.soons
}

export const getTopRanking = async (): Promise<TopRankingItem[]> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  const res = await fetch(`${apiUrl}/posts/posts/ranking`)

  if (!res.ok)
    throw new Error('Top Ranking 섹션 영화 데이터를 가져오는 데 실패했습니다.')

  const json = await res.json()
  return json.data.result
}
