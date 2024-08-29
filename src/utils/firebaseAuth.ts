import auth from '@react-native-firebase/auth';

// Send OTP to the user's phone number
export const sendOTP = async (phoneNumber: string) => {
  console.log('sendOTP called with:', phoneNumber);
  try {
    // Your Firebase send OTP logic here
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    console.log('OTP sent successfully, confirmation:', confirmation);
    return confirmation;
  } catch (error) {
    // console.error('Error in sendOTP:', error);
    throw error; // Re-throw the error to be caught in the calling function
  }
};


// Verify the OTP entered by the user
export const verifyOTP = async (confirmation: { confirm: (arg0: any) => any; }, otp: string) => {
  try {
    await confirmation.confirm(otp);
    return true;
  } catch (error) {
    // console.error('Invalid OTP:', error);
    return false;
  }
};
