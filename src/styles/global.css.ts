import './layers.css'
import './reset.css'
import { globalStyle } from '@vanilla-extract/css'
import { vars } from './theme.css'

globalStyle('body', {
  fontFamily: vars.font.body,
})
