import * as React from 'react'
import type { SVGProps } from 'react'

const SvgIcRight = ({
  stroke = 'currentColor',
  width = 9,
  height = 14,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <path stroke={stroke} strokeWidth={1.5} d="m1 13 6-6-6-6" />
  </svg>
)

export default SvgIcRight
