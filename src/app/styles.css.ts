import { createGlobalTheme, globalStyle, style } from '@vanilla-extract/css'

export const container = style({
  padding: 10,
  color: 'blue',
})

export const fontFamily = createGlobalTheme(':root', {
  font: {
    body: 'Pretendard, sans-serif',
  },
})

export const color = createGlobalTheme(':root', {
  brand: {
    primary: '#FF2F6E',
    primaryLight: '#FFACBB',
    primaryWhite: '#FFEFF2',
    primaryDark: '#8E002B',
  },
  background: {
    subtitle: '#F8F8F8',
    default: '#FFFFFF',
    gray: '#CCCDCF',
    grayLight: '#EEEEEE',
  },
  gray: {
    gray1: '#E7E7E7',
    gray2: '#E1E1E1',
    gray3: '#D2D2D2',
    gray4: '#A0A0A0',
    gray5: '#818181',
    gray6: '#5F5F5F',
    gray7: '#222222',
    gray8: '#101010',
  },
  border: {
    borderLight: '#F5F5F5',
    borderMedium: '#EBEBEB',
    borderSubtitle: '#B6B6B6',
  },
  icon: {
    gray: '#808080',
  },
})

const createFontStyle = ({
  fontSize,
  fontWeight,
  lineHeight,
}: {
  fontSize: string
  fontWeight: string
  lineHeight: string
}) =>
  style({
    fontSize,
    fontWeight,
    lineHeight,
  })

export const font = {
  // headline
  headline_b_36: createFontStyle({
    fontSize: '36px',
    fontWeight: '700',
    lineHeight: '44px',
  }),
  headline_b_24: createFontStyle({
    fontSize: '24px',
    fontWeight: '700',
    lineHeight: '36px',
  }),
  headline_sb_16: createFontStyle({
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '24px',
  }),

  // title
  title_sb_20: createFontStyle({
    fontSize: '20px',
    fontWeight: '600',
    lineHeight: '24px',
  }),
  title_sb_14: createFontStyle({
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '16px',
  }),
  title_m_14: createFontStyle({
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '20px',
  }),
  title_r_28: createFontStyle({
    fontSize: '28px',
    fontWeight: '400',
    lineHeight: '42px',
  }),

  // subtitle
  subtitle_b_17: createFontStyle({
    fontSize: '17px',
    fontWeight: '700',
    lineHeight: '20px',
  }),
  subtitle_sb_17: createFontStyle({
    fontSize: '17px',
    fontWeight: '600',
    lineHeight: '26px',
  }),
  subtitle_m_28: createFontStyle({
    fontSize: '28px',
    fontWeight: '500',
    lineHeight: '42px',
  }),
  subtitle_m_18: createFontStyle({
    fontSize: '18px',
    fontWeight: '500',
    lineHeight: '24px',
  }),
  subtitle_m_17: createFontStyle({
    fontSize: '17px',
    fontWeight: '500',
    lineHeight: '26px',
  }),
  subtitle_m_13: createFontStyle({
    fontSize: '13px',
    fontWeight: '500',
    lineHeight: '16px',
  }),
  subtitle_r_14: createFontStyle({
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '20px',
  }),

  // body
  body_sb_13: createFontStyle({
    fontSize: '13px',
    fontWeight: '600',
    lineHeight: '16px',
  }),
  body_m_16: createFontStyle({
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '20px',
  }),
  body_m_15: createFontStyle({
    fontSize: '15px',
    fontWeight: '500',
    lineHeight: '20px',
  }),
  body_r_16: createFontStyle({
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '22px',
  }),
  body_r_15: createFontStyle({
    fontSize: '15px',
    fontWeight: '400',
    lineHeight: '16px',
  }),
  body_r_14: createFontStyle({
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '20px',
  }),
  body_r_11: createFontStyle({
    fontSize: '11px',
    fontWeight: '400',
    lineHeight: '12px',
  }),

  // label
  label_m_12: createFontStyle({
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '14px',
  }),
  label_m_10: createFontStyle({
    fontSize: '10px',
    fontWeight: '500',
    lineHeight: '20px',
  }),
  label_r_12: createFontStyle({
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '14px',
  }),
  label_r_10: createFontStyle({
    fontSize: '10px',
    fontWeight: '400',
    lineHeight: '14px',
  }),

  // 기타
  b_25: createFontStyle({
    fontSize: '25px',
    fontWeight: '700',
    lineHeight: '32px',
  }),
  m_36: createFontStyle({
    fontSize: '36px',
    fontWeight: '500',
    lineHeight: '36px',
  }),
}

globalStyle(':root', {
  fontFamily: fontFamily.font.body,
  width: 375,
  height: 667,
  margin: '0 auto',
})
