import { StyleSheet, Text, View, Image } from "react-native";
import { useItemFeed } from "./queries";

export default function Home() {
  const { data, loading } = useItemFeed();

  if (loading || !data) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <View>
        {data.itemFeed.map((item) => (
          <View style={{ display: "flex" }}>
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
