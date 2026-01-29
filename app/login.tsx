"use client"
import { Button, HStack } from "@chakra-ui/react"
import { Input } from "@chakra-ui/react"
import { PasswordInput } from "@/components/ui/password-input"
import { Box, AbsoluteCenter} from "@chakra-ui/react"
import { Flex } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { Link } from "@chakra-ui/react"
import { useState } from 'react';


export default function Login()
{
    return<>
    <AbsoluteCenter axis="both">
                
        <Box width="30vw" borderWidth="1px" padding="20px" borderRadius="5px" textAlign="center">
            <Text display="inline" marginBottom="15px" textStyle="5xl">Log in</Text>
            <Input marginBottom="15px" placeholder="Erwin.Young@gmail.com"/>
            <PasswordInput  placeholder="Aw8asd4as5!"/>
            <Button width="100%" marginTop="15px">Login</Button>
            <Link href="/register">Don' t have an account? Register now!</Link>
         </Box>
    </AbsoluteCenter>
    </>
    
}