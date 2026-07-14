<a name="top"></a>

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:FACC15,50:F59E0B,100:FB923C&height=220&section=header&text=Klyro&fontSize=72&fontColor=1a1310&animation=fadeIn&fontAlignY=38&desc=Where%20Connections%20Spark&descAlignY=58&descSize=20" width="100%" alt="Klyro banner" />

<br/>

[![Typing SVG](https://readme-typing-svg.demolab.com/?font=Fira+Code&weight=600&size=22&duration=3000&pause=1000&color=F59E0B&center=true&vCenter=true&width=700&lines=A+Modern+Full-Stack+Social+Platform+%E2%9C%A8;Built+with+Next.js+%2B+Prisma+%2B+PostgreSQL;Share.+Connect.+Grow.+%F0%9F%8C%9F)](https://git.io/typing-svg)

<p align="center">
  A full-stack social media web app built with Next.js. Users can sign up, create posts with images, follow other people, like and comment on posts, and get notified when someone interacts with their content — all backed by a real relational database.
</p>

<br/>

<!-- Tech badges -->
<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <br/>
  <img src="https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white" alt="Clerk" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/UploadThing-FACC15?style=for-the-badge&logoColor=1a1310" alt="UploadThing" />
  <img src="https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white" alt="shadcn/ui" />
  <img src="https://img.shields.io/badge/Radix_UI-161618?style=for-the-badge&logo=radixui&logoColor=white" alt="Radix UI" />
</p>

<!-- Repo badges -->
<p align="center">
  <img src="https://img.shields.io/github/stars/Abhay-Pratap200001/Klyro-Social--media-app?style=for-the-badge&color=FACC15&labelColor=1a1310" alt="GitHub Stars" />
  <img src="https://img.shields.io/github/forks/Abhay-Pratap200001/Klyro-Social--media-app?style=for-the-badge&color=F59E0B&labelColor=1a1310" alt="GitHub Forks" />
  <img src="https://img.shields.io/github/last-commit/Abhay-Pratap200001/Klyro-Social--media-app?style=for-the-badge&color=FB923C&labelColor=1a1310" alt="Last Commit" />
  <img src="https://img.shields.io/badge/License-Personal%20%2F%20Educational-FACC15?style=for-the-badge&labelColor=1a1310" alt="License" />
</p>

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=Abhay-Pratap200001&style=for-the-badge&color=F59E0B&labelColor=1a1310&label=Profile+Views" alt="Profile Views" />
</p>

<p align="center">✦ ✧ ✦ ✧ ✦ ✧ ✦ ✧ ✦ ✧ ✦ ✧ ✦</p>

<p align="center">
  Live previw https://klyro-social-media-app.vercel.app/
</p>

</div>

---

## 📚 Table of Contents

- [📖 Overview](#overview)
- [🚀 Features](#features)
- [🛠 Tech Stack](#tech-stack)
- [🏗 System Architecture](#system-architecture)
- [🔄 Flow Diagrams](#flow-diagrams)
  - [1. Authentication Flow](#1-authentication-flow)
  - [2. Create Post Flow](#2-create-post-flow)
  - [3. Like + Notification Flow](#3-like--notification-flow)
  - [4. Follow + Notification Flow](#4-follow--notification-flow)
  - [5. Comment Flow](#5-comment-flow)
- [🗄 Database Schema (ER Diagram)](#database-schema-er-diagram)
- [📂 Project Folder Structure](#project-folder-structure)
- [⚙ Environment Variables](#environment-variables)
- [⚡ Getting Started](#getting-started)
- [📸 Screenshots](#screenshots)
- [🧪 What's Missing / Roadmap](#whats-missing--roadmap)
- [📄 License](#license)

<p align="center">✦ ✧ ✦ ✧ ✦ ✧ ✦ ✧ ✦ ✧ ✦ ✧ ✦</p>

<a name="overview"></a>

## 📖 Overview

Klyro is a Twitter/X-style social platform built to practice full-stack product engineering end to end — not just CRUD, but authentication, file uploads, relational data modeling, and UI state that reacts to real user interaction.

Core loop: a user signs in, posts text and/or an image, other users like/comment/follow, and the post author gets notified. Everything is server-rendered where possible using Next.js Server Components and Server Actions, with Prisma talking to a PostgreSQL database.

> [!TIP]
> The whole app runs on Server Actions instead of a separate REST/GraphQL layer — pages call functions in `src/actions/*.action.ts` directly. Less boilerplate, fully typed end to end.

---

<a name="features"></a>

## 🚀 Features

| ✨ | Feature | Details |
|---|---|---|
| 🔐 | **Authentication** | Sign up / sign in handled by Clerk, with automatic syncing of Clerk users into the app's own database (`syncUser`). |
| 📝 | **Post creation** | Create posts with text content and/or an uploaded image. |
| 🏠 | **Home feed** | All posts shown in latest-first order with author info, like count, and comment count. |
| ❤️ | **Likes** | Like/unlike a post; unliking removes the like, liking creates a notification for the post author (unless you're liking your own post). |
| 💬 | **Comments** | Comment on any post; commenting on someone else's post creates a notification. |
| 🤝 | **Follow system** | Follow/unfollow other users; a "Who to Follow" widget suggests users you don't already follow. |
| 🔔 | **Notifications** | A dedicated page listing LIKE, COMMENT, and FOLLOW notifications with read/unread state. |
| 🪪 | **Profile pages** | Per-username profile with bio, location, website, join date, and follower/following/post counts. |
| 🛡 | **Authorization checks** | Only the original author can delete their own post. |
| 🖼 | **Image uploads** | Post images uploaded via UploadThing, stored off-server and served over HTTPS. |
| 🌗 | **Dark / light theme** | Full theme toggle using `next-themes`. |
| 📱 | **Responsive layout** | Separate desktop and mobile navbars. |

---

<a name="tech-stack"></a>

## 🛠 Tech Stack

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma_ORM-2D3748?style=flat-square&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=flat-square&logo=clerk&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![UploadThing](https://img.shields.io/badge/UploadThing-FACC15?style=flat-square&logoColor=1a1310)
![shadcn](https://img.shields.io/badge/shadcn%2Fui-000000?style=flat-square&logo=shadcnui&logoColor=white)
![Radix](https://img.shields.io/badge/Radix_UI-161618?style=flat-square&logo=radixui&logoColor=white)
![Lucide](https://img.shields.io/badge/lucide--react-F59E0B?style=flat-square&logoColor=white)
![date-fns](https://img.shields.io/badge/date--fns-FB923C?style=flat-square&logoColor=white)

</div>

<br/>

<details open>
<summary><strong>📋 Full breakdown — what each piece is doing and why</strong></summary>

<br/>

| Technology | Purpose |
|---|---|
| **Next.js 16 (App Router, Turbopack)** | Core framework — server components, server actions, file-based routing, no separate backend needed. |
| **React 19** | Component-driven UI. |
| **TypeScript** | Static typing across the whole codebase to catch errors at compile time. |
| **Prisma ORM (`@prisma/client`, `@prisma/adapter-pg`)** | Type-safe database access layer, maps Postgres tables to typed models and simplifies relational queries (likes, comments, follows). |
| **PostgreSQL** | Relational database — the data model (users, posts, likes, comments, follows) is inherently relational. |
| **Clerk (`@clerk/nextjs`)** | Authentication and session management, so sign-up/sign-in/session handling didn't need to be built from scratch. |
| **UploadThing** | Handles image upload, storage, and URL generation for post images. |
| **Tailwind CSS 4** | Utility-first styling for the entire UI. |
| **Radix UI + shadcn** | Accessible, unstyled UI primitives (dialog, tabs, avatar, sheet, etc.) used as the base for the design system. |
| **lucide-react** | Icon set used throughout the UI. |
| **next-themes** | Dark/light mode toggle with system preference support. |
| **date-fns** | Human-readable timestamp formatting on posts/comments/notifications. |
| **react-hot-toast** | Lightweight toast notifications for success/error feedback. |
| **class-variance-authority / clsx / tailwind-merge** | Utility helpers for composing conditional Tailwind class names. |

</details>

---

<a name="system-architecture"></a>

## 🏗 System Architecture

> [!NOTE]
> The diagram below is rendered live from Mermaid — logic and structure are unchanged from the source of truth.

```mermaid
graph TB
    subgraph Client["Browser"]
        UI["React UI<br/>(Server + Client Components)"]
    end

    subgraph NextApp["Next.js App (App Router)"]
        MW["Middleware<br/>src/proxy.ts (Clerk auth guard)"]
        Pages["Pages / Layouts<br/>src/app/**"]
        Actions["Server Actions<br/>src/actions/*.action.ts"]
        API["Route Handler<br/>/api/uploadthing"]
    end

    subgraph External["External Services"]
        Clerk["Clerk<br/>Auth & Session"]
        UT["UploadThing<br/>Image Storage"]
    end

    subgraph Data["Data Layer"]
        Prisma["Prisma Client<br/>src/lib/prisma.ts"]
        DB[("PostgreSQL<br/>(Neon)")]
    end

    UI -->|HTTP request| MW
    MW -->|validates session| Clerk
    MW -->|allowed| Pages
    Pages -->|calls| Actions
    UI -->|image upload| API
    API --> UT
    Actions --> Prisma
    Prisma --> DB
    Clerk -.->|webhook-less sync on login| Actions
```

### 🧭 How it fits together

1. Every request first passes through `src/proxy.ts`, a Clerk middleware that allows public routes (`/`, `/sign-in`, `/sign-up`, `/api/uploadthing`) and requires auth on everything else.
2. Pages are React Server Components that call **Server Actions** (`"use server"` functions in `src/actions/`) directly — no separate REST/GraphQL API layer for app data.
3. Server Actions use the **Prisma Client** (`src/lib/prisma.ts`) to talk to **PostgreSQL**.
4. Image uploads go through the **UploadThing** route handler (`src/app/api/uploadthing`), which returns a hosted file URL that gets saved on the `Post` record.
5. `next.config.ts` whitelists `*.ufs.sh` (UploadThing's CDN domain) for Next's `<Image>` optimization.

---

<a name="flow-diagrams"></a>

## 🔄 Flow Diagrams

<a name="1-authentication-flow"></a>

### 1️⃣ Authentication Flow

```mermaid
sequenceDiagram
    participant U as User
    participant MW as Middleware (proxy.ts)
    participant C as Clerk
    participant SA as syncUser() action
    participant DB as PostgreSQL

    U->>MW: Request any protected route
    MW->>C: auth.protect()
    alt Not signed in
        C-->>U: Redirect to /sign-in
        U->>C: Submit credentials
        C-->>U: Session created
    end
    U->>SA: On app load, syncUser() runs
    SA->>DB: findUnique(clerkId)
    alt User not in DB yet
        SA->>DB: create User (clerkId, email, username, image)
    end
    DB-->>SA: User record
    SA-->>U: Authenticated + synced
```

<a name="2-create-post-flow"></a>

### 2️⃣ Create Post Flow

```mermaid
sequenceDiagram
    participant U as User
    participant CP as CreatePost.tsx
    participant IU as ImageUpload.tsx
    participant UT as UploadThing API
    participant SA as createPost() action
    participant DB as PostgreSQL

    U->>CP: Types content
    opt Attaches an image
        U->>IU: Select image file
        IU->>UT: Upload file
        UT-->>IU: Hosted image URL (*.ufs.sh)
    end
    U->>CP: Click "Post"
    CP->>SA: createPost(content, imageUrl)
    SA->>DB: post.create({ content, image, authorId })
    DB-->>SA: New Post record
    SA->>SA: revalidatePath("/")
    SA-->>CP: { success: true, post }
    CP-->>U: Feed updates with new post
```

<a name="3-like--notification-flow"></a>

### 3️⃣ Like + Notification Flow

```mermaid
sequenceDiagram
    participant U as User
    participant PC as PostCard.tsx
    participant SA as toggleLike() action
    participant DB as PostgreSQL

    U->>PC: Click like button
    PC->>SA: toggleLike(postId)
    SA->>DB: Find existing Like
    alt Like exists
        SA->>DB: Delete Like (unlike)
    else No existing Like
        SA->>DB: Transaction:
        SA->>DB: 1. Create Like
        alt Post author != current user
            SA->>DB: 2. Create Notification (type: LIKE)
        end
    end
    SA->>SA: revalidatePath("/")
    SA-->>PC: { success: true }
    PC-->>U: Like count updates
```

<a name="4-follow--notification-flow"></a>

### 4️⃣ Follow + Notification Flow

```mermaid
sequenceDiagram
    participant U as User
    participant FB as FollowButton.tsx
    participant SA as toggleFollow() action
    participant DB as PostgreSQL

    U->>FB: Click Follow / Unfollow
    FB->>SA: toggleFollow(targetUserId)
    SA->>SA: Reject if targetUserId === self
    SA->>DB: Find existing Follows row
    alt Already following
        SA->>DB: Delete Follows (unfollow)
    else Not following yet
        SA->>DB: Transaction:
        SA->>DB: 1. Create Follows (followerId, followingId)
        SA->>DB: 2. Create Notification (type: FOLLOW)
    end
    SA->>SA: revalidatePath("/")
    SA-->>FB: { success: true }
    FB-->>U: Button + follower count updates
```

<a name="5-comment-flow"></a>

### 5️⃣ Comment Flow

```mermaid
sequenceDiagram
    participant U as User
    participant PC as PostCard.tsx
    participant SA as createComment() action
    participant DB as PostgreSQL

    U->>PC: Type comment, submit
    PC->>SA: createComment(postId, content)
    SA->>DB: Find Post (get authorId)
    SA->>DB: Transaction:
    SA->>DB: 1. Create Comment
    alt Post author != current user
        SA->>DB: 2. Create Notification (type: COMMENT)
    end
    SA->>SA: revalidatePath("/")
    SA-->>PC: { success: true, comment }
    PC-->>U: Comment appears under post
```

---

<a name="database-schema-er-diagram"></a>

## 🗄 Database Schema (ER Diagram)

```mermaid
erDiagram
    USER ||--o{ POST : "authors"
    USER ||--o{ COMMENT : "authors"
    USER ||--o{ LIKE : "gives"
    USER ||--o{ FOLLOWS : "follows (as follower)"
    USER ||--o{ FOLLOWS : "followed by (as following)"
    USER ||--o{ NOTIFICATION : "receives"
    USER ||--o{ NOTIFICATION : "creates"

    POST ||--o{ COMMENT : "has"
    POST ||--o{ LIKE : "has"
    POST ||--o{ NOTIFICATION : "triggers"
    COMMENT ||--o{ NOTIFICATION : "triggers"

    USER {
        string id PK
        string email UK
        string username UK
        string clerkId UK
        string name
        string bio
        string image
        string location
        string website
        datetime createdAt
        datetime updatedAt
    }

    POST {
        string id PK
        string authorId FK
        string content
        string image
        datetime createdAt
        datetime updatedAt
    }

    COMMENT {
        string id PK
        string content
        string authorId FK
        string postId FK
        datetime createdAt
    }

    LIKE {
        string id PK
        string postId FK
        string userId FK
        datetime createdAt
    }

    FOLLOWS {
        string followerId PK,FK
        string followingId PK,FK
        datetime createdAt
    }

    NOTIFICATION {
        string id PK
        string userId FK
        string creatorId FK
        string type "LIKE | COMMENT | FOLLOW"
        boolean read
        string postId FK
        string commentId FK
        datetime createdAt
    }
```

> [!IMPORTANT]
> `Follows` uses a composite primary key (`followerId`, `followingId`) to prevent duplicate follow rows, and all foreign keys cascade on delete so removing a user cleans up their posts, likes, comments, follows, and notifications automatically.

---

<a name="project-folder-structure"></a>

## 📂 Project Folder Structure

<details open>
<summary><strong>Click to expand the full tree</strong></summary>

```
social-medial/
├── prisma/
│   └── schema.prisma              # Data model: User, Post, Comment, Like, Follows, Notification
├── prisma.config.ts                # Prisma config (schema path, migrations, datasource URL)
├── public/
│   └── avatar.png                  # Default avatar fallback
├── src/
│   ├── proxy.ts                     # Clerk middleware — route protection (acts as Next.js middleware)
│   ├── actions/                     # Server Actions ("use server") — the app's data/API layer
│   │   ├── user.action.ts           # syncUser, getDbUserId, getRandomUsers, toggleFollow
│   │   ├── post.action.ts           # createPost, getPosts, toggleLike, createComment, deletePost
│   │   ├── profile.action.ts        # getProfileByUsername, getUserPosts, profile updates
│   │   └── notification.action.ts   # getNotifications, markNotificationsAsRead
│   ├── app/                         # App Router pages & layouts
│   │   ├── layout.tsx                # Root layout: ClerkProvider, ThemeProvider, Navbar, Sidebar
│   │   ├── globals.css               # Tailwind base + design tokens
│   │   ├── not-found.tsx             # Custom 404
│   │   ├── (main)/
│   │   │   ├── page.tsx              # Home feed
│   │   │   └── about/page.tsx        # About page (placeholder)
│   │   ├── notifications/page.tsx    # Notifications page
│   │   ├── profile/[username]/
│   │   │   ├── page.tsx              # Profile page (server)
│   │   │   └── ProfilePageClient.tsx # Profile page (client interactions)
│   │   ├── sign-in/[[...sign-in]]/page.tsx
│   │   ├── sign-up/[[...sign-up]]/page.tsx
│   │   ├── api/uploadthing/
│   │   │   ├── core.ts               # UploadThing file router (postImage: 4MB, 1 file)
│   │   │   └── route.ts              # UploadThing route handler (GET/POST)
│   │   └── fonts/                    # Local Geist font files
│   ├── components/
│   │   ├── Navbar.tsx / DesktopNavbar.tsx / MobileNavbar.tsx / NavPill.tsx
│   │   ├── Sidebar.tsx                # Left sidebar (profile summary + nav)
│   │   ├── CreatePost.tsx             # Post composer
│   │   ├── PostCard.tsx               # Single post: like/comment/delete UI
│   │   ├── ImageUpload.tsx            # UploadThing image picker
│   │   ├── FollowButton.tsx           # Follow/unfollow toggle
│   │   ├── WhoToFollow.tsx            # Follow suggestions widget
│   │   ├── TrendingCard.tsx           # Trending/discovery widget
│   │   ├── ExpressYourselfCard.tsx    # Prompt-to-post widget
│   │   ├── NotificationSkeleton.tsx   # Loading state for notifications
│   │   ├── DeleteAlertDialog.tsx      # Confirm-before-delete modal
│   │   ├── theme-provider.tsx / toggle-mode.tsx  # Dark/light theme
│   │   ├── decorative/
│   │   │   ├── BackgroundDecor.tsx
│   │   │   └── Doodles.tsx
│   │   └── ui/                        # shadcn/Radix primitives (button, card, dialog,
│   │                                  # tabs, avatar, sheet, textarea, skeleton, etc.)
│   ├── generated/prisma/              # Prisma-generated typed client (auto-generated, do not edit)
│   └── lib/
│       ├── prisma.ts                  # Prisma client singleton
│       ├── uploadthing.ts             # UploadThing React helpers
│       └── utils.ts                   # cn() class-merging helper
├── components.json                    # shadcn config (style, aliases, icon library)
├── next.config.ts                     # Allows *.ufs.sh (UploadThing) as an image source
├── eslint.config.mjs
├── tsconfig.json
└── package.json
```

</details>

---

<a name="environment-variables"></a>

## ⚙ Environment Variables

Create a `.env.local` file in the project root with:

| Variable | Description |
|---|---|
| 🔑 `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk public key (client-side auth widgets). |
| 🔒 `CLERK_SECRET_KEY` | Clerk secret key (server-side auth). |
| 🗄 `DATABASE_URL` | PostgreSQL connection string (this project uses Neon). Keep this secret — server-only. |
| 🖼 `UPLOADTHING_TOKEN` | UploadThing API token for image upload handling. |

> [!WARNING]
> Never commit `.env.local` or expose `DATABASE_URL` / `CLERK_SECRET_KEY` client-side. These are server-only secrets.

---

<a name="getting-started"></a>

## ⚡ Getting Started

Follow these steps to get Klyro running locally:

**1. Install dependencies**

```bash
npm install
```

**2. Set up environment variables** (see [⚙ Environment Variables](#environment-variables) above)

```bash
cp .env.example .env.local   # then fill in real values
```

**3. Push the Prisma schema to your database**

```bash
npx prisma db push
```

**4. Generate the Prisma client** (also runs automatically via `postinstall`)

```bash
npx prisma generate
```

**5. Run the dev server**

```bash
npm run dev
```

> [!NOTE]
> Open **[http://localhost:3000](http://localhost:3000)** in your browser once the dev server is running. 🎉

---

<a name="screenshots"></a>

## 📸 Screenshots

> [!TIP]
> Add screenshots to a `docs/screenshots/` folder and reference them below.

<div align="center">

| 🏠 Home Feed | 🪪 Profile Page |
|:---:|:---:|
<img width="1865" height="901" alt="image" src="https://github.com/user-attachments/assets/1d944aca-2657-417f-95fc-b3b54c9f1a4a" />
<img width="1367" height="923" alt="image" src="https://github.com/user-attachments/assets/397a4d44-de5b-4d1f-9630-9b6bb5dd10f5" />
 
| *The main feed — posts, likes, and comments in real time.* | *A user's profile with bio, stats, and their posts.* |

| 🔔 Notifications | 🌙 Dark Mode |
|:---:|:---:|
<img width="1415" height="928" alt="image" src="https://github.com/user-attachments/assets/7b1e7898-6251-408b-bac8-0670dbd1f13d" />

| *Likes, comments, and follows in one place.* | *Full dark theme, powered by `next-themes`.* |

</div>

<a name="whats-missing--roadmap"></a>

## 🧪 What's Missing / Roadmap

#### ✅ Completed

- [x] Authentication with Clerk + automatic user sync
- [x] Post creation with text + image upload
- [x] Home feed with likes and comment counts
- [x] Like / unlike with notifications
- [x] Comment system with notifications
- [x] Follow / unfollow system with suggestions
- [x] Notifications page (LIKE, COMMENT, FOLLOW)
- [x] Profile pages with stats
- [x] Author-only post deletion
- [x] Dark / light theme toggle
- [x] Responsive desktop / mobile navigation

#### ⏳ Planned

- [ ] No real-time updates — feed and notifications rely on `revalidatePath`, not websockets or polling.
- [ ] No search for users or posts.
- [ ] No direct messaging between users.
- [ ] No pagination / infinite scroll — the feed currently loads everything at once.
- [ ] No image cropping/compression before upload.
- [ ] `about` page is still a placeholder.
- [ ] No rate limiting on posting/liking/commenting server actions.
- [ ] No automated tests around server actions.

> [!NOTE]
> Planned improvements: pagination/infinite scroll, real-time notifications, search, direct messaging, image optimization before upload, rate limiting, and test coverage for the `src/actions/*` layer.

---

<a name="license"></a>

## 📄 License

This project is for personal/educational use. Add a license of your choice if you plan to open-source it.

<details>
<summary>📊 GitHub Stats https: //github.com/Abhay-Pratap200001/Klyro-Social--media-app/commits/main/  </summary>

<br/>

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=Abhay-Pratap200001&show_icons=true&theme=transparent&title_color=FACC15&icon_color=F59E0B&text_color=FB923C&border_color=F59E0B" alt="GitHub Stats" />
</div>

</details>

---

<div align="center">

<p align="center">✦ ✧ ✦ ✧ ✦ ✧ ✦ ✧ ✦ ✧ ✦ ✧ ✦</p>

### 🤝 Contributing

Issues and pull requests are welcome — feel free to open one if you spot a bug or want to suggest an improvement.

<br/>

Built with ❤️ and ☕ by **Abhay Pratap** 👋

[![GitHub](https://img.shields.io/badge/GitHub-Abhay--Pratap200001-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Abhay-Pratap200001)

<br/>

**[⬆ Back to Top](#top)**

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:FB923C,50:F59E0B,100:FACC15&height=120&section=footer" width="100%" alt="footer wave" />

</div>
