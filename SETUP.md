# Quick Setup Guide

## Initial Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add:
   ```env
   DATABASE_URL="file:./dev.db"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key-here-generate-with-openssl-rand-base64-32"
   GOOGLE_CLIENT_ID="" # Optional
   GOOGLE_CLIENT_SECRET="" # Optional
   ```

3. **Initialize database**
   ```bash
   npm run db:push
   ```

4. **Seed database with initial data**
   ```bash
   npm run db:seed
   ```
   
   This creates:
   - Admin user: `admin@shadowcastertech.com` / `admin123`
   - Test client: `client@shadowcastertech.com` / `client123`
   - Sample plans and services

5. **Run development server**
   ```bash
   npm run dev
   ```

6. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Default Credentials

After seeding:
- **Admin**: admin@shadowcastertech.com / admin123
- **Client**: client@shadowcastertech.com / client123

## Next Steps

1. Create your own admin account by signing up and manually updating the role in the database
2. Customize plans, services, and pricing
3. Connect real APIs (GoHighLevel, Stripe, etc.)
4. Deploy to production

## Troubleshooting

- If Prisma errors occur, run `npm run db:generate`
- If authentication fails, check `NEXTAUTH_SECRET` is set
- Database file is created at `prisma/dev.db`

