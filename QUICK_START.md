# CropYield AI - Quick Start Guide

## 🚀 Get Running in 30 Seconds

### Step 1: Install Dependencies
```bash
pnpm install
```

### Step 2: Start Development Server
```bash
pnpm dev
```

### Step 3: Open in Browser
```
http://localhost:3000
```

✅ Done! Your crop yield prediction platform is live.

---

## 📍 Key URLs

| Page | URL | Purpose |
|------|-----|---------|
| Homepage | `/` | Hero section, features, statistics |
| Dashboard | `/dashboard` | Prediction form & results |
| API | `/api/predict` | ML prediction endpoint |

---

## 🌾 Making Your First Prediction

1. **Go to Dashboard** → Click "Get Started" button
2. **Select Crop** → Choose from 5 types (wheat, corn, rice, soybeans, cotton)
3. **Enter Soil Data** → pH, moisture, nitrogen, phosphorus, potassium
4. **Enter Weather Data** → Rainfall, temperature, humidity
5. **Click Predict** → Get instant yield forecast + confidence score

### Example: Optimal Wheat
```
Crop: Wheat
pH Level: 6.5 (optimal)
Moisture: 65% (optimal)
Nitrogen: 120 mg/kg
Phosphorus: 40 mg/kg
Potassium: 180 mg/kg
Rainfall: 600 mm
Temperature: 25°C
Humidity: 70%

Result: ~5,000 kg/ha @ 95% confidence ✨
```

---

## 🧬 How the ML Model Works

The prediction engine considers:

1. **Crop-Specific Baseline** (base yield)
2. **Soil Optimization** (pH, moisture, NPK nutrients)
3. **Weather Factors** (rainfall, temperature, humidity)
4. **Confidence Scoring** (0-99%)
5. **Contextual Insights** (actionable recommendations)

### Confidence Tiers
- **85%+**: "Excellent conditions!"
- **75%+**: "Good conditions"
- **65%+**: "Moderate conditions"
- **<65%**: "Challenging conditions"

---

## 📊 Crop Yield Baselines

| Crop | Base Yield | Optimal NPK |
|------|-----------|-----------|
| Wheat | 4,500 kg/ha | N:120, P:40, K:180 |
| Corn | 8,000 kg/ha | N:150, P:50, K:200 |
| Rice | 5,500 kg/ha | N:100, P:35, K:150 |
| Soybeans | 3,000 kg/ha | N:80, P:30, K:140 |
| Cotton | 1,800 kg/ha | N:90, P:38, K:160 |

---

## 🎨 Design System Quick Reference

### Colors
```
Primary Green:    #0f7938 (trust, growth)
Secondary Gold:   #d1a000 (prosperity)
Accent Teal:      #2dbda0 (innovation)
Background:       #fafaf8 (light)
Text:             #2d2d2d (dark)
```

### Typography
- **Headlines**: Bold, 24-60px
- **Body**: Regular, 14-18px
- **Monospace**: Data displays

### Spacing
- **Base unit**: 4px
- **Common**: 8, 16, 24, 32px

---

## 🔧 Project Structure

```
cropyield-ai/
├── app/
│   ├── page.tsx              # Homepage
│   ├── dashboard/
│   │   └── page.tsx          # Prediction page
│   ├── api/predict/
│   │   └── route.ts          # ML API endpoint
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── header.tsx            # Navigation
│   ├── hero.tsx              # Hero section
│   ├── prediction-form.tsx   # Input form
│   ├── how-it-works.tsx      # Process steps
│   ├── stats-section.tsx     # Analytics
│   ├── footer.tsx            # Footer
│   └── ui/                   # shadcn components
├── public/                   # Static assets
├── README.md                 # Main docs
├── FEATURES.md              # Feature list
├── DEPLOYMENT.md            # Deploy guide
└── package.json             # Dependencies
```

---

## 🔌 API Usage

### POST `/api/predict`

**Request:**
```json
{
  "cropType": "wheat",
  "soilPhLevel": 6.5,
  "soilMoisture": 65,
  "nitrogen": 120,
  "phosphorus": 40,
  "potassium": 180,
  "rainfall": 600,
  "temperature": 25,
  "humidity": 70
}
```

**Response:**
```json
{
  "yieldKgHa": 5074.79,
  "confidence": 0.95,
  "message": "Excellent conditions detected! Your crop should perform very well."
}
```

### cURL Example
```bash
curl -X POST http://localhost:3000/api/predict \
  -H "Content-Type: application/json" \
  -d '{
    "cropType": "corn",
    "soilPhLevel": 6.8,
    "soilMoisture": 70,
    "nitrogen": 150,
    "phosphorus": 50,
    "potassium": 200,
    "rainfall": 550,
    "temperature": 28,
    "humidity": 65
  }'
```

---

## 📱 Responsive Breakpoints

```
Mobile:   < 768px   (single column)
Tablet:   768-1024px (2 columns)
Desktop:  > 1024px  (3 columns)
```

All pages are fully responsive and mobile-optimized.

---

## 🧪 Testing Commands

```bash
# Test homepage
curl http://localhost:3000/

# Test dashboard
curl http://localhost:3000/dashboard

# Test prediction (wheat)
curl -X POST http://localhost:3000/api/predict \
  -H "Content-Type: application/json" \
  -d '{...}'

# Build for production
pnpm build

# Run production build
pnpm start
```

---

## 🚀 Deploy to Vercel

```bash
# Option 1: Using Vercel CLI
vercel --prod

# Option 2: Push to GitHub (auto-deploys)
git push origin main

# Option 3: Web UI
# Go to vercel.com, import repo, deploy
```

---

## 🐛 Troubleshooting

### "Port 3000 already in use"
```bash
kill -9 $(lsof -t -i:3000)
pnpm dev
```

### "Module not found"
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### "Build fails"
```bash
pnpm clean  # if available
rm -rf .next
pnpm build
```

---

## 📚 Learn More

- **Next.js**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **React Hook Form**: https://react-hook-form.com
- **Zod**: https://zod.dev

---

## 💡 Pro Tips

1. **Use the form's default values** as a starting point
2. **Monitor confidence scores** - 85%+ = reliable prediction
3. **Adjust one parameter at a time** to see impact
4. **Export predictions** (future feature)
5. **Track farming improvements** over seasons

---

## 🎯 Next Steps

- ✅ Run the app locally
- ✅ Make test predictions
- ✅ Explore the code
- 📚 Read FEATURES.md for deep dive
- 🚀 Deploy to Vercel when ready

---

**Questions? Check README.md or FEATURES.md for comprehensive documentation.**

**Happy predicting! 🌾🤖**
