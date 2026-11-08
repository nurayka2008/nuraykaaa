
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
  onBack: () => void;
  onContinue: (phone: string) => void;
};

export default function Number({ onBack, onContinue }: Props) {
  const [phone, setPhone] = useState("");

  const handleContinue = () => {
    if (phone.replace(/\D/g, "").length !== 10) {
      Alert.alert("Қате", "Телефон нөмірін толық енгізіңіз");
      return;
    }

    onContinue(phone);
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
          Нөміріңізді енгізіңіз
        </Text>

        <Text style={styles.subtitle}>
          Жалғастыру үшін мобильді нөміріңізді енгізіңіз
        </Text>

        <View style={styles.phoneBox}>
          <Text style={styles.country}>🇰🇿 +7</Text>

          <TextInput
            style={styles.input}
            placeholder="777 123 45 67"
            placeholderTextColor="#B99FA2"
            keyboardType="phone-pad"
            maxLength={10}
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleContinue}
        >
          <Text style={styles.buttonText}>Жалғастыру　→</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          ♡ Сіздің деректеріңіз қауіпсіз сақталады
        </Text>
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
  phoneBox: {
    height: 65,
    borderWidth: 1.5,
    borderColor: "#F1D2D2",
    borderRadius: 22,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    backgroundColor: "#FFF9F8",
  },
  country: {
    fontSize: 17,
    color: "#49383A",
    fontWeight: "600",
  },
  input: {
    flex: 1,
    fontSize: 17,
    marginLeft: 12,
    color: "#49383A",
  },
  button: {
    height: 62,
    borderRadius: 35,
    backgroundColor: "#E98FA3",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 28,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "700",
  },
  footer: {
    textAlign: "center",
    color: "#9B8588",
    marginTop: 35,
    fontSize: 13,
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
