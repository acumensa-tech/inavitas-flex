import React from "react";
import { Grid, Row, Col, Card, CardItem, Text } from "native-base";
import theme from "../../../ColorCommon";
import ComponentStat from "./Component";
export default class InstantConsumption extends React.PureComponent {
  render() {
    return (
      <Grid style={{ height: 200, marginRight: -5, marginVertical: 32 }}>
        <Row style={{ height: 105 }}>
          <Col>
            <ComponentStat
              color={theme.brandPurple}
              itemName="Day"
              unitsInkW={this.props.day}
            />
          </Col>
          <Col>
            <ComponentStat
              color={theme.brandBlue}
              itemName="Week"
              unitsInkW={this.props.week}
            />
          </Col>
        </Row>
        <Row style={{ height: 105 }}>
          <Col>
            <ComponentStat
              color={theme.brandBlueLight}
              itemName="Month"
              unitsInkW={this.props.month}
            />
          </Col>
          <Col>
            <ComponentStat
              color={theme.brandGreen}
              itemName="Year"
              unitsInkW={this.props.year}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}
