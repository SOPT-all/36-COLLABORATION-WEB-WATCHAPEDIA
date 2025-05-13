import { style } from "@vanilla-extract/css";
import { color } from "@/app/styles.css";
import { recipe } from "@vanilla-extract/recipes";

export const SpoilerToggleWrapper = style({
  width: 42,
  height: 25,
  display: 'flex',
  alignItems: 'center'
})

export const SpoilerToggleBar = recipe({
  base: {
    width: 42,
    height: 19,
    borderRadius: 999,
    position: 'relative'
  },
  variants: {
    active: {
      true: {backgroundColor: color.brand.primaryLight},
      false: {backgroundColor: color.gray.gray1},
    },
  }
})

export const SpoilerToggleButton = recipe({
  base: {
    width: 23,
    height: 23,
    borderRadius: 999,
    backgroundColor: 'white',
    border: `1px solid ${color.gray.gray1}`,
    position: 'absolute',
    transition: 'left 0.3s ease',
    top: -3,
    cursor: 'pointer'
  },
  variants: {
    active: {
      true: {left: 17},
      false: {left: 0},
    }
  }
})