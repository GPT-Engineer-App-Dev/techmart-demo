import { Box, Container, SimpleGrid, Image, Text, VStack, Button, Select, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, Flex, Heading } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: 599, image: "https://source.unsplash.com/random/300x300/?smartphone", category: "Electronics", brand: "TechCo" },
  { id: 2, name: "Laptop", price: 999, image: "https://source.unsplash.com/random/300x300/?laptop", category: "Electronics", brand: "ComputeCorp" },
  { id: 3, name: "Headphones", price: 199, image: "https://source.unsplash.com/random/300x300/?headphones", category: "Audio", brand: "SoundWave" },
  { id: 4, name: "Smartwatch", price: 299, image: "https://source.unsplash.com/random/300x300/?smartwatch", category: "Wearables", brand: "FitTech" },
  { id: 5, name: "Camera", price: 799, image: "https://source.unsplash.com/random/300x300/?camera", category: "Photography", brand: "PixelPro" },
  { id: 6, name: "Tablet", price: 449, image: "https://source.unsplash.com/random/300x300/?tablet", category: "Electronics", brand: "TechCo" },
  { id: 7, name: "Bluetooth Speaker", price: 129, image: "https://source.unsplash.com/random/300x300/?bluetooth-speaker", category: "Audio", brand: "SoundWave" },
  { id: 8, name: "Gaming Console", price: 499, image: "https://source.unsplash.com/random/300x300/?gaming-console", category: "Gaming", brand: "GameMaster" },
];

const ProductListing = ({ searchTerm }) => {
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const categories = useMemo(() => ["All", ...new Set(sampleProducts.map(product => product.category))], []);
  const brands = useMemo(() => ["All", ...new Set(sampleProducts.map(product => product.brand))], []);

  useEffect(() => {
    const filtered = sampleProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (categoryFilter === "" || categoryFilter === "All" || product.category === categoryFilter) &&
      (brandFilter === "" || brandFilter === "All" || product.brand === brandFilter) &&
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    setFilteredProducts(filtered);
  }, [searchTerm, categoryFilter, brandFilter, priceRange]);

  return (
    <Box>
      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>Filters</Heading>
        <Flex direction={["column", "row"]} gap={4}>
          <Select placeholder="Select category" value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </Select>
          <Select placeholder="Select brand" value={brandFilter} onChange={(e) => setBrandFilter(e.target.value)}>
            {brands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </Select>
          <Box>
            <Text mb={2}>Price Range: ${priceRange[0]} - ${priceRange[1]}</Text>
            <RangeSlider
              aria-label={['min', 'max']}
              min={0}
              max={1000}
              step={10}
              value={priceRange}
              onChange={(val) => setPriceRange(val)}
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>
          </Box>
        </Flex>
      </Box>
      <Container maxW="container.xl" centerContent py={10}>
        <SimpleGrid columns={[1, 2, 3, 4]} spacing={10}>
          {filteredProducts.map((product) => (
            <VStack key={product.id} borderWidth={1} borderRadius="lg" p={4} spacing={4}>
              <Image src={product.image} alt={product.name} borderRadius="md" />
              <Text fontSize="xl" fontWeight="bold">
                {product.name}
              </Text>
              <Text fontSize="lg">${product.price}</Text>
              <Text fontSize="sm">Category: {product.category}</Text>
              <Text fontSize="sm">Brand: {product.brand}</Text>
              <Button as={RouterLink} to={`/products/${product.id}`} colorScheme="blue">
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