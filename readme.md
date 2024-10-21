## 基于千帆大模型的 miniGPT Server

该项目旨在通过集成百度千帆大模型中的 ERNIE-Speed-128K，搭建一个功能强大的 miniGPT Server。这一服务器不仅具备高效的对话文本生成能力，还可作为构建自定义对话系统或文本生成 web 应用的基础框架，为开发者提供灵活且强大的工具。

### 技术栈概述

- 后端框架：项目采用 **Node.js** 作为后端开发语言，得益于其非阻塞 I/O 模型，Node.js 在处理高并发请求时表现出色，非常适合构建实时交互系统。
- Web 框架：**Express** 作为轻量级的 Node.js Web 应用框架，被用于快速搭建服务器路由和处理 HTTP 请求，简化了 Web 应用的开发流程。
- AI 模型：核心部分使用了百度千帆大模型家族中的 **ERNIE-Speed-128K**。该模型以其高效、低延迟的特点，在保持较高准确性的同时，优化了计算资源的使用，非常适合部署在资源受限的环境中。

### 安装与启动

1. 安装依赖：在项目根目录下运行 npm install，这将根据 package.json 文件安装所有必要的 Node.js 模块。

```shell
npm install
```

2. 启动服务器：安装完成后，通过 npm start 命令启动服务器。服务器将监听指定的端口（默认 3000），等待客户端请求。

```shell
npm start
```

### 使用说明

- API 接口：服务器提供了一个简单的 RESTful API，允许用户通过 HTTP POST 请求发送文本生成请求。请求体应包含 prompt 字段，用于指定生成文本的起始文本或上下文。

- 示例请求：POST `http://localhost:3000/api/chat`

- 请求参数：

```json
{
  "question": "简要介绍下故宫"
}
```

- 响应示例：

```json
{
    "id": "as-9knp8hygi0",
    "object": "chat.completion",
    "created": 1729218442,
    "sentence_id": 0,
    "is_end": false,
    "is_truncated": false,
    "result": "故宫，",
    "need_clear_history": false,
    "usage": {
        "prompt_tokens": 3,
        "completion_tokens": 0,
        "total_tokens": 3
    }
}{
    "id": "as-9knp8hygi0",
    "object": "chat.completion",
    "created": 1729218443,
    "sentence_id": 1,
    "is_end": false,
    "is_truncated": false,
    "result": "位于中国北京市中心，是中国明清两代的皇家宫殿，也是现今的世界文化遗产和全国重点文物保护单位。",
    "need_clear_history": false,
    "usage": {
        "prompt_tokens": 3,
        "completion_tokens": 0,
        "total_tokens": 3
    }
}
```

### 版权信息

Copyright © 2024 hkgroup 保留所有权利。
