import {StyleSheet, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Box, Image, Pressable, Row, Text} from 'native-base';
import React from 'react';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {COLORS} from '~/styles';
import {IMAGES} from '~/assets';
const Header = () => {
  const {dispatch} = useNavigation();
  return (
    <Box safeArea>
      <Box bgColor={'blue.800'}>
        <Row
          justifyContent={'space-between'}
          alignItems={'center'}
          m={'2'}
          ml={'4'}
          mr={'4'}>
          <Pressable onPress={() => dispatch(DrawerActions.openDrawer())}>
            <AntDesign name="bars" size={30} color={'#fff'} />
          </Pressable>
          <Text textAlign={'left'} color={'#fff'} fontSize={16}>
            Home
          </Text>
          <TouchableOpacity>
            <Image
              source={IMAGES.LOGO1}
              width={'9'}
              height={'9'}
              resizeMode="contain"
              borderRadius={'30'}
              alt="LOGO"
            />
          </TouchableOpacity>
        </Row>
      </Box>
    </Box>
  );
};

export default Header;

const styles = StyleSheet.create({});
