import * as React from 'react'
import type { SVGProps } from 'react'
const SvgIcStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={12}
    fill="none"
    {...props}
  >
    <path
      fill="#FFD046"
      d="m7 0 1.757 4.081 4.425.41-3.338 2.933.977 4.335L7 9.49l-3.82 2.269.976-4.335L.818 4.491l4.425-.41z"
    />
  </svg>
)
export default SvgIcStar
