import { color, font } from "@/app/styles.css";
import { style } from "@vanilla-extract/css";

export const fieldWrapper = style({
  width: 345,
  height: 62,
  display: 'flex',
  justifyContent: 'space-between',
  gap: '10px',
})

export const profile = style({
  borderRadius: '4px'
})

export const rightWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})


export const textConentWrapper = style({
  width: 280,
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
})

export const name = style([
  font.title_m_14,
])

export const character = style([
  font.body_r_14,
  {
    color: color.gray.gray6,
  }
])

export const bottomLine = style({
  height: 1,
  backgroundColor: color.gray.gray1,
})