import * as React from 'react'
import type { SVGProps } from 'react'
const SvgIconPlay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g clipPath="url(#icon_play_svg__a)">
      <path
        fill="#fff"
        d="M2.93 17.07A10 10 0 1 1 16.823 2.685 10 10 0 0 1 2.93 17.07m12.73-1.41A8.004 8.004 0 1 0 4.34 4.34a8.004 8.004 0 0 0 11.32 11.32M7 6l8 4-8 4z"
      />
    </g>
    <defs>
      <clipPath id="icon_play_svg__a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgIconPlay
