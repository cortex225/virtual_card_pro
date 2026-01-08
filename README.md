# Virtual Business Card Pro 🚀

A high-performance, fully responsive digital business card and professional portfolio built with **React**, **TypeScript**, and **Tailwind CSS**. 

Designed to convert visitors into clients, this application serves as a central hub for your professional identity, bridging the physical and digital worlds with smart features like QR codes, vCard downloads, and Google Wallet integration.

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## ✨ Key Features

- **📱 Fully Responsive Design:**
  - **Mobile:** Compact, app-like interface for quick information access.
  - **Desktop/Tablet:** Modern split-view layout with a sticky profile and scrollable content area.
- **🌍 Multi-Language Support:** Instant toggling between French (FR) and English (EN).
- **💼 Rich Content Sections:**
  - **About & Why Me:** Value-proposition focused sections.
  - **Services:** Detailed service cards with feature highlights.
  - **Process:** Step-by-step visual guide of your workflow.
  - **Testimonials:** Social proof section to build trust.
- **⚡️ Smart Actions:**
  - **vCard Download:** One-click contact saving (`.vcf`).
  - **Google Wallet:** Generate a QR code to add the card to mobile wallets.
  - **One-Tap Contact:** Direct links for Email, Calendly, LinkedIn, etc.
- **🎨 Modern UI/UX:** Glassmorphism effects, smooth animations, and clean typography (Plus Jakarta Sans).

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (CDN/Runtime configuration for flexibility)
- **Icons:** [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm/yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/virtual-card-pro.git
   cd virtual-card-pro
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   pnpm dev
   ```

4. **Build for production:**
   ```bash
   pnpm build
   ```

## ⚙️ Configuration & Customization

All content is separated from logic for easy customization.

1. Open `constants.ts`.
2. Update the `DATA` object with your personal information:
   - Name, Company, Contact info.
   - Tech stack tags.
   - Services, About text, and Testimonials.
3. Update the `T` (Translations) object if you need to modify static UI text.

## 📂 Project Structure

```
├── components/       # Reusable UI components (ActionButton, SocialIcon)
├── constants.ts      # Centralized data and content (Profile, Services, Text)
├── types.ts          # TypeScript interfaces for data safety
├── App.tsx           # Main application logic and layout
├── index.html        # Entry point with Tailwind & Font configuration
└── vite.config.ts    # Vite build configuration
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 License

This project is licensed under the MIT License.

---
*Created by [JL Digital Services](https://www.jldigitalservices.com)*