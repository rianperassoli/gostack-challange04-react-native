import React, { useState, useEffect } from "react";
import { SafeAreaView, FlatList, StatusBar, StyleSheet } from "react-native";

import api from './services/api'
import CardRepository from './components/CardRepository'

export default function App() {

  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    api.get('repositories').then(response => {
      setRepositories(response.data)
    })
  }, [])

  async function handleLikeRepository(id) {
    const response = await api.post(`repositories/${id}/like`)

    if (response.status = 200) {
      const updatedRepository = response.data
      const newRepositories = repositories.map(repository => {
        if (repository.id !== id) {
          return repository
        }
        return updatedRepository
      })

      setRepositories(newRepositories)
    }
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />

      <SafeAreaView style={styles.container}>

        <FlatList
          data={repositories}
          keyExtractor={(repository) => repository.id}
          renderItem={({ item: repository }) => (
            <CardRepository
              repository={repository}
              addLike={handleLikeRepository}
            />
          )}
        />

      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7159c1",
  },
});
