# McKnowledgeBook 📗

> The Minecraft modding Wiki.

McKnowledgeBook is a custom-written documentation site dedicated to Minecraft modding.

## 🌟 Features

- **Comprehensive Coverage**: Extensive documentation on Minecraft modding, including:
  - Minecraft fundamentals (editions, versions, gameplay, technical aspects)
  - Modding concepts and project types
  - Loaders (Forge, Fabric, Quilt, NeoForge, and more)
  - Datapacks and resource packs
  - Server engines and plugins
  - Tools and utilities
  - And much more!
- **Modern Documentation Site**: Built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build) for a fast, beautiful, and accessible documentation experience
- **Monorepo Architecture**: Organized as a monorepo with custom modules
- **Image Zoom**: Enhanced image viewing with zoom functionality
- **Different media**: Embedded videos from YouTube and articles from the [Minecraft wiki](https://minecraft.wiki)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/modpackker/mcknowledgebook.git
cd mcknowledgebook
```

2. Install dependencies:
```bash
pnpm i
```

3. Start the development server:
```bash
pnpm run dev
```

The site will be available at `http://localhost:4321`

### Modules

The project uses a monorepo structure with custom modules:

- **@mc/metadata**: Provides loaders and utilities for Minecraft metadata
- **tsfix**: TypeScript utility types for better type safety

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

Made with 💚 by [T1xx1](https://t1xx1.vercel.app)
