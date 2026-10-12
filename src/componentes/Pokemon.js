import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

export default function Pokemon({ route }) {
    const { nombre } = route.params; // Obtener el nombre del Pokémondesde los parámetros
    const [pokemon, setPokemon] = useState(null);
    useEffect(() => {
    const obtenerPokemon = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
    const data = await res.json();
    setPokemon(data);   
    };
    obtenerPokemon();
    }, [nombre]);
    if (!pokemon) return <Text>Cargando...</Text>;
    return (
        <ScrollView>
        <View style={styles.container}>
        <Text style={styles.titulo}>{pokemon.name}</Text>
    <Image
    source={{ uri:pokemon.sprites.other['official-artwork'].front_default }}
    style={styles.imagen}
    />
    <Text>Tipo(s): {pokemon.types.map(t => t.type.name).join(',')}</Text>
    <Text>Altura: {pokemon.height/ 10} m / Peso: {pokemon.weight/10} kg</Text>
    </View>
    </ScrollView>
);
}

const styles = StyleSheet.create({
container: {
padding: 20,
alignItems: 'center',
},
titulo: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 10,
},
imagen: {
width: 200,
height: 200,
resizeMode: 'contain',
marginBottom: 10,
},
});