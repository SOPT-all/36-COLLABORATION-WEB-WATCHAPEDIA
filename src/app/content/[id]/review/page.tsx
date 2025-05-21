"use client"

import { useState } from "react"
import ChipSelect from "./_components/chipSelect/ChipSelect"
import Header from "./_components/header/Header"
import Toggle from "./_components/toggleSection/Toggle"

const Review = () => {
  const [selectedCount, setSelectedCount] = useState(0)

  return <>
    <Header canSave={selectedCount >= 1} />
    <Toggle />
    <ChipSelect onSelectedCountChange={setSelectedCount} />
  </>
}

export default Review
