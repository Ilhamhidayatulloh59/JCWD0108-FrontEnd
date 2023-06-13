import { Avatar, Flex, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

export const List = () => {
    // const { state } = useLocation()
    const location = useLocation()
  return (
    <Stack w="100vw" alignItems="center">
      <Stack w="50vw" h="40vh" bgColor="black" alignItems="center" p="5">
        <Heading fontSize="6xl" color="white">
          ChitChat Express Your Feeling
        </Heading>
        <HStack w="inherit" justifyContent="center" alignItems="center">
          <Avatar />
          <Flex bgColor='blue' h='14' w='50%' alignItems='center' p='4' borderRadius='xl' borderEndStartRadius='none'>
            <Text fontSize='3xl' color='white'>
                {/* { state } */}
                { location.state }
            </Text>
          </Flex>
        </HStack>
      </Stack>
    </Stack>
  );
};
