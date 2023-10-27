import { NavigationContainer } from "@react-navigation/native";
import { TailwindProvider } from "tailwindcss-react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNavigationBar from "./components/BottomNavigationBar";


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    
    <NavigationContainer>
        <TailwindProvider>
          <Stack.Navigator>
            {/* Bottom Navigation Bar Starts*/}
            <Stack.Screen
              name="BottomNavBar"
              component={BottomNavigationBar}
              options={{ headerShown: false }}
            />
             {/* Bottom Navigation Bar Ends*/}
          </Stack.Navigator>
        </TailwindProvider>
    </NavigationContainer>
    
  );
}


