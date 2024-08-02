import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import useStyles from './style';

interface SearchComponentProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({
  placeholder = 'Search any services...',
  onSearch,
}) => {
  const {styles} = useStyles();
  const [query, setQuery] = useState('');

  const handleSearch = (text: string) => {
    setQuery(text);
    onSearch(text);
  };

  return (
    <View style={styles.container}>
      <Icon name="search" size={25} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={query}
        placeholderTextColor={'black'}
        onChangeText={handleSearch}
      />
    </View>
  );
};

export default SearchComponent;
