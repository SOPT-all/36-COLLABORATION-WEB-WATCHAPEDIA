import type { MovieCardPreset } from '@/shared/widget/MovieCard/MovieCard.types'

import detail from './detail.json'
import trendingComment from './trendingComment.json'
import comment from './comment.json'
import magazine from './magazine.json'
import series from './series.json'
import boxoffice from './boxoffice.json'

const seriesData = series as MovieCardPreset[]

export { detail, trendingComment, comment, magazine, seriesData, boxoffice }
