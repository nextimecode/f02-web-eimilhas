const Select = {
  baseStyle: {
    variant: 'outline'
  },
  sizes: {
    md: {
      field: {
        px: 3,
        py: 1
      }
    }
  },
  variants: {
    filter: {
      field: {
        bg: 'gray.100',
        color: 'gray.600',
        borderColor: 'gray.200',
        borderRadius: '50px',
        fontSize: 'sm',
        fontWeight: 'normal'
      },
      icon: {
        color: 'primary'
      }
    },
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
        },
        _placeholder: {
          color: 'red'
        }
      }
    }
  }
}

export default Select
