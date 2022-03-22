const Button = {
  baseStyle: {
    borderRadius: '50'
  },
  variants: {
    base: {
      bg: 'primary',
      color: 'white',
      fontWeight: 'medium',
      _hover: {
        bg: 'primary-darker',
        textDecoration: 'none',
        _disabled: {
          bgColor: 'gray.400'
        }
      }
    },
    outline: {
      bg: 'transparent',
      color: 'primary',
      borderColor: 'primary',
      fontWeight: 'medium',
      _hover: {
        bg: 'primary',
        color: 'white',
        textDecoration: 'none'
      }
    },
    solid: {
      bg: 'primary',
      color: 'white',
      fontWeight: 'medium',
      _hover: {
        bg: 'primary-darker',
        textDecoration: 'none'
      }
    }
  },
  defaultProps: {
    variant: 'base'
  },
  sizes: {
    xs: {
      px: 2,
      py: 3
    },
    sm: {
      px: 3,
      py: 4
    },
    md: {
      px: 4,
      py: 2
    },
    lg: {
      px: 6,
      py: 3
    },
    '2xl': {
      px: 16,
      py: 3
    }
  }
}

export default Button
