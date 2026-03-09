# GENESIS INTERNATIONAL MONTESSORI SCHOOL

A professional, modern web application for GENESIS INTERNATIONAL MONTESSORI SCHOOL, featuring automated admissions, contact management, and a high-performance frontend.

## 🚀 Features

- **Automated Admissions**: Interactive modal form connected to Supabase for real-time enquiry tracking.
- **Contact Management**: Integrated contact form with database storage.
- **Google Sheets Sync**: Real-time synchronization of form submissions to Google Sheets via Supabase webhooks.
- **Modern UI/UX**:
  - High-performance React + Vite architecture.
  - Custom "Our Programs" cards based on school pamphlets.
  - Cinematic Portrait-style "School Life" video gallery.
  - Fully responsive design using Tailwind CSS and Radix UI.
- **Premium Aesthetics**: Smooth animations, glassmorphism effects, and custom branding throughout.

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Shadcn UI, Lucide Icons
- **Backend/DB**: Supabase (PostgreSQL)
- **Automation**: Google Apps Script (Webhooks)
- **Deployment**: Vercel

## ⚙️ Setup & Installation

### 1. Clone the repository
```sh
git clone https://github.com/srinivasthalada7781/school.git
cd school
```

### 2. Install dependencies
```sh
npm install
```

### 3. Environment Variables
Create a `.env.local` file in the root directory and add your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run locally
```sh
npm run dev
```

## 🌐 Deployment

This project is optimized for deployment on **Vercel**. 
1. Connect your GitHub repository to Vercel.
2. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` to the **Environment Variables** in your Vercel project settings.
3. Deploy!

## 📄 License
Generic License - Genesis International Montessori School.
