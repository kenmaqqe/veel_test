# 📝 Veel Test Todo App

A modern and minimal Todo application built with **Next.js** and **TypeScript**, featuring real-time updates, responsive UI, and clean code architecture.

## 🌟 Key Features

- ✨ **Real-time Updates**: Instant synchronization of todo items
- 🎨 **Modern UI/UX**: Clean and responsive design using Tailwind CSS
- 🚀 **High Performance**: Optimized with Next.js for fast loading
- 📱 **Responsive Design**: Works perfectly on all devices

## 🚀 Tech Stack

- **Next.js** 15.3.0 - React framework for production
- **React** 19 - UI library
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **React Hook Form** - Form handling with validation
- **Axios** - HTTP client for API requests

## 🏗️ Architecture

### Component Structure

- **Button**: Reusable button component with various styles
- **ModalAdd**: Modal component for creating new todos
- **StatusIndicator**: Visual indicator for todo status
- **TodoCard**: Card component for displaying todo items

### Services Layer

- **todoServices.ts**: Handles all API interactions for todo operations

### Custom Hooks

- **displayLogo.ts**: Custom hook for logo display logic

## ⚙️ Getting Started

### ✅ Prerequisites

Make sure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)

### 📦 Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/kenmaqqe/veel_test.git
cd veel_test
yarn install
```

### 🧪 Run the App

Start the development server:

```bash
yarn dev
```

Visit the app at http://localhost:3000

## 🧪 Testing

Run the test suite:

```bash
yarn test
```

## 📁 Project Structure

```
veel_test/
├── src/
│ ├── app/
│ │ └── page.tsx         # Main application page
│ ├── components/
│ │ ├── Button/          # Reusable button component
│ │ ├── ModalAdd/        # Todo creation modal
│ │ ├── StatusIndicator/ # Todo status badge
│ │ └── TodoCard/        # Todo item card component
│ ├── services/
│ │ └── todoServices.ts  # API service functions
│ └── types/
│   └── *.ts            # TypeScript interfaces & types
├── public/              # Static assets
└── package.json         # Project metadata & dependencies
```

## 📜 Available Scripts

| Command      | Description                    |
| ------------ | ------------------------------ |
| `yarn dev`   | Start the development server   |
| `yarn build` | Build for production           |
| `yarn start` | Start production server        |
| `yarn lint`  | Run ESLint to check code style |
| `yarn test`  | Run test suite                 |

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git cz`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

Made with ❤️ by the Veel Test team
