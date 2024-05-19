import { createConfig, createComponents } from '@gluestack-style/react';
import {  config as defaultTheme } from "@gluestack-ui/config"
import * as componentsTheme from '@gluestack-style/react';

export const gluestackUIConfig = createConfig({
  ...defaultTheme,
  aliases: {
    rounded: 'borderRadius',
  },
  tokens: {
    colors: {
      ...defaultTheme.tokens.colors,
      abobrinha: '#FFD700',
      green700: '#00875F',
      green500: '#00B37E',
      tuEGay800: '#1F2937',
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
      ...defaultTheme.tokens.fonts,
      heading: 'Roboto_700Bold',
      body: 'Roboto_400Regular',
    }
    ,fontSizes: {
      ...defaultTheme.tokens.fontSizes,
      'xs': 12,
      'sm': 14,
      'md': 16,
      'lg': 18,
      'xl': 20,
    },
    space: {
      ...defaultTheme.tokens.space,
      '2': 20,
      '4': 30,
      '14':56,
      '33': 148
    },
    size:{
      "2lg": 200,
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