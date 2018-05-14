# AminoJS Desktop

## Local Development
Run the following command to start the React and Electron process
```bash
yarn dev
```

To build a production ready Electron application, run the following command
```bash
yarn ebuild
```

---

## Foreman Development Tips

If you are trying to close the Electron application, please DO NOT just simply click the "X" button provided by your system GUI manager, please do navigate down to your Terminal, and terminate the Foreman operation by hitting either `CMD + C` or `CTRL + C`

---

## Foreman Development Error
If you receive the follow error message

![Error message](https://i.imgur.com/r6FOg6u.png)

Which mean some of the Node process Foreman started early on has crashed, but the webpack-dev-server hasn't stopped yet, so the next time you run `yarn dev`, dev-server will throw an error that said port 5000 is already in use, so to resolve this issue is to kill the Node process and restart everything

### OSX/Linux
Run the following command to kill all NodeJS processes
```bash
killall node
```

### Windows
Open the Task Manger and find the `Node.js Server-side JavaScript` and click the `End Task` button at the lower right corner

![Task Manger](https://i.imgur.com/857F9qk.png)