const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow () {
    const startUrl = 
        process.env.ELECTRON_START_URL ||
        url.format({
            pathname: path.join(`${__dirname}/../build/index.html`),
            protocol: 'file:',
            slashes: true
        });
    win = new BrowserWindow({
        width: 1024,
        height: 600,
        frame: false,
    });
    win.loadURL(startUrl);
    win.on('closed', () => win = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});