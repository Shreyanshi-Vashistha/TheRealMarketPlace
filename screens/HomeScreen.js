import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { signOut } from "firebase/auth";
import { auth } from "../config/config";

export default function HomeScreen() {
  const handleLogout = async () => {
    await signOut(auth);
  };
  return (
    <SafeAreaView className="flex-1 flex-row justify center items-center">
      <Text className="text-lg">Home Page -</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text className="text-lg">Logout </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
