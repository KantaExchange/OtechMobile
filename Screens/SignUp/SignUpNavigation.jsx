import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PhoneNumberScreen from "./PhoneNumberScreen/PhoneNumberScreen";
import OtpVerificationScreen from "./OtpVerificationScreen/OtpVerificationScreen";
import PersonalInfoScreen from "./PersonalInfoScreen/PersonalInfoScreen";
import SetupPasscodeScreen from "./SetupPasscodeScreen/SetupPasscodeScreen";

const Stack = createNativeStackNavigator();

export default function SignUpNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PhoneNumber"
        component={PhoneNumberScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OtpVerification"
        component={OtpVerificationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PersonalInfo"
        component={PersonalInfoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SetupPasscode"
        component={SetupPasscodeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
