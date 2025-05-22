'use client'

import { useState } from "react"
import Header from "./components/header/Header"
import Toggle from "./components/toggleSection/Toggle"
import ChipSelect from "./components/chipSelect/ChipSelect"
import ReviewText from "./components/reviewTextField/ReviewText"


const Review = () => {
  const [selectedCount, setSelectedCount] = useState(0)

  return (
    <>
      <Header canSave={selectedCount >= 1} />
      <Toggle />
      <ChipSelect onSelectedCountChange={setSelectedCount} />
      <ReviewText />
    </>
  )
}

export default Review
