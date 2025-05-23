import { DetailItem } from '@/shared/types/detail'

export const getContent = async (postId: number): Promise<DetailItem> => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}`

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('정보를 불러오는데 실패했어요')
  }

  const data = await response.json()

  return data.data
}
