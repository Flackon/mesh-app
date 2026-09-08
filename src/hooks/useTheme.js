import { create } from 'zustand';

export const useThemeStore = create((set) => ({
  isDark: null, // null = auto-detect, true = dark, false = light
  
  initTheme: () => {
    const hour = new Date().getHours();
    const isDarkMode = hour >= 18 || hour < 6; // Night: 6 PM to 6 AM
    set({ isDark: isDarkMode });
  },
  
  toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
  
  setTheme: (isDark) => set({ isDark }),
}));

export const useTheme = () => {
  const { isDark, initTheme, toggleTheme, setTheme } = useThemeStore();
  
  if (isDark === null) {
    initTheme();
  }
  
  return {
    isDark: isDark || false,
    toggleTheme,
    setTheme,
    bgClass: isDark ? 'bg-black' : 'bg-white',
    textClass: isDark ? 'text-white' : 'text-black',
    accentColor: '#D4AF37', // Gold
  };
};
