### React + Vite Setup with Tailwind CSS, Prettier, and More
This is a minimal setup for using React with Vite, HMR (Hot Module Replacement), ESLint rules, Tailwind CSS, Prettier, and some essential plugins and utilities.

### Features
``` Vite for fast and efficient build system.```

```React with Fast Refresh for improved developer experience.```

```Prettier and Tailwind CSS integration.```

```Tabler Icons for React.```

```Profanity API integration for filtering messages.```

```React Hook Form for handling forms with validation.```

### Prerequisites
Before you begin, ensure that you have the following tools installed:

```Node.js (version 14 or higher recommended)```

```npm or pnpm (package manager)```

### Getting Started

Follow these steps to get your project set up.

### 1. Install Dependencies
First, create a new project using Vite with React.

```bash
npm create vite@latest my-react-project --template react
cd my-react-project
```

### Prettier + Tailwind CSS
To integrate Prettier with Tailwind CSS:

1- Install Prettier and the Prettier Tailwind plugin.

```bash
npm install -D prettier prettier-plugin-tailwindcss
```
2-Add the following configuration to your package.json:

```bash
{
  "prettier": {
    "plugins": ["prettier-plugin-tailwindcss"]
  }
}
```

### Tabler Icons
For adding Tabler Icons to your React project, run the following:

```bash
pnpm install @tabler/icons-react
# or
npm install @tabler/icons-react
```

### Profanity API
To integrate Profanity API for filtering profanity in messages, you can use the following code snippet:

```bash
const res = await fetch('https://vector.profanity.dev', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: 'Your message here' }),
});
```

### React Hook Form
To handle forms efficiently with React Hook Form, run the following:

```bash
npm install react-hook-form
```
### 3. Setup Tailwind CSS
Follow these steps to set up Tailwind CSS in your project:

1-Install Tailwind CSS and its peer dependencies:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

2-Add Tailwind CSS to your CSS file (src/index.css or src/main.css):

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

3-Update the tailwind.config.js to enable Tailwind CSS in your React app:

```bash
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
### 4. Start the Development Server
After installing and configuring everything, you can start your development server with:

```bash
npm run dev
```
This will launch the app at http://localhost:3000 with hot module reloading (HMR).

Directory Structure
Here is an overview of the main directories and files:

```bash
my-react-project/

├── node_modules/

├── public/

├── src/

│   ├── assets/

│   ├── components/

│   ├── App.jsx

│   ├── main.jsx

│   └── index.css

├── tailwind.config.js

├── vite.config.js

├── package.json

└── README.md
```

Example Usage
Here’s an example of using Tabler Icons in your React components:

```bash
jsx

import { Trash } from '@tabler/icons-react';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React + Vite</h1>
      <button className="p-2 bg-blue-500 text-white">
        <Trash className="mr-2" /> Delete
      </button>
    </div>
  );
}

export default App;
```

### Contribution
Feel free to fork this project and contribute. For any issues, feel free to open a GitHub issue.

### License

This project is open-source and available under the  ``` MIT License.```

