import Typography from 'typography'
import gray from 'gray-percentage'
import Wordpress2015 from 'typography-theme-wordpress-2015'
import { TABLET_MEDIA_QUERY } from 'typography-breakpoint-constants'

Wordpress2015.baseFontSize = '22px'
Wordpress2015.overrideThemeStyles = ({ ...funcs }, options, styles) => {
  return {
    'a, a:visited': {
      color: gray(20)
    },
    'h1 a, h2 a, h3 a': {
      color: gray(20),
      textDecoration: 'none',
      boxShadow: 'none',
    },
    'h1 a:hover, h2 a:hover, h3 a:hover': {
      textDecoration: 'underline'
    },
    '.post-date': {
      fontSize: '60%',
      color: gray(40)
    },
    [TABLET_MEDIA_QUERY]: {
      'html': {
        fontSize: '100%'
      }
    }
  }
}

const typography = new Typography(Wordpress2015)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
