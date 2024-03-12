import { createNativeStackNavigator } from "@react-navigation/native-stack";
import COLORS from "../../Shared/colors";
import Home from "../../Pages/Home";
import Details from "../../Pages/Details";
import Search from "../../Pages/Credits";

const { Navigator, Screen } = createNativeStackNavigator();

const Stack = () => {
	return (
		<Navigator
			screenOptions={{
				contentStyle: {
					backgroundColor: COLORS.black,
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
			<Screen
				name="Search"
				options={{ title: "Busca" }}
				component={Search}
			/>
		</Navigator>
	);
};
export default Stack;