export type MovieCardType = 'dDay' | 'rank' | 'boxoffice' | 'series';
export interface MovieCardPreset {
  poster: string;
  title: string;
  badge: string;
  count?: number | string;
  date?: string;
  label?: string;
  star?: number;
  tags?: string[];
  type: MovieCardType;
}