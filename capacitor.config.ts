import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.playcapacitor',
  appName: 'playcapacitor',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
