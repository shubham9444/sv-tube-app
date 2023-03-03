import { Box, Button, HStack, Heading, Input, Stack, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend, AiFillInstagram, AiFillFacebook, AiFillGithub } from 'react-icons/ai'

export const Footer = () => {
    return <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column', 'row']}>
            <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                <Heading size={'md'} textTransform={'uppercase'} textAlign={['center', 'left']}>
                    Subscribe to get update
                </Heading>
                <HStack borderBottom={'2px solid white'} py={'2'}>
                    <Input placeholder='enter email here...' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor={'none'} />

                    <Button
                        colorScheme={'purple'}
                        padding={'0'}
                        variant={'ghost'}
                        borderRadius={'0 20px 20px 0'}>
                        <AiOutlineSend size={'20'} />
                    </Button>
                </HStack>
            </VStack>

            <VStack w={'full'}
                borderLeft={['none', '1px solid white']}
                borderRight={['none', '1px solid white']}>

                <Heading size={'md'} pb={'4'} textTransform={'uppercase'} textAlign={'center'}>Shubham video Tube</Heading>
                <Text>All Rigths received</Text>
                <Text>©COPYRIGHT 2023</Text>
                <Text fontSize={'25'} textAlign={['center', 'left']}>create by shubham vaghela</Text>
            </VStack>

            <VStack w={'full'} textTransform={'uppercase'}>
                <Heading size={'md'}>social media</Heading>
                <HStack pt={'19'} >
                    <Button variant={'ghost'} colorScheme={'facebook'}>
                        <a href="https://www.facebook.com/" target={'_blank'}><AiFillFacebook size={'40'} /></a>

                    </Button>
                    <Button variant={'ghost'} colorScheme={'purple'}>
                        <a href="https://github.com/" target={'_blank'}><AiFillGithub size={'40'} /></a>

                    </Button>
                    <Button variant={'ghost'} colorScheme={'pink'}>
                        <a href="https://www.instagram.com/" target={'_blank'}><AiFillInstagram size={'40'} /></a>

                    </Button>
                </HStack>

            </VStack>

        </Stack>
    </Box>
}
