import { Box, Flex, Heading, Spacer, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.100" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading as="h1" size="lg">
          <RouterLink to="/">ElectroShop</RouterLink>
        </Heading>
        <Spacer />
        <Button as={RouterLink} to="/products" colorScheme="blue" mr={4}>
          Products
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;