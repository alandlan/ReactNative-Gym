import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

export const theme = {
    ...DefaultTheme,
    
    colors: {
        ...DefaultTheme.colors,
        green700: '#00875F',
        green500: '#00B37E',
        gray700: '#121214',
        gray600: '#202024',
        gray500: '#29292E',
        gray400: '#323238',
        gray300: '#7C7C8A',
        gray200: '#C4C4CC',
        gray100: '#E1E1E6',
        white: '#FFFFFF',
        red500: '#F75A68'
    },
    fonts: {
        ...DefaultTheme.fonts,
        heading: 'Roboto_700Bold',
        body: 'Roboto_400Regular',
    },
    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 18,
        xl: 20,
        xxl: 24
    },
    sizes: {
        14: 56,
        33: 148
    }
};

