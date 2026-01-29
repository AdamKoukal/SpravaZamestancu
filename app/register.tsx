"use client"
import { Button, HStack } from "@chakra-ui/react"
import { PasswordInput } from "@/components/ui/password-input"
import { Box, AbsoluteCenter} from "@chakra-ui/react"
import { Flex } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { Link } from "@chakra-ui/react"
import { useState } from 'react';
import { Field, Input } from "@chakra-ui/react"

export default function Register()
{
    return<>
    <AbsoluteCenter axis="both">
                
        <Box width="30vw" borderWidth="1px" padding="20px" borderRadius="5px" textAlign="center">
            <Text display="inline" marginBottom="15px" textStyle="5xl">Register</Text>
            
            <Field.Root>
                <Field.Label>First Name</Field.Label>
                <Input marginBottom="5px" placeholder="Erwin"/>
            </Field.Root>

            <Field.Root>
                <Field.Label>Last Name</Field.Label>
                <Input marginBottom="5px" placeholder="Young"/>
            </Field.Root>

            <Field.Root>
                <Field.Label>Email</Field.Label>
                <Input marginBottom="5px" placeholder="Erwin.Young@gmail.com"/>
            </Field.Root>

            <Field.Root>
                <Field.Label>Password</Field.Label>
                <PasswordInput marginBottom="5px" placeholder="Aw8asd4as5!"/>
            </Field.Root>

            <Field.Root>
                <Field.Label>Confirm Password</Field.Label>
                <PasswordInput marginBottom="5px" placeholder="Aw8asd4as5!"/>
            </Field.Root>

            <Field.Root>
                <Field.Label>Date Of Birth (DD-MM-YYYY)</Field.Label>
                <Input marginBottom="5px" placeholder="07-05-1997"/>
            </Field.Root>
            
            <Button width="100%" marginTop="10px">Register</Button>
            <Link href="/login">Already have an account? Log in now!</Link>
        </Box>
    </AbsoluteCenter>
    </>
    
}