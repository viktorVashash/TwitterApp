import { app, BrowserWindow, ipcMain, protocol } from 'electron';
import pretty from 'pretty-bytes';
import Twitter from 'twitter';
import { URLS, KEYS } from './app/js/constants/index';
import diskspace from 'diskspace';

let mainWindow = null;
let twitter = new Twitter({
  consumer_key: KEYS.CONSUMER_KEY,
  consumer_secret: KEYS.CONSUMER_SECRET,
  access_token_key: KEYS.ACCESS_TOKEN_KEY,
  access_token_secret: KEYS.ACCESS_TOKEN_SECRET
});

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') {
    app.quit();
  };
});

ipcMain.on('free_memmory', (event, args) => {
  let disk = '';

  if(process.platform === 'darwin' || process.platform === 'linux') {
    disk = '/';
  } else {
    disk = 'C';
  }

  diskspace.check(disk, (err, total, free, status) => {
      event.returnValue = pretty(Number(free));
  });
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728,
    maximizable: false,
    resizable: false
  });

  mainWindow.loadURL(`file://${__dirname}/app/index.html`);

  mainWindow.webContents.on('did-finish-load', () => {
    if(process.env.NODE_ENV === 'development') {
      mainWindow.openDevTools();
    }

    mainWindow.show();
    mainWindow.focus();
  });

  protocol.registerStringProtocol('login', (request, callback) => {
    twitter.request.post(URLS.REQUEST_TOKEN_URL, (error, data) => {
      if(error) {
        console.log(error);
      };

      const body = data.toJSON().body;

      twitter.request.get(URLS.AUTHENTICATE_URL + body, (error, data) => {
        if(error) {
          console.log(error);
        };

        const url = data.toJSON().request.uri.href;
        mainWindow.loadURL(url);
      });
    })
  });

  protocol.registerStringProtocol('callback', (request, callback) => {
    const access_token = request.url.match(/oauth_token=([^&]*)&oauth_verifier=([^&]*)/)[1];
    const access_key = request.url.match(/oauth_token=([^&]*)&oauth_verifier=([^&]*)/)[2];

    twitter = new Twitter({
      consumer_key : KEYS.CONSUMER_KEY,
      consumer_secret: KEYS.CONSUMER_SECRET,
      access_token_key: access_token,
      access_token_secret: access_key
    });

    twitter.request.post(URLS.VERIFIER_URL + access_key, (error, data) => {
      if(error) {
        console.log(error);
      };

      const body = data.toJSON().body.match(/oauth_token=([^&]*)&oauth_token_secret=([^&]*)/);

      twitter = new Twitter({
        consumer_key : KEYS.CONSUMER_KEY,
        consumer_secret: KEYS.CONSUMER_SECRET,
        access_token_key: body[1],
        access_token_secret: body[2]
      });

      twitter.request.get(URLS.CREDENTIALS_URL, (error, data) => {
        if(error) {
          console.log(error);
        };

        mainWindow.loadURL(`file://${__dirname}/app/index.html#/MainScreen`);
      });
    });
  });

  protocol.registerStringProtocol('tweet', (request, callback) => {
    let memmory = request.url.substr(8);

    twitter.request.post(URLS.TWEET_URL + memmory, (err, data) => {
      if(err) {
        console.log(err);
      };

      callback(data.toJSON().headers.status);
    });
  });

  mainWindow.webContents.on('did-get-redirect-request', (event, oldUrl, newUrl) => {
    event.preventDefault();
    mainWindow.loadURL(`file://${__dirname}/app/index.html`);
  });

  mainWindow.on('close', () => {
    mainWindow = null;
  });
});
