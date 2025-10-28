import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CATEGORIES = [
  { id: "clothing", label: "Clothing", icon: "shirt-outline" },
  { id: "devices", label: "Devices", icon: "phone-portrait-outline" },
  { id: "toys", label: "Toys", icon: "game-controller-outline" },
  { id: "finance", label: "Finance", icon: "wallet-outline" },
  { id: "keys", label: "Keys", icon: "key-outline" },
  { id: "home", label: "Home Goods", icon: "home-outline" },
  { id: "school", label: "School", icon: "school-outline" },
  { id: "other", label: "Other", icon: "ellipsis-horizontal-circle-outline" },
];

export default function SearchScreen() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    // wire this up later to your results screen / API
  };

  const renderTile = ({ item }) => (
    <TouchableOpacity style={styles.tile}>
      <Text style={styles.tileLabel}>{item.label}</Text>
      <View style={styles.iconWrap}>
        <Ionicons name={item.icon} size={56} color="#000" />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Page Title */}
      <Text style={styles.pageTitle}>Search</Text>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="What item are you looking for?"
          placeholderTextColor="#999"
          value={query}
          onChangeText={setQuery}
          returnKeyType="search"
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Ionicons name="search" size={18} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderTile}
        numColumns={2}
        columnWrapperStyle={{ gap: 16 }}
        contentContainerStyle={styles.grid}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#fff", 
  },

  // Page Title
  pageTitle: { 
    fontSize: 28, 
    fontWeight: "800", 
    marginTop: 8, 
    marginBottom: 12, 
    paddingHorizontal: 16, 
  },

  // Search Bar
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
    borderRadius: 24,
    paddingHorizontal: 16,
    height: 44,
    marginBottom: 20,
    marginHorizontal: 16, 
  },

  searchInput: { flex: 1, fontSize: 16, color: "#000" },
  searchButton: { paddingLeft: 8, paddingVertical: 6 },

  // Section Title ("Categories")
  sectionTitle: { 
    fontSize: 22, 
    fontWeight: "700", 
    marginBottom: 12, 
    paddingHorizontal: 16, 
  },

  // Grid (the tiles)
  grid: { 
    paddingBottom: 24, 
    gap: 16, 
    paddingHorizontal: 12,
  },

  // Each Tile
  tile: {
    flex: 1,
    backgroundColor: "#d9d9d9",
    height: 120,
    borderRadius: 8,
    padding: 12,
    justifyContent: "space-between",
    marginHorizontal: 4,
  },

  tileLabel: { fontSize: 16, fontWeight: "600", color: "#000" },
  iconWrap: { alignSelf: "flex-start" },
});
