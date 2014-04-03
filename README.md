yc-uglify-js
============

custom uglify use uglifyJs

```shell
npm install yc-uglify-js -g
```

### how to use uglify

```shell
var UglifyJS = require("uglify-js");
```

##### plan1
```shell
UglifyJS.minify("/path/to/file.js").code;
```

##### plan2
```shell
UglifyJS.minify("var b = function () {};", {fromString: true});
```

##### plan3
```shell
var result = UglifyJS.minify([ "file1.js", "file2.js", "file3.js" ], {
    outSourceMap: "out.js.map"
});
console.log(result.code); // minified output
console.log(result.map);
```


