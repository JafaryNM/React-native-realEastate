import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import images from "@/constants/images";
import icons from "@/constants/icons";

export default function Sign() {
  const handleLogin = () => {};
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />
        <View className="px-10">
          <Text className="text-base text-center uppercase font-rubik text-black-200">
            Welcome to Restate
          </Text>
          <Text className=" text-center capitalize  font-rubik-bold text-black-300 text-3xl mt-2">
            Let get you closer to {"\n"}
            <Text className="text-primary-100"> Your ideal home</Text>
          </Text>
          <Text className="text-lg font-rubik text-black-200 mt-12 text-center">
            Login in Re state with google
          </Text>
          <TouchableOpacity
            className="bg-white shadow-lg shadow-zinc-500 rounded-full w-full p-4 mt-5"
            onPress={handleLogin}
          >
            <View className="flex flex-row items-center justify-center">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="text-lg font-rubik-medium capitalize text-black-300 ml-2">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
