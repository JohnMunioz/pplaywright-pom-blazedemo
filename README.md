# 🧪 Project BlazeDemo with Playwright

Este proyecto automatiza el flujo de reserva de vuelos en [BlazeDemo](https://blazedemo.com) utilizando **Playwright** con **TypeScript**, aplicando el patrón **Page Object Model (POM)** para lograr un código limpio, reutilizable y escalable.

---

## 📁 Estructura del Proyecto

```plaintext
project-blaze-demo/
├── page/
│   ├── basePage.ts           # Clase base con métodos reutilizables (click, fill, select, etc.)
│   ├── BookingsPage.ts       # Lógica específica de la página de reservas
│   └── locators/
│       └── bookings.ts       # Mapa de selectores centralizados
├── tests/
│   └── blazeDemo.spec.ts     # Test principal automatizado
├── playwright.config.ts      # Configuración del entorno Playwright
├── package.json              # Configuraciones de dependencias y scripts
└── node_modules/             # Dependencias instaladas
```

---

### 🚀 Ejecución del Proyecto
▶️ Generar código automáticamente con Codegen
Este comando abre un navegador interactivo para grabar acciones. Ideal como punto de partida:
```bash
npx playwright codegen https://www.blazedemo.com/
```

### 🧪 Ejecutar las pruebas con interfaz visual
Este comando abre la UI de Playwright para seleccionar y ejecutar pruebas fácilmente:
```bash
npx playwright test --ui
```

---

### 💻 Flujo Automatizado

1. `Abrir sitio web`
- `https://blazedemo.com/`

2. `Seleccionar origen y destino`
- `"Paris" ➡️ "Buenos Aires"`

3. `Seleccionar primer vuelo disponible`

4. `Llenar formulario con datos personales y de pago`

5. `Confirmar reserva`

6. `Validar mensaje de éxito: Thank you for your purchase`



### 🧱 Clases Implementadas

### `BasePage.ts`
Clase abstracta que encapsula acciones comunes en la UI:
- `loadWeb()`
- `clickOn()`
- `fillField()`
- `selectOption()`
- `expectVisible()`

### `BookingsPage.ts`
Hereda de BasePage. Encapsula las acciones específicas:
- `selectDestination()`
- `fillPersonalInfo()`
- `confirmationBooking()`

### `bookingLocators.ts`
Archivo con todos los selectores usados en el flujo.


---

### 📦 Instalación del Proyecto

Inicialización desde consola:
```bash
npx create-playwright
```

`Opciones seleccionadas:`

- `Lenguaje: TypeScript`
- `Carpeta de tests: tests`
- `GitHub Actions: No`
- `Instalar navegadores: Sí`

### 📌 Dependencias
Instaladas automáticamente al crear el proyecto:
```bash
npm install --save-dev @playwright/test
```

---

## ✍️ Autor
Proyecto realizado por ***John Muñoz*** como parte del proceso de aprendizaje en automatización de pruebas con Playwright.

---

### 💡 Recomendaciones
- `Mantén los selectores centralizados.`
- `Utiliza POM para separar lógica y mantener escalabilidad.`
- `Ejecuta tus pruebas frecuentemente usando npx playwright test.`

### 🔗 Recursos
[`📘 Documentación oficial de Playwright`](https://playwright.dev/java/)
[`🧰 Playwright Codegen`](https://playwright.dev/docs/codegen)