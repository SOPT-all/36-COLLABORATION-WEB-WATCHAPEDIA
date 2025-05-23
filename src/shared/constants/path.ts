export const PATH = {
  HOME: '/home',
  CONTENT: '/content',
  CONTENT_DETAIL: (id: number) => `/content/${id}`,
  REVIEW: (id: number) => `/content/${id}/review`,
  RECOMMEND: '/content/recommend',
} as const
