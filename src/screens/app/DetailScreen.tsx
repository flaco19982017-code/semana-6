import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { AppStackParamList } from "../../navigation/typeNavigation";
import { Character } from "../../types/character";
import { getCharacterById } from "../../services/api";
import { detailStyles } from "../../styles/appStyle";
import { LoadingSpinner } from "../../components/common/LoadingSpinner";

type Props = StackScreenProps<AppStackParamList, "Detail">;

const getStatusColor = (status: string) => {
  switch (status) {
    case "Alive":
      return "#4CAF50"; // verde natural
    case "Dead":
      return "#EF5350"; // rojo suave
    default:
      return "#90A4AE"; // gris azulado
  }
};

export const DetailScreen = ({ route }: Props) => {
  const { characterId } = route.params;
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCharacter();
  }, []);

  const fetchCharacter = async () => {
    try {
      const data = await getCharacterById(characterId);
      setCharacter(data);
    } catch (e) {
      console.log("Error cargando personaje");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner message="Cargando personaje..." />;
  if (!character) return <LoadingSpinner message="Personaje no encontrado" />;

  return (
    <ScrollView
      style={detailStyles.container}
      contentContainerStyle={detailStyles.content}
    >
      <Image
        source={{ uri: character.image }}
        style={detailStyles.image}
        defaultSource={require("../../../assets/icon.png")}
      />

      <Text style={detailStyles.name}>{character.name}</Text>

      <View
        style={[
          detailStyles.statusBadge,
          { backgroundColor: getStatusColor(character.status) },
        ]}
      >
        <Text style={detailStyles.statusText}>{character.status}</Text>
      </View>

      <View style={detailStyles.infoCard}>
        <View style={detailStyles.infoRow}>
          <Text style={detailStyles.infoLabel}>Especie</Text>
          <Text style={detailStyles.infoValue}>{character.species}</Text>
        </View>

        <View style={detailStyles.infoRow}>
          <Text style={detailStyles.infoLabel}>Género</Text>
          <Text style={detailStyles.infoValue}>{character.gender}</Text>
        </View>

        <View style={detailStyles.infoRow}>
          <Text style={detailStyles.infoLabel}>Origen</Text>
          <Text style={detailStyles.infoValue}>{character.origin.name}</Text>
        </View>

        <View style={detailStyles.infoRow}>
          <Text style={detailStyles.infoLabel}>Ubicación</Text>
          <Text style={detailStyles.infoValue}>{character.location.name}</Text>
        </View>

        <View style={detailStyles.infoRow}>
          <Text style={detailStyles.infoLabel}>Episodios</Text>
          <Text style={detailStyles.infoValue}>
            {character.episode.length} episodios
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};