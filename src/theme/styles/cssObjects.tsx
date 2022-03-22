import { SystemStyleObject } from '@chakra-ui/react'

const cssObjects: SystemStyleObject = {
  '::-webkit-scrollbar': {
    w: '5px'
  },
  '*::-webkit-scrollbar-track': {
    bg: 'gray.200'
  },
  '*::-webkit-scrollbar-thumb': {
    bg: 'gray.300',
    borderRadius: '5px'
  },
  '*::-webkit-scrollbar-thumb:hover': {
    bg: 'light-green'
  }
}

export default cssObjects
