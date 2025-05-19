import * as React from 'react'
import type { SVGProps } from 'react'
const SvgIcLike = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={12}
    fill="none"
    {...props}
  >
    <mask id="ic_like_svg__a" fill="#fff">
      <rect width={3} height={8} y={4} rx={0.6} />
    </mask>
    <rect
      width={3}
      height={8}
      y={4}
      fill="gray"
      stroke="gray"
      strokeWidth={2}
      mask="url(#ic_like_svg__a)"
      rx={0.6}
    />
    <path
      stroke="gray"
      d="M6.805.524c.68.062 1.132.237 1.43.449.294.207.466.468.559.756.195.601.05 1.347-.189 1.887l-.268.607.657.09 1.637.227a1.5 1.5 0 0 1 1.272 1.745l-.039.165-1.466 4.979a.1.1 0 0 1-.096.071H4.6a.1.1 0 0 1-.1-.1V4.617a.1.1 0 0 1 .008-.039l.022-.032 1.886-1.828a1.1 1.1 0 0 0 .334-.79V.6c0-.03.012-.051.025-.064l.016-.01z"
    />
  </svg>
)
export default SvgIcLike
