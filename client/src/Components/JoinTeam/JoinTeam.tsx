import {
  Container,
  SimpleGrid,
  Stack,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import Contact from "../Contact/Contact";

export default function SplitWithImage() {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
        <Stack spacing={4}>
          <Stack
            spacing={4}
            borderRadius="md"
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Contact />
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
