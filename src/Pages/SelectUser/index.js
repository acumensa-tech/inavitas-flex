import React from "react";
import { FlatList } from "react-native";
import { Container, Text, ListItem, View } from "native-base";
import { populateData } from "../../data";
import theme from "../../../ColorCommon";
import Background from "../../Components/Background";
export default class Graphics extends React.PureComponent {
  render() {
    return (
      <Container style={{ justifyContent: "center", flex: 1 }}>
        <Background />
        <View
          style={{
            flex: 1.5,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              backgroundColor: "transparent",
              fontSize: 36,
              fontWeight: "bold",
              color: theme.brandRed,
              marginBottom: 50
            }}
          >
            Demo mode
          </Text>
          <Text
            style={{
              backgroundColor: "transparent",
              fontSize: 36,
              fontWeight: "bold",
              color: theme.brandBlueLight
            }}
          >
            Select user
          </Text>
        </View>
        <View style={{ flex: 2, justifyContent: "center" }}>
          <FlatList
            data={this.props.users}
            renderItem={({ item, index }) => (
              <ListItem
                style={{
                  height: 50,
                  paddingLeft: 45,
                  borderBottomWidth: 0,
                  marginHorizontal: 16,
                  marginBottom: 16,
                  backgroundColor: "rgba(0,0,50,0.6)"
                }}
                onPress={() => {
                  populateData(index);
                  this.props.navigation.navigate("MainDrawer");
                }}
              >
                <Text
                  style={{
                    backgroundColor: "transparent",
                    fontSize: 22,
                    fontWeight: "bold",
                    color: theme.brandSeconday
                  }}
                >
                  {item.Name}
                </Text>
              </ListItem>
            )}
            keyExtractor={(item, index) => index}
          />
        </View>
      </Container>
    );
  }
}
