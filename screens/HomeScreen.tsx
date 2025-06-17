import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>WoofStay</Text>
        <Ionicons name="person-outline" size={24} color="black" />
      </View>

      {/* Search Bar */}
      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color="#8E7F71" />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#8E7F71"
          style={styles.searchInput}
        />
      </View>

      {/* Categories */}
      <View style={styles.categories}>
        <Category
          icon={<Ionicons name="home" size={18} color="#4B3F35" />}
          label="Boarding"
        />
        <Category
          icon={<FontAwesome5 name="cut" size={14} color="#4B3F35" />}
          label="Grooming"
        />
        <Category
          icon={<MaterialIcons name="pets" size={18} color="#4B3F35" />}
          label="Walking"
        />
        <Category
          icon={<FontAwesome5 name="stethoscope" size={16} color="#4B3F35" />}
          label="Vet"
        />
      </View>

      {/* Map Image Placeholder */}
      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: "https://placehold.co/300x200?text=Map+Preview" }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

function Category({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <TouchableOpacity style={styles.category}>
      {icon}
      <Text style={styles.categoryLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 48,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  searchBox: {
    flexDirection: "row",
    backgroundColor: "#F3ECE9",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },
  searchInput: {
    marginLeft: 10,
    fontSize: 16,
    color: "#4B3F35",
    flex: 1,
  },
  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 20,
  },
  category: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5EFEA",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 14,
    marginRight: 10,
    marginBottom: 10,
  },
  categoryLabel: {
    marginLeft: 8,
    color: "#4B3F35",
    fontSize: 14,
    fontWeight: "500",
  },
  imageWrapper: {
    borderRadius: 16,
    overflow: "hidden",
    marginTop: 20,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 16,
  },
});

export default HomeScreen;
