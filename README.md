# 🌟 Rotating 3D Cylinder with Sparkles – React Three Fiber

This React project renders a **3D rotating cylinder** enhanced with **sparkles** using **@react-three/fiber** and **@react-three/drei**. It also allows user interaction with camera controls like zoom, pan, and rotate.

## 🚀 Features

- 🌐 3D scene rendered using `@react-three/fiber`
- 🎥 Interactive controls with `OrbitControls`
- 🔄 Continuous rotation animation on the cylinder
- ✨ Sparkling effect using `Sparkles`
- 💡 Lighting with a `spotLight`
- 🎨 Custom background and materials

## 📦 Technologies Used

- **React**
- **@react-three/fiber** – React renderer for Three.js
- **@react-three/drei** – Useful helpers and abstractions for Three.js
- **Three.js** (under the hood)

## 📁 File Overview

### `App.jsx`

- Sets up the canvas and 3D environment.
- Adds camera controls, lighting, and background.
- Renders the `RotatingCylinder` component.

### `RotatingCylinder.jsx` (Defined inside App)

- Contains a `mesh` with a cylinder geometry.
- Uses `useFrame()` to rotate the object every frame.
- Adds sparkles for visual flair.
