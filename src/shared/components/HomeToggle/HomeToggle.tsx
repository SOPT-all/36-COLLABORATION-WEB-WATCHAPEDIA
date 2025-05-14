'use client'
import { useState, MouseEvent } from 'react'
import * as style from './HomeToggle.css'

const HomeToggle = () => {
  const TOGGLE_OPTIONS = {
    WATCHA_HOME: '왓챠홈',
    MAGAZINE: '매거진',
  }

  const [selected, setSelected] = useState<string>(TOGGLE_OPTIONS.WATCHA_HOME)

  const handleToggle = (value: string) => {
    setSelected(value)
  }

  const handleStopClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  return (
    <div className={style.toggleWrapper}>
      <div className={style.toggleContainer}>
        <p
          className={style.toggleText({
            active: selected === TOGGLE_OPTIONS.WATCHA_HOME,
          })}
          onClick={() => handleToggle(TOGGLE_OPTIONS.WATCHA_HOME)}
        >
          {TOGGLE_OPTIONS.WATCHA_HOME}
        </p>
        <p
          className={style.toggleText({
            active: selected === TOGGLE_OPTIONS.MAGAZINE,
          })}
          onClick={() => handleToggle(TOGGLE_OPTIONS.MAGAZINE)}
        >
          {TOGGLE_OPTIONS.MAGAZINE}
        </p>
        <div
          className={style.toggleButton({
            active: selected === TOGGLE_OPTIONS.WATCHA_HOME,
          })}
          onClick={handleStopClick}
        />
      </div>
    </div>
  )
}

export default HomeToggle
