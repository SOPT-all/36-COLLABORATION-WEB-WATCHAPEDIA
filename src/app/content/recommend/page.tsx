import Bottom from '@/shared/components/Bottom/BottomNav'

import Header from './components/header/Header'
import RecommendOtt from './components/recommendOtt/RecommendOtt'

export default async function RecommendPage({
  searchParams,
}: {
  searchParams: Promise<{ commentId: number }>
}) {
  const { commentId } = await searchParams

  return (
    <>
      <Header />
      <RecommendOtt commentId={commentId} />
      <Bottom />
    </>
  )
}
