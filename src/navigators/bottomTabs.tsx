import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

import {screen} from '../utils/constants';
import images from '../assets/images';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useColors} from '../constants/color';
import {getGlobalStyles} from '../constants/GlobalStyle';
import {useSizes} from '../constants/size';
import icons from '../assets/icons';

function getTabIcon(label, isFocused) {
  switch (label) {
    case 'Home':
      return icons[isFocused ? 'hometabactive' : 'hometabinactive'];
      break;
    case 'Bookings':
      return icons[isFocused ? 'bookingstabactive' : 'bookingstabinactive'];
      break;
    case 'Message':
      return icons[isFocused ? 'messagestabactive' : 'messagestabinactive'];
      break;

    case 'Profile':
      return icons[isFocused ? 'profiletabactive' : 'profiletabinactive'];
      break;

    default:
      break;
  }
}

export const bottomBarHeight = screen.height * 0.1;

export default function MyTabBar({state, descriptors, navigation}) {
  const insets = useSafeAreaInsets();
  const {styles, sizes, colors} = useStyles();

  return (
    <View
      style={[
        styles.container,
        {
          position: 'absolute',
          bottom: 0,
          paddingBottom: insets.bottom,
        },
      ]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={label}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tab}>
            <Image
              source={getTabIcon(label, isFocused)}
              style={{
                width: sizes.WIDTH * 0.07,
                height: sizes.WIDTH * 0.07,
              }}
            />
            <Text
              style={[
                styles.tabText,
                {
                  color: isFocused ? colors.BLACK : colors.LIGHT_GRAY200,
                },
              ]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const useStyles = () => {
  const colors = useColors();
  const sizes = useSizes();
  const globalStyles = getGlobalStyles(colors, sizes);
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: colors.WHITE,
      height: bottomBarHeight,
      width: screen.width,
      alignSelf: 'center',
      justifyContent: 'space-between',
      paddingTop: screen.height * 0.015,
      paddingHorizontal: screen.width * 0.1,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.51,
      shadowRadius: 13.16,

      elevation: 20,
    },
    tab: {
      // width: screen.width * 0.25,
      // backgroundColor: 'red',
      marginHorizontal: screen.width * 0.01,
      alignItems: 'center',
    },
    tabIcon: {
      width: screen.width * 0.055,
      height: screen.width * 0.055,
      marginBottom: screen.height * 0.005,
    },
    tabText: {
      fontSize: screen.width * 0.03,
    },
  });
  return {
    colors,
    sizes,
    styles,
  };
};
