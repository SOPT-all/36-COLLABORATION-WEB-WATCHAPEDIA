'use client'

import SvgReIconWish from '@/assets/svg/ReIconWish'
import * as styles from './ReactionButtons.css'
import SvgReIconEye from '@/assets/svg/ReIconEye'
import { ReIconMore } from '@/assets/svg'
import { useState } from 'react'

interface ReactionButtonProps {
  svg: React.ReactNode
  name: string
  active: boolean
  onClick: () => void
}
type ClickableName = '보고싶어요' | '보는중'

const buttonList = [
  { svg: <SvgReIconWish />, name: '보고싶어요' },
  { svg: <SvgReIconEye />, name: '보는중' },
  { svg: <ReIconMore />, name: '더보기' },
] as const

const ReactionButtons = () => {
  const [clicked, setClicked] = useState<ClickableName>()

  const handleClick = (name: string) => {
    if (name !== '더보기') {
      setClicked((prev) =>
        prev === name ? undefined : (name as ClickableName),
      )
    }
  }

  return (
    <div className={styles.reactionButtonsContainer}>
      {buttonList.map(({ svg, name }) => (
        <ReactionButton
          key={name}
          svg={svg}
          name={name}
          active={clicked === name}
          onClick={() => handleClick(name)}
        />
      ))}
    </div>
  )
}

const ReactionButton = ({
  svg,
  name,
  active,
  onClick,
}: ReactionButtonProps) => {
  return (
    <button className={styles.reactionButton} onClick={onClick}>
      <div className={styles.reactionButtonIcon({ active })}>{svg}</div>
      <p className={styles.reactionButtonText({ active })}>{name}</p>
    </button>
  )
}

export default ReactionButtons
