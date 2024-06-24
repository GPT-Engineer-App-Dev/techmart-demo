import { Box, Flex, Heading, Spacer, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Navbar = ({ setSearchTerm }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    setSearchTerm(value);
  };

  return (
    <Box bg="gray.100" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading as="h1" size="lg">
          <RouterLink to="/">ElectroShop</RouterLink>
        </Heading>
        <InputGroup maxW="300px">
          <Input
            placeholder="Search products..."
            value={searchInput}
            onChange={handleSearchChange}
          />
          <InputRightElement>
            <FaSearch />
          </InputRightElement>
        </InputGroup>
        <Spacer />
        <Button as={RouterLink} to="/products" colorScheme="blue" mr={4}>
          Products
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;