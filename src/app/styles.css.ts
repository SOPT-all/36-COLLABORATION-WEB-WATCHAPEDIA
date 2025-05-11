import { createGlobalTheme, style } from '@vanilla-extract/css'

export const container = style({
  padding: 10,
  color: 'blue',
})

export const color = createGlobalTheme(':root', {
  font: {
    body: 'Pretendard, sans-serif',
  },
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
  // Bold
  b_36: createFontStyle({
    fontSize: '36px',
    fontWeight: '700',
    lineHeight: '44px',
  }),
  b_25: createFontStyle({
    fontSize: '25px',
    fontWeight: '700',
    lineHeight: '32px',
  }),
  b_24_2: createFontStyle({
    fontSize: '24px',
    fontWeight: '700',
    lineHeight: '36px',
  }),
  b_17: createFontStyle({
    fontSize: '17px',
    fontWeight: '700',
    lineHeight: '20px',
  }),

  // Semibold
  sb_20_2: createFontStyle({
    fontSize: '20px',
    fontWeight: '600',
    lineHeight: '24px',
  }),
  sb_17_2: createFontStyle({
    fontSize: '17px',
    fontWeight: '600',
    lineHeight: '26px',
  }),
  sb_16: createFontStyle({
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '24px',
  }),
  sb_14: createFontStyle({
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '16px',
  }),
  sb_13: createFontStyle({
    fontSize: '13px',
    fontWeight: '600',
    lineHeight: '16px',
  }),

  // Medium
  m_36: createFontStyle({
    fontSize: '36px',
    fontWeight: '500',
    lineHeight: '36px',
  }),
  m_28_2: createFontStyle({
    fontSize: '28px',
    fontWeight: '500',
    lineHeight: '42px',
  }),
  m_18: createFontStyle({
    fontSize: '18px',
    fontWeight: '500',
    lineHeight: '24px',
  }),
  m_17_2: createFontStyle({
    fontSize: '17px',
    fontWeight: '500',
    lineHeight: '26px',
  }),
  m_16: createFontStyle({
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '20px',
  }),
  m_15: createFontStyle({
    fontSize: '15px',
    fontWeight: '500',
    lineHeight: '20px',
  }),
  m_14: createFontStyle({
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '20px',
  }),
  m_13: createFontStyle({
    fontSize: '13px',
    fontWeight: '500',
    lineHeight: '16px',
  }),
  m_12: createFontStyle({
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '14px',
  }),
  m_10: createFontStyle({
    fontSize: '10px',
    fontWeight: '500',
    lineHeight: '20px',
  }),

  // Regular
  r_28_2: createFontStyle({
    fontSize: '28px',
    fontWeight: '400',
    lineHeight: '42px',
  }),
  r_16: createFontStyle({
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '22px',
  }),
  r_15: createFontStyle({
    fontSize: '15px',
    fontWeight: '400',
    lineHeight: '16px',
  }),
  r_14: createFontStyle({
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '20px',
  }),
  r_14_2: createFontStyle({
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '20px',
  }),
  r_12: createFontStyle({
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '14px',
  }),
  r_11: createFontStyle({
    fontSize: '11px',
    fontWeight: '400',
    lineHeight: '12px',
  }),
  r_10: createFontStyle({
    fontSize: '10px',
    fontWeight: '400',
    lineHeight: '14px',
  }),
}
