import {
  Pressable,
  VStack,
  Text,
  Row,
  Box,
  Image,
  Switch,
  ScrollView,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {LayoutAnimation} from 'react-native';
import React, {useState} from 'react';
import {StackAndTabType} from 'routes/private/types';
import {IMAGES} from '~/assets';
import {AppIcon} from '~/components/core';
export default function CustomDrawer() {
  const {navigate} = useNavigation<StackAndTabType>();
  const [selectMenu, setSelectMenu] = useState('');
  const [menuIndex, setMenuIndex] = useState<any>(-1);

  const Drawer = [
    {
      id: '1',
      name: 'ManageMent',
      title: 'Dashboard',
      icon1: <AppIcon AntDesignName="appstore1" size={19} color={'#FFFF'} />,
      onPress: () => {
        navigate('Home');
      },
    },
    {
      id: '9',
      title: 'Modules',
      icon1: (
        <AppIcon MaterialIconsName="burst-mode" size={19} color={'#ffff'} />
      ),
      onPress: () => {},
    },
    {
      id: '109',
      title: 'Process',
      icon1: <AppIcon FontAwesome5Name="sync-alt" size={19} color={'#ffff'} />,
      onPress: () => {},
    },
    {
      id: '33',
      title: 'Task',
      icon1: <AppIcon FontAwesome5Name="tasks" size={19} color={'#ffff'} />,
      onPress: () => {},
      menuList: [
        {
          id: '11.145465',
          title: 'My Task',
          icon1: (
            <AppIcon
              EntypoName="flickr-with-circle"
              size={19}
              color={'#ffff'}
            />
          ),
          onPress: () => {},
        },
        {
          id: '11453.145465',
          title: 'Track Tasks',
          icon1: (
            <AppIcon
              EntypoName="flickr-with-circle"
              size={19}
              color={'#ffff'}
            />
          ),
          onPress: () => {},
        },
      ],
    },
    {
      id: '45',
      title: 'Form Initiate',
      icon1: <AppIcon FontAwesomeName="wpforms" size={19} color={'#ffff'} />,
      onPress: () => {},
    },
    {
      id: '11',
      title: 'Analytics',
      icon1: (
        <AppIcon
          MaterialCommunityIconsName="google-analytics"
          size={19}
          color={'#ffff'}
        />
      ),
      onPress: () => {},
    },

    {
      id: '34245',
      name: 'Process',
      title: 'System Masters',
      icon1: <AppIcon AntDesignName="paperclip" size={19} color={'#ffff'} />,
      onPress: () => {},
      menuList: [
        {
          id: '132.1',
          title: 'Module Master',
          icon1: (
            <AppIcon
              MaterialIconsName="notifications-none"
              size={19}
              color={'#ffff'}
            />
          ),
          onPress: () => {},
        },
        {
          id: '132.11',
          title: 'Process Master',
          icon1: (
            <AppIcon
              MaterialIconsName="notifications-none"
              size={19}
              color={'#ffff'}
            />
          ),
          onPress: () => {},
        },
        {
          id: '132.12',
          title: 'Task Master',
          icon1: (
            <AppIcon
              MaterialIconsName="notifications-none"
              size={19}
              color={'#ffff'}
            />
          ),
          onPress: () => {},
        },
        {
          id: '132.123',
          title: 'Doer Master',
          icon1: (
            <AppIcon
              MaterialIconsName="notifications-none"
              size={19}
              color={'#ffff'}
            />
          ),
          onPress: () => {},
        },
        {
          id: '132.122',
          title: 'Input Master',
          icon1: (
            <AppIcon
              MaterialIconsName="notifications-none"
              size={19}
              color={'#ffff'}
            />
          ),
          onPress: () => {},
        },
        {
          id: '132.133',
          title: 'Form Master',
          icon1: (
            <AppIcon
              MaterialIconsName="notifications-none"
              size={19}
              color={'#ffff'}
            />
          ),
          onPress: () => {},
        },
        {
          id: '132.1334',
          title: 'LN Master',
          icon1: (
            <AppIcon
              MaterialIconsName="notifications-none"
              size={19}
              color={'#ffff'}
            />
          ),

          onPress: () => {},
        },
        {
          id: '132.1653',
          title: 'Ticket Master',
          icon1: (
            <AppIcon
              MaterialIconsName="notifications-none"
              size={19}
              color={'#ffff'}
            />
          ),
          onPress: () => {},
        },
      ],
    },
    {
      id: '342.45',
      title: 'Business Masters',
      icon1: (
        <AppIcon MaterialIconsName="food-bank" size={19} color={'#ffff'} />
      ),
      onPress: () => {},
      menuList: [
        {
          id: '13.45653',
          title: 'Project Master',
          icon1: (
            <AppIcon
              MaterialIconsName="notifications-none"
              size={19}
              color={'#ffff'}
            />
          ),
          onPress: () => {},
        },
        {
          id: '13.31653',
          title: 'Employee Master',
          icon1: (
            <AppIcon
              MaterialIconsName="notifications-none"
              size={19}
              color={'#ffff'}
            />
          ),
          onPress: () => {},
        },
        {
          id: '13.51653',
          title: 'Role Master',
          icon1: (
            <AppIcon
              MaterialIconsName="notifications-none"
              size={19}
              color={'#ffff'}
            />
          ),
          onPress: () => {},
        },
        {
          id: '13.71653',
          title: 'Mess Master',
          icon1: (
            <AppIcon
              MaterialIconsName="notifications-none"
              size={19}
              color={'#ffff'}
            />
          ),
          onPress: () => {},
        },
        {
          id: '13.81653',
          title: 'Tender Master',
          icon1: (
            <AppIcon
              MaterialIconsName="notifications-none"
              size={19}
              color={'#ffff'}
            />
          ),
          onPress: () => {},
        },
        {
          id: '13.01653',
          title: 'Vendor Master',
          icon1: (
            <AppIcon
              MaterialIconsName="notifications-none"
              size={19}
              color={'#ffff'}
            />
          ),
          onPress: () => {},
        },
        {
          id: '13.41683',
          title: 'Bank Master',
          icon1: (
            <AppIcon
              MaterialIconsName="notifications-none"
              size={19}
              color={'#ffff'}
            />
          ),
          onPress: () => {},
        },
        {
          id: '13.953',
          title: 'Address Master',
          icon1: (
            <AppIcon
              MaterialIconsName="notifications-none"
              size={19}
              color={'#ffff'}
            />
          ),
          onPress: () => {},
        },
      ],
    },
    {
      id: '16',
      title: 'Notification',
      icon1: (
        <AppIcon
          MaterialIconsName="notifications-none"
          size={19}
          color={'#ffff'}
        />
      ),
      onPress: () => {},
      menuList: [
        {
          id: '16.1',
          title: 'My Notification',
          icon1: (
            <AppIcon
              MaterialIconsName="notifications-none"
              size={19}
              color={'#ffff'}
            />
          ),
          onPress: () => {},
        },
        {
          id: '16.2',
          title: 'Scheduled Notification',
          icon1: (
            <AppIcon
              MaterialIconsName="notifications-none"
              size={19}
              color={'#ffff'}
            />
          ),
          onPress: () => {},
        },
      ],
    },
    {
      id: '15',
      title: 'Seek Help',
      name: 'SETTINGS',
      icon1: <AppIcon FontAwesomeName="ticket" size={19} color={'#ffff'} />,
      onPress: () => {},
      menuList: [
        {
          id: '15.2',
          title: 'Create Help',
          icon1: (
            <AppIcon FontAwesomeName="outdent" size={19} color={'#ffff'} />
          ),
          onPress: () => {},
        },
        {
          id: '15.1',
          title: 'View Help',
          icon1: (
            <AppIcon FontAwesomeName="outdent" size={19} color={'#ffff'} />
          ),
          onPress: () => {},
        },
      ],
    },

    {
      id: '19',
      title: 'Logout',
      icon1: (
        <AppIcon FontAwesome5Name="sign-out-alt" size={19} color={'#ffff'} />
      ),
      onPress: () => {},
    },
  ];
  return (
    <Box safeAreaTop>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Row
          shadow={3}
          my={3}
          rounded={10}
          mx={2}
          p={3}
          bg={'#fff'}
          justifyContent={'space-between'}
          alignItems={'center'}>
          <Pressable
            _pressed={{opacity: 0.7}}
            flexDirection={'row'}
            alignItems={'center'}>
            <Image
              h={'12'}
              w={'12'}
              rounded={10}
              source={IMAGES.LOGO}
              alt="LOGO"
              bg={'#fff'}
              resizeMode="contain"
            />
            <Box mx={4}>
              <Text bold>Biswopaban Nayak</Text>
              <Text>I'M Engineer</Text>
            </Box>
          </Pressable>
          <AppIcon EntypoName="dots-three-vertical" size={20} color={'#000'} />
        </Row>
        <Box m={2} rounded={10} bg={'#fff'}>
          {Drawer?.slice(0, 5)?.map((item, index) => (
            <Box key={index} bg={'#fff'} m={1}>
              <Box
                pl={2}
                _text={{
                  py: 2,
                  fontWeight: 'bold',
                }}
                // borderBottomWidth={item?.name ? 1 : 0}
                borderBottomColor={'gray.300'}
                rounded={'5'}
                bg={{
                  linearGradient: {
                    colors: ['#ffff', '#fff'],
                    start: [1, 0],
                    end: [0, 1],
                  },
                }}>
                {item?.name}
              </Box>
              <Pressable
                _pressed={{opacity: 0.7}}
                onPress={
                  item?.menuList
                    ? () => {
                        LayoutAnimation.configureNext(
                          LayoutAnimation.create(
                            100,
                            'easeInEaseOut',
                            'opacity',
                          ),
                        );
                        setMenuIndex(menuIndex === index ? -1 : index);
                        setSelectMenu(item?.id);
                      }
                    : () => {
                        item?.onPress(),
                          setMenuIndex(menuIndex === index ? -1 : index);
                        setSelectMenu(item?.id);
                      }
                }
                borderBottomWidth={'1'}
                borderBottomColor={'orange.50'}
                bg={'#fff'}
                roundedBottom={selectMenu === item?.id ? 5 : '10'}
                overflow={'hidden'}>
                <Row
                  alignItems={'center'}
                  justifyContent={'space-between'}
                  py={1}
                  bg={
                    selectMenu === item?.id
                      ? {
                          linearGradient: {
                            colors: ['#fff', 'blue.100'],
                            start: [0, 1],
                            end: [1, 0],
                          },
                        }
                      : '#ffff'
                  }>
                  <Row alignItems={'center'}>
                    <Box
                      alignItems={'center'}
                      ml={2}
                      size={'9'}
                      rounded={'10'}
                      bg={{
                        linearGradient: {
                          colors: ['rose.600', 'violet.600'],
                          start: [1, 0],
                          end: [0, 1],
                        },
                      }}
                      justifyContent={'center'}>
                      {item?.icon1}
                    </Box>
                    <Text
                      fontSize={'sm'}
                      color={'#000'}
                      px={4}
                      // fontFamily={FONTS[400].normal}
                    >
                      {item?.title}
                    </Text>
                  </Row>
                  {item?.menuList && (
                    <Pressable
                      _pressed={{
                        opacity: 0.5,
                      }}
                      onPress={() => {
                        {
                          setMenuIndex(!menuIndex);
                        }
                      }}>
                      {menuIndex === index ? (
                        <AppIcon
                          style={{paddingRight: 7}}
                          AntDesignName="caretup"
                          color={'#1e40af'}
                          size={14}
                          onPress={() => setMenuIndex(!menuIndex)}
                        />
                      ) : (
                        <AppIcon
                          style={{paddingRight: 7}}
                          AntDesignName="caretdown"
                          color={'#000'}
                          size={14}
                          onPress={() => setMenuIndex(!menuIndex)}
                        />
                      )}
                    </Pressable>
                  )}
                </Row>
                {menuIndex === index && (
                  <Box>
                    {item?.menuList?.map((subMenu: any, index: number) => (
                      <VStack key={index}>
                        <Pressable
                          _pressed={{opacity: 0.7, bg: 'blue.50'}}
                          bg={'#fff'}
                          px={2}
                          onPress={subMenu?.onPress}>
                          <Row
                            ml={5}
                            py={2}
                            px={2}
                            space={3}
                            borderBottomWidth={1}
                            borderBottomColor={'gray.100'}
                            alignItems={'center'}>
                            <AppIcon
                              OcticonsName="dot-fill"
                              size={20}
                              color={'#1e40af'}
                            />
                            <Text
                              fontSize={'sm'}
                              color={'#000'}
                              px={2}
                              // fontFamily={FONTS[400].normal}
                              bold>
                              {subMenu.title}
                            </Text>
                          </Row>
                        </Pressable>
                        {/* <Divider /> */}
                      </VStack>
                    ))}
                  </Box>
                )}
              </Pressable>
            </Box>
          ))}
        </Box>

        {/* Second  */}
        <Box mx={2} my={4} rounded={10} bg={'#fff'}>
          {Drawer?.slice(6, 8)?.map((item, index) => (
            <Box key={index} bg={'#fff'} m={1}>
              <Box
                pl={4}
                mb={2}
                _text={{
                  py: 2,
                  fontWeight: 'bold',
                }}
                borderBottomWidth={item?.name ? 1 : 0}
                borderBottomColor={'gray.300'}
                rounded={'5'}
                bg={{
                  linearGradient: {
                    colors: ['#ffff', '#fff'],
                    start: [1, 0],
                    end: [0, 1],
                  },
                }}>
                {item?.name}
              </Box>
              <Pressable
                _pressed={{opacity: 0.7}}
                onPress={
                  item?.menuList
                    ? () => {
                        LayoutAnimation.configureNext(
                          LayoutAnimation.create(
                            100,
                            'easeInEaseOut',
                            'opacity',
                          ),
                        );
                        setMenuIndex(menuIndex === index ? -1 : index);
                        setSelectMenu(item?.id);
                      }
                    : () => {
                        item?.onPress(),
                          setMenuIndex(menuIndex === index ? -1 : index);
                        setSelectMenu(item?.id);
                      }
                }
                borderBottomWidth={'1'}
                borderBottomColor={'orange.50'}
                bg={'#fff'}
                roundedBottom={selectMenu === item?.id ? 5 : '10'}
                overflow={'hidden'}>
                <Row
                  alignItems={'center'}
                  justifyContent={'space-between'}
                  py={1}
                  bg={
                    selectMenu === item?.id
                      ? {
                          linearGradient: {
                            colors: ['#fff', 'blue.100'],
                            start: [0, 1],
                            end: [1, 0],
                          },
                        }
                      : '#ffff'
                  }>
                  <Row alignItems={'center'}>
                    <Box
                      alignItems={'center'}
                      ml={2}
                      size={'9'}
                      rounded={'10'}
                      bg={{
                        linearGradient: {
                          colors: ['rose.600', 'violet.600'],
                          start: [1, 0],
                          end: [0, 1],
                        },
                      }}
                      justifyContent={'center'}>
                      {item?.icon1}
                    </Box>
                    <Text
                      fontSize={'sm'}
                      color={'#000'}
                      px={4}
                      // fontFamily={FONTS[400].normal}
                    >
                      {item?.title}
                    </Text>
                  </Row>
                  {item?.menuList && (
                    <Pressable
                      _pressed={{
                        opacity: 0.5,
                      }}
                      onPress={() => {
                        {
                          setMenuIndex(!menuIndex);
                        }
                      }}>
                      {menuIndex === index ? (
                        <AppIcon
                          style={{paddingRight: 7}}
                          AntDesignName="caretup"
                          color={'#1e40af'}
                          size={14}
                          onPress={() => setMenuIndex(!menuIndex)}
                        />
                      ) : (
                        <AppIcon
                          style={{paddingRight: 7}}
                          AntDesignName="caretdown"
                          color={'#000'}
                          size={14}
                          onPress={() => setMenuIndex(!menuIndex)}
                        />
                      )}
                    </Pressable>
                  )}
                </Row>
                {menuIndex === index && (
                  <Box>
                    {item?.menuList?.map((subMenu: any, index: number) => (
                      <VStack key={index}>
                        <Pressable
                          _pressed={{opacity: 0.7, bg: 'blue.50'}}
                          bg={'#fff'}
                          px={2}
                          onPress={subMenu?.onPress}>
                          <Row
                            ml={5}
                            py={2}
                            px={2}
                            space={3}
                            borderBottomWidth={1}
                            borderBottomColor={'gray.100'}
                            alignItems={'center'}>
                            <AppIcon
                              OcticonsName="dot-fill"
                              size={20}
                              color={'#1e40af'}
                            />
                            <Text
                              fontSize={'sm'}
                              color={'#000'}
                              px={2}
                              // fontFamily={FONTS[400].normal}
                              bold>
                              {subMenu.title}
                            </Text>
                          </Row>
                        </Pressable>
                        {/* <Divider /> */}
                      </VStack>
                    ))}
                  </Box>
                )}
              </Pressable>
            </Box>
          ))}
        </Box>
        {/* Third  */}
        <Box mx={2} my={4} rounded={10} bg={'#fff'}>
          {Drawer?.slice(9, 11)?.map((item, index) => (
            <Box key={index} bg={'#fff'} m={1}>
              <Box
                pl={4}
                mb={2}
                _text={{
                  py: 2,
                  fontWeight: 'bold',
                }}
                borderBottomWidth={item?.name ? 1 : 0}
                borderBottomColor={'gray.300'}
                rounded={'5'}
                bg={{
                  linearGradient: {
                    colors: ['#ffff', '#fff'],
                    start: [1, 0],
                    end: [0, 1],
                  },
                }}>
                {item?.name}
              </Box>
              <Pressable
                _pressed={{opacity: 0.7}}
                onPress={
                  item?.menuList
                    ? () => {
                        LayoutAnimation.configureNext(
                          LayoutAnimation.create(
                            100,
                            'easeInEaseOut',
                            'opacity',
                          ),
                        );
                        setMenuIndex(menuIndex === index ? -1 : index);
                        setSelectMenu(item?.id);
                      }
                    : () => {
                        item?.onPress(),
                          setMenuIndex(menuIndex === index ? -1 : index);
                        setSelectMenu(item?.id);
                      }
                }
                borderBottomWidth={'1'}
                borderBottomColor={'orange.50'}
                bg={'#fff'}
                roundedBottom={selectMenu === item?.id ? 5 : '10'}
                overflow={'hidden'}>
                <Row
                  alignItems={'center'}
                  justifyContent={'space-between'}
                  py={1}
                  bg={
                    selectMenu === item?.id
                      ? {
                          linearGradient: {
                            colors: ['#fff', 'blue.100'],
                            start: [0, 1],
                            end: [1, 0],
                          },
                        }
                      : '#ffff'
                  }>
                  <Row alignItems={'center'}>
                    <Box
                      alignItems={'center'}
                      ml={2}
                      size={'9'}
                      rounded={'10'}
                      bg={{
                        linearGradient: {
                          colors: ['rose.600', 'violet.600'],
                          start: [1, 0],
                          end: [0, 1],
                        },
                      }}
                      justifyContent={'center'}>
                      {item?.icon1}
                    </Box>
                    <Text
                      fontSize={'sm'}
                      color={'#000'}
                      px={4}
                      // fontFamily={FONTS[400].normal}
                    >
                      {item?.title}
                    </Text>
                  </Row>
                  {item?.menuList && (
                    <Pressable
                      _pressed={{
                        opacity: 0.5,
                      }}
                      onPress={() => {
                        {
                          setMenuIndex(!menuIndex);
                        }
                      }}>
                      {menuIndex === index ? (
                        <AppIcon
                          style={{paddingRight: 7}}
                          AntDesignName="caretup"
                          color={'#1e40af'}
                          size={14}
                          onPress={() => setMenuIndex(!menuIndex)}
                        />
                      ) : (
                        <AppIcon
                          style={{paddingRight: 7}}
                          AntDesignName="caretdown"
                          color={'#000'}
                          size={14}
                          onPress={() => setMenuIndex(!menuIndex)}
                        />
                      )}
                    </Pressable>
                  )}
                </Row>
                {menuIndex === index && (
                  <Box>
                    {item?.menuList?.map((subMenu: any, index: number) => (
                      <VStack key={index}>
                        <Pressable
                          _pressed={{opacity: 0.7, bg: 'blue.50'}}
                          bg={'#fff'}
                          px={2}
                          onPress={subMenu?.onPress}>
                          <Row
                            ml={5}
                            py={2}
                            px={2}
                            space={3}
                            borderBottomWidth={1}
                            borderBottomColor={'gray.100'}
                            alignItems={'center'}>
                            <AppIcon
                              OcticonsName="dot-fill"
                              size={20}
                              color={'#1e40af'}
                            />
                            <Text
                              fontSize={'sm'}
                              color={'#000'}
                              px={2}
                              // fontFamily={FONTS[400].normal}
                              bold>
                              {subMenu.title}
                            </Text>
                          </Row>
                        </Pressable>
                        {/* <Divider /> */}
                      </VStack>
                    ))}
                  </Box>
                )}
              </Pressable>
            </Box>
          ))}
        </Box>
        <Row
          shadow={3}
          my={3}
          rounded={10}
          mx={2}
          p={3}
          bg={'#fff'}
          justifyContent={'space-between'}
          alignItems={'center'}>
          <Pressable
            _pressed={{opacity: 0.7}}
            alignItems={'center'}
            justifyContent={'center'}
            bg={'yellow.500'}
            w={10}
            rounded={10}
            h={10}>
            <AppIcon IoniconsName="moon" size={26} color={'#ffff'} />
          </Pressable>
          <Box mx={4}>
            <Text bold>Dark Mode</Text>
          </Box>
          <Switch defaultIsChecked colorScheme="emerald" />
        </Row>
      </ScrollView>
    </Box>
  );
}
