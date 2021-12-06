import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  NativeBaseProvider,
  Box,
  Heading,
  Text,
  Center,
  FormControl,
  Input,
  VStack,
  Button,
  Flex,
} from "native-base";

export default function ShowFeed({ navigation }) {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Center mt="75px">
      <Box
        mb="4"
        mt="2"
        bg="purple.300"
        w="90%"
        pt="100px"
        pb="100px"
        rounded="20px"
      >
        <Center>
          <Heading mb="3">
            Welcome to <Text color="white">Swirl</Text>
          </Heading>
          <Text fontSize="sm" color="white">
            Create an account or sign in
          </Text>
        </Center>
      </Box>
      <Form
        showLogin={showLogin}
        setShowLogin={setShowLogin}
        navigation={navigation}
      />
    </Center>
  );
}

const Form = ({ showLogin, setShowLogin, navigation }) => {
  return (
    <VStack space={4} w="90%" mt="3" space={100}>
      <Text>Showing Feed</Text>
      <Button
        _text={{ color: "white" }}
        bg="purple.400"
        borderRadius="15"
        pt="5"
        pb="5"
        mt="10"
        onPress={() => navigation.navigate("SignUp")}
      >
        Go back to first page!
      </Button>
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
