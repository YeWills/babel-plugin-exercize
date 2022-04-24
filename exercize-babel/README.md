## 手写简易的 babel

### 运行

#### npm install

```s
# babel-plugin-exercize-master/babel-plugin-exercize-master/exercize-babel
npm install
```

#### babel config 获取方式修改
win10下，确实遇到这个问题了，原因是babel config 读取的问题，我们这里只是为了测试，
可以修改下代码：
```js
// src/cli/index.js
const searchResultconfig = require('../../test/myBabel.config.js');
const options = {

//原代码
// babelOptions: searchResult.config,
//修改后代码
babelOptions: searchResultconfig,
}
```
#### 注意是在这个目录的根目录下，执行命令：
```s
# babel-plugin-exercize-master/babel-plugin-exercize-master/exercize-babel 根目录下执行
node ./src/cli/index.js 'test/input/**/*.js' --out-dir ./test/dist --watch
```
就可以正常运行了，


## 概述
本demo是，经典而简洁的commander + chokidar+glob 使用demo，目前的webpack还有umi 都是用这个。
babel config 获取方式 原来用的是经典的 cosmiconfig 方式，这是行内的配置文件标准，webpack babel eslint 都是这个。