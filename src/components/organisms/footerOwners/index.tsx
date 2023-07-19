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
      minH={['200px', 32]}
    >
      <Box
        as='div'
        w={['100%', '50%']}
        textAlign='center'
        py={[3, 4]}
      >
        Copyright © {new Date().getFullYear()} | EiMilhas | v.{version}
        <br />
        CNPJ: 50.742.248/0001-04<br />
        Endereço: Rua Dr. João Miranda, 100 <br />Dona Clara - Belo Horizonte - MG, 31260-380
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
