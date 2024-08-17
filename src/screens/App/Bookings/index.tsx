import React from 'react';
import {Text, Dimensions} from 'react-native';

//local imports

import {ParentView} from '../../../components/common/ParentView/ParentView';
import Header from '../../../components/AppHeader';
import CreateTopTabs from '../../../navigators/CreateTopTabs';

//third party library

const Bookings = () => {
  return (
    <ParentView>
      <Header leftIconAction={() => {}} />
    </ParentView>
  );
};

export default Bookings;
