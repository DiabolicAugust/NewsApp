import React, { Component } from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { style } from "../style/style";
import Ionicons from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

export default function News({ navigation }) {
  const [news, setNews] = useState([
    {
      title: "Google is redefining mobile with artificial intelligence ",
      author: "Owen Williams",
      date: "01.01.1991",
      image: require("../assets/11222370.jpg"),
      description: `At Google’s annual developer conference in Mountain View today, the company took the wraps off the next version of Android. It’s not named yet, so simply called ‘P’ but what is clear is that Google is executing on its clear lead in AI across every surface it develops for.
      Today, we saw how Google is redefining mobile with machine learning at its core. Let’s take a quick look at how it’s redefining Android, and what that means for the future of mobile.`,
      secondImage: require("../assets/Polet-na-vozdushnom-share-v-Moskve-Adresa-i-Ceny.jpg"),
      commentsNumber: 23,
      viewsNumber: 40,
    },
    {
      title: "Sunlight",
      author: "Owen Williams",
      date: "01.01.1991",
      image: require("../assets/10848.jpg"),
    },
    {
      title: "Cutie",
      author: "Owen Williams",
      date: "01.01.1991",
      image: require("../assets/1592202511_1.jpg"),
    },
    {
      title: "Cutie",
      author: "Owen Williams",
      date: "01.01.1991",
      image: require("../assets/1592202511_1.jpg"),
    },
    {
      title: "Cutie",
      author: "Owen Williams",
      date: "01.01.1991",
      image: require("../assets/1592202511_1.jpg"),
    },
    {
      title: "Cutie",
      author: "Owen Williams",
      date: "01.01.1991",
      image: require("../assets/1592202511_1.jpg"),
    },
    {
      title: "Cutie",
      author: "Owen Williams",
      date: "01.01.1991",
      image: require("../assets/1592202511_1.jpg"),
    },
  ]);

  return (
    <View>
      <View style={style.Header}>
        <TouchableOpacity>
          <Feather name="menu" size={24} color="black" />
        </TouchableOpacity>
        <Text style={style.headerText}>Coinstelly</Text>
        <TouchableOpacity>
          <AntDesign name="bells" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <FlatList
        style={style.Background}
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("NewsDetails", item);
            }}
          >
            <View style={style.NewsButton}>
              <View style={style.firstSection}>
                <Text style={style.NewsButtonTitle}>{item.title}</Text>
                <Text style={style.NewsButtonAuthor}>{item.author}</Text>
                <Text style={style.NewsButtonDate}>{item.date}</Text>
              </View>
              <View style={style.NewsButtonImageStyle}>
                <Image source={`${item.image}`} style={style.NewsButtonImage} />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
