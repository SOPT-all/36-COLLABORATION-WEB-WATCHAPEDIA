'use client'
import { useState } from 'react'

import * as style from './SpoilerToggle.css'

const SpoilerToggle = () => {
  const [isSelected, setIsSelected] = useState(false)

  const handleSpoilerToggleClick = () => {
    setIsSelected((prev) => !prev)
  }

  return (
    <div className={style.spoilerToggleWrapper}>
      <button
        className={style.spoilerToggleBar({ active: isSelected })}
        onClick={handleSpoilerToggleClick}
      >
        <div className={style.spoilerToggleButton({ active: isSelected })} />
      </button>
    </div>
  )
}

export default SpoilerToggle
