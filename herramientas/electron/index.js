const { app, BrowserWindow } = require('electron');

let ventanaPrincipal;

app.on('ready', crearVentana);

function createWindow() {
    ventanaPrincipal = new BrowserWindow({
        width: 800,
        height: 600,
    });

    mainWindow.loadFile('index.html');

}