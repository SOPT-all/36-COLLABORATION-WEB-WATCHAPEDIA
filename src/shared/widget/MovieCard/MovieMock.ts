import { MovieCardPreset } from './MovieCard.types';

export const moviePresets: Record<string, MovieCardPreset> = {
  dDay: {
    id: 1,
    untilRelease: 30,
    isWishedCount: 123,
    imagePath: "/img/poster.png",
    title: "안드로 시즌 2",
    releaseYear: "2025-04-23",
    type: "dDay"
  },
  boxoffice: {
    id: 2,
    movieType: "MOVIE",
    isWishedCount: 456,
    imagePath: "/img/poster.png",
    releaseYear: "2024-01-01",
    title: "극장 영화",
    type: "boxoffice"
  },
  series: {
    id: 3,
    untilRelease: 3,
    movieType: "SERIES",
    isWishedCount: 789,
    imagePath: "/img/poster.png",
    title: "인기 시리즈",
    releaseYear: "2024-06-01",
    type: "series"
  },
  rank: {
    id: 4,
    imagePath: "/img/poster.png",
    title: "펀치 드링크 러브",
    score: 4.8,
    tag: ["사랑스러운", "로맨스"],
    type: "rank"
  }
};