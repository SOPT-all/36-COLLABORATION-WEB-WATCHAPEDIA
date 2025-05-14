import * as React from 'react'
import type { SVGProps } from 'react'
const SvgRankUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={11}
    fill="none"
    {...props}
  >
    <path fill="#FF2F6E" d="m5 0 5 7H0z" />
    <path fill="#FF2F6E" d="m5 4 5 7H0z" />
  </svg>
)
export default SvgRankUp
