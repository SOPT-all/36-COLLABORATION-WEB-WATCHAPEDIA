'use client'

import { use, useState } from 'react'
import { useRouter } from 'next/navigation'

import { postComments } from '@/services/review/api'
import { PATH } from '@/shared/constants/path'

import Header from './components/header/Header'
import Toggle from './components/toggleSection/Toggle'
import ChipSelect from './components/chipSelect/ChipSelect'
import ReviewText from './components/reviewTextField/ReviewText'

const Review = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params)

  const [selectedChips, setSelectedChips] = useState<number[]>([])
  const [value, setValue] = useState('')
  const router = useRouter()
  const canSave = selectedChips.length >= 1

  const handleSave = async () => {
    const { id: commentId } = await postComments({
      postId: Number(id),
      comment: {
        keywordIds: selectedChips.map(Number),
        review: value,
      },
    })

    router.push(`${PATH.RECOMMEND}?commentId=${commentId}`)
  }

  return (
    <>
      <Header canSave={canSave} onSave={handleSave} />
      <Toggle />
      <ChipSelect onSelectedChange={setSelectedChips} />
      <ReviewText value={value} setValue={setValue} />
    </>
  )
}

export default Review
