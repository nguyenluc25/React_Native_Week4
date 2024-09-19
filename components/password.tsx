
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8585b9',
    },
});

const Password = () => {
    const [isChecked, setChecked] = useState(false);
    return (
        <View style={styles.container}>
            <View style={{
                flex: 1,
                backgroundColor: '#23235b',
                margin: 20,
                borderRadius: 10,
                padding: 10,
            }}>
                <View style={{
                    flex: 2,
                    // padding: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: 'white',
                        padding: 50,
                        textAlign: 'center',
                    }}>
                        PASSWORD GENERATOR
                    </Text>
                </View>
                <View style={{
                    flex: 2,
                    // padding: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TextInput style={{
                        backgroundColor: "#151537",
                        width: "100%",
                        height: 50,
                        color: "white",
                        fontSize: 20,
                    }} />
                </View>
                <View style={{
                    flex: 2,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontSize: 20,
                        color: 'white',
                        fontWeight: 'bold',
                    }}>
                        Password length
                    </Text>
                    <TextInput style={{
                        backgroundColor: "#ffffff",
                        fontSize: 10,
                        height: 30,
                        fontWeight: 'bold',
                    }} />
                </View>
                <View style={{
                    flex: 2,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontSize: 20,
                        color: 'white',
                        fontWeight: 'bold',
                    }}>
                        Include lower case letters
                    </Text>
                    <Checkbox
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#000000' : undefined}
                        style={{
                            padding: 15,
                        }}
                    />
                </View>
                <View style={{
                    flex: 2,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontSize: 20,
                        color: 'white',
                        fontWeight: 'bold',
                    }}>
                        Include upcase letters
                    </Text>
                    <Checkbox
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#000000' : undefined}
                        style={{
                            padding: 15,
                        }}
                    />
                </View>
                <View style={{
                    flex: 2,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontSize: 20,
                        color: 'white',
                        fontWeight: 'bold',
                    }}>
                        Include number
                    </Text>
                    <Checkbox
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#000000' : undefined}
                        style={{
                            padding: 15,
                        }}
                    />
                </View>
                <View style={{
                    flex: 2,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontSize: 20,
                        color: 'white',
                        fontWeight: 'bold',
                    }}>
                        Include special symbol
                    </Text>
                    <Checkbox
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#000000' : undefined}
                        style={{
                            padding: 15,
                        }}
                    />
                </View>
                <View style={{
                    flex: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <View style={{
                        width: "100%",
                    }}>
                        <Text style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#3b3b98',
                            padding: 20,
                            textAlign: 'center',
                            fontSize: 20,
                            color: 'white',
                            fontWeight: 'bold',
                        }}>
                            GENERATE PASSWORD
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Password;