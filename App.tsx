import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Value from './src/components/Value';
import RingProgress from './src/components/RingProgress';

export default function App() {
  return (
    <View style={styles.container}>
      <RingProgress radius={150} strokeWidth={50} progress={0.5} />

      <View style={styles.values}>
        <Value label="Steps" value="1219" />
        <Value label="Distance" value="0,75 km" />
        <Value label="Flights Climbed" value="12" />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    padding: 12,
  },
  values: {
    flexDirection: 'row',
    gap: 25,
    flexWrap: 'wrap',
    marginTop: 100,
  },
});
