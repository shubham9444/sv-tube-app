import { Button, Container, Heading, Input, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <form >
            <VStack alignItems={'stretch'} spacing={'8'} w={['full', '96']} m={'auto'} my={'16'}>
                <Heading textAlign={'center'}>Welcome Back</Heading>
                <Input placeholder='email' type={'email'} required focusBorderColor='purple.500' />
                <Input placeholder='password' type={'password'} required focusBorderColor='purple.500' />
                <Button variant={'link'} colorScheme={'purple'} alignSelf={'flex-end'}>
                    <Link to={'/forgetpassword'} />Forget Password?
                </Button>

                <Button colorScheme={'purple'} type='submit'>
                    Log In
                </Button>

                <Text textAlign={'right'}>New user?{' '}
                    <Button colorScheme={'purple'} variant={'link'}><Link to={'/signup'}>Sign Up</Link></Button>
                </Text>
            </VStack>
        </form>


    </Container>
}

export default Login