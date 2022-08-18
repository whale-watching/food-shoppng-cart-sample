import { Button, Box, Heading, Stack, Text } from '@chakra-ui/react';

import { ProductWithCount } from '../types';
import parseCurrency from '../utils/parseCurrency';

import { Image } from './Image';

interface Props {
  product: ProductWithCount;
  handleIncreaseProductQuantity: (id: string) => void;
  handleDecreaseProductQuantity: (id: string) => void;
}

export default function ProductCard({
  product,
  handleIncreaseProductQuantity,
  handleDecreaseProductQuantity,
}: Props) {
  return (
    <Stack
      key={product.id}
      backgroundColor="whiteAlpha.900"
      borderRadius="3xl"
      boxShadow="md"
    >
      <Image
        alt={product.title}
        borderRadius="3xl"
        dimensions={[400, 250]}
        objectFit="cover"
        src={product.image}
      />

      <Stack
        height={{ base: 'auto', sm: 60 }}
        justifyContent="space-between"
        padding={5}
      >
        <Box>
          <Heading mb={1} size="lg">
            {product.title}
          </Heading>
          <Text color="GrayText" lineHeight="short">
            {product.description}
          </Text>
        </Box>
        <Box>
          <Box display="flex" justifyContent="space-between">
            <Text fontSize="md" fontWeight="bold">
              Precio
            </Text>
            <Text fontSize="md" fontWeight="bold">
              Cantidad
            </Text>
          </Box>
          <Box
            alignItems="center"
            display="flex"
            justifyContent="space-between"
          >
            <Heading as="span" flexBasis={1} size="lg">
              {parseCurrency(product.price)}
            </Heading>

            <Box alignItems="center" display="flex">
              <Button
                borderRadius="full"
                colorScheme="blackAlpha"
                onClick={() => handleDecreaseProductQuantity(product.id)}
              >
                -
              </Button>
              <Text fontWeight="bold" paddingX={3}>
                {product.quantity}
              </Text>
              <Button
                borderRadius="full"
                colorScheme="red"
                onClick={() => handleIncreaseProductQuantity(product.id)}
              >
                +
              </Button>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
}
