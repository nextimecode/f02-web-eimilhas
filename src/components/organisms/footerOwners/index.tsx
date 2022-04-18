import React from 'react'
import { Box, Flex, HStack, Link } from '@chakra-ui/react'
import NextimeSvg from '../../atoms/iconsSvg/nextimeSvg'
import packageInfo from '../../../../package.json'

const NeXTIMEColor = '#202F4F'
const version = packageInfo.version

const FooterOwners = () => {
  return (
    <Flex
      bgColor='primary'
      color='white'
      fontSize='sm'
      w='100%'
      display={['block', 'flex']}
      alignItems='center'
      h={[28, 28]}
    >
      <Box
        as='div'
        w={['100%', '50%']}
        textAlign='center'
        py={[3, 4]}
      >
        Copyright © {new Date().getFullYear()} | EiMilhas | v.{version}
        <br />
        CNPJ: 45.580.151/0001-02 <br />CNPJ: 43.784.997/0001-20
      </Box>

      <Box
        as='div'
        placeContent='center'
        w={['100%', '50%']}
        py={[3, 4]}
      >
        <HStack
          display='flex'
          placeContent={['center', 'auto']}
        >
          <Box as='span'>Desenvolvido por </Box>
          <Link
            href="https://nextime.com.br"
            _hover={{
              transition: '0.3s',
              fill: NeXTIMEColor
            }}
            transition='0.3s'
            fill='white'
          >
            <NextimeSvg size={1.5}/>
          </Link>
        </HStack>
      </Box>

    </Flex>
  )
}

export default FooterOwners
