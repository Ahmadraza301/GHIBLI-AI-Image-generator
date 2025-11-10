# ⚡ Quick Start - Deploy in 10 Minutes

## 🎯 Step-by-Step Deployment

### 1️⃣ Deploy Backend (Render) - 5 minutes

1. **Go to Render**: https://render.com
2. **Sign up** with GitHub
3. Click **"New +"** → **"Web Service"**
4. **Connect** your repo: `Ahmadraza301/GHIBLI-AI-Image-generator`
5. **Fill in**:
   - Name: `ghibli-ai-backend`
   - Root Directory: `ghibliapi`
   - Build Command: `./mvnw clean install -DskipTests`
   - Start Command: `java -jar target/ghibliapi-0.0.1-SNAPSHOT.jar`
6. **Add Environment Variable**:
   - Key: `STABILITY_API_KEY`
   - Value: `sk-U72fRjOG7XzqgtFhjUQfWuilMQhiK1UlFvtfaHik25Ma9tyQ`
7. Click **"Create Web Service"** (Choose FREE plan)
8. **Wait 5-10 minutes** for build
9. **Copy your URL**: `https://ghibli-ai-backend-xxxx.onrender.com`

---

### 2️⃣ Deploy Frontend (Vercel) - 3 minutes

1. **Go to Vercel**: https://vercel.com
2. **Sign up** with GitHub
3. Click **"Add New..."** → **"Project"**
4. **Import**: `Ahmadraza301/GHIBLI-AI-Image-generator`
5. **Configure**:
   - Root Directory: `gibli-art-generator`
   - Framework: Vite (auto-detected)
6. **Add Environment Variable**:
   - Name: `VITE_API_BASE_URL`
   - Value: `https://your-render-url.onrender.com/api/v1`
     (Use the URL from Step 1.9, add `/api/v1` at the end)
7. Click **"Deploy"**
8. **Wait 2-3 minutes**
9. **Done!** Visit your live site

---

### 3️⃣ Test It! 🎉

1. Open your Vercel URL
2. Click "Create" or "Try image to Ghibli art now"
3. Upload an image
4. Watch the magic happen! ✨

**Note**: First request may take 30 seconds (backend waking up)

---

## 🔗 Your Live URLs

- **Frontend**: `https://your-project.vercel.app`
- **Backend**: `https://ghibli-ai-backend-xxxx.onrender.com`

---

## 🆘 Having Issues?

### Backend not deploying?
- Check Render logs
- Verify Java version (should be 17+)
- Ensure environment variable is set

### Frontend can't connect to backend?
- Double-check `VITE_API_BASE_URL` in Vercel
- Make sure it ends with `/api/v1`
- Verify backend is running (visit backend URL)

### 500 Error when generating?
- Check Stability AI API key is valid
- Verify API key has credits
- Check Render logs for details

---

## 💡 Pro Tips

- **Free Tier**: Backend sleeps after 15 min → first request is slow
- **Keep Alive**: Use a service like UptimeRobot to ping your backend
- **Monitor**: Check Stability AI usage at platform.stability.ai
- **Updates**: Just push to GitHub → auto-deploys!

---

## 🎊 That's It!

Your Ghibli AI is now live and ready to transform photos into magical art!

Share it with friends and enjoy! 🌟
