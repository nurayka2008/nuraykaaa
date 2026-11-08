
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";

type Props = {
  phone: string;
  onBack: () => void;
  onVerify: () => void;
};

export default function Verification({
  phone,
  onBack,
  onVerify,
}: Props) {
  const [code, setCode] = useState("");

  const handleVerify = () => {
    if (code.length !== 4) {
      Alert.alert("Қате", "4 таңбалы кодты енгізіңіз");
      return;
    }

    onVerify();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.content}>
        <TouchableOpacity style={styles.back} onPress={onBack}>
          <Text style={styles.backText}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.logo}>ANEA.</Text>

        <Text style={styles.basket}>🛍️</Text>

        <Text style={styles.title}>
          Растау кодын енгізіңіз
        </Text>

        <Text style={styles.subtitle}>
          Біз +7 {phone} нөміріне 4 таңбалы код жібердік
        </Text>

        <View style={styles.codeRow}>
          {[0, 1, 2, 3].map((item) => (
            <View style={styles.codeBox} key={item}>
              <Text style={styles.codeText}>
                {code[item] || ""}
              </Text>
            </View>
          ))}
        </View>

        <TextInput
          style={styles.hiddenInput}
          keyboardType="number-pad"
          maxLength={4}
          value={code}
          onChangeText={setCode}
          autoFocus
        />

        <TouchableOpacity onPress={() => setCode("")}>
          <Text style={styles.resend}>
            Кодты қайта жіберу
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={handleVerify}
        >
          <Text style={styles.buttonText}>Растау　→</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.decor}>♡　🌿　♡</Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF2F1",
  },
  content: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 45,
  },
  back: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#F9DCDD",
    alignItems: "center",
    justifyContent: "center",
  },
  backText: {
    fontSize: 36,
    color: "#493438",
    marginTop: -5,
  },
  logo: {
    textAlign: "center",
    fontSize: 27,
    fontWeight: "900",
    color: "#E9859A",
    letterSpacing: 2,
    marginTop: 18,
  },
  basket: {
    fontSize: 65,
    textAlign: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  title: {
    fontSize: 27,
    fontWeight: "800",
    color: "#39282B",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#947F81",
    textAlign: "center",
    lineHeight: 24,
    marginTop: 15,
    marginBottom: 30,
  },
  codeRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
    marginTop: 15,
  },
  codeBox: {
    width: 58,
    height: 65,
    borderRadius: 17,
    borderWidth: 1.7,
    borderColor: "#F0CBCD",
    backgroundColor: "#FFF9F8",
    alignItems: "center",
    justifyContent: "center",
  },
  codeText: {
    fontSize: 25,
    color: "#49383A",
    fontWeight: "600",
  },
  hiddenInput: {
    height: 1,
    opacity: 0,
  },
  resend: {
    textAlign: "center",
    color: "#E78399",
    fontSize: 16,
    marginTop: 25,
  },
  button: {
    height: 62,
    borderRadius: 35,
    backgroundColor: "#E98FA3",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 75,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "700",
  },
  bottom: {
    height: 90,
    backgroundColor: "#FBE0E2",
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  decor: {
    fontSize: 25,
  },
});
