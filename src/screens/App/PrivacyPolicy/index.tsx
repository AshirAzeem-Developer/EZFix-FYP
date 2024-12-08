import React, {useEffect, useRef, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';

import useStyles from './style';

import {ParentView} from '../../../components/common/ParentView/ParentView';

import Header from '../../../components/Header';
import CustomAccordionView from '../../../components/CustomAccordionView';

interface Section {
  title: string;
  content: string;
}

const SECTIONS: Section[] = [
  {
    title: 'Building a Trusted Service Network',
    content:
      `At EZFix, we recognize the importance of connecting people seamlessly and effectively. Our app supports two roles: Service Seekers and Service Providers, fostering a platform where needs meet expertise.`
  },
  {
    title: 'How We Use the Data',
    content: `Service Seekers: Your data helps provide personalized recommendations, suggest top-rated providers, and enable seamless communication.\nService Providers: Your information is shared with seekers to increase visibility and connect you with clients based on their needs.
    `,
  },
  {
    title: 'Secure Data Storage',
    content: `Your data is stored securely and accessible only to authorized personnel.\nRestricted Access: Only administrators with necessary permissions can access sensitive user data.\nStorage Mechanisms: We use secure servers with encryption protocols to protect your information against unauthorized access.\nPeriodic Audits: Regular audits are conducted to ensure compliance with data protection standards.
    `,
  },
  {
    title: 'Advanced Protection Measures',
    content:
    `We prioritize your privacy with advanced security measures.\nEncryption: All sensitive data is encrypted during transmission and storage.\nFirewalls and Intrusion Detection: Robust firewalls and monitoring systems protect against unauthorized access.\nContinuous Monitoring: Our systems are continuously monitored to detect and prevent security breaches.
`
  },
  {
    title: 'Your Rights as a User',
    content:
     `We provide you full control over your account and personal information.\nView: Access the data associated with your account via the app's profile section.\nUpdate: Edit your details, such as email, phone number, and preferences, anytime.\nDelete: You can permanently delete your account and associated data by submitting a request through the app or contacting us.`
  },
  {
    title: 'Three-Strike Rule for Policy Violations',
    content:
     `To maintain a safe and trustworthy platform, we follow a strict three-strike policy for guideline violations:\nFirst Violation: A warning is issued, notifying the user of the breach.\nSecond Violation: A final warning is given with clear consequences outlined.\nThird Violation: The user's account is blocked for a minimum of 15 days.
Repeated offenses may result in permanent deactivation of the account.`
  },
  {
    title: 'Age Restrictions',
    content:
      'For Service Seekers: There is no age limit for service seekers; anyone with the ability to use the app can benefit from its features. This ensures inclusivity while promoting access to reliable local services for all users.\nFor Service Providers: You must be at least 18 years old to register and provide services through the app. This complies with Pakistan  Employment of Children Act, 1991, ensuring adherence to labor laws and ethical standards.',
  },
  {
    title: 'Privacy Inquiries',
    content:
      'We value your privacy and are committed to addressing your concerns.\nContact Us: For any questions or feedback please feel free to contact us through the Support Section available within the app or reach out via email at ezfix@gmail.com.\nResponse Time: Our support team strives to respond to your inquiries within 24 hours.',
  },
 
];

export default function PrivacyPolicy({navigation}: any) {
  const {styles, sizes, colors} = useStyles();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <ParentView style={styles.container}>
      <Header
        isLeftShow={true}
        heading="Privacy Policy"
        leftIconAction={() => navigation.goBack()}
      />
      {/* <Text style={styles.privacyPolHeading}></Text> */}
      <ScrollView>
        <View style={styles.ppContainer}>
          <Text style={styles.ppHeading}>
          Privacy Policy for EZFix Application
          </Text>
          <Text style={styles.ppDec}>
          Welcome to EZFix! By using the EZFix Application, you agree to the terms outlined in this Privacy Policy. We are committed to protecting your privacy and ensuring your data is handled securely. Please read the following to understand how we collect, use, and safeguard your information.
          </Text>
        </View>
        <View>
          <CustomAccordionView sections={SECTIONS} />
        </View>
      </ScrollView>
    </ParentView>
  );
}
