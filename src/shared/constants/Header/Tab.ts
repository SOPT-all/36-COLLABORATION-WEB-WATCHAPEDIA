export const WATCHA_HOME_TABS = [
  '영화', '시리즈', '책', '웹툰'
] as const;

export const MAGAZINE_TABS = [
  '기획전', '아티클', '인터뷰', '큐레이션', '콘텐츠소식'
] as const;

export const TOGGLE_OPTIONS = {
  WATCHA_HOME: '왓챠홈',
  MAGAZINE: '매거진'
} as const;

export type ToggleType = typeof TOGGLE_OPTIONS[keyof typeof TOGGLE_OPTIONS];

export const HEADER_TABS = {
  [TOGGLE_OPTIONS.WATCHA_HOME]: WATCHA_HOME_TABS,
  [TOGGLE_OPTIONS.MAGAZINE]: MAGAZINE_TABS
} as const;
