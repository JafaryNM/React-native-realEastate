import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-white p-4">
      <Text className="font-rubik-bold text-primary-300 text-3xl">
        Welcome to Real Estate!
      </Text>

      <Link href="/Sign">
        <Text className="font-bold text-3xl text-blue-600 mb-4">Sign in</Text>
      </Link>

      <Link href="/Explore">
        <Text className="text-lg text-gray-800 mb-2 font-rubik-extrabold">
          Explore
        </Text>
      </Link>

      <Link href="/Profile">
        <Text className="text-lg text-gray-800 mb-2">Profile</Text>
      </Link>

      <Link href="/properties/1">
        <Text className="text-lg text-gray-800">Properties</Text>
      </Link>
    </View>
  );
}
