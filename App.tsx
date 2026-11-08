
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

import NumberScreen from "./Number";
import Verification from "./Verification";

export default function App() {
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const handleContinue = () => {
    if (name.trim().length < 2) {
      Alert.alert("Ескерту", "Атыңызды дұрыс енгізіңіз 💗");
      return;
    }

    if (phone.replace(/\D/g, "").length !== 11) {
      Alert.alert("Ескерту", "Телефон нөмірін дұрыс енгізіңіз");
      return;
    }

    setPage(3);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {page === 1 ? (
        <View style={styles.welcomePage}>
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>ANEA.</Text>
            <Text style={styles.logoSubtitle}>СІЗДІҢ СҮЙІКТІ ДҮКЕНІҢІЗ</Text>
          </View>

          <Text style={styles.emoji}>🛍️</Text>

          <Text style={styles.welcomeTitle}>
            Қош келдіңіз!
          </Text>

          <Text style={styles.description}>
            ANEA дүкенімен сауда жасау енді оңай әрі ыңғайлы 💗
          </Text>

          <TouchableOpacity
            style={styles.mainButton}
            onPress={() => setPage(2)}
          >
            <Text style={styles.buttonText}>Бастау</Text>
          </TouchableOpacity>
        </View>
      ) : page === 2 ? (
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <ScrollView
            contentContainerStyle={styles.formPage}
            keyboardShouldPersistTaps="handled"
          >
            <TouchableOpacity
              onPress={() => setPage(1)}
              style={styles.backButton}
            >
              <Text style={styles.backText}>‹ Артқа</Text>
            </TouchableOpacity>

            <Text style={styles.logo}>ANEA.</Text>

            <Text style={styles.formTitle}>Тіркелу</Text>
            <Text style={styles.description}>
              Жалғастыру үшін мәліметтеріңізді енгізіңіз
            </Text>

            <Text style={styles.label}>Аты-жөніңіз</Text>
            <TextInput
              style={styles.input}
              placeholder="Атыңызды енгізіңіз"
              placeholderTextColor="#B9A5AA"
              value={name}
              onChangeText={setName}
            />

            <Text style={styles.label}>Телефон нөміріңіз</Text>
            <TextInput
              style={styles.input}
              placeholder="+7 777 123 45 67"
              placeholderTextColor="#B9A5AA"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
              maxLength={16}
            />

            <TouchableOpacity
              style={styles.mainButton}
              onPress={handleContinue}
            >
              <Text style={styles.buttonText}>Жалғастыру</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      ) : page === 3 ? (
        <NumberScreen
          onBack={() => setPage(2)}
          onContinue={(value) => {
            setNewPhone(value);
            setPage(4);
          }}
        />
      ) : (
        <Verification
          phone={newPhone}
          onBack={() => setPage(3)}
          onVerify={() => {
            Alert.alert(
              "Қош келдіңіз!",
              "Нөміріңіз расталды 💗",
              [
                {
                  text: "Жақсы",
                  onPress: () => {
                    setName("");
                    setPhone("");
                    setNewPhone("");
                    setPage(1);
                  },
                },
              ]
            );
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF4F6",
  },
  welcomePage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 28,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 55,
  },
  logo: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#D77D96",
    letterSpacing: 3,
    textAlign: "center",
  },
  logoSubtitle: {
    fontSize: 10,
    color: "#A77D89",
    letterSpacing: 2,
    marginTop: 5,
  },
  emoji: {
    fontSize: 95,
    marginBottom: 25,
  },
  welcomeTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#573943",
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    color: "#967780",
    textAlign: "center",
    lineHeight: 23,
    marginBottom: 35,
  },
  mainButton: {
    width: "100%",
    height: 55,
    backgroundColor: "#D77D96",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "600",
  },
  formPage: {
    flexGrow: 1,
    paddingHorizontal: 25,
    paddingTop: 55,
    paddingBottom: 35,
  },
  backButton: {
    marginBottom: 35,
  },
  backText: {
    color: "#D77D96",
    fontSize: 17,
  },
  formTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#573943",
    marginTop: 35,
    marginBottom: 10,
  },
  label: {
    fontSize: 15,
    color: "#573943",
    fontWeight: "600",
    marginTop: 22,
    marginBottom: 9,
  },
  input: {
    height: 55,
    borderWidth: 1,
    borderColor: "#F0D5DD",
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#573943",
  },
});
