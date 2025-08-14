# AWS Deployment Guide for Gabriel Braslavsky's Website

## 📦 Package Contents

Your website source code package contains:
- **React application** built with Vite
- **Professional design** with Option 1 (Executive Office) background
- **Articles section** with 2 sample articles ready for replacement
- **Responsive design** that works on all devices
- **Modern UI components** using Tailwind CSS and shadcn/ui

## 🚀 AWS Deployment Options

### Option A: AWS Amplify (Recommended - Easiest)

AWS Amplify is perfect for React applications and provides automatic deployments.

#### Steps:
1. **Extract the source code** from the downloaded ZIP file
2. **Upload to GitHub** (create a new repository)
3. **Connect to AWS Amplify:**
   - Go to AWS Amplify Console
   - Click "New app" → "Host web app"
   - Connect your GitHub repository
   - Amplify will auto-detect it's a React app
4. **Build settings** (Amplify should auto-configure):
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install -g pnpm
           - pnpm install
       build:
         commands:
           - pnpm run build
     artifacts:
       baseDirectory: dist
       files:
         - '**/*'
   ```
5. **Deploy** - Amplify will build and deploy automatically

#### Benefits:
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic deployments on code changes
- ✅ Custom domain support
- ✅ Built-in CI/CD

---

### Option B: AWS S3 + CloudFront

For static hosting with full control over configuration.

#### Steps:
1. **Build the application locally:**
   ```bash
   # Extract the ZIP file
   cd gabriel-website-final
   npm install -g pnpm  # If you don't have pnpm
   pnpm install
   pnpm run build
   ```

2. **Create S3 bucket:**
   - Go to S3 Console
   - Create bucket with unique name (e.g., `gabriel-braslavsky-website`)
   - Enable static website hosting
   - Set index document to `index.html`

3. **Upload built files:**
   - Upload all files from the `dist/` folder to your S3 bucket
   - Set public read permissions

4. **Set up CloudFront (optional but recommended):**
   - Create CloudFront distribution
   - Point origin to your S3 bucket
   - Configure custom domain if desired

#### Benefits:
- ✅ Full control over configuration
- ✅ Cost-effective for static sites
- ✅ Global CDN with CloudFront
- ✅ Custom domain support

---

### Option C: AWS EC2 with Nginx

For maximum control and server-side capabilities.

#### Steps:
1. **Launch EC2 instance** (Ubuntu 22.04 recommended)
2. **Install dependencies:**
   ```bash
   sudo apt update
   sudo apt install nginx nodejs npm -y
   sudo npm install -g pnpm
   ```

3. **Upload and build:**
   ```bash
   # Upload your source code to EC2
   cd gabriel-website-final
   pnpm install
   pnpm run build
   ```

4. **Configure Nginx:**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       root /path/to/gabriel-website-final/dist;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

#### Benefits:
- ✅ Full server control
- ✅ Can add backend functionality later
- ✅ Custom configurations
- ✅ SSH access for management

## 🔧 Local Development Setup

If you want to modify the website:

```bash
# Extract the ZIP file
cd gabriel-website-final

# Install dependencies
npm install -g pnpm  # If you don't have pnpm already
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build
```

## 📝 Customizing Your Website

### Updating Articles
Edit `/src/App.jsx` and find the Articles section:
```javascript
// Find this section in the code
const articles = [
  {
    date: "March 15, 2024",
    readTime: "5 min read",
    title: "Your Article Title",
    description: "Your article description...",
    tags: ["Your", "Tags", "Here"]
  }
  // Add more articles here
]
```

### Changing Contact Information
Update the contact details in `/src/App.jsx`:
```javascript
// Find and update these sections
<p className="text-lg">770-596-5552</p>
<p className="text-lg">Bethesda, MD</p>
```

### Adding Your LinkedIn/Social Links
Update the social media links in the Contact section:
```javascript
// Find and update the LinkedIn and other social links
<a href="https://linkedin.com/in/yourprofile" ...>
```

## 🌐 Custom Domain Setup

### For AWS Amplify:
1. Go to Amplify Console → Your App → Domain management
2. Add your custom domain
3. Amplify will handle SSL certificate automatically

### For S3 + CloudFront:
1. Use Route 53 for DNS management
2. Create SSL certificate in AWS Certificate Manager
3. Configure CloudFront to use your domain and certificate

### For EC2:
1. Point your domain's A record to your EC2 instance IP
2. Use Let's Encrypt for free SSL certificate:
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

## 📊 Performance Optimization

Your website is already optimized with:
- ✅ **Vite build system** for fast loading
- ✅ **Code splitting** for efficient loading
- ✅ **Optimized images** in appropriate formats
- ✅ **Minified CSS and JavaScript**
- ✅ **Tree shaking** to remove unused code

## 🔒 Security Best Practices

- ✅ Use HTTPS (automatic with Amplify/CloudFront)
- ✅ Keep dependencies updated: `pnpm update`
- ✅ Use AWS IAM for proper access control
- ✅ Enable CloudFront security headers if using S3+CloudFront

## 📞 Support

If you need help with deployment:
1. **AWS Documentation** - Comprehensive guides for all services
2. **AWS Support** - Available through your AWS account
3. **Community Forums** - Stack Overflow, AWS forums

## 🎯 Recommended Approach

**For Gabriel's use case, I recommend AWS Amplify because:**
- ✅ Simplest deployment process
- ✅ Automatic HTTPS and CDN
- ✅ Perfect for React applications
- ✅ Automatic deployments when you update content
- ✅ Built-in domain management
- ✅ Cost-effective for professional websites

Your website will be live and professional-looking within minutes of connecting to Amplify!

