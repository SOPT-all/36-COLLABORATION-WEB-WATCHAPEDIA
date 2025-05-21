"use client"

import MovieCard from "@/shared/widget/MovieCard/MovieCard"

const page = () => {
  return (
    <div>
      <MovieCard type={"dDay"} />
      <MovieCard type= {"boxoffice"} />
      <MovieCard type= {"rank"} />
      <MovieCard type= {"series"} />
    </div>
  )
}

export default page
