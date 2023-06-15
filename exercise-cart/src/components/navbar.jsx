import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  Button,
  Table,
  Td,
  Th,
  Tr,
  Image,
  Stack,
  PopoverFooter,
  ButtonGroup,
  Flex,
  Box,
  Text,
  Badge,
} from "@chakra-ui/react";

import { useSelector } from "react-redux";

export const NavbarComp = () => {
  const data = useSelector((state) => state.cart.value);
  console.log(data);
  return (
    <Flex w="100vw" h="100px" bgColor="wheat" alignItems="center">
      <Box p="10">
        <Image src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg" />
      </Box>
      <Popover isLazy>
        <PopoverTrigger>
          <Button>
            <Text fontSize="xl" fontWeight="bold">
              Cart
              <Badge ml="1" fontSize="0.8em" colorScheme="green">
                {data.length}
              </Badge>
            </Text>
          </Button>
        </PopoverTrigger>
        <PopoverContent w='fit-content'>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            <Table>
              <Tr>
                <Th>name</Th>
                <Th>price</Th>
                <Th>image</Th>
                <Th isNumeric>Qty</Th>
              </Tr>
              {data.map((item) => {
                return (
                  <Tr>
                    <Td>{item.name}</Td>
                    <Td>{item.price}</Td>
                    <Td>
                      <Stack>
                        <Image
                          boxSize="35px"
                          objectFit="cover"
                          src={item.img}
                          alt={item.name}
                        />
                      </Stack>
                    </Td>
                    <Td isNumeric>{item.qty}</Td>
                  </Tr>
                );
              })}
            </Table>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};
