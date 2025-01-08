import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useEffect } from "react";
// import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import icons from "@/constants/icons";

import Search from "@/components/Search";
import Filters from "@/components/Filters";
// import NoResults from "@/components/NoResults";
import { Card, FeaturedCard } from "@/components/Cards";

// import { useAppwrite } from "@/lib/useAppwrite";
import { useGlobalContext } from "@/lib/global-provider";
// import { getLatestProperties, getProperties } from "@/lib/appwrite";

export default function Index() {
  const { user } = useGlobalContext();

  return (
    <SafeAreaView className="h-full bg-white">
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={({ item }) => <Card onPress={() => {}} />}
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5">
              <View className="flex flex-row">
                <Image
                  source={{ uri: user?.avatar }}
                  className="size-12 rounded-full"
                />

                <View className="flex flex-col items-start ml-2 justify-center">
                  <Text className="text-xs font-rubik text-black-100">
                    Good Morning
                  </Text>
                  <Text className="text-base font-rubik-medium text-black-300">
                    {user?.name}
                  </Text>
                </View>
              </View>
              <Image source={icons.bell} className="size-6" />
            </View>

            <Search />
            <View className="my-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-rubik-bold text-black-300">
                  Featured
                </Text>
                <TouchableOpacity>
                  <Text className="text-base font-rubik-bold text-primary-300">
                    See all
                  </Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={[1, 2, 3, 4]}
                renderItem={({ item }) => <FeaturedCard onPress={() => {}} />}
                keyExtractor={(item) => item.toString()}
                showsHorizontalScrollIndicator={false}
                horizontal
                //approfondire
                bounces={false}
                contentContainerClassName="flex gap-5 pt-5"
              />
            </View>

            {/* <View className="flex flex-row gap-5 mt-5">
              <FeaturedCard />
              <FeaturedCard />
              <FeaturedCard />
            </View> */}

            <View className="mt-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-rubik-bold text-black-300">
                  Our Recommendation
                </Text>
                <TouchableOpacity>
                  <Text className="text-base font-rubik-bold text-primary-300">
                    See all
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <Filters />
            {/* <View className="flex flex-row  gap-5 mt-5">
              <Card />
              <Card />
            </View> */}
          </View>
        }
      />
    </SafeAreaView>
  );
}
