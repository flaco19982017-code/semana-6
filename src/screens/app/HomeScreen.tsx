import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { AppStackParamList } from "../../navigation/typeNavigation";
import { Character } from "../../types/character";
import { getAllCharacters } from "../../services/api";
import { AuthContext } from "../../context/AuthContext";
import { homeStyles } from "../../styles/appStyle";
import { Card } from "../../components/ui/Card";
import { LoadingSpinner } from "../../components/common/LoadingSpinner";

type Props = StackScreenProps<AppStackParamList, "Home">;

export const HomeScreen = ({ navigation }: Props) => {
  const { user, logout } = useContext(AuthContext);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filtered, setFiltered] = useState<Character[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCharacters();
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      setFiltered(characters);
    } else {
      setFiltered(
        characters.filter((c) =>
          c.name.toLowerCase().includes(search.toLowerCase()),
        ),
      );
    }
  }, [search, characters]);

  const fetchCharacters = async () => {
    try {
      const data = await getAllCharacters();
      setCharacters(data);
      setFiltered(data);
    } catch (e) {
      console.log("Error cargando personajes");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner message="Cargando personajes..." />;

  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.header}>
        <View>
          <Text style={homeStyles.greeting}>Rick & Morty 👽</Text>
          <Text style={homeStyles.email} numberOfLines={1}>
            {user?.email}
          </Text>
        </View>
        <TouchableOpacity style={homeStyles.logoutBtn} onPress={logout}>
          <Text style={homeStyles.logoutText}>Salir</Text>
        </TouchableOpacity>
      </View>
      <View style={homeStyles.searchContainer}>
        <TextInput
          style={homeStyles.searchInput}
          placeholder="Buscar personaje..."
          placeholderTextColor="#A0AEC0"
          value={search}
          onChangeText={setSearch}
        />
      </View>
      <Text style={homeStyles.sectionTitle}>
        Personajes ({filtered.length})
      </Text>
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            character={item}
            onPress={() =>
              navigation.navigate("Detail", { characterId: item.id })
            }
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={homeStyles.list}
        ListEmptyComponent={
          <Text style={homeStyles.emptyText}>
            No se encontraron personajes con "{search}"
          </Text>
        }
      />
    </View>
  );
};
