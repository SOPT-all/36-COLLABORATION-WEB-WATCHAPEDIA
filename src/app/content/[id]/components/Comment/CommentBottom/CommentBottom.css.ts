import { style } from "@vanilla-extract/css";

import { color, font } from "@/app/styles.css";

export const commentBottomWrapper = style({
  width: '100%',
  height: '27px',
  display: 'flex',
  gap: '10px',
  alignItems: 'center'
})

export const iconTextWrapper = style({
  display: 'flex',
  gap: '2px',
})

export const text = style([
  font.body_r_14,
  {
    color: color.gray.gray6,
  }
])