const { minidev } = require('minidev')

const path = require('path')

// const APP_ID = process.env.APP_ID || '2021004105633109'
// const PRIVATE_KEY = process.env.PRIVATE_KEY 
// const TOOL_ID = process.env.TOOL_ID

const fs = require('fs');

// 读取 JSON 文件
const config = fs.readFileSync('./config.json', 'utf8');

// 替换占位符
const replacedConfig = config
  .replace('secret.TOOL_ID', process.env.TOOL_ID)
  .replace('secret.PRIVATE_KEY', process.env.PRIVATE_KEY);

// 将替换后的内容写回到 JSON 文件
fs.writeFileSync('./config.json', replacedConfig, 'utf8');

// 获取工作目录路径
const workspacePath = process.env.GITHUB_WORKSPACE 

// 构建产物路径
const buildPath = path.join(workspacePath, 'dist/build/mp-alipay');

// console.log(buildPath, 'buildPath1')

// async function setInfo() {
//     await minidev.config.useRuntime({
//         'alipay.authentication.privateKey': PRIVATE_KEY,
//         'alipay.authentication.toolId': TOOL_ID,
//       });
// }

async function upload() {
    await setInfo()
    minidev.upload({
        appId: APP_ID, // (对应appid)
        identityKeyPath: './config.json', // 身份验证文件
        project: buildPath, // uniapp打包后的路径
        experience: true // 是否设置为体验版
      })
      .then(() => {
        console.log('上传成功！')
      })
      .catch((error) => {
        console.log('上传失败，原因：', error)
        process.exit(-1)
      })
}

upload()