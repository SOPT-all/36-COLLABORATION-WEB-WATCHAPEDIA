import { IcWatchaLight } from "@/assets/svg";
export const moviePresets = {
  dDay: {
    poster: "/img/poster.png",
    title: "안드로 시즌 2",
    badge: "D-1",
    count: 271,
    date: "2025.04.23",
    label: undefined,
    type: "dDay"
  },
  rank: {
    poster: "/img/poster.png",
    title: "안드로 시즌 2",
    badge: "1",
    count: undefined,
    date: undefined,
    label: IcWatchaLight,
    type: "rank"
  },
  boxoffice: {
    poster: "/img/poster.png",
    title: "4월 이야기",
    badge: "D-1",
    count: 42700,
    date: "2025.04.23",
    label: undefined,
    type: "boxoffice"
  },
  series: {
    poster: "/img/poster.png",
    title: "안드로 시즌 2",
    badge: "1",
    count: "271",
    label: undefined,
    date: undefined,
    type: "series"
  }
} as const;

export type MovieCardType = keyof typeof moviePresets;
export type MovieCardPreset = (typeof moviePresets)[MovieCardType];
