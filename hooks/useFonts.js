import * as Font from 'expo-font';
import { Inter_300Light } from '@expo-google-fonts/inter';

export default useFonts = async () => {
  await Font.loadAsync({
    Inter_300Light: Inter_300Light,
  });
};