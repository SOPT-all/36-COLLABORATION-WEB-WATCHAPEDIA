"use client"
import { useState } from "react"
import TextField from "@/shared/components/TextField/TextField"
import * as styles from "./ReviewText.css"

const MAX_LENGTH = 500

const ReviewText = () => {
  const [value, setValue] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= MAX_LENGTH) {
      setValue(e.target.value)
    }
  }

  return (
    <>
      <div className={styles.divider} />
      <div className={styles.textFieldWrapper}>
        <span className={styles.reviewText}>리뷰</span>
        <TextField
          as="textarea"
          value={value}
          onChange={handleChange}
          maxLength={MAX_LENGTH}
          placeholder="이 작품에 대한 생각을 자유롭게 표현해주세요."
          className={styles.textArea}
        />
        <span className={styles.counter}>
          ({value.length}/{MAX_LENGTH})
        </span>
      </div>
    </>
  )
}

export default ReviewText
