import * as React from 'react'
import type { SVGProps } from 'react'
const SvgRankSame = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={2}
    fill="none"
    {...props}
  >
    <path stroke="#D2D2D2" strokeWidth={2} d="M0 1h8" opacity={0.8} />
  </svg>
)
export default SvgRankSame
