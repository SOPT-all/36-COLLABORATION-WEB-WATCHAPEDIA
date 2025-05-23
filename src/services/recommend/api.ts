import { PreferenceResponse } from '@/shared/types/recommend'

export const getRecommend = async (
  commentId: number,
): Promise<PreferenceResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts/preference/${commentId}`,
  )

  if (!response.ok) {
    throw new Error('정보를 불러오는데 실패했어요')
  }

  const data = await response.json()

  return data.data
}
