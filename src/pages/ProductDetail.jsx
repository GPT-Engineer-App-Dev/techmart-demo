import { Box, Container, Image, Text, VStack, Button, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: 599, image: "https://source.unsplash.com/random/600x400/?smartphone", description: "A high-end smartphone with advanced features." },
  { id: 2, name: "Laptop", price: 999, image: "https://source.unsplash.com/random/600x400/?laptop", description: "A powerful laptop for work and entertainment." },
  { id: 3, name: "Headphones", price: 199, image: "https://source.unsplash.com/random/600x400/?headphones", description: "Wireless headphones with noise-cancellation technology." },
  { id: 4, name: "Smartwatch", price: 299, image: "https://source.unsplash.com/random/600x400/?smartwatch", description: "A feature-packed smartwatch for fitness and communication." },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = sampleProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return <Box>Product not found</Box>;
  }

  return (
    <Box>
      <Container maxW="container.xl" centerContent py={10}>
        <VStack spacing={8} align="start" w="full">
          <Image src={product.image} alt={product.name} borderRadius="md" w="full" maxH="400px" objectFit="cover" />
          <Heading as="h1" size="2xl">
            {product.name}
          </Heading>
          <Text fontSize="2xl" fontWeight="bold">
            ${product.price}
          </Text>
          <Text fontSize="lg">{product.description}</Text>
          <Button colorScheme="blue" size="lg">
            Add to Cart
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default ProductDetail;