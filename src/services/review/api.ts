import { CreateCommentItem } from '@/shared/types/detail'

interface PostCommentsProps {
  postId: number
  comment: {
    keywordIds: Array<number>
    review: string
  }
}

export const postComments = async ({
  postId,
  comment,
}: PostCommentsProps): Promise<CreateCommentItem> => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}/comments`

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
  })

  if (!response.ok) {
    throw new Error('정보를 불러오는데 실패했어요')
  }

  const data = await response.json()

  return data.data
}
