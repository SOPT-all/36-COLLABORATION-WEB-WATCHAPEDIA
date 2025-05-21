import * as React from 'react'
import type { SVGProps } from 'react'
const SvgIcSeparator = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={2}
    height={11}
    fill="none"
    {...props}
  >
    <path stroke="#E1E1E1" d="M1 .5v10" />
  </svg>
)
export default SvgIcSeparator
