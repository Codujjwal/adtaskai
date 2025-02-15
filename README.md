git clone https://github.com/yourusername/adtask-landing.git
```

2. Install dependencies:
```bash
cd adtask-landing
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`.

## 🏗️ Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── sections/    # Page sections (Hero, Features, etc.)
│   │   └── ui/          # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   └── lib/             # Utility functions
server/
├── routes/              # API routes
└── storage/             # Database interactions