export type MovieType = 'MOVIE' | 'SERIES'
export interface UpcomingMovieItem {
  untilRelease: number
  isWishedCount: number
  imagePath: string
  title: string
  releaseYear: string
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
