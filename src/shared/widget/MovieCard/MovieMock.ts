import { IcWatchaWhite, IcWatchaBlack } from "@/assets/svg";

export const moviePresets = {
  dDay: {
    poster: "/img/poster.png",
    title: "안드로 시즌 2",
    badge: "D-1",
    count: "27.1K",
    date: "2025.04.23",
    label: undefined,
    star: undefined,
    tags: undefined,
    type: "dDay"
  },
  rank: {
    poster: "/img/poster.png",
    title: "펀치 드링크 러브",
    badge: "1",
    count: undefined,
    date: undefined,
    label: IcWatchaWhite,
    tags: ["사랑스러운", "로맨스"],
    star: 4.8,
    type: "rank"
  },
  boxoffice: {
    poster: "/img/poster.png",
    title: "4월 이야기",
    badge: undefined,
    count: 42700,
    date: undefined,
    label: undefined,
    star: undefined,
    tags: undefined,
    type: "boxoffice"
  },
  series: {
    poster: "/img/poster.png",
    title: "안드로 시즌 2",
    badge: "D-1",
    count: "271",
    date: "2025.04.23", // date 추가!
    label: undefined,
    star: undefined,
    tags: undefined,
    type: "series"
  }
} as const;