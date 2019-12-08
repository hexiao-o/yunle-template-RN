import { Dimensions, StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  skipBtn: {
    marginTop: 24,
    marginRight: 24,
    alignSelf: 'flex-end',
  },
  skipBtnText: {
    color: '#8C8C8C',
    fontSize: 24,
    lineHeight: 24,
  },
  body: {
    flexGrow: 1,
    flexDirection: 'column',
    paddingHorizontal: 24,
    paddingBottom: 50,
  },
  logoWrap: {
    flexGrow: 1,
    // paddingTop: 166,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnWrap: {
    marginTop: 60,
    // alignItems: 'center',
    // justifyContent: 'center',
    // alignSelf: 'flex-end',
  },

  footer: {
    paddingVertical: 12,
    alignContent: 'flex-end',
    flexDirection: 'row',
  },
  footerBox: {
    flexGrow: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  wxBtn: {
    borderWidth: 1,
    borderRadius: 32,
    height: 64,
    width: 64,
    borderColor: '#09BB07',
    alignItems: "center",
    justifyContent: "center",
  },
  wxIcon: {
    marginRight: 12,
    width: 24,
    height: 24,
    borderColor: '#fff',
  }
});
