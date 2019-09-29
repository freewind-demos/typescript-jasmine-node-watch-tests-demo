TypeScript Jasmine Node Watch Tests Demo
========================================

不想使用`jasmine-ts`，因为它不太灵活，不能向jasmine传参数

可以使用`ts-node ./node_modules/jasmine/bin/jasmine.js`与`nodemon`组合，让jasmine自动监测文件修改并运行测试

```
npm install
npm test
npm run test:watch
```
