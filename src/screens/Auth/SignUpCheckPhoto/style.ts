import {createStyleSheet} from 'react-native-unistyles';
import {screen} from '../../utils/constants';
import {fonts} from '../../styles/fonts';

const {width, height} = screen;
export default createStyleSheet(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },

  screenTitleTxtCont: {
    width: '90%',
    alignSelf: 'center',
    marginTop: height * 0.065,
    marginBottom: height * 0.04,
    // backgroundColor: 'red',
  },
  screenTitleTxt: {
    fontFamily: fonts.DMSans.Bold,
    fontSize: screen.width * 0.0625,
    color: theme.colors.dark,
  },

  takenImgCon: {
    width: '90%',
    height: '27%',
    alignSelf: 'center',
    borderRadius: width * 0.025,
    backgroundColor: theme.colors.placeHolderLightGray,
  },

  instructionTxt: {
    width: '90%',
    alignSelf: 'center',
    marginTop: height * 0.05,
    // backgroundColor: 'red',
  },
  makeSureTxt: {
    fontFamily: fonts.DMSans.Bold,
    fontSize: screen.width * 0.048,
    color: theme.colors.dark,
  },
  singleInsCont: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.025,
    // backgroundColor: 'green',
  },
  singInstTxt: {
    fontFamily: fonts.DMSans.Regular,
    fontSize: screen.width * 0.038,
    color: theme.colors.dark,
    marginLeft: width * 0.025,
  },

  reTakeTxt: {
    fontFamily: fonts.DMSans.Medium,
    fontSize: screen.width * 0.042,
    color: theme.colors.dark,
  },
  saveButton: {
    // marginTop: height * 0.0225,
  },
}));
