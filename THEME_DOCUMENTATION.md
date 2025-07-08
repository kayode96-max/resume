# Modern Theme System Documentation

## Overview
This comprehensive theme system provides a modern, accessible, and feature-rich design system with full light/dark mode support, animations, and interactive components.

## Features

### 🎨 Theme System
- **Light/Dark Mode**: Automatic theme detection with manual toggle
- **Persistent Settings**: Theme preference saved in localStorage
- **Smooth Transitions**: All theme changes are animated
- **System Integration**: Respects system preference by default

### 🎬 Animation System
- **Scroll Animations**: Elements animate in when they come into view
- **Hover Effects**: Smooth hover transitions on interactive elements
- **Loading States**: Skeleton loading and spinner components
- **Staggered Animations**: Sequential animations for lists and grids

### 🧩 Component System
- **Cards**: Modern card layouts with hover effects
- **Buttons**: Multiple button styles with ripple effects
- **Forms**: Enhanced form controls with validation
- **Tables**: Responsive tables with sorting and selection
- **Modals**: Accessible modal dialogs
- **Dropdowns**: Interactive dropdown menus
- **Tooltips**: Smart tooltip positioning
- **Alerts**: Status alerts and notifications

## Usage

### Theme Toggle
The theme toggle is automatically created and positioned in the top-right corner. Users can:
- Click the toggle button to switch themes
- Use `Ctrl+K` keyboard shortcut
- The system respects `prefers-color-scheme` by default

### CSS Classes

#### Layout Classes
```html
<div class="container">Content with max-width and padding</div>
<div class="grid gap-6">Grid layout with gap</div>
<div class="flex items-center justify-between">Flexbox utilities</div>
```

#### Card Components
```html
<div class="card">
  <div class="card-header">Header content</div>
  <div class="card-body">Main content</div>
  <div class="card-footer">Footer content</div>
</div>

<div class="card card-interactive hover-lift">Interactive card</div>
```

#### Button Components
```html
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-secondary">Secondary Button</button>
<button class="btn btn-accent btn-lg">Large Accent Button</button>
<button class="btn btn-success btn-sm">Small Success Button</button>
```

#### Form Components
```html
<div class="form-group">
  <label class="form-label">Email Address</label>
  <input type="email" class="form-input" placeholder="Enter email" required>
  <div class="form-helper">We'll never share your email</div>
</div>

<div class="form-group">
  <label class="form-label">Message</label>
  <textarea class="form-textarea" placeholder="Your message"></textarea>
</div>
```

#### Table Components
```html
<div class="table-container">
  <table class="table">
    <thead>
      <tr>
        <th data-sortable>Name</th>
        <th data-sortable>Email</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>john@example.com</td>
        <td><button class="btn btn-sm">Edit</button></td>
      </tr>
    </tbody>
  </table>
</div>
```

#### Modal Components
```html
<button class="btn btn-primary" data-modal-toggle="myModal">Open Modal</button>

<div id="myModal" class="modal">
  <div class="modal-backdrop"></div>
  <div class="modal-content">
    <div class="modal-header">
      <h2 class="modal-title">Modal Title</h2>
      <button class="modal-close">&times;</button>
    </div>
    <div class="modal-body">
      <p>Modal content goes here</p>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary">Cancel</button>
      <button class="btn btn-primary">Save</button>
    </div>
  </div>
</div>
```

#### Animation Classes
```html
<div class="fade-in">Fades in from bottom</div>
<div class="slide-in-left stagger-1">Slides in from left with delay</div>
<div class="scale-in">Scales in</div>
<div class="hover-lift">Lifts on hover</div>
<div class="pulse">Continuous pulse animation</div>
```

#### Status & Feedback
```html
<span class="badge badge-success">Active</span>
<span class="badge badge-warning">Pending</span>
<span class="badge badge-error">Error</span>

<div class="alert alert-info">
  This is an informational alert
</div>

<div class="alert alert-success">
  Operation completed successfully!
</div>
```

#### Loading States
```html
<div class="skeleton" style="height: 20px; width: 200px;"></div>
<div class="spinner"></div>

<div class="loading-overlay">
  <div class="spinner"></div>
</div>
```

#### Utility Classes
```html
<!-- Spacing -->
<div class="m-4 p-6">Margin and padding</div>
<div class="mt-8 mb-4">Margin top and bottom</div>

<!-- Typography -->
<h1 class="text-2xl font-bold text-primary">Large primary heading</h1>
<p class="text-sm text-secondary">Small muted text</p>

<!-- Display -->
<div class="flex items-center gap-4">Flex with gap</div>
<div class="grid grid-cols-3 gap-6">Grid layout</div>

<!-- Borders & Shadows -->
<div class="rounded-lg shadow-md">Rounded with shadow</div>
<div class="rounded-full shadow-xl">Fully rounded with large shadow</div>
```

### JavaScript API

#### Theme Management
```javascript
// Access the theme manager
const themeManager = window.themeManager;

// Programmatically change theme
themeManager.setTheme('dark');
themeManager.toggleTheme();

// Show notifications
themeManager.showNotification('Settings saved!', 'success');
themeManager.showNotification('Error occurred', 'error');

// Loading states
themeManager.addLoadingState(button);
themeManager.removeLoadingState(button);
```

#### Modal Control
```javascript
// Open/close modals programmatically
themeManager.openModal(document.getElementById('myModal'));
themeManager.closeAllModals();
```

### CSS Custom Properties

#### Colors
```css
/* Light theme colors */
--color-bg: #f4f6f9;
--color-text: #1a202c;
--color-primary: #168de2;
--color-success: #38a169;
--color-warning: #d69e2e;
--color-error: #e53e3e;

/* Dark theme colors */
[data-theme="dark"] {
  --color-bg: #0f1419;
  --color-text: #f7fafc;
  --color-primary: #63b3ed;
  /* ... */
}
```

#### Spacing & Sizing
```css
--space-1: 0.25rem;    /* 4px */
--space-2: 0.5rem;     /* 8px */
--space-3: 0.75rem;    /* 12px */
--space-4: 1rem;       /* 16px */
--space-6: 1.5rem;     /* 24px */
--space-8: 2rem;       /* 32px */
```

#### Typography
```css
--font-size-xs: 0.75rem;
--font-size-sm: 0.875rem;
--font-size-base: 1rem;
--font-size-lg: 1.125rem;
--font-size-xl: 1.25rem;
--font-size-2xl: 1.5rem;
```

#### Shadows & Effects
```css
--shadow-sm: 0 1px 3px rgba(0,0,0,0.1);
--shadow: 0 4px 6px rgba(0,0,0,0.1);
--shadow-md: 0 10px 15px rgba(0,0,0,0.1);
--shadow-lg: 0 20px 25px rgba(0,0,0,0.1);
--shadow-xl: 0 25px 50px rgba(0,0,0,0.25);
```

## Responsive Design

The system includes responsive breakpoints:
- **Mobile**: max-width: 480px
- **Tablet**: max-width: 768px
- **Desktop**: min-width: 769px

### Mobile Optimizations
- Navigation converts to bottom tab bar
- Cards adapt to smaller screens
- Typography scales appropriately
- Touch-friendly button sizes

## Accessibility Features

### Keyboard Navigation
- All interactive elements are keyboard accessible
- Modal dialogs trap focus
- Skip links for screen readers
- High contrast mode support

### Screen Reader Support
- Semantic HTML structure
- ARIA labels and roles
- Color contrast compliance
- Reduced motion respect

### Focus Management
- Visible focus indicators
- Logical tab order
- Focus trapping in modals

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

### Progressive Enhancement
- Core functionality works without JavaScript
- Enhanced features gracefully degrade
- CSS Grid with Flexbox fallbacks

## Performance

### Optimization Features
- CSS custom properties for theme switching
- Hardware-accelerated animations
- Lazy loading for animations
- Minimal JavaScript footprint

### Best Practices
- Use `will-change` for animated elements
- Debounce scroll events
- Prefer `transform` over layout properties
- Use `content-visibility` for large lists

## Customization

### Adding Custom Themes
```css
[data-theme="custom"] {
  --color-primary: #your-color;
  --color-bg: #your-bg;
  /* Override any variables */
}
```

### Creating Custom Components
```css
.my-component {
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-4);
  transition: all var(--transition);
}
```

### Extending Animations
```css
@keyframes customAnimation {
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
}

.custom-animation {
  animation: customAnimation 0.5s ease-out;
}
```

## Migration Guide

### From Old Styles
1. Replace hardcoded colors with CSS variables
2. Update class names to new component system
3. Add theme.css and theme.js to your pages
4. Test in both light and dark modes

### Breaking Changes
- Some old class names may conflict
- Hardcoded colors won't adapt to themes
- Manual focus management may interfere

## Support

For issues or questions:
1. Check browser console for errors
2. Verify CSS and JS files are loaded
3. Test with JavaScript disabled
4. Check accessibility with screen reader

Remember to test your implementation in both light and dark themes across different devices and browsers!
