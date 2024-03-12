import { createDrawerNavigator } from '@react-navigation/drawer';
import Search from '../../Pages/Search';
import Stack from '../Stack';
import COLORS from '../../Shared/colors';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
      <Drawer.Navigator initialRouteName='Menu' screenOptions={{
        headerStyle: { backgroundColor: COLORS.red },
        headerTitle: 'BRAZILIAN NEWS',
        headerTitleStyle: { color: COLORS.black, fontWeight: 'bold', alignSelf: 'center' },
        headerTitleAlign: 'center'
      }}>
        <Drawer.Screen name="Home" component={Stack} />
        <Drawer.Screen name="Esportes" component={Search} />
        <Drawer.Screen name="Políticas" component={Search} />
        <Drawer.Screen name="Mundo" component={Search} />
      </Drawer.Navigator>
    );
};

export default DrawerNavigator;