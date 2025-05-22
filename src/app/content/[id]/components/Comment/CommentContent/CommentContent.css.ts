import { style } from "@vanilla-extract/css";

import { color, font } from "@/app/styles.css";

export const commentContentWrapper = style([
  font.body_r_14,
  {
    color: color.gray.gray6,
    height: 117,
    alignSelf: 'stretch',
    whiteSpace: 'pre-wrap',
  },
])
