# 💕 Galería de Momentos Especiales

Una hermosa galería web interactiva creada con amor para celebrar momentos especiales y cumpleaños. Presenta fotos con efecto flip 3D que revelan mensajes personalizados, filtros por fecha y soporte para modo claro/oscuro.

![Galería de Momentos Especiales] (https://drive.google.com/uc?export=view&id=1v-tFZeuwFUpjef3eCcQ-NDNz_L39Cr80)

## ✨ Características

- 🖼️ **Galería interactiva** con efecto flip 3D en las tarjetas
- 💌 **Mensajes personalizados** ocultos detrás de cada foto
- 🎨 **Diseño responsive** que se adapta a móviles, tablets y desktop
- 🌙 **Modo claro y oscuro** con transiciones suaves
- 📅 **Filtros por fecha** (año y mes)
- 💖 **Diseño romántico** con gradientes y colores cálidos
- ⚡ **Animaciones fluidas** y efectos hover
- 🎯 **Optimizado para rendimiento** con Next.js

## 🛠️ Tecnologías Utilizadas

- **Framework:** Next.js 14 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Componentes:** Radix UI
- **Iconos:** Lucide React
- **Temas:** next-themes
- **Animaciones:** CSS 3D Transforms

## 🚀 Instalación

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Pasos de instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/Santrax211/mcmv_08_09.git 
   cd mcmv_08_09
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Agrega tus imágenes**
   - Coloca tus fotos en `public/images/recuerdos/`
   - Formatos soportados: JPG, PNG, JPEG, WEBP

4. **Personaliza el contenido**
   - Edita el array `memories` en `app/page.tsx`
   - Actualiza las rutas de imágenes, mensajes y fechas

5. **Ejecuta el proyecto**
   ```bash
   npm run dev
   ```

6. **Abre tu navegador**
   - Ve a `http://localhost:3000`

## 📁 Estructura del Proyecto

```
galeria-momentos-especiales/
├── app/
│   ├── globals.css          # Estilos globales y variables CSS
│   ├── layout.tsx           # Layout principal con ThemeProvider
│   └── page.tsx             # Página principal con la galería
├── components/
│   ├── ui/                  # Componentes de UI reutilizables
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── select.tsx
│   └── theme-provider.tsx   # Proveedor de temas
├── lib/
│   └── utils.ts             # Utilidades (función cn)
├── public/
│   └── images/
│       └── recuerdos/       # 📸 Coloca tus fotos aquí
├── package.json
├── tailwind.config.ts       # Configuración de Tailwind
└── README.md
```

## 🎨 Personalización

### Agregar nuevas fotos

1. Coloca tus imágenes en `public/images/recuerdos/`
2. Edita el array `memories` en `app/page.tsx`:

```typescript
const memories = [
  {
    id: 1,
    image: "/images/recuerdos/tu-foto.jpg",
    message: "Tu mensaje especial aquí...",
    date: new Date("2024-07-21"),
    location: "Lugar especial",
  },
  // Agrega más recuerdos...
]
```

### Cambiar colores del tema

Edita las variables CSS en `app/globals.css` o modifica `tailwind.config.ts` para personalizar la paleta de colores.

### Modificar textos

- **Título principal:** Línea 89 en `app/page.tsx`
- **Subtítulo:** Línea 92 en `app/page.tsx`
- **Footer:** Líneas 180-186 en `app/page.tsx`

## 📱 Capturas de Pantalla

### Modo Claro
![Modo Claro](https://drive.google.com/uc?export=view&id=1v-tFZeuwFUpjef3eCcQ-NDNz_L39Cr80)

### Modo Oscuro
![Modo Oscuro](https://drive.google.com/uc?export=view&id=1zv0rDay6f1SP7S1VQ1nfZN8YZ3TGLeQP)

### Efecto Flip
![Efecto Flip](https://drive.google.com/uc?export=view&id=1pWs3zFA88Qi1XVaPcy0IbHoUJFtRHwV-)

## 🌐 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio a [Vercel](https://vercel.com)
2. Vercel detectará automáticamente que es un proyecto Next.js
3. ¡Despliega con un clic!

### Netlify

1. Conecta tu repositorio a [Netlify](https://netlify.com)
2. Configura el comando de build: `npm run build`
3. Configura el directorio de publicación: `out`

## 🤝 Contribución

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 💖 Agradecimientos

- Creado con amor para celebrar momentos especiales
- Inspirado en el poder de los recuerdos y las fotografías
- Gracias a la comunidad de Next.js y Tailwind CSS

## 📞 Contacto

Si tienes preguntas o sugerencias:

- 📧 Email: tu-email@ejemplo.com
- 🐙 GitHub: [@tu-usuario](https://github.com/tu-usuario)
- 🐦 Twitter: [@tu-usuario](https://twitter.com/tu-usuario)

---

⭐ Si este proyecto te gustó, ¡dale una estrella en GitHub!

**Hecho con 💕 para celebrar momentos especiales**
```

## 🎯 Características del README:

✅ **Completo y profesional**
✅ **Emojis para hacerlo más atractivo**
✅ **Instrucciones paso a paso claras**
✅ **Estructura del proyecto bien documentada**
✅ **Sección de personalización detallada**
✅ **Información de despliegue**
✅ **Placeholders para capturas de pantalla**
✅ **Sección de contribución**
✅ **Información de contacto**
