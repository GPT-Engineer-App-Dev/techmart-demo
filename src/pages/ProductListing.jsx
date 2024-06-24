import { Box, Container, SimpleGrid, Image, Text, VStack, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useState, useEffect } from "react";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: 599, image: "https://source.unsplash.com/random/300x300/?smartphone" },
  { id: 2, name: "Laptop", price: 999, image: "https://source.unsplash.com/random/300x300/?laptop" },
  { id: 3, name: "Headphones", price: 199, image: "https://source.unsplash.com/random/300x300/?headphones" },
  { id: 4, name: "Smartwatch", price: 299, image: "https://source.unsplash.com/random/300x300/?smartwatch" },
];

const ProductListing = ({ searchTerm }) => {
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);

  useEffect(() => {
    const filtered = sampleProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm]);

  return (
    <Box>
      <Container maxW="container.xl" centerContent py={10}>
        <SimpleGrid columns={[1, 2, 3, 4]} spacing={10}>
          {filteredProducts.map((product) => (
            <VStack key={product.id} borderWidth={1} borderRadius="lg" p={4} spacing={4}>
              <Image src={product.image} alt={product.name} borderRadius="md" />
              <Text fontSize="xl" fontWeight="bold">
                {product.name}
              </Text>
              <Text fontSize="lg">${product.price}</Text>
              <Button as={RouterLink} to={`/product/${product.id}`} colorScheme="blue">
                View Details
              </Button>
            </VStack>
          ))}
        </SimpleGrid>
        {filteredProducts.length === 0 && (
          <Text fontSize="xl" fontWeight="bold">
            No products found matching your search.
          </Text>
        )}
      </Container>
    </Box>
  );
};

export default ProductListing;