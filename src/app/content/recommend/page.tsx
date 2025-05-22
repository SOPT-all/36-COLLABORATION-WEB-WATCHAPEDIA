'use client'
import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

import Bottom from '@/shared/components/Bottom/BottomNav'

import Header from './components/header/Header'
import RecommendOtt from './components/recommendOtt/RecommendOtt'

const RecommendContent = () => {
  const searchParams = useSearchParams()
  const selectedChips = searchParams.get('chips')?.split(',') || []

  return (
    <>
      <Header />
      <RecommendOtt selectedChips={selectedChips} />
      <Bottom />
    </>
  )
}

export default function RecommendPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RecommendContent />
    </Suspense>
  )
}
