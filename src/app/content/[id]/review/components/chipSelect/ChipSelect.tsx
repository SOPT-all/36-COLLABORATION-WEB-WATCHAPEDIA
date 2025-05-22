"use client"

import { useState, useEffect } from "react"

import ReviewChip from "@/shared/components/ReviewChip/ReviewChip"

import * as styles from "./ChipSelect.css"
import { chipCategories } from './chipSelectmock'

const MAX_SELECTED = 5

interface ChipSelectProps {
  onSelectedCountChange?: (count: number) => void
}

const ChipSelect = ({ onSelectedCountChange }: ChipSelectProps) => {
  const [selected, setSelected] = useState<string[]>([])

  useEffect(() => {
    onSelectedCountChange?.(selected.length)
  }, [selected.length, onSelectedCountChange])

  const handleChipClick = (text: string) => {
    if (selected.includes(text)) {
      setSelected(selected.filter(t => t !== text))
    } else if (selected.length < MAX_SELECTED) {
      setSelected([...selected, text])
    }
  }
  return (
    <div className={styles.chipWrapper}>
      {chipCategories.map(category => (
        <div key={category.label} style={{ marginBottom: 24 }}>
          <div className={styles.chipLetter}>{category.label}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {category.chips.map(chip => {
              const isSelected = selected.includes(chip.text)
              const isDisabled = !isSelected && selected.length >= MAX_SELECTED
              return (
                <ReviewChip
                  key={chip.text}
                  text={chip.text}
                  isSelected={isSelected}
                  disabled={isDisabled}
                  onClick={() => handleChipClick(chip.text)}
                />
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ChipSelect