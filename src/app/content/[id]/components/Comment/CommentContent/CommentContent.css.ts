import { color, font } from "@/app/styles.css";
import { style } from "@vanilla-extract/css";

export const commentContentWrapper = style([
  font.body_r_14,
  {
    color: color.gray.gray6,
    width: '100%',
    height: '117px',
  }
])