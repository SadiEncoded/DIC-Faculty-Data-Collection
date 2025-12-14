# Faculty Profile Data Collection Portal

A standalone, premium web application designed to securely collect and manage faculty data for integration into the official **Daffodil International College (DIC), Baburhat** website.

## 🚀 Overview

This application serves as a dedicated portal for faculty members to submit their professional profiles. It streamlines the data collection process by automatically standardizing inputs, handling media uploads, and generating unique identification numbers (e.g., `FAC-2025-001`) for system-wide integration.

## ✨ Key Features

-   **Premium UI/UX**: Glassmorphism design, custom animations, and a responsive experience.
-   **Automated ID Generation**: Auto-generates unique Registration Numbers for every faculty member.
-   **Secure Media Upload**: Handles profile photo uploads with automatic renaming and optimization via Supabase Storage.
-   **Robust Validation**: Real-time form validation using **Zod** schema.
-   **Enterprise Security**: Protected by Row Level Security (RLS) policies and Server-Side Validation.
-   **Visual Feedback**: Instant success confirmation with generated ID display.

## 🛠️ Tech Stack

-   **Frontend**: Next.js 14 (App Router), React, TypeScript, Tailwind CSS
-   **Backend**: Supabase (PostgreSQL, Storage, Auth)
-   **Validation**: Zod & React Hook Form
-   **Icons**: Lucide React

## ⚙️ Installation & Setup

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/faculty-app.git
    cd faculty-app
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Configure Environment**:
    Create a `.env.local` file in the root directory:
    ```env
    NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
    SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
    ```

4.  **Run Development Server**:
    ```bash
    npm run dev
    ```

## 👨‍💻 Developer

**Mahmudul Hasan Sadi**
*Full-stack Developer*
Dept. of Computer Science & Engineering (CSE)
Daffodil International College (DIC), Baburhat

---
*Built for the Department of Academic Affairs & Records, DIC.*
