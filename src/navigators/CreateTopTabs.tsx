import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import {useSizes} from '../constants/size';
import {useColors} from '../constants/color';

const Tab = createMaterialTopTabNavigator();

const TopTabOption = ({title, isFocused, sizes, colors}: any) => {
  return (
    <Text
      style={{
        // alignSelf: 'center',
        fontWeight: isFocused ? 'bold' : 'normal',
        width: sizes.WIDTH * 0.4,
        color: isFocused ? colors.PRIMARY : colors.GRAY,
        fontSize: sizes.WIDTH * 0.04,
        marginLeft: -sizes.WIDTH * 0.06,
      }}>
      {title}
    </Text>
  );
};

type Props = {
  screens: {
    name: string;
    label: string;
    Component: any;
  }[];
  initialRouteName: string;
};

const CreateTopTabs = ({screens, initialRouteName}: Props) => {
  const sizes = useSizes();
  const colors = useColors();
  return (
    <Tab.Navigator
      initialRouteName={initialRouteName}
      tabBarPosition="top"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: sizes.HEIGHT * 0.08,
          backgroundColor: colors.BACKGROUND,
        },
        animationEnabled: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.PRIMARY,
          height: sizes.HEIGHT * 0.002,
        },
        tabBarContentContainerStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          height: sizes.HEIGHT * 0.08,
        },
      }}>
      {screens.map(({name, Component, label}) => (
        <Tab.Screen
          key={name}
          name={label ? label : name}
          component={Component}
          options={{
            tabBarIcon: ({focused}) => (
              <TopTabOption
                isFocused={focused}
                title={label ? label : name}
                sizes={sizes}
                colors={colors}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default CreateTopTabs;
