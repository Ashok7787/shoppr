import React, {useRef, useState} from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';

import MainHeader from '../../Navigation/MainHeader';
import externalStyle from '../../style/externalStyle';
import AllProducts from '../Products/AllProducts';
import CategoryHeader from '../Products/Category/CategoryHeader';

function Home(props) {
  const drawer = useRef(null);
  const [drawerView, setDrawerView] = useState(false);
  const [drawerPosition, setDrawerPosition] = useState('left');
  const changeDrawerPosition = () => {
    if (drawerPosition === 'left') {
      setDrawerPosition('right');
    } else {
      setDrawerPosition('left');
    }
  };
 // console.warn(drawerView);
  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => {
          drawer.current.closeDrawer();
        }}
      />
    </View>
  );
  const navigate = props.navigation.navigate;

  return (
    <>
      {/* <MainHeader drawer={drawer} drawerView={drawerView} /> */}
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={navigationView}>
        <View style={styles.container}>
          <View 
          style={{
            margin:5,
            padding:5
          }}
          >
            <CategoryHeader />
          </View>
          <View>
            <AllProducts />
          </View>
        </View>
      </DrawerLayoutAndroid>
    </>
  );
}

export default Home;

const styles = StyleSheet.create({
  createButton: {
    marginTop: '15%',
    alignItems: 'center',
  },
  ongoingButton: {
    marginTop: '3%',
    alignItems: 'center',
  },
  libraryButton: {
    marginTop: '3%',
    alignItems: 'center',
  },
  reportButton: {
    marginTop: '60%',
    marginLeft: '-9%',
  },
  profileButton: {
    marginTop: '3%',
    alignItems: 'center',
  },
  commonButton: {
    marginTop: '3%',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 10,
    width: Dimensions.get('window').width / 1,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
});
