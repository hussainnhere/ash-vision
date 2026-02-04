# ASH VISION - Looksmaxxing Analysis Tool

A sophisticated facial analysis web application that provides biometric measurements and personalized optimization recommendations.

## 🚀 Features

- **Real-time Facial Analysis**: Advanced face detection and measuremen
- **Biometric Metrics**: 8 key measurements including symmetry, proportions, jawline definition, and more
- **Dynamic Recommendations**: Personalized hair, eyewear, and grooming strategies based on YOUR specific metrics
- **Export Results**: Download your analysis as a professional report
- **Camera Support**: Use your device camera for live capture
- **Comparison Mode**: Compare multiple analyses side-by-side


## 🛠️ Technical Improvements

### Issues Fixed:

1. **Safari Compatibility**: Added `background-clip` property for gradient text rendering


For best results:
- Use a front-facing photo with neutral expression
- Ensure good, even lighting
- Keep the camera at eye level
- Clear background preferred
- High-resolution images work better

## 🔒 Privacy

- All processing happens locally in your browser
- No data is sent to external servers (except CDN resources)
- No images are stored or uploaded
- Export creates local files only

## 📝 Technologies

- **Face-api.js**: ML-powered facial detection and landmark recognition
- **React**: UI framework for dynamic interfaces
- **TailwindCSS**: Utility-first styling
- **Lucide Icons**: Beautiful icon system
- **html2canvas**: Export functionality

## 🐛 Troubleshooting

**Models not loading?**
- The app includes a 10-second timeout and fallback mode
- If quota limits are hit, the app will continue with simplified analysis
- Try refreshing the page or using a different network

**Analysis fails?**
- Ensure face is clearly visible
- Check lighting conditions
- Try a different photo angle
- Use higher quality images

## 📄 License

This project is for educational and personal use. Face-api.js and other libraries have their own licenses.

## 🙏 Credits

Created by Hussain | Terminal 7-B Secure Access

Powered by face-api.js, React, and modern web technologies.
