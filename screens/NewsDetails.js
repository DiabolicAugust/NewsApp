import React from "react";
import { TouchableOpacity, View, Text, Image, ScrollView } from "react-native";
import { style } from "../style/style";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function NewsDetails({ route, navigation }) {
  const back = () => {
    navigation.navigate("News");
  };
  return (
    <View>
      <View style={style.Header}>
        <TouchableOpacity>
          <Feather name="menu" size={24} color="black" />
        </TouchableOpacity>
        <Text style={style.headerText}>Coinstelly</Text>
        <TouchableOpacity>
          <Ionicons
            name="arrow-redo-outline"
            size={24}
            color="black"
            onPress={back}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={style.DetailsMain}>
        <Text style={style.DetailsTitle}>{route.params.title}</Text>
        <Text style={style.DetailsDescription}>{route.params.description}</Text>
        <Image
          source={`${route.params.secondImage}`}
          style={style.DetailsImage}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={style.DetailsAuthor}>{route.params.author}</Text>
            <Text style={style.DetailsDate}>{route.params.date}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="message-outline"
              size={24}
              color="grey"
              style={{
                transform: [{ rotateY: "180deg" }],
                marginVertical: 10,
                marginRight: 5,
              }}
            />
            <Text style={{ marginVertical: 10, marginRight: 10 }}>
              {route.params.commentsNumber}
            </Text>
            <Ionicons
              name="ios-eye"
              size={24}
              color="black"
              style={{
                transform: [{ rotateY: "180deg" }],
                margin: 8,
                marginRight: 5,
                color: "#cc4a30",
              }}
            />
            <Text
              style={{ marginVertical: 10, marginRight: 28, color: "#cc4a30" }}
            >
              {route.params.viewsNumber}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
