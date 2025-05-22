import * as React from 'react'
import type { SVGProps } from 'react'
const SvgIcLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="#fff" d="M0 0h24v24H0z" />
    <path stroke="#5F5F5F" strokeWidth={1.5} d="m22 18-6-6 6-6" />
  </svg>
)
export default SvgIcLeft
