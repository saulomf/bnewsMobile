import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./Stack";
import DrawerNavigator from "./Drawer";

const Routes = () => {
	return (
		<NavigationContainer>
			<DrawerNavigator />
		</NavigationContainer>
	);
};

export default Routes;