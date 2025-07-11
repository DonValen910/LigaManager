import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
  ],
  theme: {
    fontFamily: {
      'inter': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      'mono': ['JetBrains_Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
    }
  },
  // Incluir el reset de Tailwind
  layers: {
    'reset': -1,
    'default': 1,
  }
})