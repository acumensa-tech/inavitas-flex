import React from "react";
import { Image, FlatList } from "react-native";
import {
  Container,
  Text,
  Left,
  Right,
  Icon,
  View,
  Button,
  ListItem
} from "native-base";
import PropTypes from "prop-types";
import theme from "../ColorCommon";
import Background from "./Components/Background";
const data = [
  {
    name: "Dashboard",
    route: "Dashboard",
    icon: require("../Assets/menu-dashboard.png")
  },
  {
    name: "Sub Units",
    route: "SubUnits",
    icon: require("../Assets/menu-subunits.png")
  },
  {
    name: "Graphics",
    route: "Graphics",
    icon: require("../Assets/menu-graphics.png")
  },
  {
    name: "Alarms",
    route: "Alarms",
    icon: require("../Assets/menu-alarms.png")
  },
  {
    name: "Reports",
    icon: require("../Assets/menu-reports.png")
  },
  {
    name: "Settings",
    icon: require("../Assets/menu-settings.png")
  },
  {
    name: "Log Out",
    icon: require("../Assets/menu-signout.png")
  }
];
export default class Sidebar extends React.PureComponent {
  render() {
    return (
      <Container
        style={{
          backgroundColor: theme.brandBlack,
          borderLeftWidth: 2,
          borderLeftColor: theme.brandBlueLight
        }}
      >
        <Background />
        <View
          style={{
            height: "25%",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 16
          }}
        >
          <Image
            source={require("../Assets/avatar1.jpg")}
            style={{ width: 120, height: 120, borderRadius: 60 }}
          />
          <Text
            style={{
              backgroundColor: "transparent",
              fontSize: 22,
              fontWeight: "bold",
              color: theme.brandSeconday
            }}
          >
            {this.props.userData.Name + " " + this.props.userData.Surname}
          </Text>
        </View>
        <FlatList
          renderToHardwareTextureAndroid
          style={{ marginTop: 28 }}
          data={data}
          renderItem={({ item }) => (
            <ListItem
              style={{
                backgroundColor: "transparent",
                borderBottomWidth: 1,
                borderBottomColor: "rgba(255,255,255,0.1)",
                marginRight: 10
              }}
            >
              <Button
                transparent
                onPress={() => {
                  this.props.navigation.navigate(item.route);
                  this.props.navigation.navigate("DrawerClose");
                }}
                style={{
                  justifyContent: "space-between",
                  width: "100%",
                  alignSelf: "center"
                }}
                iconRight
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: theme.brandGray,
                    fontWeight: "400"
                  }}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  allowFontScaling
                >
                  {item.name}
                </Text>
                <Image
                  source={item.icon}
                  style={{
                    width: 50,
                    height: 50
                  }}
                />
              </Button>
            </ListItem>
          )}
          keyExtractor={(item, index) => index}
        />
      </Container>
    );
  }
}
Sidebar.defaultProps = {};
Sidebar.propTypes = {
  coverImage: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  releaseDate: PropTypes.string
};
