# soundcloud-resolve-jsonp

Use the SoundCloud resolve endpoing with JSONP or Superagent

## Getting Started

```bash
npm install soundcloud-resolve-jsonp
```

```js
var resolve = require('soundcloud-resolve-jsonp');
var track;

resolve({
  url: 'http://soundcloud.com/jxnblk/let-go',
  client_ID: CLIENT_ID
  }, function(err, res) {
    if (err) { console.error(err) }
    track = res.body;
});
```

## Options

Options can be passed as the second argument.

```js
resolve(params, { superagent: true }, callback);
```

- `superagent` (boolean) - use superagent get method instead of JSONP

---

MIT License

