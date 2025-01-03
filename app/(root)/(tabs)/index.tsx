import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/sign-in" className="text-red-500">
        Sign In
      </Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/properties/1">Properties</Link>
      <Text className="text-red-500">Index</Text>
    </View>
  );
}
