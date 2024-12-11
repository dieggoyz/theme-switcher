class ThemeSwitcher {
  constructor() {
    this.themeSelect = document.getElementById('theme-selector');
    this.body = document.body;
    this.systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

    this.init();
  }

  init() {
    const savedTheme = localStorage.getItem('theme') || 'system';
    this.themeSelect.value = savedTheme;
    this.applyTheme(savedTheme);

    this.themeSelect.addEventListener('change', (event) =>
      this.applyTheme(event.target.value)
    );

    this.systemDarkMode.addListener(() => {
      if (this.themeSelect.value === 'system') {
        this.applyTheme('system');
      }
    });
  }

  applyTheme(theme) {
    this.body.classList.remove('light', 'dark');

    switch (theme) {
      case 'light':
        this.body.classList.add('light');
        break;
      case 'dark':
        this.body.classList.add('dark');
        break;
      default:
        this.body.classList.add(this.systemDarkMode.matches ? 'dark' : 'light');
    }

    localStorage.setItem('theme', theme);
  }
}

new ThemeSwitcher();
