import { Button, HStack } from "@chakra-ui/react"
import { Input } from "@chakra-ui/react"
import { PasswordInput } from "@/components/ui/password-input"
import { Box, AbsoluteCenter} from "@chakra-ui/react"
import { Flex } from "@chakra-ui/react"
export default function Login()
{
    return(
        <>
            <AbsoluteCenter axis="both">
                <Box maxW="L" borderWidth="1px" padding="20px" borderRadius="5px" textAlign="right" >
                    <Input marginBottom="15px" placeholder="Erwin.Young@gmail.com" />
                    <PasswordInput  placeholder="Aw8asd4as5!"/>
                    <Button marginTop="15px">Login</Button>
                    <Button marginTop="15px">Login</Button>
                </Box>
            </AbsoluteCenter>

                  
        </>
    )
}