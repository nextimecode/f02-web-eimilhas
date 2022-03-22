import { extendTheme } from '@chakra-ui/react'
import components from './components'
import colors from './colors'
import fontWeights from './fontWeights'
import fontSizes from './fontSizes'
import styles from './styles'

export const defaultTheme = extendTheme({
  colors: colors,
  fontWeights: fontWeights,
  fontSizes: fontSizes,
  components: components,
  styles: { ...styles }
})
