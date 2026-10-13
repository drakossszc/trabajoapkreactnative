
import { useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Aleatorios() {
    const totalPokes = 1025;
    const [cartas, setCartas] = useState([]);
    const [abriendo, setAbriendo] = useState(false);
    const [mensaje, setMensaje] = useState(
        '¡Hay Pokémon esperando dentro del sobre!'
    );

    const abrirSobre = async () => {
        setAbriendo(true);
        setCartas([]);
        setMensaje('✨ ¡Preparando tu sobre sorpresa!');

        try {
            const guardados = await AsyncStorage.getItem('misNumeros');
            const capturados = guardados
                ? JSON.parse(guardados).map(Number)
                : [];

            // Seleccionar tres Pokémon diferentes en el mismo sobre.
            const seleccionados = new Set();

            while (seleccionados.size < 3) {
                seleccionados.add(
                    Math.floor(Math.random() * totalPokes) + 1
                );
            }

            const resultados = [];

            for (const id of seleccionados) {
                const respuesta = await fetch(
                    `https://pokeapi.co/api/v2/pokemon/${id}`
                );

                if (!respuesta.ok) {
                    throw new Error('No se pudo cargar un Pokémon');
                }

                const datos = await respuesta.json();

                resultados.push({
                    id: datos.id,
                    nombre: datos.name,
                    imagen: datos.sprites.other['official-artwork'].front_default,
                    tipos: datos.types.map(t => t.type.name).join(' / '),
                    repetido: capturados.includes(datos.id),
                });
            }

            // Guardar los nuevos números sin duplicar los existentes.
            const actualizados = [
                ...new Set([
                    ...capturados,
                    ...resultados.map(p => p.id)
                ])
            ];

            await AsyncStorage.setItem(
                'misNumeros',
                JSON.stringify(actualizados)
            );

            setCartas(resultados);
            setMensaje('🎉 ¡Sobre abierto! Estas son tus cartas.');
        } catch (error) {
            console.error('Error al abrir el sobre:', error);
            setMensaje(
                'No se pudo abrir el sobre. Revisa tu conexión e inténtalo de nuevo.'
            );
        } finally {
            setAbriendo(false);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.fondo}>
            <Text style={styles.titulo}>🎴 Sobres sorpresa</Text>

            <Text style={styles.subtitulo}>
                ¡Abre un sobre y descubre tres Pokémon!
            </Text>

            {cartas.length === 0 && !abriendo && (
                <View style={styles.sobre}>
                    <Text style={styles.rayo}>⚡</Text>
                    <Text style={styles.logo}>POKÉMON</Text>
                    <Text style={styles.estrellas}>✦ ✧ ✦</Text>
                    <Text style={styles.textoSobre}>SOBRE SORPRESA</Text>
                </View>
            )}

            {abriendo && (
                <View style={styles.cargando}>
                    <ActivityIndicator size="large" color="#FFD447" />
                    <Text style={styles.textoCargando}>
                        ¡Abriendo el sobre!
                    </Text>
                    <Text style={styles.efectos}>✨ 🎴 ✨</Text>
                </View>
            )}

            <Text style={styles.mensaje}>{mensaje}</Text>

            {cartas.length > 0 && (
                <View style={styles.listaCartas}>
                    {cartas.map((pokemon) => (
                        <View
                            key={pokemon.id}
                            style={[
                                styles.carta,
                                pokemon.repetido && styles.cartaRepetida
                            ]}
                        >
                            <Text style={styles.numero}>
                                N.º {pokemon.id}
                            </Text>

                            <Image
                                source={{ uri: pokemon.imagen }}
                                style={styles.imagen}
                            />

                            <Text style={styles.nombre}>
                                {pokemon.nombre.toUpperCase()}
                            </Text>

                            <Text style={styles.tipo}>
                                {pokemon.tipos}
                            </Text>

                            <Text style={styles.estado}>
                                {pokemon.repetido
                                    ? '🔁 Repetido'
                                    : '⭐ ¡Nuevo!'}
                            </Text>
                        </View>
                    ))}
                </View>
            )}

            <TouchableOpacity
                style={[
                    styles.boton,
                    abriendo && styles.botonDeshabilitado
                ]}
                onPress={abrirSobre}
                disabled={abriendo}
            >
                <Text style={styles.textoBoton}>
                    {abriendo ? 'Abriendo...' : '🎁 Abrir otro sobre'}
                </Text>
            </TouchableOpacity>

            <Text style={styles.nota}>
                Los Pokémon obtenidos también aparecerán en tu colección.
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    fondo: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: '#171C38',
        padding: 18,
    },
    titulo: {
        color: '#FFD447',
        fontSize: 27,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 12,
    },
    subtitulo: {
        color: '#FFFFFF',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 25,
    },
    sobre: {
        width: 240,
        height: 300,
        backgroundColor: '#C9344C',
        borderWidth: 5,
        borderColor: '#FFD447',
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    },
    rayo: {
        fontSize: 65,
    },
    logo: {
        fontSize: 27,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginTop: 10,
    },
    estrellas: {
        fontSize: 30,
        color: '#FFD447',
        marginTop: 15,
    },
    textoSobre: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginTop: 15,
    },
    cargando: {
        width: 240,
        height: 300,
        backgroundColor: '#30385D',
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 18,
    },
    textoCargando: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    efectos: {
        fontSize: 32,
    },
    mensaje: {
        color: '#FFFFFF',
        fontSize: 15,
        textAlign: 'center',
        lineHeight: 22,
        marginVertical: 20,
    },
    listaCartas: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 10,
    },
    carta: {
        width: '47%',
        backgroundColor: '#FFF1B8',
        borderColor: '#E4B834',
        borderWidth: 3,
        borderRadius: 15,
        padding: 10,
        alignItems: 'center',
    },
    cartaRepetida: {
        backgroundColor: '#E6E7EF',
        borderColor: '#9BA3B8',
    },
    numero: {
        alignSelf: 'flex-start',
        color: '#42465A',
        fontSize: 11,
    },
    imagen: {
        width: 110,
        height: 110,
        resizeMode: 'contain',
    },
    nombre: {
        color: '#252C4B',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    tipo: {
        color: '#555B70',
        fontSize: 12,
        marginTop: 5,
        textAlign: 'center',
    },
    estado: {
        color: '#333A55',
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 8,
    },
    boton: {
        backgroundColor: '#FFD447',
        paddingVertical: 15,
        paddingHorizontal: 28,
        borderRadius: 30,
        marginTop: 25,
    },
    botonDeshabilitado: {
        opacity: 0.6,
    },
    textoBoton: {
        color: '#252C4B',
        fontSize: 17,
        fontWeight: 'bold',
    },
    nota: {
        color: '#C5C9DE',
        textAlign: 'center',
        fontSize: 12,
        lineHeight: 18,
        marginVertical: 20,
    },
});
