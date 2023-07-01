import React,{useRef, useState} from 'react';
import AllProducts from '../Products/AllProducts';
import MainHeader from '../../Navigation/MainHeader';
import CategoryHeader from '../Products/Category/CategoryHeader';
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  View,
  Dimensions,
} from 'react-native';
import HomePageData from './HomePageData';

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
    <StatusBar backgroundColor={'#f0aa4f'} barStyle="light-content" />
      <MainHeader drawer={drawer} drawerView={drawerView} />
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={navigationView}>
        <View
        style={{
          flex: 1,
          marginBottom: 0,
        }}>
        {/* <View>
          <MainHeader />
        </View> */}
        <View
        style=
        {{
         
          height: Dimensions.get('window').height * 0.2,
        }}
        >
          <CategoryHeader />
        </View>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View
            style={{
              padding: 10,
            }}>
            <HomePageData />
          </View>
          <View>
            <AllProducts />
          </View>
        </ScrollView>
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