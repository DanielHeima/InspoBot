import { DrawerToggleButton } from '@react-navigation/drawer';
import { Link } from 'expo-router';
import { Drawer } from 'expo-router/drawer'
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <>
      <View style={styles.container}>
        <Drawer.Screen options={{
          headerShown: true,
          headerLeft: () => <DrawerToggleButton/>,
          title: 'InspoBot'
        }} />
        <Text style={{ fontSize: 24 }}>Index page of Home Drawer</Text>
        <Link href={"/home/next-page"} style={{ marginTop: 16, fontSize: 18 }}>
          <Text style={{ fontWeight: "bold" }}>Go To Next Page</Text>
        </Link>
      </View>
    </>
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