const Input = {
  sizes: {
    md: {
      field: {
        px: 3,
        py: 1
      }
    }
  },
  variants: {
    outline: {
      field: {
        color: 'gray.700',
        bg: 'white',
        borderColor: 'gray.200',
        _hover: {
          borderColor: 'primary-lighter'
        },
        _focus: {
          borderColor: 'primary-lighter'
        },
        _invalid: {
          borderColor: 'danger'
        }
      }
    }
  }
}

export default Input
