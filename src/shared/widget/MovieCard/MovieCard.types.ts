export type MovieType = 'MOVIE' | 'SERIES';

export interface DDayCard {
  id: number;
  untilRelease: number;
  isWishedCount: number;
  imagePath: string;
  title: string;
  releaseYear: string;
  type: 'dDay';
}

export interface BoxofficeOrSeriesCard {
  id: number;
  movieType: MovieType;
  isWishedCount: number;
  imagePath: string;
  title: string;
  releaseYear: string;
  type: 'boxoffice' | 'series';
}

export interface RankCard {
  id: number;
  imagePath: string;
  title: string;
  score: number;
  tag: string[];
  type: 'rank';
}

export type MovieCardPreset = DDayCard | BoxofficeOrSeriesCard | RankCard;