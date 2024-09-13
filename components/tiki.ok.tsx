import { useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native"

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: 'lightgray',
        borderWidth: 1,
        borderColor: "red",
        width: 400,
        height: 700,
    },
});
const Tiki = () => {

    const [count, setCount] = useState(1);
    const [price, setPrice] = useState(141800);

    const handlePrev = () => {
        if (count <= 1) {
            return;
        }
        setPrice((count - 1) * 141800);
        setCount(count - 1);
    }

    const handleNext = () => {
        setPrice((count + 1) * 141800);
        setCount(count + 1);
    }

    return (
        <View style={styles.container}>
            <View
                style={{
                    // flex: 2,
                    backgroundColor: "white",
                    paddingVertical: 20,
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                    }}
                >
                    <View>
                        <Image
                            style={{
                                width: 150,
                                height: 180,
                                marginRight: 25,
                            }}
                            source={{
                                uri: 'https://salt.tikicdn.com/cache/750x750/ts/product/f5/75/37/f19fc47364461e23e45cd8cf59a0fac3.jpg.webp',
                            }}
                        />
                    </View>

                    <View>
                        <Text
                            style={{
                                fontWeight: 'bold',
                                padding: 5,
                            }}
                        >Nguyên hàm phần tích ứng dụng</Text>
                        <Text
                            style={{
                                fontWeight: 'bold',
                                padding: 5,
                            }}
                        >Cung cấp bởi tiki Trading</Text>
                        <Text
                            style={{
                                fontSize: 30,
                                color: 'red',
                                padding: 5,
                            }}
                        >141.800đ</Text>
                        <Text
                            style={{
                                padding: 5,
                            }}
                        >100.000đ</Text>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <Button title="-" color={"gray"}
                                onPress={handlePrev}
                            />
                            <Text
                                style={{
                                    padding: 10,
                                }}
                            >{count}</Text>
                            <Button title="+" color={"gray"}
                                onPress={handleNext}
                            />
                            <Text
                                style={{
                                    marginLeft: 70,
                                    color: "blue",
                                    fontWeight: "bold",
                                }}
                            >Mua sau</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text
                        style={{
                            fontWeight: "bold",
                            padding: 10,
                            height: 70,
                        }}
                    >Mã giảm giá đã lưu
                        <Text
                            style={{
                                color: "blue",
                                fontWeight: "bold",
                                marginLeft: 40,
                            }}
                        >Xem tại đây</Text>
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        backgroundColor: "white",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingHorizontal: 10,
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            padding: 10,
                            alignItems: "center",
                            borderColor: "gray",
                            borderWidth: 1,
                            width: "65%",
                            // justifyContent: "center",
                        }}
                    >
                        <View
                            style={{
                                width: 40,
                                height: 20,
                                backgroundColor: "yellow",
                                padding: 10,
                                marginRight: 10,
                            }}
                        ></View>
                        <Text
                            style={{
                                fontWeight: "bold",
                            }}
                        >Mã giảm giá</Text>
                    </View>
                    <View>
                        <Button title="Áp dụng" color={"blue"} />
                    </View>
                </View>
            </View>

            <View
                style={{
                    flex: 0.1,
                    flexDirection: "row",
                    backgroundColor: "white",
                    padding: 10,
                    marginVertical: 10,
                }}
            >
                <Text
                    style={{
                        fontWeight: "bold",
                    }}
                >Bạn có phiếu quà tặng Tiki/Got it/Urbox? <Text
                    style={{
                        color: "blue",
                        fontWeight: "bold",
                    }}
                >Nhập tại đây</Text></Text>
            </View>

            <View
                style={{
                    flex: 0.4,
                    flexDirection: "row",
                    padding: 10,
                    justifyContent: "space-between",
                    backgroundColor: "white",
                }}
            >
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: "bold"
                    }}
                >Tạm tính</Text>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "red"
                    }}
                >{price}</Text>
            </View>

            <View
                style={{
                    flex: 1,
                    backgroundColor: "white",
                    marginTop: 160,
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        padding: 15,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            color: "gray",
                        }}
                    >Thành tiền</Text>
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            color: "red"
                        }}
                    >{price}</Text>
                </View>
                <View>
                    <Button title="TIẾN HÀNH ĐẶT HÀNG" color={"red"} />
                </View>
            </View>
        </View>
    )
}

export default Tiki;