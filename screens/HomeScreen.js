import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
} from "react-native-material-cards"; // Import your card components here
import { signOut } from "firebase/auth";
import { auth } from "../config/config";
import Bike from "../assets/images/bike.jpg";
import Car from "../assets/images/car.jpg";
import Fan from "../assets/images/fan.jpg";

const data = [
  { id: "1", thing: "Car", price: "$20000", sub: "Clean Title", Img: Car },
  { id: "2", thing: "Bike", price: "$10000", sub: "Brand New", Img: Bike },
  { id: "3", thing: "Fan", price: "$200", sub: "Pre-owned", Img: Fan },
  // Add more items as needed
];

const HomeScreen = () => {
  const handleLogout = async () => {
    await signOut(auth);
  };

  const renderCard = ({ item }) => (
    <Card>
      <CardImage
        // source={item.Img}
        title={item.thing}
        style={styles.cardImage}
      />
      <CardTitle title={item.price} subtitle={`${item.sub}`} />
      {/* <CardContent text={`Content for ${item.title}`} /> */}
      <CardAction separator={true} inColumn={false}>
        <CardButton onPress={() => {}} title="Add to Cart" color="blue" />
        <CardButton onPress={() => {}} title="Buy Now" color="blue" />
      </CardAction>
    </Card>
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity onPress={handleLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardImage: {
    // Add styles for CardImage here
    width: "100%",
    height: "20%", // Adjust the height as needed
    // or "contain" or "stretch"
  },
});

export default HomeScreen;
