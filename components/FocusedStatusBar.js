import { Text, View, StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/native";

const FocusedStatusBar = (props) => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated={true} {...props} /> : null; //if not focused hide the bar
};

export default FocusedStatusBar;
