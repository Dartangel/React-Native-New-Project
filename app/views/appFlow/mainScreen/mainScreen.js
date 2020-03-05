import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import styles from './style';
import { titles } from '../../../services/constants/index';
import IconComponent from '../../../components/iconComponent/index';
import SliderComponent from '../../../components/sliderComponent/index';
import { images } from '../../../services/utils';
import { items, headers } from '../../../../__mocks__/temp'
import Header from './components/header/header';
import MenuItems from './components/menuItems';


const MainScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRows}>
        <View style={styles.headerMainTile}>
          <Text style={styles.headerTitle}>{titles.HEADER}</Text>
        </View>
        <View style={styles.headerIconOne}>
          <TouchableOpacity >
            <IconComponent name={'weather-lightning'} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerIconTwo}>
          <TouchableOpacity>
            <IconComponent name={'lighthouse'} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{ flex: 0.9 }}>
        <View>
          <View style={styles.sliderView}>
            <ScrollView style={{ width: '100%', height: 200 }} horizontal>
              <SliderComponent source={images.img} />
              <SliderComponent source={images.img2} />
            </ScrollView>
          </View>
          {headers.map(({ text }) => {
            return (
              <>
                <Header header={text} />
                <MenuItems title={items} />
              </>
            )
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default MainScreen;