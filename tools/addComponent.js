const fs = require("fs"); // 引入文件系统模块
const chalk = require("chalk");
const path = require("path");
const resolve = (...file) => path.resolve(__dirname, ...file);
const log = (message) => console.log(chalk.green(`${message}`));
const successLog = (message) => console.log(chalk.blue(`${message}`)); //成功提示
const errorLog = (error) => console.log(chalk.red(`${error}`)); //错误提示

//导入模块
const { vueTemplate, entryTemplate } = require("./template");
//生成文件
const generateFile = (path, data) => {
  if (fs.existsSync(path)) {
    errorLog(`${path}文件已存在`);
    return;
  }
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, "utf-8", (err) => {
      if (err) {
        errorLog(err.message);
        reject(err);
      } else {
        resolve(true);
      }
    });
  });
};
log("请输入要生成的页面组件名称、会生成在 packages目录下");
let componentName = "";
process.stdin.on("data", async (chunk) => {
  //获取组件名
  const inputName = String(chunk).trim().toString();
  //组件路径
  const componentPath = resolve("../packages/", inputName);
  //vue文件
  const vueFile = resolve(`${componentPath}/src`, "index.vue");
  // 入口文件
  const entryFile = resolve(componentPath, "index.js");
  // 判断组件文件夹是否存在
  const hasComponentExists = fs.existsSync(componentPath);
  if (hasComponentExists) {
    errorLog(`${inputName}组件已存在，请重新输入`);
    return;
  } else {
    log(`正在生成组件目录 ${componentPath}`);
    await dotExistDirectoryCreate(componentPath);
    await dotExistDirectoryCreate(`${componentPath}/src`);
  }

  try {
    componentName = inputName;
    log(`正在生成 vue 文件 ${vueFile}`);
    await generateFile(vueFile, vueTemplate(componentName));
    log(`正在生成 index.js 文件`);
    await generateFile(entryFile, entryTemplate(componentName));
    successLog("生成成功");
  } catch (e) {
    errorLog(e.message);
  }
  process.stdin.emit("end");
});

process.stdin.on("end", () => {
  log("exit");
  process.exit();
});

const dotExistDirectoryCreate = (directory) => {
  return new Promise((resolve) => {
    mkdirs(directory, function () {
      resolve(true);
    });
  });
};

//递归创建目录
const mkdirs = (directory, callback) => {
  var exists = fs.existsSync(directory);
  if (exists) {
    callback();
  } else {
    mkdirs(path.dirname(directory), function () {
      fs.mkdirSync(directory);
      callback();
    });
  }
};
