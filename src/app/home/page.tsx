"use client"

import MovieCardList from "@/shared/widget/MovieCard/MovieCardList"

const Home = () => {
  return (
    <><MovieCardList types={["dDay"]} /><MovieCardList types={["rank"]} /><MovieCardList types={["boxoffice"]} /><MovieCardList types={["series"]} /></>
  )
}

export default Home
