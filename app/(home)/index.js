import { View, Text } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../styles/gobalStyles";

export default function HomePage() {
  return (
    <>
      <Text style={globalStyles.heading}>Welcome</Text>
      {/* <View>
        <Text style={globalStyles.paragraph}>Login</Text>
        <TextInput />
        <Button
          onPress={() => {
            console.log(`Username: ${name} Password: ${password}`);
          }}
          title="Submit"
        />
      </View> */}
    </>
  );
}
