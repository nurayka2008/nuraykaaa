import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";

export default function App() {
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleContinue = () => {
    if (name.trim().length < 2) {
      Alert.alert("Қате", "Аты-жөніңізді енгізіңіз!");
      return;
    }

    const numbers = phone.replace(/\D/g, "");

    if (numbers.length !== 11) {
      Alert.alert("Қате", "Телефон нөмірін дұрыс енгізіңіз!");
      return;
    }

    Alert.alert(
      "Қош келдіңіз!",
      `Сәлем, ${name}! ANEA-Shop дүкеніне қош келдіңіз!`,
      [
        {
          text: "Жақсы",
          onPress: () => {
            setName("");
            setPhone("");
            setPage(1);
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {page === 1 ? (
        <View style={styles.firstPage}>
          <View style={styles.logoBox}>
            <Text style={styles.logo}>ANEA.</Text>
            <Text style={styles.subtitle}>
              FRESH DELIVERY
            </Text>
          </View>

          <View style={styles.courierBox}>
            <View style={styles.sunCircle} />
            <Text style={styles.courierEmoji}>👩🏻‍🦰</Text>
            <Text style={styles.cap}>🧢</Text>
            <View style={styles.deliveryBag}>
              <Text style={styles.bagEmoji}>🛍️</Text>
              <Text style={styles.bagLabel}>ANEA</Text>
            </View>
            <Text style={styles.smallFruit}>🍓 🍉 🍊</Text>
          </View>

          <Text style={styles.mainTitle}>
            Жаңа өнімдер{"\n"}есігіңізге дейін!
          </Text>

          <Text style={styles.description}>
            Сүйікті жемістеріңіз бен көкөністеріңізді
            үйден шықпай-ақ тапсырыс беріңіз.
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setPage(2)}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Бастау</Text>
            <Text style={styles.arrow}>→</Text>
          </TouchableOpacity>

          <Text style={styles.footer}>
            ANEA — әр үйге балғындық!
          </Text>
        </View>
      ) : (
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <ScrollView
            contentContainerStyle={styles.secondPage}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <TouchableOpacity
              onPress={() => setPage(1)}
              style={styles.backButton}
            >
              <Text style={styles.backText}>← Артқа</Text>
            </TouchableOpacity>

            <View style={styles.logoBox}>
              <Text style={styles.logo}>ANEA.</Text>
              <Text style={styles.subtitle}>
                FRESH DELIVERY
              </Text>
            </View>

            <Text style={styles.fruitTitle}>
              🍓 Балғындық әр пакетте 🍉
            </Text>

            <View style={styles.fruitBox}>
              <Text style={[styles.fruit, styles.f1]}>🍓</Text>
              <Text style={[styles.fruit, styles.f2]}>🍉</Text>
              <Text style={[styles.fruit, styles.f3]}>🍊</Text>
              <Text style={[styles.fruit, styles.f4]}>🍇</Text>
              <Text style={[styles.fruit, styles.f5]}>🍎</Text>
              <Text style={[styles.fruit, styles.f6]}>🥝</Text>
              <Text style={[styles.fruit, styles.f7]}>🍌</Text>
              <Text style={[styles.fruit, styles.f8]}>🍒</Text>
              <Text style={[styles.fruit, styles.f9]}>🍐</Text>

              <View style={styles.package}>
                <Text style={styles.packageEmoji}>🛍️</Text>
                <Text style={styles.packageName}>ANEA</Text>
                <Text style={styles.packageSmall}>
                  FRESH & NATURAL
                </Text>
              </View>
            </View>

            <Text style={styles.loginTitle}>
              Қош келдіңіз!
            </Text>

            <Text style={styles.description}>
              Тапсырыс беру үшін деректеріңізді енгізіңіз.
            </Text>

            <Text style={styles.label}>Аты-жөніңіз</Text>

            <TextInput
              style={styles.input}
              placeholder="Атыңызды енгізіңіз"
              placeholderTextColor="#B99CA5"
              value={name}
              onChangeText={setName}
            />

            <Text style={styles.label}>
              Телефон нөміріңіз
            </Text>

            <TextInput
              style={styles.input}
              placeholder="+7 777 123 45 67"
              placeholderTextColor="#B99CA5"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
              maxLength={16}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={handleContinue}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>
                Жалғастыру
              </Text>
              <Text style={styles.arrow}>→</Text>
            </TouchableOpacity>

            <Text style={styles.terms}>
              Жалғастыру арқылы сіз пайдалану шарттарымен келісесіз.
            </Text>
          </ScrollView>
        </KeyboardAvoidingView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5F7",
  },

  firstPage: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 55,
    paddingBottom: 25,
    alignItems: "center",
  },

  logoBox: {
    alignItems: "center",
    marginBottom: 15,
  },

  logo: {
    fontSize: 38,
    fontWeight: "900",
    color: "#E85D83",
    letterSpacing: 4,
  },

  subtitle: {
    color: "#B98C99",
    fontSize: 10,
    letterSpacing: 4,
  },

  courierBox: {
    flex: 1,
    width: "100%",
    marginVertical: 15,
    borderRadius: 30,
    backgroundColor: "#FADCE5",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  sunCircle: {
    position: "absolute",
    width: 230,
    height: 230,
    borderRadius: 115,
    backgroundColor: "#F8B7CA",
  },

  courierEmoji: {
    fontSize: 150,
    zIndex: 1,
  },

  cap: {
    position: "absolute",
    top: 40,
    fontSize: 45,
    zIndex: 2,
  },

  deliveryBag: {
    position: "absolute",
    bottom: 35,
    right: 25,
    backgroundColor: "#E85D83",
    borderRadius: 20,
    padding: 12,
    alignItems: "center",
  },

  bagEmoji: {
    fontSize: 35,
  },

  bagLabel: {
    color: "#FFFFFF",
    fontWeight: "900",
  },

  smallFruit: {
    position: "absolute",
    bottom: 20,
    left: 20,
    fontSize: 27,
  },

  mainTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#3D2930",
    textAlign: "center",
    lineHeight: 37,
  },

  description: {
    fontSize: 14,
    color: "#987C85",
    textAlign: "center",
    lineHeight: 22,
    marginTop: 10,
    marginBottom: 20,
  },

  button: {
    width: "100%",
    height: 57,
    borderRadius: 17,
    backgroundColor: "#E85D83",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    position: "relative",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
  },

  arrow: {
    position: "absolute",
    right: 22,
    color: "#FFFFFF",
    fontSize: 23,
  },

  footer: {
    color: "#B98C99",
    marginTop: 15,
    fontSize: 12,
  },

  secondPage: {
    flexGrow: 1,
    paddingHorizontal: 25,
    paddingTop: 45,
    paddingBottom: 30,
  },

  backButton: {
    marginBottom: 15,
  },

  backText: {
    color: "#D95A7D",
    fontSize: 16,
    fontWeight: "600",
  },

  fruitTitle: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "700",
    color: "#D95A7D",
    marginTop: 5,
  },

  fruitBox: {
    height: 250,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  package: {
    width: 175,
    height: 155,
    borderRadius: 25,
    backgroundColor: "#F6A0B8",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#FAD0DC",
  },

  packageEmoji: {
    fontSize: 50,
  },

  packageName: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "900",
    letterSpacing: 3,
  },

  packageSmall: {
    color: "#FFFFFF",
    fontSize: 8,
    letterSpacing: 2,
    marginTop: 4,
  },

  fruit: {
    position: "absolute",
    fontSize: 37,
  },

  f1: { top: 15, left: 25 },
  f2: { top: 10, right: 25 },
  f3: { top: 90, left: 0 },
  f4: { top: 90, right: 0 },
  f5: { bottom: 10, left: 30 },
  f6: { bottom: 0, right: 25 },
  f7: { top: 0, left: "45%" },
  f8: { bottom: 65, right: 0 },
  f9: { bottom: 70, left: 0 },

  loginTitle: {
    fontSize: 27,
    fontWeight: "800",
    color: "#3D2930",
    textAlign: "center",
  },

  label: {
    color: "#59414A",
    fontSize: 14,
    fontWeight: "700",
    marginTop: 12,
    marginBottom: 8,
  },

  input: {
    height: 55,
    borderWidth: 1,
    borderColor: "#F2D5DE",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    paddingHorizontal: 16,
    fontSize: 15,
    color: "#3D2930",
  },

  terms: {
    color: "#B69AA3",
    fontSize: 11,
    textAlign: "center",
    marginTop: 17,
    lineHeight: 18,
  },
});