import { defineConfig, presetAttributify } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
  ],
  // Incluir el reset de Tailwind
  layers: {
    'reset': -1,
    'default': 1,
  }
})