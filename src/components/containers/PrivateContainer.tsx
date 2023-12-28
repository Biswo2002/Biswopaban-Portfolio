import {
  DrawerActions,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import {Box, Image, Row, Text} from 'native-base';
import React, {useCallback, useEffect} from 'react';
import {IMAGES} from '~/assets';
import AppIcon, {IconProps} from '../core/AppIcon';
import {Btn} from '../core';

type HeaderProps = React.ComponentProps<typeof Row>;
type titleProps = React.ComponentProps<typeof Text>;
type Props = {
  title?: any;
  icons?: {
    icon?: IconProps;
    onPress?: () => void;
    side: 'LEFT' | 'RIGHT';
    dot?: boolean;
    _btn?: React.ComponentProps<typeof Btn>;
  }[];
  showBars?: boolean;
  _headerProps?: HeaderProps;
  _titleProps?: titleProps;
  shadow?: number;
  marginX?: number;
  iconClr?: string;
  iconBg?: string;
  iconRound?: string;
} & React.ComponentProps<typeof Box>;

export default function PrivateContainer({
  title,
  children,
  icons,
  showBars,
  _headerProps,
  _titleProps,
  shadow,
  marginX,
  iconRound,
  iconBg,
  iconClr,
  ..._box
}: Props) {
  const {canGoBack, dispatch, goBack} = useNavigation();
  const navigation = useNavigation<any>();
  const {openDrawer} = navigation;
  const leftIcon = icons?.find(_ => _.side === 'LEFT');
  const rightIcons = icons?.filter(_ => _.side === 'RIGHT');
  const backIconColor = _titleProps?.color !== 'white' ? 'purple' : 'white';
  // const {data: user, mutate} = useFetch<any>(`users/current/user`);

  // useEffect(() => {
  //   return () => {
  //     mutate();
  //   };
  // }, []);

  return (
    <>
      <Box
        safeAreaTop
        flex={1}
        bg={{linearGradient: {colors: ['white', 'white']}}}
        minH="full"
        {..._box}>
        <Row
          bg="white"
          py={3}
          borderBottomWidth={showBars ? 1 : 0}
          borderBottomColor="gray.200"
          alignItems={'center'}
          justifyContent={'space-between'}
          {..._headerProps}>
          <Row alignItems={'center'}>
            <Btn
              colors={['transparent', 'transparent']}
              onPress={() => {
                if (showBars) return dispatch(DrawerActions.openDrawer());
                if (showBars) return openDrawer();
                if (leftIcon?.onPress) return leftIcon.onPress();
                if (canGoBack()) return goBack();
              }}>
              {showBars ? (
                <AppIcon size={20} color={'#000'} OcticonsName="three-bars" />
              ) : (
                <AppIcon
                  size={22}
                  color={backIconColor}
                  {...(leftIcon?.icon || {
                    AntDesignName: 'arrowleft',
                  })}
                />
              )}
            </Btn>
            {title ? (
              <Text
                color="black"
                fontWeight={'medium'}
                fontSize={'md'}
                {..._titleProps}>
                {title}
              </Text>
            ) : (
              <Image
                source={IMAGES.LOGO}
                resizeMode={'contain'}
                alt="Arvind"
                h={10}
                w="1/2"
              />
            )}
          </Row>
          <Row alignItems={'center'}>
            {rightIcons?.map((_, i) => (
              <React.Fragment key={i}>
                <Btn
                  colors={['white', 'white']}
                  onPress={() => {
                    if (_?.onPress) return _.onPress();
                  }}
                  position={'relative'}
                  bg={iconBg}
                  shadow={shadow}
                  mx={marginX}
                  rounded={iconRound ? iconRound : '8'}
                  {..._._btn}>
                  {/* {Boolean(user?._count?.notifications) && ( */}
                  <Box
                    position={'absolute'}
                    top="0"
                    right="3"
                    h={'2'}
                    w={'2'}
                    rounded="full"
                    bg="primary.600"
                  />
                  {/* )} */}
                  <AppIcon
                    size={20}
                    color={iconClr ? iconClr : '#000'}
                    {..._?.icon}
                  />
                </Btn>
              </React.Fragment>
            ))}
          </Row>
        </Row>
        {children}
      </Box>
    </>
  );
}
