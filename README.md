# Ejercicio React-Native

### Estructura de archivos

````
build/
src/
|- components ______________________________ # Donde se guardan los componentes reutilizables
|- - button ________________________________ # Componente de Boton
|- - - submit.js ___________________________ # Componente de Envio
|- - - detail.js ___________________________ # Componente de detalle
|- - commons _______________________________ # Componente padre para heredar metodos recurrentes
|- - Currency ______________________________ # Componente de input para formato moneda
|- - input _________________________________ # Componente de input numerico
|- - Slider ________________________________ # Componente de SLider
|- Containers ______________________________ # Vistas de varios componentes
|- - SliderAmount __________________________ # Vista para manejar el slider de montos
|- - SliderMoth ____________________________ # Vista para manejar el Slider del plazo
|- Utils ___________________________________ # Utilidades de la app
|- index.jsx _______________________________ # entrada de la aplicación
|- App.jsx _________________________________ # Componente principal
````

### Instalación

1. Descargar el codigo de Github con la opción de descarga. 
2. Tener un dispositivo ANDROID (Telefono / Tablet ) conectado a la pc con la opción de depuracion por USB activa 
    o AndroidStudio con un emulador activo.
3. `npm install` para instalar paquetes npm.
4. `npm run android` para inicializar server de desarrollo.
5. PD. En algunos casos no buildea en el primer intento, de ser asi ejecute nuevamente el paso 4.
