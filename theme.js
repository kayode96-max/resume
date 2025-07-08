// theme.js: Comprehensive theme and interaction system
class ThemeManager {
  constructor() {
    this.currentTheme = localStorage.getItem('theme') || 'light';
    this.themeToggle = null;
    this.init();
  }

  init() {
    this.setTheme(this.currentTheme);
    this.createThemeToggle();
    this.setupEventListeners();
    this.initAnimations();
    this.initComponents();
  }

  setTheme(theme) {
    this.currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    this.updateThemeIcon();
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
    
    // Add a subtle animation to the entire page
    document.body.style.transition = 'background 0.3s ease, color 0.3s ease';
    setTimeout(() => {
      document.body.style.transition = '';
    }, 300);
  }

  createThemeToggle() {
    // Check if theme toggle already exists
    this.themeToggle = document.querySelector('.theme-toggle');
    if (!this.themeToggle) {
      this.themeToggle = document.createElement('button');
      this.themeToggle.className = 'theme-toggle';
      this.themeToggle.setAttribute('title', 'Toggle light/dark mode');
      this.themeToggle.setAttribute('aria-label', 'Toggle theme');
      this.themeToggle.innerHTML = '<span class="theme-icon">🌙</span>';
      document.body.appendChild(this.themeToggle);
    }
    
    this.themeToggle.addEventListener('click', () => this.toggleTheme());
    this.updateThemeIcon();
  }

  updateThemeIcon() {
    const icon = this.themeToggle?.querySelector('.theme-icon');
    if (icon) {
      icon.textContent = this.currentTheme === 'light' ? '🌙' : '☀️';
    }
  }

  setupEventListeners() {
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        this.setTheme(e.matches ? 'dark' : 'light');
      }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        this.toggleTheme();
      }
    });
  }

  initAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements that should animate on scroll
    document.querySelectorAll('.card, .state, .analytics').forEach(el => {
      observer.observe(el);
    });

    // Stagger animations for navigation items
    document.querySelectorAll('.leftnavpages a').forEach((item, index) => {
      item.style.animationDelay = `${index * 0.1}s`;
      item.classList.add('slide-in-left');
    });
  }

  initComponents() {
    this.initModals();
    this.initDropdowns();
    this.initTooltips();
    this.initForms();
    this.initTables();
  }

  initModals() {
    document.addEventListener('click', (e) => {
      if (e.target.matches('[data-modal-toggle]')) {
        const modalId = e.target.getAttribute('data-modal-toggle');
        this.toggleModal(modalId);
      }
      
      if (e.target.matches('.modal-backdrop, .modal-close')) {
        this.closeAllModals();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeAllModals();
      }
    });
  }

  toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    const backdrop = modal?.querySelector('.modal-backdrop');
    
    if (modal) {
      const isVisible = modal.classList.contains('show');
      if (isVisible) {
        this.closeModal(modal);
      } else {
        this.openModal(modal);
      }
    }
  }

  openModal(modal) {
    modal.classList.add('show');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Focus management
    const firstFocusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (firstFocusable) {
      firstFocusable.focus();
    }
  }

  closeModal(modal) {
    modal.classList.remove('show');
    document.body.style.overflow = '';
    
    setTimeout(() => {
      modal.style.display = 'none';
    }, 300);
  }

  closeAllModals() {
    document.querySelectorAll('.modal.show').forEach(modal => {
      this.closeModal(modal);
    });
  }

  initDropdowns() {
    document.addEventListener('click', (e) => {
      // Close all dropdowns when clicking outside
      if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown.show').forEach(dropdown => {
          dropdown.classList.remove('show');
        });
        return;
      }

      // Toggle dropdown when clicking toggle button
      if (e.target.matches('.dropdown-toggle') || e.target.closest('.dropdown-toggle')) {
        const dropdown = e.target.closest('.dropdown');
        dropdown.classList.toggle('show');
      }
    });

    // Keyboard navigation for dropdowns
    document.addEventListener('keydown', (e) => {
      const openDropdown = document.querySelector('.dropdown.show');
      if (!openDropdown) return;

      if (e.key === 'Escape') {
        openDropdown.classList.remove('show');
        openDropdown.querySelector('.dropdown-toggle').focus();
      }
    });
  }

  initTooltips() {
    // Enhanced tooltip system with dynamic positioning
    document.querySelectorAll('[data-tooltip]').forEach(element => {
      element.addEventListener('mouseenter', (e) => {
        this.showTooltip(e.target);
      });
      
      element.addEventListener('mouseleave', (e) => {
        this.hideTooltip(e.target);
      });
    });
  }

  showTooltip(element) {
    // Implementation for dynamic tooltip positioning
    const rect = element.getBoundingClientRect();
    const tooltip = element.querySelector('::after');
    // Additional tooltip logic can be added here
  }

  hideTooltip(element) {
    // Hide tooltip logic
  }

  initForms() {
    // Enhanced form validation and interactions
    document.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(input => {
      // Add floating label effect
      this.setupFloatingLabel(input);
      
      // Add validation styling
      input.addEventListener('blur', () => {
        this.validateField(input);
      });

      input.addEventListener('input', () => {
        this.clearValidationState(input);
      });
    });
  }

  setupFloatingLabel(input) {
    const parent = input.parentElement;
    const label = parent.querySelector('.form-label');
    
    if (!label) return;

    const checkValue = () => {
      if (input.value || input === document.activeElement) {
        label.classList.add('floating');
      } else {
        label.classList.remove('floating');
      }
    };

    input.addEventListener('focus', checkValue);
    input.addEventListener('blur', checkValue);
    input.addEventListener('input', checkValue);
    
    // Initial check
    checkValue();
  }

  validateField(input) {
    const value = input.value.trim();
    const type = input.type;
    const required = input.hasAttribute('required');
    
    let isValid = true;
    let errorMessage = '';

    if (required && !value) {
      isValid = false;
      errorMessage = 'This field is required';
    } else if (value) {
      switch (type) {
        case 'email':
          isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
          errorMessage = 'Please enter a valid email address';
          break;
        case 'tel':
          isValid = /^[\+]?[0-9\s\-\(\)]+$/.test(value);
          errorMessage = 'Please enter a valid phone number';
          break;
        case 'url':
          isValid = /^https?:\/\/.+/.test(value);
          errorMessage = 'Please enter a valid URL';
          break;
      }
    }

    this.setValidationState(input, isValid, errorMessage);
  }

  setValidationState(input, isValid, errorMessage) {
    const parent = input.closest('.form-group');
    
    input.classList.remove('form-error', 'form-success');
    parent?.querySelectorAll('.form-error-message').forEach(msg => msg.remove());
    
    if (!isValid) {
      input.classList.add('form-error');
      if (errorMessage && parent) {
        const errorEl = document.createElement('div');
        errorEl.className = 'form-error-message';
        errorEl.textContent = errorMessage;
        parent.appendChild(errorEl);
      }
    } else if (input.value.trim()) {
      input.classList.add('form-success');
    }
  }

  clearValidationState(input) {
    input.classList.remove('form-error', 'form-success');
    const parent = input.closest('.form-group');
    parent?.querySelectorAll('.form-error-message').forEach(msg => msg.remove());
  }

  initTables() {
    // Enhanced table functionality
    document.querySelectorAll('.table').forEach(table => {
      this.makeTableResponsive(table);
      this.addTableSorting(table);
      this.addRowSelection(table);
    });
  }

  makeTableResponsive(table) {
    if (!table.closest('.table-container')) {
      const container = document.createElement('div');
      container.className = 'table-container';
      table.parentNode.insertBefore(container, table);
      container.appendChild(table);
    }
  }

  addTableSorting(table) {
    const headers = table.querySelectorAll('th[data-sortable]');
    
    headers.forEach(header => {
      header.style.cursor = 'pointer';
      header.addEventListener('click', () => {
        this.sortTable(table, header);
      });
    });
  }

  sortTable(table, header) {
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    const columnIndex = Array.from(header.parentNode.children).indexOf(header);
    const isAscending = !header.classList.contains('sort-asc');
    
    // Clear previous sort indicators
    table.querySelectorAll('th').forEach(th => {
      th.classList.remove('sort-asc', 'sort-desc');
    });
    
    // Add sort indicator
    header.classList.add(isAscending ? 'sort-asc' : 'sort-desc');
    
    // Sort rows
    rows.sort((a, b) => {
      const aText = a.children[columnIndex].textContent.trim();
      const bText = b.children[columnIndex].textContent.trim();
      
      const aValue = isNaN(aText) ? aText : parseFloat(aText);
      const bValue = isNaN(bText) ? bText : parseFloat(bText);
      
      if (aValue < bValue) return isAscending ? -1 : 1;
      if (aValue > bValue) return isAscending ? 1 : -1;
      return 0;
    });
    
    // Reorder DOM
    rows.forEach(row => tbody.appendChild(row));
  }

  addRowSelection(table) {
    const selectAllCheckbox = table.querySelector('thead input[type="checkbox"]');
    const rowCheckboxes = table.querySelectorAll('tbody input[type="checkbox"]');
    
    if (selectAllCheckbox && rowCheckboxes.length > 0) {
      selectAllCheckbox.addEventListener('change', () => {
        rowCheckboxes.forEach(checkbox => {
          checkbox.checked = selectAllCheckbox.checked;
          this.updateRowSelection(checkbox);
        });
      });
      
      rowCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
          this.updateRowSelection(checkbox);
          this.updateSelectAllState(table);
        });
      });
    }
  }

  updateRowSelection(checkbox) {
    const row = checkbox.closest('tr');
    if (checkbox.checked) {
      row.classList.add('selected');
    } else {
      row.classList.remove('selected');
    }
  }

  updateSelectAllState(table) {
    const selectAllCheckbox = table.querySelector('thead input[type="checkbox"]');
    const rowCheckboxes = table.querySelectorAll('tbody input[type="checkbox"]');
    const checkedCount = table.querySelectorAll('tbody input[type="checkbox"]:checked').length;
    
    if (checkedCount === 0) {
      selectAllCheckbox.checked = false;
      selectAllCheckbox.indeterminate = false;
    } else if (checkedCount === rowCheckboxes.length) {
      selectAllCheckbox.checked = true;
      selectAllCheckbox.indeterminate = false;
    } else {
      selectAllCheckbox.checked = false;
      selectAllCheckbox.indeterminate = true;
    }
  }

  // Utility methods
  showNotification(message, type = 'info', duration = 3000) {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type}`;
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.zIndex = '9999';
    notification.style.minWidth = '300px';
    
    document.body.appendChild(notification);
    
    // Animate in
    notification.style.transform = 'translateX(100%)';
    notification.style.transition = 'transform 0.3s ease';
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Auto remove
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, duration);
  }

  addLoadingState(element) {
    element.classList.add('loading');
    element.disabled = true;
    
    const originalText = element.textContent;
    element.setAttribute('data-original-text', originalText);
    element.innerHTML = '<span class="spinner"></span> Loading...';
  }

  removeLoadingState(element) {
    element.classList.remove('loading');
    element.disabled = false;
    
    const originalText = element.getAttribute('data-original-text');
    if (originalText) {
      element.textContent = originalText;
    }
  }
}

// Initialize theme manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.themeManager = new ThemeManager();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ThemeManager;
}
