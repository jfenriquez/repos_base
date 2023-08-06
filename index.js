/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App'; // Reemplaza con el componente de entrada de tu aplicación
import {name as appName} from './app.json';

// Registra la aplicación para la plataforma móvil
AppRegistry.registerComponent(appName, () => App);

// Si deseas ejecutar en la web, puedes crear otro punto de entrada para la web
// y registrar la aplicación aquí:
if (window.document) {
  const {AppRegistry} = require('react-native');
  const {name} = require('./app.json');
  AppRegistry.registerComponent(name, () => App);
  AppRegistry.runApplication(name, {
    initialProps: {},
    rootTag: document.getElementById('app-root'), // Reemplaza con el ID del elemento raíz de tu web
  });
}

/* import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

 */
