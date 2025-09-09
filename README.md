# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
``````````````````````````````````````````````````````````````````````````
`````````````````````````````````````````````````````````````````````````
```````````````````````````````````````````````````````````````````````

# 📱 Fiaó

Proyecto frontend del sistema **Fiaó**.  
Aplicación desarrollada en **React + Vite + TypeScript** con **Material UI** como librería de componentes y **React Router** para navegación.  

---

## 🚀 Requisitos previos

- **Node.js**: `v22.19.0`  
- **npm**: incluido con Node.js  

---

## 📦 Instalación del proyecto

1. Clonar el repositorio:
   ```bash
   git clone <https://github.com/samuelk14/Fiao-frontend.git>
   cd frontend
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

---

## 📜 Scripts disponibles

En el archivo `package.json`:

- `npm run dev` → Inicia el servidor de desarrollo con Vite.  
- `npm run build` → Compila el proyecto para producción.  
- `npm run lint` → Ejecuta ESLint para revisar el código.  
- `npm run preview` → Sirve la build en local para probarla.  

---

## 📂 Flujo de ramas en Git

- `main` → Producción  
- `develop` → Integración  
- `feature/*` → Desarrollo de nuevas pantallas o funcionalidades  

Ejemplo:

```bash
# Crear rama de feature desde develop
git checkout develop
git pull origin develop
git checkout -b feature/nueva-pantalla
```

Una vez completada la feature:

```bash
# Subir cambios
git push origin feature/nueva-pantalla

# Crear PR/Merge hacia develop
---

## 🎨 Stack principal

- **React 19.1.1**  
- **React DOM 19.1.1**
- **Vite 7.1.4**  
- **TypeScript 5.8.3**  
- **Material UI 7.3.2**  
- **React Router DOM 7.8.2**  
- **Emotion (CSS-in-JS)** para estilos con MUI  

---

## 📑 Dependencias

### **Dependencies**
```json
{
  "@emotion/react": "11.14.0",
  "@emotion/styled": "11.14.1",
  "@mui/icons-material": "7.3.2",
  "@mui/material": "7.3.2",
  "react": "19.1.1",
  "react-dom": "19.1.1",
  "react-router-dom": "7.8.2"
}
```

### **DevDependencies**
```json
{
  "@vitejs/plugin-react": "5.0.2",
  "typescript": "5.8.3",
  "typescript-eslint": "8.42.0",
  "vite": "7.1.4"
}
```

---

## 📖 Notas para el equipo

- Para nuevos features, crear ramas a partir de `develop` con el formato:  
  ```
  feature/<nombre-feature>
  ```
- Siempre hacer **Pull Request** hacia `develop`.  
- Los merges a `main` solo deben hacerse desde `develop` cuando el código esté listo para producción.  
- Documentar cambios relevantes en este README.  

