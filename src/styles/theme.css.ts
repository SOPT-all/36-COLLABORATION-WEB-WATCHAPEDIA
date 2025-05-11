import { createThemeContract, createGlobalTheme } from '@vanilla-extract/css'

export const vars = createThemeContract({
  color: {
    /*brand*/
    brandPrimary: null,
    brandPrimaryLight: null,
    brandPrimaryWhite: null,
    brandPrimaryDark: null,
    /*background*/
    bgSubtitle: null,
    bgDefault: null,
    bgGray: null,
    bgGrayLight: null,
    /*etc*/
    btnEvent: null,
    /*grayscale*/
    gray1: null,
    gray2: null,
    gray3: null,
    gray4: null,
    gray5: null,
    gray6: null,
    gray7: null,
    gray8: null,
    /*border*/
    borderLight: null,
    borderMedium: null,
    borderSubtitle: null,
  },
  font: {
    body: null,
  },
})

createGlobalTheme(':root', vars, {
  font: {
    body: 'Pretendard, sans-serif',
  },
  color: {
    /*brand*/
    brandPrimary: '#FF2F6E',
    brandPrimaryLight: '#FFACBB',
    brandPrimaryWhite: '#FFEFF2',
    brandPrimaryDark: '#8E002B',
    /*background*/
    bgSubtitle: '#F8F8F8',
    bgDefault: '#FFFFFF',
    bgGray: '#CCCDCF',
    bgGrayLight: '#EEEEEE',
    /*etc*/
    btnEvent: '#00A0FE',
    /*grayscale*/
    gray1: '#E7E7E7',
    gray2: '#E1E1E1',
    gray3: '#D2D2D2',
    gray4: '#A0A0A0',
    gray5: '#818181',
    gray6: '#5F5F5F',
    gray7: '#222222',
    gray8: '#101010',
    /*border*/
    borderLight: '#F5F5F5',
    borderMedium: '#EBEBEB',
    borderSubtitle: '#B6B6B6',
  },
})
