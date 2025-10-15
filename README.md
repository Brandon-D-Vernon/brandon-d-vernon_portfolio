# Portfolio Website

A modern, responsive portfolio website built with HTML5, CSS3, JavaScript (ES2020+), and Tailwind CSS. Features a single-page layout with smooth animations, dark mode support, internationalization, and full accessibility compliance.

## 🌟 Features

### Core Features
- **Single-page Layout**: 6 sections (Home, About, Work, Skills, Contact, Footer)
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Full-screen Sections**: Each section occupies 100vh on all devices
- **Smooth Scrolling**: 2-second duration for navigation links
- **Sticky Navigation**: Always visible navigation bar with backdrop blur

### Interactive Elements
- **Dark Mode**: Light/Dark/Auto modes with localStorage persistence
- **Language Support**: Multi-language support (EN, ES, FR, DE, IT, PT, RU, JA, KO, ZH)
- **Work Offcanvas**: Full-screen project details modal
- **Contact Form**: Client-side validation with accessibility features
- **Skill Tooltips**: Interactive hover/focus tooltips

### Animations & Effects
- **Scroll Animations**: Intersection Observer-based animations
- **Unique Animations**: Each section has distinct animation patterns
- **Reduced Motion Support**: Respects user's motion preferences
- **Parallax Effects**: Subtle background parallax on home section
- **Hover Effects**: Interactive hover states throughout

### Accessibility
- **WCAG 2.1 AA Compliance**: High contrast support and keyboard navigation
- **ARIA Labels**: Proper semantic markup and ARIA attributes
- **Focus Management**: Visible focus indicators and logical tab order
- **Screen Reader Support**: Descriptive alt text and semantic HTML
- **Keyboard Navigation**: Full keyboard accessibility

### Performance
- **Optimized Images**: Lazy loading and responsive images
- **Efficient Animations**: GPU-accelerated CSS transforms
- **Minimal Bundle**: Lightweight JavaScript modules
- **Fast Loading**: Optimized for Lighthouse performance scores

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation

1. **Clone or Download**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Open in Browser**
   - Simply open `index.html` in your browser, or
   - Use a local server for development:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Customize Content**
   - Edit `index.html` to update personal information
   - Modify `js/i18n.js` to update translations
   - Replace placeholder images with your own

## 📁 Project Structure

```
portfolio-website/
├── index.html              # Main HTML file
├── js/
│   ├── main.js            # Core functionality
│   ├── i18n.js            # Internationalization
│   ├── animations.js      # Animation system
│   ├── offcanvas.js       # Work project modal
│   └── contact-form.js    # Contact form handling
└── README.md              # This file
```

## 🎨 Customization

### Personal Information
Update the following in `index.html`:

1. **Meta Tags**
   ```html
   <meta name="author" content="Your Name">
   <meta property="og:title" content="Portfolio - Your Name">
   ```

2. **Contact Information**
   ```html
   <!-- In Contact section -->
   <span>your.email@example.com</span>
   <span>+1 (555) 123-4567</span>
   ```

3. **Social Links**
   ```html
   <!-- In Footer section -->
   <a href="https://github.com/yourusername">GitHub</a>
   <a href="https://linkedin.com/in/yourusername">LinkedIn</a>
   ```

### Project Data
Update project information in `js/offcanvas.js`:

```javascript
const projects = {
    1: {
        title: "Your Project Title",
        role: "Your Role",
        responsibilities: ["Responsibility 1", "Responsibility 2"],
        technologies: ["React", "Node.js", "MongoDB"],
        image: "path/to/project-image.jpg",
        link: "https://your-project.com"
    }
    // ... more projects
};
```

### Skills & Technologies
Update skills in `index.html`:

```html
<!-- In Skills section -->
<li class="skill-item">
    <span class="text-primary-600">Your Skill</span>
    <span>Description of your skill</span>
</li>
```

### Images
Replace placeholder images with your own:

1. **Home Background**: Update the background image URL
2. **About Image**: Replace with your professional photo
3. **Project Images**: Add your project screenshots
4. **Social Icons**: Customize social media links

## 🌐 Translation System

### Adding New Languages

1. **Add Language Option**
   ```html
   <!-- In navigation -->
   <option value="new-lang">NEW</option>
   ```

2. **Add Translations**
   ```javascript
   // In js/i18n.js
   const translations = {
       'new-lang': {
           nav: {
               home: "Home in New Language",
               about: "About in New Language"
               // ... more translations
           }
       }
   };
   ```

### Translation Keys
The translation system uses dot notation for nested objects:

- `nav.home` → Navigation home link
- `about.title` → About section title
- `work.project1.title` → First project title
- `contact.form.firstName` → Contact form first name label

## 🎭 Dark Mode

### Theme Options
- **Light**: Always light theme
- **Dark**: Always dark theme  
- **Auto**: Follows system preference (default)

### Customizing Colors
Update Tailwind configuration in `index.html`:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f0f9ff',
                    500: '#3b82f6',
                    600: '#2563eb',
                    900: '#1e3a8a'
                }
                // ... your custom colors
            }
        }
    }
}
```

## 🎬 Animation Configuration

### Animation Durations
Modify animation timing in `js/animations.js`:

```javascript
const animationConfig = {
    duration: 600,        // Animation duration in ms
    delay: 100,          // Stagger delay in ms
    easing: 'ease-out',  // CSS easing function
    threshold: 0.1,      // Intersection Observer threshold
    rootMargin: '0px 0px -50px 0px'
};
```

### Custom Animations
Add new animations in the CSS:

```css
@keyframes customAnimation {
    0% { opacity: 0; transform: scale(0.8); }
    100% { opacity: 1; transform: scale(1); }
}

.animate-custom {
    animation: customAnimation 0.6s ease-out;
}
```

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

### Mobile Optimizations
- Hamburger menu for navigation
- Touch-friendly button sizes
- Optimized form layouts
- Keyboard-aware scrolling

## ♿ Accessibility Features

### Keyboard Navigation
- **Tab**: Navigate through interactive elements
- **Enter/Space**: Activate buttons and links
- **Escape**: Close modals and menus
- **Arrow Keys**: Navigate within components

### Screen Reader Support
- Semantic HTML5 elements
- ARIA labels and descriptions
- Alt text for all images
- Proper heading hierarchy

### Visual Accessibility
- High contrast color schemes
- Visible focus indicators
- Scalable text and elements
- Reduced motion support

## 🚀 Deployment

### GitHub Pages

1. **Create Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/username/portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)"
   - Your site will be available at `https://username.github.io/portfolio`

### Other Hosting Options

- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your GitHub repository
- **Firebase Hosting**: Use Firebase CLI
- **AWS S3**: Upload to S3 bucket with static hosting

## 🧪 Testing

### Manual Testing Checklist

#### Navigation
- [ ] All navigation links scroll to correct sections (2s duration)
- [ ] Mobile hamburger menu opens/closes properly
- [ ] Active navigation highlighting works
- [ ] Logo scrolls to home section

#### Dark Mode
- [ ] Toggle switches between light/dark/auto modes
- [ ] Preference persists across page reloads
- [ ] System preference detection works
- [ ] All elements adapt to theme changes

#### Work Section
- [ ] Project thumbnails display correctly
- [ ] Clicking thumbnail opens offcanvas
- [ ] Offcanvas displays project details
- [ ] Close button and overlay close offcanvas
- [ ] Keyboard navigation works (Tab, Escape)

#### Contact Form
- [ ] Form validation works for all fields
- [ ] Error messages display correctly
- [ ] Success message shows after submission
- [ ] Character counter updates in real-time
- [ ] Form resets after successful submission

#### Animations
- [ ] Scroll-triggered animations work
- [ ] Reduced motion preference is respected
- [ ] Hover effects are smooth
- [ ] Loading animations are performant

#### Responsive Design
- [ ] Layout adapts to mobile screens
- [ ] Touch interactions work on mobile
- [ ] Images scale appropriately
- [ ] Text remains readable at all sizes

#### Accessibility
- [ ] All interactive elements are keyboard accessible
- [ ] Focus indicators are visible
- [ ] Screen reader announces content correctly
- [ ] Color contrast meets WCAG standards

### Browser Testing
Test in the following browsers:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## 🐛 Troubleshooting

### Common Issues

#### Images Not Loading
- Check image URLs are correct
- Ensure images are accessible (not behind authentication)
- Verify image formats are supported (JPG, PNG, WebP)

#### Animations Not Working
- Check if reduced motion is enabled in system preferences
- Verify JavaScript is enabled in browser
- Check browser console for errors

#### Dark Mode Not Persisting
- Clear browser localStorage and try again
- Check if localStorage is available in your browser
- Verify the dark mode toggle is working

#### Contact Form Not Submitting
- Check browser console for JavaScript errors
- Verify all required fields are filled
- Test with different browsers

#### Mobile Menu Not Working
- Check if JavaScript is enabled
- Verify touch events are supported
- Test with different mobile devices

### Performance Issues
- Optimize images (use WebP format when possible)
- Minimize JavaScript bundle size
- Use browser dev tools to identify bottlenecks
- Test on slower devices and connections

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Guidelines
1. Follow existing code style
2. Add comments for complex functionality
3. Test changes across different browsers
4. Ensure accessibility standards are maintained
5. Update documentation as needed

## 📞 Support

If you encounter any issues or have questions:

1. Check the troubleshooting section above
2. Search existing GitHub issues
3. Create a new issue with detailed information
4. Include browser version and error messages

## 🎉 Acknowledgments

- **Tailwind CSS** for the utility-first CSS framework
- **Unsplash** for placeholder images
- **Inter Font** for typography
- **SVG Icons** for the icon set

---

**Built with ❤️ for modern web development**
