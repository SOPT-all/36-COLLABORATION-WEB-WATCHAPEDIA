import { PreferenceResponse } from '@/shared/types/recommend'

export const getRecommend = async (
  commentId: number,
): Promise<PreferenceResponse> => {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/posts/preference/${commentId}`
    console.log('API URL:', apiUrl)

    const response = await fetch(apiUrl)

    if (!response.ok) {
      const errorData = await response.json().catch(() => null)
      throw new Error(
        `API 요청 실패 (${response.status}): ${
          errorData?.message || '정보를 불러오는데 실패했어요'
        }`,
      )
    }

    const data = await response.json()
    return data.data
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`추천 정보 조회 실패: ${error.message}`)
    }
    throw new Error('알 수 없는 오류가 발생했습니다')
  }
}
