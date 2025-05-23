'use client'

import { useState, useEffect } from 'react'

import ReviewChip from '@/shared/components/ReviewChip/ReviewChip'

import * as styles from './ChipSelect.css'
import { chipCategories } from './chipSelectmock'

const MAX_SELECTED = 5

interface ChipSelectProps {
  onSelectedChange?: (chips: number[]) => void
}

const ChipSelect = ({ onSelectedChange }: ChipSelectProps) => {
  const [selected, setSelected] = useState<number[]>([])

  useEffect(() => {
    onSelectedChange?.(selected)
  }, [selected, onSelectedChange])

  const handleChipClick = (index: number) => {
    if (selected.includes(index)) {
      setSelected(selected.filter((t) => t !== index))
    } else if (selected.length < MAX_SELECTED) {
      setSelected([...selected, index])
    }
  }
  return (
    <div className={styles.chipWrapper}>
      {chipCategories.map((category) => (
        <div key={category.label} style={{ marginBottom: 24 }}>
          <div className={styles.chipLetter}>{category.label}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {category.chips.map(({ id, text }) => {
              const isSelected = selected.includes(id)
              const isDisabled = !isSelected && selected.length >= MAX_SELECTED
              return (
                <ReviewChip
                  key={text}
                  text={text}
                  isSelected={isSelected}
                  disabled={isDisabled}
                  onClick={() => handleChipClick(id)}
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
