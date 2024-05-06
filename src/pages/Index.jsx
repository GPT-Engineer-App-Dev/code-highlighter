import { Container, Text, VStack, Textarea, Box } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [code, setCode] = useState("// Type your code here...");

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" mb={4}>Code Editor</Text>
        <Box width="100%" p={4} bg="gray.700" borderRadius="md">
          <Textarea
            value={code}
            onChange={handleCodeChange}
            placeholder="// Type your code here..."
            size="lg"
            height="500px"
            fontFamily="monospace"
            fontSize="md"
            lineHeight="tall"
            letterSpacing="wide"
            color="white"
            bg="gray.800"
            borderColor="gray.600"
            _placeholder={{ color: "gray.500" }}
          />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;