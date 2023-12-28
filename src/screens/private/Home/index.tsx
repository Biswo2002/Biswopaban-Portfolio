import {DrawerActions, useNavigation} from '@react-navigation/native';
import {
  Box,
  Button,
  Center,
  FlatList,
  Image,
  Pressable,
  Row,
  ScrollView,
  Text,
} from 'native-base';
import React from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {IMAGES} from '~/assets';
import {PrivateContainer} from '~/components/containers';
import {AppIcon} from '~/components/core';
import Header from '~/components/core/Header';
export default function Index() {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const {dispatch} = useNavigation();
  return (
    <Box safeAreaTop bg={'#ffff'} flex={1}>
      <Header />
      <ScrollView>
        <Center>
          <Image
            // source={IMAGES.LOGO2}
            source={{
              uri: 'https://img.freepik.com/free-photo/view-3d-businessman_23-2150709832.jpg?t=st=1703704849~exp=1703708449~hmac=60754897320e4a642e9ad84a04eb3b031c27991c3ad9780bfdfa9328c22f6e52&w=740',
            }}
            w={width}
            h={height / 1.8}
            resizeMode="contain"
            roundedBottom={10}
            alt={'BISWOPABAN NAYAK'}
          />
        </Center>

        <Box bg={'#fff'} shadow={5} flex={1} mt={-20} roundedTop={24}>
          <Box
            p={4}
            borderBottomWidth={1}
            borderBottomColor={'blue.600'}
            borderStyle={'dashed'}
            _text={{
              fontSize: '22',
              color: 'gray.900',
              fontWeight: 'bold',
            }}>
            Biswopaban Nayak
            <Text fontSize={16} pt={2} bold color={'gray.600'}>
              Application Developers !
            </Text>
          </Box>
          <Row justifyContent={'space-between'} alignItems={'center'} m={4}>
            <Box>
              <Text textAlign={'left'} color={'#000'} ml={4} fontSize={16}>
                Can I help you?
              </Text>
              <Text bold color={'#000'} ml={4} fontSize={18}>
                Let's work?
              </Text>
            </Box>
            <Button
              w={width / 2.7}
              h={12}
              colorScheme={'secondary'}
              rounded={12}
              _text={{
                fontSize: 'md',
                fontWeight: 'bold',
              }}>
              Contact me
            </Button>
          </Row>
          <Box mx={1.5}>
            <FlatList
              data={Array(3)?.fill('')}
              horizontal={true}
              renderItem={({item, index}) => (
                <Box
                  bg={
                    index === 0
                      ? '#F197BC'
                      : index === 1
                      ? '#7CC8D2'
                      : index === 2
                      ? '#A9BDF2'
                      : 'rose.600'
                  }
                  w={width / 2.5}
                  h={height / 6}
                  // justifyContent={'center'}
                  rounded={16}
                  my={2}
                  mx={2}>
                  <Box mx={4} my={5}>
                    {index === 0 ? (
                      <AppIcon
                        MaterialIconsName="work-outline"
                        size={40}
                        color={'#fff'}
                      />
                    ) : index === 1 ? (
                      <AppIcon EntypoName="v-card" size={40} color={'#fff'} />
                    ) : (
                      index === 2 && (
                        <AppIcon
                          MaterialCommunityIconsName="message-flash"
                          size={40}
                          color={'#fff'}
                        />
                      )
                    )}
                  </Box>
                  <Text
                    textAlign={'left'}
                    bold
                    color={'#fff'}
                    ml={4}
                    fontSize={18}>
                    {index === 0
                      ? 'Know my work'
                      : index === 1
                      ? 'about me'
                      : index === 2 && 'where i am'}
                  </Text>
                </Box>
              )}
            />
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
}
