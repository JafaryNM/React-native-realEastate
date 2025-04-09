import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Text className="text-red-100 text-4xl font-bold my-10">
        Welcome tot real state is good
      </Text>
      <Link href="/Sign" className="font-bold text-5xl">
        Sign in
      </Link>
      <Link href="/Explore">Explore</Link>
      <Link href="/Profile">Profile</Link>
      <Link href="/properties/1">Properties</Link>
    </View>
  );
}
