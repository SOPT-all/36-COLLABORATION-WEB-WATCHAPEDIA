'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import Header from './components/header/Header'
import Toggle from './components/toggleSection/Toggle'
import ChipSelect from './components/chipSelect/ChipSelect'
import ReviewText from './components/reviewTextField/ReviewText'

const Review = () => {
  const [selectedChips, setSelectedChips] = useState<string[]>([])
  const router = useRouter()
  const canSave = selectedChips.length >= 1

  const handleSave = () => {
    router.push(
      `/content/recommend?chips=${encodeURIComponent(JSON.stringify(selectedChips))}`,
    )
  }

  return (
    <>
      <Header canSave={canSave} onSave={handleSave} />
      <Toggle />
      <ChipSelect onSelectedChange={setSelectedChips} />
      <ReviewText />
    </>
  )
}

export default Review
