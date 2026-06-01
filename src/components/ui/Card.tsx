import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { cardStyles } from '../../styles/appStyle';
import { Character } from '../../types/character';

interface CardProps {
  character: Character;
  onPress: () => void;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Alive': return '#48BB78';
    case 'Dead': return '#E53E3E';
    default: return '#A0AEC0';
  }
};

export const Card = ({ character, onPress }: CardProps) => {
  return (
    <TouchableOpacity style={cardStyles.card} onPress={onPress} activeOpacity={0.7}>
      <Image
        source={{ uri: character.image }}
        style={cardStyles.image}
        defaultSource={require('../../../assets/icon.png')}
      />
      <View style={cardStyles.info}>
        <Text style={cardStyles.name} numberOfLines={1}>{character.name}</Text>
        <Text style={cardStyles.species}>{character.species}</Text>
        <View style={[cardStyles.statusBadge, { backgroundColor: getStatusColor(character.status) }]}>
          <Text style={cardStyles.statusText}>{character.status}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};