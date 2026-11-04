<div align="center">

# Eventry — Event Discovery & Registration

Discover events, register, pay and get email confirmations. Built with Next.js 14 and MongoDB.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white) ![Resend](https://img.shields.io/badge/Resend-000000?style=flat-square&logo=resend&logoColor=white)

</div>

## ✨ Features

- Event listing homepage and event **detail pages**
- User registration and login
- **Payment page** for each event
- Confirmation emails sent with **Resend** using HTML templates
- MongoDB models with Mongoose and a services layer
- Blur image placeholders with plaiceholder + sharp

## 🧰 Tech Stack

| Area | Tools |
| --- | --- |
| Framework | Next.js 14 (App Router) |
| UI | Tailwind CSS |
| Database | MongoDB, Mongoose |
| Email | Resend |
| Images | plaiceholder, sharp |

## 🗺️ Main Routes

| Route | Description |
| --- | --- |
| `/` | All events |
| `/details/[id]` | Event details |
| `/payment/[eventId]` | Event payment |
| `/login` | Log in |
| `/register` | Create an account |

## 🚀 Getting Started

```bash
git clone https://github.com/fazlerabbytalukder/eventry-nextjs14.git
cd eventry-nextjs14
npm install
npm run dev
```

Create a `.env` file in the project root:

```env
MONGO_URI=
RESEND_API_KEY=
```

Then open `http://localhost:3000` in your browser.

## 👤 Author

**Fazle Rabby Talukder** — Frontend Developer

[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=flat-square&logo=vercel&logoColor=white)](https://fazlerabbytalukder.vercel.app/) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/fazle-rabby-talukder/) [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/fazlerabbytalukder)

If you find this project useful, consider giving it a ⭐!
