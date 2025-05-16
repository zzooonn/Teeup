import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CustomTabbar() {
  const tabbarList = [
    { title: "Home", icon: "home-outline", url: "/" },
    { title: "Chat", icon: "chatbubble-ellipses-outline", url: "./pages/chat" },
    { title: "Reservation", icon: "calendar-outline", url: "./pages/reservation" },
    { title: "Profile", icon: "person-outline", url: "./pages/profile" }
  ];

  return (
    <View style={styles.container}>
      {tabbarList.map((item, index) => (
        <View key={index} style={styles.tabItem}>
          <Ionicons name={item.icon} size={24} color="#333" />
          <Text style={styles.text}>{item.title}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 70,
    backgroundColor: "#f0f0f0",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 12,
    marginTop: 4,
  },
});
