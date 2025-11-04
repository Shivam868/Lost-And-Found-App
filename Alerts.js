import React from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";

const mockAlerts = [
  { id: "1", message: "Your lost wallet was turned in at Atrium building on Marietta Campus." },
  { id: "2", message: "A new item matching your description was posted." },
  { id: "3", message: "Reminder: Check lost and found updates daily." },
];

export default function Alerts() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Alerts</Text>

      <FlatList
        data={mockAlerts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.alertCard}>
            <Text style={styles.alertText}>{item.message}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    marginTop: 8,
    marginBottom: 16,
    padding: 16,
  },
  alertCard: {
    backgroundColor: "#f3f3f3",
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
  },
  alertText: {
    fontSize: 16,
    color: "#000",
  },
  mockAlerts: {
    id: "1",
    message: "Your lost wallet was turned in at Atrium building on Marietta Campus.",
  },
});