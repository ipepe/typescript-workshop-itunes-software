import {
  Image,
  SimpleGrid,
  Box,
  Flex,
  Badge,
  Text,
  Spacer,
} from '@chakra-ui/react';
import { MdStar } from 'react-icons/md';
import { Software } from './itunesSlice';

export function SoftwareTable({ software }: { software: Software[] }) {
  return (
    <SimpleGrid columns={4}>
      {software.map((software) => (
        <Box p="5" maxW="320px" borderWidth="1px" key={software.trackId}>
          <Text mt={2} fontSize="l" fontWeight="semibold" lineHeight="short">
            {software.trackName}
          </Text>
          <Image borderRadius="md" src={software.artworkUrl100} />
          <Flex align="baseline" mt={2}>
            <Text
              ml={2}
              textTransform="uppercase"
              fontSize="sm"
              fontWeight="bold"
              color="white.800"
            >
              {software.genres.map((genre) => genre).join(' • ')}
            </Text>
          </Flex>

          <Flex mt={2} align="center">
            <Box as={MdStar} color="orange.400" />
            <Text ml={1} fontSize="sm">
              <b>{software.averageUserRating}</b> ({software.userRatingCount})
            </Text>
            <Spacer />
            <Badge colorScheme="green">Free</Badge>
          </Flex>
        </Box>
      ))}
    </SimpleGrid>
  );
}

// <Tr key={software.trackId}>
//     <Td>
//         <Image src={software.artworkUrl100} alt={software.trackName} />
//     </Td>
//     <Td>{software.trackName}</Td>
//     <Td>{software.artistName}</Td>
//     <Td isNumeric>
//         {software.averageUserRating} ({software.userRatingCount})
//     </Td>
// </Tr>
