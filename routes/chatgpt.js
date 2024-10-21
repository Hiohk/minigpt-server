const express = require('express');
const router = express.Router();
const { ChatCompletion, setEnvVariable } = require('@baiducloud/qianfan');
require('dotenv').config(); // 加载环境变量

// 从环境变量中读取 API key 和 secret key
const accessKey = process.env.API_KEY;
const secretKey = process.env.SECRET_KEY;


// 设置 API key 和 secret key
setEnvVariable('QIANFAN_AK', accessKey);
setEnvVariable('QIANFAN_SK', secretKey);

// 【推荐】建议您在生产环境使用IAM认证鉴权，文档地址 https://cloud.baidu.com/doc/Reference/s/9jwvz2egb
// setEnvVariable('QIANFAN_ACCESS_KEY','your_iam_ak');
// setEnvVariable('QIANFAN_SECRET_KEY','your_iam_sk');

const client = new ChatCompletion();

router.post('/chat', async (req, res) => {
  try {
    console.log('Received request:', req.body);
    const { question } = req.body; // 从请求体中获取用户输入的 prompt

    // 调用文心一言 API
    const resp = await client.chat({
      messages: [
        {
          role: 'user',
          content: question,
        },
      ],
      stream: true,  // 启用流式返回
    }, 'ERNIE-Speed-128K');

    // 将流式数据发送给客户端
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    for await (const chunk of resp) {
      let dataToWrite;
      if (typeof chunk === 'object' && chunk !== null) {
        dataToWrite = JSON.stringify(chunk);
      } else {
        // 如果chunk不是上述任何类型，记录错误并跳过这个chunk  
        console.error('Unsupported chunk type:', typeof chunk, chunk);
        continue;
      }

      console.log('Received chunk:', dataToWrite);
      res.write(dataToWrite);
    }

    res.end();
  } catch (error) {
    console.error('Error calling qianfan API:', error);
    res.status(500).json({ error: "failed to call qianfan API" });
  }
});

module.exports = router;
