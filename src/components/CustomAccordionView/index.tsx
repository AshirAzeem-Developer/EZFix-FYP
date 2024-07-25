import React, {FC, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
// third party
import Accordion from 'react-native-collapsible/Accordion';

// styles
import useStyles from './style';

// local

import images from '../../assets/images';
import icons from '../../assets/icons';

interface Section {
  title: string;
  content: string;
}

type CustomAccordionViewProps = {
  sections: Section[];
};
const CustomAccordionView: FC<CustomAccordionViewProps> = ({sections}) => {
  // style
  const {styles, sizes, colors} = useStyles();

  // state
  const [activeSections, setActiveSections] = useState<number[]>([]);

  const renderHeader = (section: Section) => (
    <View style={styles.header}>
      <Text style={styles.headerText}>{section.title}</Text>
      <Image source={icons.CHEVRON} />
    </View>
  );

  const renderContent = (section: Section) => (
    <View style={styles.content}>
      <Text style={styles.contentTxt}>{section.content}</Text>
    </View>
  );

  const updateSections = (activeSections: number[]) => {
    setActiveSections(activeSections);
  };

  return (
    <Accordion
      underlayColor={colors.WHITE}
      sections={sections}
      activeSections={activeSections}
      renderHeader={renderHeader}
      renderContent={renderContent}
      onChange={updateSections}
    />
  );
};

export default CustomAccordionView;
