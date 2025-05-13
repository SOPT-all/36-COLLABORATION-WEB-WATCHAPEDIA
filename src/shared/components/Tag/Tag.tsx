import { RankDown, RankSame, RankUp } from '@/assets/svg'
import clsx from 'clsx'
import { font } from '@/app/styles.css'
import { tag } from './tag.css'

export const RANK_STATE = {
  UP: 'up',
  DOWN: 'down',
  SAME: 'same',
} as const

export type MovieState = (typeof RANK_STATE)[keyof typeof RANK_STATE]

interface RankTagProps {
  rank: number | string
  state: MovieState
}

interface TextTagProps {
  text: string
}

export const RankTag = ({ rank, state }: RankTagProps) => {
  const stateIcon = () => {
    switch (state) {
      case RANK_STATE.UP:
        return <RankUp />
      case RANK_STATE.DOWN:
        return <RankDown />
      case RANK_STATE.SAME:
        return <RankSame />
    }
  }

  return (
    <div className={clsx(tag, font.body_sb_13)}>
      {rank}
      {stateIcon()}
    </div>
  )
}

export const TextTag = ({ text }: TextTagProps) => {
  return <div className={clsx(tag, font.body_sb_13)}>{text}</div>
}
