import React, { useState } from 'react';
import Stepper from "react-native-stepper-ui";
import { View, Alert, Text } from "react-native";
import ProductList from './Steppr/ProductList';
import Address from './Steppr/Address';
import Payment from './Steppr/Payment';


const content = [
  <ProductList title="Step 1" />,
  <Address title="Step 2" />,
  <Payment title="Step 3" />,
];
function CartProduct(props) {
  const [active, setActive] = useState(0);
  return (
    <View style={{marginVertical: 80, marginHorizontal: 20}}>
      <Stepper
        active={active}
        content={content}
        onNext={() => setActive(p => p + 1)}
        onBack={() => setActive(p => p - 1)}
        onFinish={() => Alert.alert('Finish')}
      />
    </View>
  );
}

export default CartProduct;
