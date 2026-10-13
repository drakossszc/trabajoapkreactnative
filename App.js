
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Lista from './src/componentes/Lista';
import Pokemon from './src/componentes/Pokemon';
import Capturados from './src/componentes/Capturados';
import Favoritos from './src/componentes/Favoritos';
import Usuario from './src/componentes/Usuario';
import Aleatorios from './src/componentes/Aleatorios';
import Informativa from './src/componentes/Informativa';

import { AppProvider } from './src/context/AppContext';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ListaStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Lista"
                component={Lista}
                options={{ title: 'Catálogo Pokémon' }}
            />
            <Stack.Screen
                name="Pokemon"
                component={Pokemon}
                options={{ title: 'Detalles del Pokémon' }}
            />
        </Stack.Navigator>
    );
}

function CapturadosStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Capturados"
                component={Capturados}
                options={{ title: 'Mi colección' }}
            />
            <Stack.Screen
                name="Pokemon"
                component={Pokemon}
                options={{ title: 'Detalles del Pokémon' }}
            />
        </Stack.Navigator>
    );
}

function FavoritosStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Favoritos"
                component={Favoritos}
                options={{ title: 'Mis favoritos' }}
            />
            <Stack.Screen
                name="Pokemon"
                component={Pokemon}
                options={{ title: 'Detalles del Pokémon' }}
            />
        </Stack.Navigator>
    );
}

function AleatoriosStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Aleatorios"
                component={Aleatorios}
                options={{ title: 'Sobres sorpresa' }}
            />
            <Stack.Screen
                name="Pokemon"
                component={Pokemon}
                options={{ title: 'Detalles del Pokémon' }}
            />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <AppProvider>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={{
                        headerShown: false,
                        tabBarActiveTintColor: '#D93D50',
                        tabBarInactiveTintColor: '#777777',
                    }}
                >
                    <Tab.Screen
                        name="Inicio"
                        component={Informativa}
                    />

                    <Tab.Screen
                        name="Lista"
                        component={ListaStack}
                    />

                    <Tab.Screen
                        name="Aleatorios"
                        component={AleatoriosStack}
                        options={{ title: 'Sobres' }}
                    />

                    <Tab.Screen
                        name="Capturados"
                        component={CapturadosStack}
                    />

                    <Tab.Screen
                        name="Favoritos"
                        component={FavoritosStack}
                    />

                    <Tab.Screen
                        name="Usuario"
                        component={Usuario}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </AppProvider>
    );
}
