import { StackNavigator } from 'react-navigation';

import Welcome from '../screens/welcome';
import LoginScreen from '../screens/LoginScreen';
import EmployeeList from '../screens/EmployeeList';
import EmployeeCreate from '../screens/EmployeeCreate';
import EmployeeEdit from '../screens/EmployeeEdit';

const Routes = {
    Welcome: { screen: Welcome },
    Auth: { screen: LoginScreen },
    Main: { 
        screen: StackNavigator({
            List: { screen: EmployeeList },
            Create: { screen: EmployeeCreate },
            Edit: { screen: EmployeeEdit }
        }, { lazy: true }) 
    }
};

export default Routes;
