
import { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView
} from 'react-native';

export default function Usuario() {
    const [nombre, setNombre] = useState('Entrenador');

    return (
        <ScrollView style={styles.fondo}>
            <View style={styles.portada}>
                <Text style={styles.avatar}>🧢</Text>
                <Text style={styles.titulo}>Perfil de entrenador</Text>
                <Text style={styles.subtitulo}>
                    ¡Tu aventura comienza aquí!
                </Text>
            </View>

            <View style={styles.tarjeta}>
                <Text style={styles.etiqueta}>Tu nombre</Text>

                <TextInput
                    style={styles.input}
                    value={nombre}
                    onChangeText={setNombre}
                    placeholder="Escribe tu nombre"
                    maxLength={25}
                />

                <Text style={styles.saludo}>
                    ¡Hola, {nombre.trim() || 'Entrenador'}!
                </Text>

                <View style={styles.nivel}>
                    <Text style={styles.nivelTexto}>🏅 Entrenador Pokémon</Text>
                    <Text style={styles.nivelTexto}>⚡ ¡Sigue explorando!</Text>
                </View>
            </View>

            <View style={styles.tarjetaInfo}>
                <Text style={styles.tituloInfo}>Tu misión</Text>
                <Text style={styles.descripcion}>
                    Descubre Pokémon en el catálogo, consulta sus
                    características, guarda tus favoritos y completa
                    tu colección capturando nuevas criaturas.
                </Text>
            </View>

            <Text style={styles.pie}>
                ¡Atrápalos a todos!
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: '#F0F3FA',
    },
    portada: {
        backgroundColor: '#254B91',
        padding: 30,
        alignItems: 'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    avatar: {
        fontSize: 65,
    },
    titulo: {
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },
    subtitulo: {
        color: '#FFE16B',
        marginTop: 8,
        fontSize: 15,
    },
    tarjeta: {
        backgroundColor: '#FFFFFF',
        margin: 18,
        padding: 22,
        borderRadius: 20,
        elevation: 4,
        alignItems: 'center',
    },
    etiqueta: {
        fontSize: 15,
        color: '#555B6E',
        alignSelf: 'flex-start',
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#C8D2E6',
        borderRadius: 12,
        padding: 12,
        fontSize: 17,
        marginTop: 10,
    },
    saludo: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#254B91',
        marginTop: 20,
        textAlign: 'center',
    },
    nivel: {
        backgroundColor: '#EEF3FF',
        width: '100%',
        padding: 15,
        borderRadius: 12,
        marginTop: 20,
        gap: 10,
    },
    nivelTexto: {
        color: '#35476C',
        fontSize: 15,
    },
    tarjetaInfo: {
        marginHorizontal: 18,
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 18,
    },
    tituloInfo: {
        fontSize: 21,
        fontWeight: 'bold',
        color: '#254B91',
        marginBottom: 10,
    },
    descripcion: {
        color: '#555B6E',
        fontSize: 15,
        lineHeight: 23,
    },
    pie: {
        color: '#254B91',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 25,
    },
});
