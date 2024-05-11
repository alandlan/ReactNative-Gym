import { createConfig, createComponents } from '@gluestack-style/react';
import {  config as defaultTheme } from "@gluestack-ui/config"
import * as componentsTheme from '@gluestack-style/react';

export const gluestackUIConfig = createConfig({
    ...defaultTheme,
  tokens: {
    colors: {
      green700: '#00875F',
      green500: '#00B37E',
      trueGray700: '#121214',
      trueGray600: '#202024',
      trueGray500: '#29292E',
      trueGray400: '#323238',
      trueGray300: '#7C7C8A',
      trueGray200: '#C4C4CC',
      trueGray100: '#E1E1E6',
      white: '#FFFFFF',
      red: '#F75A68',
    },
    fonts:{
      heading: 'Roboto_700Bold',
      body: 'Roboto_400Regular',
    }
    ,fontSizes: {
      'xs': 12,
      'sm': 14,
      'md': 16,
      'lg': 18,
      'xl': 20,
    },
    space: {
      '2': 20,
      '4': 30,
      '14':56,
      '33': 148
    }
  },  
})

type Config = typeof gluestackUIConfig; // Assuming `config` is defined elsewhere

type Components = typeof componentsConfig;

export const componentsConfig = createComponents(componentsTheme);

export type { UIConfig, UIComponents } from '@gluestack-ui/themed';

export interface IConfig {}
export interface IComponents {}

declare module '@gluestack-ui/themed' {
  interface UIConfig extends Omit<Config, keyof IConfig>, IConfig {}
  interface UIComponents
    extends Omit<Components, keyof IComponents>,
      IComponents {}
}

export const config = {
  ...gluestackUIConfig,
  components: componentsConfig,
};