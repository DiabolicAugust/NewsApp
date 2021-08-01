import React from "react";
import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const style = StyleSheet.create({
  Background: {
    width: "100%",
    height: "100%",
    backgroundColor: "#e6e6e6",
  },
  Header: {
    marginTop: getStatusBarHeight(),
    justifyContent: "center",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 70,
    backgroundColor: "white",
    flexDirection: "row",
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  headerText: {
    fontFamily: "Dancing",
    fontSize: 30,
  },
  NewsButton: {
    marginHorizontal: 15,
    marginTop: 10,
    backgroundColor: "white",
    height: 160,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.2,
    shadowRadius: 9.11,

    elevation: 14,
  },
  firstSection: {
    width: 215,
  },
  NewsButtonTitle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 15,
    paddingHorizontal: 15,
  },
  NewsButtonAuthor: {
    color: "darkorange",
    fontSize: 14,
    paddingLeft: 15,
    paddingTop: 15,
  },
  NewsButtonDate: { paddingLeft: 15, paddingBottom: 15 },
  NewsButtonImageStyle: {
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 20,
  },
  NewsButtonImage: {
    width: 128,
    height: 128,
  },
  DetailsMain: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
    marginHorizontal: 15,
    marginTop: 15,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  DetailsTitle: {
    fontSize: 28,
    marginVertical: 20,
    marginHorizontal: 25,
    fontFamily: "BalsamiqBold",
  },
  DetailsDescription: {
    color: "grey",
    fontSize: 16,
    marginHorizontal: 25,
    fontFamily: "BalsamiqReg",
  },
  DetailsAuthor: {
    marginHorizontal: 25,
    fontSize: 14,
    color: "#cc4a30",
  },
  DetailsDate: {
    fontFamily: "BalsamiqReg",
    fontSize: 15,
    color: "grey",
    marginHorizontal: 25,
    marginBottom: 50,
  },
  DetailsImage: {
    marginHorizontal: 25,
    marginVertical: 20,
    width: 310,
    height: 200,
  },
});
