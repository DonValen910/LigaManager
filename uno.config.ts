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
    },
    colors: {
      gris: 'var(--color-gris)',
      'gris-oscuro': 'var(--color-gris-oscuro)',
      verde: 'var(--color-verde)',
      rojo: 'var(--color-rojo)',
      amarillo: 'var(--color-amarillo)',
    }
  },
  // Incluir el reset de Tailwind
  layers: {
    'reset': -1,
    'default': 1,
  }
})