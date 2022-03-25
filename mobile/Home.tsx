import { useQuery } from "@apollo/client";
import { StyleSheet, Text, View, Image } from "react-native";
import { ITEM_FEED_QUERY } from "../shared/hooks/useItemFeed";

export default function Home() {
  const { data, loading } = useQuery(ITEM_FEED_QUERY);

  if (loading || !data) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <View>
        {data.itemFeed.map((item) => (
          <View style={{ display: "flex" }} key={item.id}>
            <View>
              <Text>{item.name}</Text>
              <Text>{item.description}</Text>
            </View>
            <Image
              source={{ uri: item.imageUrl }}
              style={{ width: 100, height: 100 }}
            />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
