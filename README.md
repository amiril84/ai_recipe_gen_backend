# AI Recipe Generator Backend

Backend service for the AI Recipe Generator application, providing OpenAI integration for recipe generation and food image creation.

## 🚀 Features

- 🤖 OpenAI GPT-4 integration for recipe generation
- 🎨 DALL-E 3 integration for food photography
- 🔄 Real-time streaming support
- 🛡️ Secure API key management
- 🌐 RESTful API endpoints

## 🛠️ Tech Stack

- **Node.js** - Runtime environment
- **Express** - Web framework
- **TypeScript** - Type safety
- **OpenAI SDK** - AI integration
- **CORS** - Cross-origin support

## 📋 API Endpoints

### Generate Recipe
```http
POST /api/recipe/generate
```
Generates a complete recipe with instructions and nutritional information.

**Request Body:**
```json
{
  "meal": "string",
  "servings": "number",
  "dietary": "string (optional)"
}
```

### Generate Image
```http
POST /api/recipe/generate-image
```
Generates a professional food photograph using DALL-E 3.

**Request Body:**
```json
{
  "prompt": "string"
}
```

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/amiril84/ai_recipe_gen_backend.git
cd ai_recipe_gen_backend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
```bash
cp .env.example .env
```

4. Add your OpenAI API key to `.env`:
```env
OPENAI_API_KEY=your_api_key_here
PORT=3000
```

5. Start the development server:
```bash
npm run dev
```

## 📁 Project Structure

```
src/
├── index.ts           # Application entry point
├── routes/           
│   └── recipe.ts      # API route handlers
├── services/
│   └── openai.ts      # OpenAI integration
├── types/
│   └── index.ts       # TypeScript types
└── utils/
    └── prompts.ts     # AI system prompts
```

## 🔒 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAI_API_KEY` | Your OpenAI API key | Yes |
| `PORT` | Server port (default: 3000) | No |

## 🚀 Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
