## 基于千帆大模型的 miniGPT Server

该项目旨在通过集成百度千帆大模型中的 ERNIE-Speed-128K，搭建一个功能强大的 miniGPT Server。这一服务器不仅具备高效的对话文本生成能力，还可作为构建自定义对话系统或文本生成 web 应用的基础框架，为开发者提供灵活且强大的工具。

### 技术栈概述

- 后端框架：项目采用 Node.js 作为后端开发语言，得益于其非阻塞 I/O 模型，Node.js 在处理高并发请求时表现出色，非常适合构建实时交互系统。
- Web 框架：Express 作为轻量级的 Node.js Web 应用框架，被用于快速搭建服务器路由和处理 HTTP 请求，简化了 Web 应用的开发流程。
- AI 模型：核心部分使用了百度千帆大模型家族中的 ERNIE-Speed-128K。该模型以其高效、低延迟的特点，在保持较高准确性的同时，优化了计算资源的使用，非常适合部署在资源受限的环境中。

### 项目结构

- server.js：项目的入口文件，负责初始化 Express 应用、配置中间件、定义路由以及启动服务器。
- routes/：包含所有 API 路由的定义，如文本生成接口，用户可以通过 HTTP 请求与服务器进行交互。
- models/：虽然本例中主要依赖的是外部提供的千帆大模型，但此目录预留用于存放任何自定义的模型或数据处理逻辑。
- utils/：存放工具函数，如请求处理、错误处理、日志记录等，以提高代码复用性和可维护性。
- package.json：项目的依赖管理和脚本配置文件，通过 npm install 安装所需依赖，npm start 启动服务器。

### 安装与启动

1. 安装依赖：在项目根目录下运行 npm install，这将根据 package.json 文件安装所有必要的 Node.js 模块。

2. 启动服务器：安装完成后，通过 npm start 命令启动服务器。服务器将监听指定的端口（默认 3000），等待客户端请求。

### 使用说明

API 接口：服务器提供了一个简单的 RESTful API，允许用户通过 HTTP POST 请求发送文本生成请求。请求体应包含 prompt 字段，用于指定生成文本的起始文本或上下文。
响应格式：服务器将返回 JSON 格式的响应，包含生成的文本内容以及可能的额外信息（如生成时间、模型版本等）。

### 版权信息

版权所有 © 2024 hkgroup 保留所有权利。
