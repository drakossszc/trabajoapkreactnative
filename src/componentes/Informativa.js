import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native';

export default function Informativa({ navigation }) {
    return (
        <ScrollView style={styles.fondo}>
            <View style={styles.portada}>
                <Text style={styles.simbolo}>⚡</Text>

                <Text style={styles.logo}>POKÉDEX</Text>

                <Text style={styles.eslogan}>
                    ¡Tu aventura Pokémon comienza aquí!
                </Text>

                <Text style={styles.descripcionPortada}>
                    Explora el mundo Pokémon, descubre nuevas criaturas
                    y construye tu propia colección.
                </Text>

                <View style={styles.etiqueta}>
                    <Text style={styles.textoEtiqueta}>
                        🎮 EXPLORA · DESCUBRE · COLECCIONA
                    </Text>
                </View>
            </View>

            <View style={styles.contenido}>
                <Text style={styles.tituloSeccion}>
                    ¿Qué es Pokédex?
                </Text>

                <Text style={styles.parrafo}>
                    Es una aplicación móvil para explorar Pokémon
                    y conocer sus características. Incluye un catálogo
                    con búsqueda y filtros, detalles de cada Pokémon,
                    una colección de capturados, favoritos y sobres
                    sorpresa con Pokémon aleatorios.
                </Text>

                <Text style={styles.tituloSeccion}>
                    Descubre sus funciones
                </Text>

                <View style={styles.tarjeta}>
                    <Text style={styles.icono}>📖</Text>
                    <View style={styles.textos}>
                        <Text style={styles.tituloTarjeta}>
                            Catálogo Pokémon
                        </Text>
                        <Text style={styles.textoTarjeta}>
                            Busca por nombre o número y filtra por tipo.
                            Pulsa un Pokémon para conocer sus detalles.
                        </Text>
                    </View>
                </View>

                <View style={styles.tarjeta}>
                    <Text style={styles.icono}>🎒</Text>
                    <View style={styles.textos}>
                        <Text style={styles.tituloTarjeta}>
                            Tu colección
                        </Text>
                        <Text style={styles.textoTarjeta}>
                            Obtén Pokémon y consulta tu progreso
                            en el álbum de capturados.
                        </Text>
                    </View>
                </View>

                <View style={styles.tarjeta}>
                    <Text style={styles.icono}>❤️</Text>
                    <View style={styles.textos}>
                        <Text style={styles.tituloTarjeta}>
                            Favoritos
                        </Text>
                        <Text style={styles.textoTarjeta}>
                            Guarda los Pokémon que más te gustan
                            para encontrarlos fácilmente.
                        </Text>
                    </View>
                </View>

                <View style={styles.tarjeta}>
                    <Text style={styles.icono}>🎴</Text>
                    <View style={styles.textos}>
                        <Text style={styles.tituloTarjeta}>
                            Sobres sorpresa
                        </Text>
                        <Text style={styles.textoTarjeta}>
                            Abre sobres y descubre tres Pokémon
                            aleatorios para tu colección.
                        </Text>
                    </View>
                </View>

                <View style={styles.tarjeta}>
                    <Text style={styles.icono}>🧢</Text>
                    <View style={styles.textos}>
                        <Text style={styles.tituloTarjeta}>
                            Perfil de entrenador
                        </Text>
                        <Text style={styles.textoTarjeta}>
                            Personaliza el nombre de tu entrenador
                            y disfruta la aventura.
                        </Text>
                    </View>
                </View>

                <View style={styles.final}>
                    <Text style={styles.tituloFinal}>
                        ¿Listo para comenzar?
                    </Text>

                    <Text style={styles.textoFinal}>
                        ¡Tu próxima aventura te está esperando!
                    </Text>

                    <TouchableOpacity
                        style={styles.boton}
                        onPress={() => navigation.navigate('Lista')}
                    >
                        <Text style={styles.textoBoton}>
                            Explorar Pokémon →
                        </Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.creditos}>
                    Datos Pokémon consultados mediante PokéAPI.
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: '#F1F4FC',
    },
    portada: {
        backgroundColor: '#203D7A',
        paddingHorizontal: 24,
        paddingTop: 35,
        paddingBottom: 32,
        alignItems: 'center',
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
    },
    simbolo: {
        fontSize: 60,
    },
    logo: {
        fontSize: 37,
        fontWeight: 'bold',
        color: '#FFFFFF',
        letterSpacing: 3,
        marginTop: 8,
    },
    eslogan: {
        color: '#FFE16B',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 15,
    },
    descripcionPortada: {
        color: '#FFFFFF',
        fontSize: 15,
        lineHeight: 23,
        textAlign: 'center',
        marginTop: 15,
    },
    etiqueta: {
        backgroundColor: '#D93D50',
        paddingVertical: 11,
        paddingHorizontal: 15,
        borderRadius: 25,
        marginTop: 22,
    },
    textoEtiqueta: {
        color: '#FFFFFF',
        fontSize: 11,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    contenido: {
        padding: 18,
    },
    tituloSeccion: {
        color: '#203D7A',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 12,
    },
    parrafo: {
        color: '#4F5669',
        fontSize: 15,
        lineHeight: 24,
    },
    tarjeta: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 15,
        marginTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 3,
    },
    icono: {
        fontSize: 34,
        marginRight: 14,
    },
    textos: {
        flex: 1,
    },
    tituloTarjeta: {
        color: '#203D7A',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
    },
    textoTarjeta: {
        color: '#5C6274',
        fontSize: 14,
        lineHeight: 21,
    },
    final: {
        backgroundColor: '#FFF0B5',
        borderRadius: 20,
        padding: 22,
        alignItems: 'center',
        marginTop: 25,
    },
    tituloFinal: {
        color: '#203D7A',
        fontSize: 21,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textoFinal: {
        color: '#4F5669',
        textAlign: 'center',
        marginTop: 8,
        lineHeight: 21,
    },
    boton: {
        backgroundColor: '#D93D50',
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 14,
        marginTop: 18,
    },
    textoBoton: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    creditos: {
        textAlign: 'center',
        color: '#777E91',
        fontSize: 12,
        marginVertical: 22,
    },
});
