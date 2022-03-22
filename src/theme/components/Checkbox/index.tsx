const Checkbox = {
  baseStyle: {
    control: {
      borderColor: 'gray.200',
      _checked: {
        borderColor: 'primary',
        bgColor: 'primary',
        _hover: {
          bgColor: 'primary-lighter'
        }
      },
      _hover: {
        bgColor: 'primary'
      }
    },
    label: {
      color: 'gray.600'
    }
  },
  defaultProps: {
    variant: 'base',
    size: 'sm'
  },
  sizes: {
    sm: {
      control: {
        height: 4,
        width: 4
      }
    }
  }
}

export default Checkbox
