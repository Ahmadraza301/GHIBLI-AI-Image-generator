# 🚀 Deployment Guide - Ghibli AI

This guide will help you deploy your Ghibli AI application using **Render** (backend) and **Vercel** (frontend).

---

## 📋 Prerequisites

- GitHub account
- Render account (sign up at [render.com](https://render.com))
- Vercel account (sign up at [vercel.com](https://vercel.com))
- Stability AI API Key

---

## 🔧 Part 1: Deploy Backend on Render

### Step 1: Push Code to GitHub
Your code is already on GitHub at: `https://github.com/Ahmadraza301/GHIBLI-AI-Image-generator`

### Step 2: Create Render Account
1. Go to [render.com](https://render.com)
2. Click "Get Started for Free"
3. Sign up with your GitHub account

### Step 3: Deploy Backend
1. Click "New +" button → Select "Web Service"
2. Click "Connect GitHub" and authorize Render
3. Select your repository: `GHIBLI-AI-Image-generator`
4. Configure the service:
   ```
   Name: ghibli-ai-backend
   Region: Choose closest to you
   Branch: main
   Root Directory: ghibliapi
   Runtime: Java
   Build Command: ./mvnw clean install -DskipTests
   Start Command: java -jar target/ghibliapi-0.0.1-SNAPSHOT.jar
   ```

5. Select **Free** plan

6. Click "Advanced" and add Environment Variable:
   ```
   Key: STABILITY_API_KEY
   Value: sk-U72fRjOG7XzqgtFhjUQfWuilMQhiK1UlFvtfaHik25Ma9tyQ
   ```

7. Click "Create Web Service"

8. Wait 5-10 minutes for deployment to complete

9. **Copy your backend URL** (e.g., `https://ghibli-ai-backend.onrender.com`)

---

## 🎨 Part 2: Deploy Frontend on Vercel

### Step 1: Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Sign up with your GitHub account

### Step 2: Deploy Frontend
1. Click "Add New..." → "Project"
2. Import your GitHub repository: `GHIBLI-AI-Image-generator`
3. Configure the project:
   ```
   Framework Preset: Vite
   Root Directory: gibli-art-generator
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

4. Add Environment Variables:
   - Click "Environment Variables"
   - Add:
     ```
     Name: VITE_API_BASE_URL
     Value: https://your-backend-url.onrender.com/api/v1
     ```
     (Replace with your actual Render backend URL from Part 1, Step 9)

5. Click "Deploy"

6. Wait 2-3 minutes for deployment

7. Your frontend will be live at: `https://your-project.vercel.app`

---

## ✅ Part 3: Test Your Deployment

1. Visit your Vercel URL
2. Click "Create" or "Try image to Ghibli art now"
3. Upload an image or enter a text prompt
4. Wait for the AI to generate your Ghibli-style art

**Note**: First request may take 30-60 seconds as Render free tier wakes up the backend.

---

## 🔄 Update Deployment

### Update Backend:
```bash
git add .
git commit -m "Update backend"
git push origin main
```
Render will automatically redeploy.

### Update Frontend:
```bash
git add .
git commit -m "Update frontend"
git push origin main
```
Vercel will automatically redeploy.

---

## ⚠️ Important Notes

### Render Free Tier Limitations:
- Backend sleeps after 15 minutes of inactivity
- First request after sleep takes ~30 seconds to wake up
- 750 hours/month free

### Vercel Free Tier:
- Unlimited deployments
- 100GB bandwidth/month
- Automatic HTTPS

### API Costs:
- Stability AI charges per image generation
- Monitor your API usage at [platform.stability.ai](https://platform.stability.ai)

---

## 🐛 Troubleshooting

### Backend Issues:
1. Check Render logs: Dashboard → Your Service → Logs
2. Verify environment variable is set correctly
3. Ensure build completed successfully

### Frontend Issues:
1. Check Vercel logs: Dashboard → Your Project → Deployments → View Function Logs
2. Verify `VITE_API_BASE_URL` points to correct backend URL
3. Check browser console for errors (F12)

### CORS Errors:
- Backend includes CORS configuration
- If issues persist, check backend logs

### 500 Errors:
- Check image dimensions (should auto-resize now)
- Verify Stability AI API key is valid
- Check backend logs for detailed error

---

## 📞 Support

If you encounter issues:
1. Check Render logs for backend errors
2. Check Vercel deployment logs
3. Verify all environment variables are set correctly
4. Ensure your Stability AI API key is valid and has credits

---

## 🎉 Success!

Your Ghibli AI application is now live and accessible worldwide!

- **Frontend**: `https://your-project.vercel.app`
- **Backend**: `https://ghibli-ai-backend.onrender.com`

Share your creation with the world! 🌟
