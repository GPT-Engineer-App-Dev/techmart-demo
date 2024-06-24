import { Box, Container, Heading, Text, Button, VStack, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Box>
      <Container maxW="container.xl" centerContent py={10}>
        <VStack spacing={8} align="center">
          <Heading as="h1" size="2xl" textAlign="center">
            Welcome to ElectroShop
          </Heading>
          <Text fontSize="xl" textAlign="center">
            Your one-stop shop for all your electronic needs
          </Text>
          <Image src="https://source.unsplash.com/random/800x400/?electronics" alt="Electronics" borderRadius="md" />
          <Button as={RouterLink} to="/products" colorScheme="blue" size="lg">
            Shop Now
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;