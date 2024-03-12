import { createNativeStackNavigator } from "@react-navigation/native-stack";
import COLORS from "../../Shared/colors";
import Home from "../../Pages/Home";
import Details from "../../Pages/Details";

const { Navigator, Screen } = createNativeStackNavigator();

const Stack = () => {
	return (
		<Navigator
			initialRouteName="Home"
			screenOptions={{
				contentStyle: {
					backgroundColor: 'black',
				},
				headerShown: false
			}}
		>
			<Screen
				name="Home"
				options={{ title: "Início" }}
				component={Home}
			/>
			<Screen
				name="Details"
				options={{ title: "Detalhes" }}
				component={Details}
			/>
		</Navigator>
	);
};
export default Stack;