import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeAsyncStorage = async (key: Key, value: any) => { 
  try {
    const jsonValue = JSON.stringify(value);
    console.log('storeData raw', jsonValue);
    await AsyncStorage.setItem(key, jsonValue, (e)=>{ if (e) console.error('[AsyncStorage] storeData callback error: ', e)});
  } catch (e) {
    console.error(e as Error)
  }
};

export const getAsyncStorage = async (key: Key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    console.log('getData raw', jsonValue);
    if (!jsonValue) {
      return null
    }
    return JSON.parse(jsonValue)
  } catch (e) {
    console.error(e as Error)
  }
};

type Key = 'global_theme' | 'global_lang';