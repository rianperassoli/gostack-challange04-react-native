import React from 'react'
import { Text, StyleSheet } from 'react-native'

const TagTech = ({ tech }) => {
  return (
    <Text style={styles.tech}>
      {tech}
    </Text>
  )
}

export default TagTech

const styles = StyleSheet.create({
  tech: {
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 10,
    backgroundColor: "#04d361",
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: "#fff",
  },
})
