import {Image, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import useStyles from './style';

import {ParentView} from '../../../components/common/ParentView/ParentView';
import Header from '../../../components/AppHeader';
import {AppStackParamsList} from '../../../navigators/navigator.seeker';
import images from '../../../assets/images';
import Button from '../../../components/Button/Button';
import CustomModal from '../../../components/CustomModal';
import BottomButton from '../../../components/common/BottomButton/BottomButton';

const StartStopWorking: React.FC<AppStackParamsList> = ({navigation}) => {
  const {styles, colors, sizes} = useStyles();

  const [modalVisible, setModalVisible] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [amountToBePaid, setAmountToBePaid] = useState(0);
  const hourlyRate = 250; // Rs 250 per hour
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const calculateAmount = (totalSeconds: number) => {
    const hoursWorked = totalSeconds / 3600;
    return Math.round(hoursWorked * hourlyRate);
  };

  const finishWorking = () => {
    stopTimer();
    const amount = calculateAmount(seconds);
    setAmountToBePaid(amount);
    console.log(
      `Elapsed Time: ${formatTime(seconds)}, Amount to be Paid: Rs ${amount}/-`,
    );
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    navigation.navigate('Home');
  };

  const formatTime = (totalSeconds: number) => {
    const getSeconds = `0${totalSeconds % 60}`.slice(-2);
    const minutes = Math.floor(totalSeconds / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(totalSeconds / 3600)}`.slice(-2);
    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  const ModalView = () => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={images.CHECK_BADGE}
          style={{
            marginBottom: sizes.HEIGHT * 0.02,
          }}
        />
        <Text style={[styles.textStyles, styles.modalHeading]}>
          Work Finished
        </Text>
        <Text style={[styles.textStyles, styles.modalTimeElapsed]}>
          Total Time Worked : {formatTime(seconds)}
        </Text>
        <Text style={[styles.textStyles, styles.amountToBePaid]}>
          Amount to be Paid: Rs {amountToBePaid}/-
        </Text>
        <BottomButton>
          <Button
            btnStyles={{
              width: sizes.WIDTH * 0.8,
              marginVertical: sizes.HEIGHT * 0.02,
            }}
            bgcolor={colors.PRIMARY}
            text="Move to Home Screen"
            onPress={handleModalClose}
          />
        </BottomButton>
      </View>
    );
  };
  return (
    <ParentView>
      <Header leftIconAction={() => navigation.goBack()} />

      <View style={styles.container}>
        <Image source={images.StartStopWorking} />
        <View>
          <Text style={styles.text}>{formatTime(seconds)} </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Button
              btnStyles={{
                width: sizes.WIDTH * 0.38,
                marginHorizontal: sizes.WIDTH * 0.02,
              }}
              bgcolor={colors.PRIMARY}
              text="Start"
              onPress={startTimer}
            />
            <Button
              btnStyles={{
                width: sizes.WIDTH * 0.38,
                marginHorizontal: sizes.WIDTH * 0.02,
              }}
              onPress={stopTimer}
              bgcolor="rgba(0,128,0,0.2)"
              text="Stop"
              btnTextStyles={{color: colors.PRIMARY}}
            />
          </View>
          <Button
            btnStyles={styles.finishButton}
            bgcolor="#FFE2E2"
            text="Finish"
            onPress={() => finishWorking()}
            btnTextStyles={{color: colors.RED}}
          />
        </View>
      </View>
      <CustomModal modalView={<ModalView />} showModal={modalVisible} />
    </ParentView>
  );
};

export default StartStopWorking;
