import { style } from "@vanilla-extract/css";

import { color, font } from "@/app/styles.css";

export const commentBottomWrapper = style({
  display: 'flex',
  height: 27,
  alignItems: 'center',
  gap: 10,
})

export const iconTextWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: 2,
})

export const text = style([
  font.body_r_14,
  {
    color: color.gray.gray6,
  },
])
