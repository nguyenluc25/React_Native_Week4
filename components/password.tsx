
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import * as Crypto from 'expo-crypto';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8585b9',
    },
});

const Password = () => {
    const [password, setPassword] = useState('');
    const [passwordLength, setPasswordLength] = useState('');
    const [isCheckedLower, setCheckedLower] = useState(false);
    const [isCheckedUpper, setCheckedUpper] = useState(false);
    const [isCheckedNumber, setCheckedNumber] = useState(false);
    const [isCheckedSpecial, setCheckedSpecial] = useState(false);

    const generatePassword = async () => {
        if (+passwordLength < 1) {
            setPassword('');
            return;
        }
        let newPassword = '';
        let count = 0;
        const length = +passwordLength;  
        
        for (let i = 0; i < +passwordLength; i++) {
            if(count >= length){
                break;
            }
            if (isCheckedNumber) {
                count++;
                newPassword += Math.floor(Math.random() * 10);
            }
            if (isCheckedLower) {
                count++;
                const lower = 'abcdefghijklmnopqrstuvwxyz';
                const index = Math.floor(Math.random() * lower.length);
                newPassword += lower[index];
            }
            if (isCheckedUpper) {
                count++;
                const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                const index = Math.floor(Math.random() * upper.length);
                newPassword += upper[index];
            }
            if (isCheckedSpecial) {
                count++;
                const special = '!@#$%^&*()_+';
                const index = Math.floor(Math.random() * special.length);
                newPassword += special[index];
            }
        }
        newPassword = newPassword.split('').sort(() => Math.random() - 0.5).join('');
        setPassword(newPassword.slice(0, length));
    };

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
                    }}
                        // readOnly={true}
                        value={password}
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
                        Password length
                    </Text>
                    <TextInput style={{
                        backgroundColor: "#ffffff",
                        fontSize: 20,
                        height: 30,
                        width: 150,
                        fontWeight: 'bold',
                    }}
                        keyboardType="numeric"
                        inputMode="numeric"
                        value={passwordLength.toString()}
                        onChangeText={value => setPasswordLength(value)}
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
                        Include lower case letters
                    </Text>
                    <Checkbox
                        value={isCheckedLower}
                        onValueChange={setCheckedLower}
                        color={isCheckedLower ? '#000000' : undefined}
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
                        value={isCheckedUpper}
                        onValueChange={setCheckedUpper}
                        color={isCheckedUpper ? '#000000' : undefined}
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
                        value={isCheckedNumber}
                        onValueChange={setCheckedNumber}
                        color={isCheckedNumber ? '#000000' : undefined}
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
                        value={isCheckedSpecial}
                        onValueChange={setCheckedSpecial}
                        color={isCheckedSpecial ? '#000000' : undefined}
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
                        }}
                            onPress={generatePassword}
                        >
                            GENERATE PASSWORD
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Password;