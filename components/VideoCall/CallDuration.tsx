import { Text } from "react-native";
import { TextProps } from "../Themed";

interface CallDurationProps extends TextProps {
  durationInSeconds: number;
}

export function CallDuration(props: CallDurationProps) {
  const hours = Math.floor(props.durationInSeconds / 3600);
  const minutes = Math.floor((props.durationInSeconds % 3600) / 60);
  const seconds = props.durationInSeconds % 60;
  return (
    <Text {...props}>
      {hours > 0 ? `${hours.toString().padStart(2, "0")}:` : "00:"}
      {minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </Text>
  );
}
