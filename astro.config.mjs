import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  site: 'https://anand-sk1324.github.io',
  redirects: {
    '/': '/Clock-App',
    '/PomodoroTimer': '/Clock-App/PomodoroTimer',
    '/PomodoroTimer/LongBreak': '/Clock-App/PomodoroWork',
    '/PomodoroTimer/LongBreak': '/Clock-App/PomodoroTimer/LongBreak',
    '/PomodoroTimer/ShortBreak': '/Clock-App/PomodoroTimer/ShortBreak',
    '/StopWatch': '/Clock-App/StopWatch',
  }
});
