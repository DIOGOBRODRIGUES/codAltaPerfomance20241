import i18n from 'i18n-js';
import { Platform, NativeModules } from 'react-native';

// Carregar arquivos de idioma
import en from './locales/en.json';
import es from './locales/es.json';

// Adicionar os arquivos de idioma
i18n.translations = {
  en,
  es,
};

// Obter o idioma do sistema
const getDeviceLanguage = () => {
    if (Platform.OS === 'ios') {
      return NativeModules.SettingsManager.settings.AppleLocale || NativeModules.SettingsManager.settings.AppleLanguages[0];
    } else {
      return NativeModules.I18nManager.localeIdentifier || '';
    }
  };
  
  // Definir o idioma padrão
  i18n.locale = getDeviceLanguage();
  
export default i18n;
