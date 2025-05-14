import type { Metadata } from 'next'
import '@/styles/global.css'
import '@/app/styles.css.ts'

export const metadata: Metadata = {
  title: '왓챠피디아',
  description: '36기 합동세미나 모바일 웹 5조 왓챠피디아',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
