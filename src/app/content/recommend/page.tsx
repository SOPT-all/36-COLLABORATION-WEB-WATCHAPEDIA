"use client"

import Bottom from "@/shared/components/Bottom/BottomNav"
import Header from "./components/header/Header"
import RecommendOtt from "./components/recommendOtt/RecommendOtt"
import { useSearchParams } from "next/navigation"

const Recommend = () => {
  const searchParams = useSearchParams()
  const chipsParam = searchParams.get("chips")
  const selectedChips = chipsParam ? JSON.parse(decodeURIComponent(chipsParam)) : []

  return (
    <>
      <Header />
      <RecommendOtt selectedChips={selectedChips} />
      <Bottom />
    </>
  )
}

export default Recommend
