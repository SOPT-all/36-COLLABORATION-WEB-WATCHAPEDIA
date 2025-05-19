'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/shared/components/Button/Button'
import { PATH } from '@/shared/constants/path'
import SvgIconStarLGray from '@/assets/svg/IconStarLGray'
import * as styles from './Rating.css'

const STAR = 5
const STAR_RATE = {
  FULL: 'full',
  HALF: 'half',
  EMPTY: 'empty',
} as const
type StarRate = (typeof STAR_RATE)[keyof typeof STAR_RATE]

const Rating = () => {
  const router = useRouter()

  const [rating, setRating] = useState(0)
  const [dragging, setDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const calcRating = (clientX: number) => {
    if (!containerRef.current) return 0

    const { left, width } = containerRef.current.getBoundingClientRect()
    let percent = (clientX - left) / width
    percent = Math.max(0, Math.min(1, percent))

    return Math.round(percent * STAR * 2) / 2
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true)
    setRating(calcRating(e.clientX))
  }

  useEffect(() => {
    if (!dragging) return

    const handleMouseMove = (e: MouseEvent) => {
      setRating(calcRating(e.clientX))
    }
    const handleMouseUp = () => setDragging(false)

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [dragging])

  return (
    <div className={styles.ratingContainer}>
      <div
        ref={containerRef}
        className={styles.ratingStarContainer}
        onMouseDown={handleMouseDown}
      >
        {[...Array(STAR)].map((_, index) => {
          const starValue = index + 1
          let starType: StarRate = STAR_RATE.EMPTY
          if (rating >= starValue) starType = STAR_RATE.FULL
          else if (rating >= starValue - 0.5) starType = STAR_RATE.HALF

          return (
            <span
              key={index}
              className={styles.baseStar({
                isFull: starType === STAR_RATE.FULL,
              })}
            >
              <SvgIconStarLGray />
              {starType === STAR_RATE.HALF && (
                <span className={styles.overlayStarHalf}>
                  <SvgIconStarLGray />
                </span>
              )}
            </span>
          )
        })}
      </div>
      <Button
        text="코멘트 쓰기"
        disabled={rating === 0}
        onClick={() => router.push(PATH.REVIEW)}
      />
    </div>
  )
}

export default Rating
