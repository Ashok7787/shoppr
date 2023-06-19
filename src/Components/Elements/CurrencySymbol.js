import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text } from "react-native-elements";

class CurrencySymbol extends Component {
  render() {
    const { currencyType } = this.props;
    return (
      <>
        {currencyType === "USD" && (
          <Text >US&#36;</Text>
        )}
        {currencyType === "EUR" && (
          <Text >&euro;</Text>
        )}
        {currencyType === "GBP" && (
          <Text >&#163;</Text>
        )}
        {currencyType === "INR" && (
          <Text >&#x20b9; </Text>
        )}
        {currencyType === "AUD" && (
          <Text >AU&#36; </Text>
        )}
        {currencyType === "CAD" && (
          <Text >CA&#36; </Text>
        )}
        {currencyType === "SGD" && (
          <Text >SG&#36; </Text>
        )}
      </>
    );
  }
}
CurrencySymbol.propTypes = {
  currencyType: PropTypes.string.isRequired,
};
export default CurrencySymbol;
