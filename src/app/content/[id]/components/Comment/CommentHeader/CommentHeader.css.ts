import { color, font } from "@/app/styles.css";
import { style } from "@vanilla-extract/css";

export const commentHeaderWrapper = style({
  width: '100%',
  height: '30px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const userInfoWrapper = style({
  display: 'flex',
  gap: '8px',
})

export const profile = style({
  borderRadius: '999px'
})

export const name = style([
  font.body_m_16,
  {
    color: color.gray.gray6,
    display: 'flex',
    alignItems: 'center',
  }
])

export const scoreWrapper = style({
  width: '55px',
  height: '25px',
  borderRadius: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  gap: '2px',
})

export const score = style([
  font.body_r_14,
  {
    color: color.gray.gray6,
  }
])