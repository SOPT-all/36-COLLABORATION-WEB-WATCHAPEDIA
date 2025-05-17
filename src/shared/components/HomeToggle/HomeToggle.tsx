'use client'
import { useState, MouseEvent } from 'react'
import * as style from './HomeToggle.css'
import { TOGGLE_OPTIONS, type ToggleType } from '@/shared/components/Header/Tab'

interface HomeToggleProps {
  selected: ToggleType
  handleToggle: (value: ToggleType) => void
}

const HomeToggle = ({ selected, handleToggle }: HomeToggleProps) => {
  const handleStopClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  return (
    <div className={style.toggleWrapper}>
      <div className={style.toggleContainer}>
        <button
          className={style.toggleText({
            active: selected === TOGGLE_OPTIONS.WATCHA_HOME,
          })}
          onClick={() => handleToggle(TOGGLE_OPTIONS.WATCHA_HOME)}
        >
          {TOGGLE_OPTIONS.WATCHA_HOME}
        </button>
        <button
          className={style.toggleText({
            active: selected === TOGGLE_OPTIONS.MAGAZINE,
          })}
          onClick={() => handleToggle(TOGGLE_OPTIONS.MAGAZINE)}
        >
          {TOGGLE_OPTIONS.MAGAZINE}
        </button>
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
