# 后端

## 部署

确保安装 [nodejs](https://nodejs.org/en/download/)，然后执行

```bash
npm install
```

在目录下配置环境变量`.env`文件

```env
OPENAI_ORG_ID   # 你的 OpenAI 组织 ID
OPENAI_API_KEY  # 你的 OpenAI API Key

# 可选
SERVER_PORT     # API服务端口，默认 3000
```

## 运行

```bash
npm run server
```

## API

### `POST /api/chat`

请求：

```json
{
  "role": "user",
  "content": "用户对话的内容"
}
```

响应：

```json
[
  // 当前对话的所有内容
  {
    "role": "user",
    "content": "用户对话的内容"
  },
  {
    "role": "assistant",
    "content": "ChatGPT回复的内容"
  },
  // ...
]
```

### `POST /api/reset`

重置对话，清空历史记录

请求：

```json
{}
```

响应：

```json
{
  "success": "true" 
}
```

### `GET /api/messages`

获取当前对话的所有内容

响应：

```json
[
  {
    "role": "user",
    "content": "用户对话的内容"
  },
  {
    "role": "assistant",
    "content": "ChatGPT回复的内容"
  },
  // ...
]
```