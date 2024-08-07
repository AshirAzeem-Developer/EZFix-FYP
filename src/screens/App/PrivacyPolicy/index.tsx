import React, {useEffect, useRef, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';

import useStyles from './style';

import {ParentView} from '../../../components/common/ParentView/ParentView';

import Header from '../../../components/AppHeader';
import CustomAccordionView from '../../../components/CustomAccordionView';

interface Section {
  title: string;
  content: string;
}

const SECTIONS: Section[] = [
  {
    title: 'Introduction',
    content:
      'The "Policy Terms and Conditions" section of your car insurance document outlines the specific rules, provisions, and contractual agreements between you (the policyholder) and the insurance company. It is essential to read and understand this section thoroughly, as it governs the terms of your insurance coverage. Below is a general outline of the content you might find in the "Policy Terms and Conditions" of your car insurance:',
  },
  {
    title: 'Information Collected',
    content:
      'The "Policy Terms and Conditions" section of your car insurance document outlines the specific rules, provisions, and contractual agreements between you (the policyholder) and the insurance company. It is essential to read and understand this section thoroughly, as it governs the terms of your insurance coverage. Below is a general outline of the content you might find in the "Policy Terms and Conditions" of your car insurance:',
  },
  {
    title: 'Use of Information',
    content:
      'The "Policy Terms and Conditions" section of your car insurance document outlines the specific rules, provisions, and contractual agreements between you (the policyholder) and the insurance company. It is essential to read and understand this section thoroughly, as it governs the terms of your insurance coverage. Below is a general outline of the content you might find in the "Policy Terms and Conditions" of your car insurance:',
  },
  {
    title: 'Data Security',
    content:
      'The "Policy Terms and Conditions" section of your car insurance document outlines the specific rules, provisions, and contractual agreements between you (the policyholder) and the insurance company. It is essential to read and understand this section thoroughly, as it governs the terms of your insurance coverage. Below is a general outline of the content you might find in the "Policy Terms and Conditions" of your car insurance:',
  },
  {
    title: 'Data Sharing',
    content:
      'The "Policy Terms and Conditions" section of your car insurance document outlines the specific rules, provisions, and contractual agreements between you (the policyholder) and the insurance company. It is essential to read and understand this section thoroughly, as it governs the terms of your insurance coverage. Below is a general outline of the content you might find in the "Policy Terms and Conditions" of your car insurance:',
  },
  {
    title: 'User Rights',
    content:
      'The "Policy Terms and Conditions" section of your car insurance document outlines the specific rules, provisions, and contractual agreements between you (the policyholder) and the insurance company. It is essential to read and understand this section thoroughly, as it governs the terms of your insurance coverage. Below is a general outline of the content you might find in the "Policy Terms and Conditions" of your car insurance:',
  },
  {
    title: 'Data Retention',
    content:
      'The "Policy Terms and Conditions" section of your car insurance document outlines the specific rules, provisions, and contractual agreements between you (the policyholder) and the insurance company. It is essential to read and understand this section thoroughly, as it governs the terms of your insurance coverage. Below is a general outline of the content you might find in the "Policy Terms and Conditions" of your car insurance:',
  },
  {
    title: 'Cookies and Tracking Technologies',
    content:
      'The "Policy Terms and Conditions" section of your car insurance document outlines the specific rules, provisions, and contractual agreements between you (the policyholder) and the insurance company. It is essential to read and understand this section thoroughly, as it governs the terms of your insurance coverage. Below is a general outline of the content you might find in the "Policy Terms and Conditions" of your car insurance:',
  },
];

export default function PrivacyPolicy({navigation}: any) {
  const {styles, sizes, colors} = useStyles();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <ParentView style={styles.container}>
      <Header leftIconAction={() => navigation.goBack()} />
      <Text style={styles.privacyPolHeading}>Privacy Policy</Text>
      <ScrollView>
        <View style={styles.ppContainer}>
          <Text style={styles.ppHeading}>
            Privacy Policy Terms and Conditions
          </Text>
          <Text style={styles.ppDec}>
            The "Policy Terms and Conditions" section of your car insurance
            document outlines the specific rules, provisions, and contractual
            agreements between you (the policyholder) and the insurance company.
            It is essential to read and understand this section thoroughly, as
            it governs the terms of your insurance coverage. Below is a general
            outline of the content you might find in the "Policy Terms and
            Conditions" of your car insurance:
          </Text>
        </View>
        <View>
          <CustomAccordionView sections={SECTIONS} />
        </View>
      </ScrollView>
    </ParentView>
  );
}
