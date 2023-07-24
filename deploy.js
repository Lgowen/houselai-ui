const { minidev } = require('minidev')
const fs = require('fs');
const path = require('path')

// Github Actions Repository secrets
const APP_ID = process.env.APP_ID
const PRIVATE_KEY = process.env.PRIVATE_KEY 
const TOOL_ID = process.env.TOOL_ID

// 获取工作目录路径
const workspacePath = process.env.GITHUB_WORKSPACE

// 构建产物路径
const buildPath = path.join(workspacePath, 'dist/build/mp-alipay');
const fs = require('fs');

function replacePravateInfo() {
  // 读取 JSON 文件
  const config = fs.readFileSync('./config.json', 'utf8');
  // 替换占位符
  const replacedConfig = config
  .replace('secrets.TOOL_ID', TOOL_ID)
  .replace('secrets.PRIVATE_KEY', PRIVATE_KEY);
  // 将替换后的内容写回到 JSON 文件 
  fs.writeFileSync('./config.json', replacedConfig, 'utf8');
}

function uploadBundle() {
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

async function beginTask() {
  await replacePravateInfo()
  uploadBundle()
}


beginTask()