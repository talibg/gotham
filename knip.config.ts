import type { KnipConfig } from 'knip'

const config: KnipConfig = {
    entry: [
        'app/**/{page,layout,template,loading,error,not-found}.tsx',
        'app/**/route.{ts,tsx}',
        'app/api/**/*/route.{ts,tsx}',
        'next.config.{js,ts,mjs,cjs}',
    ],
    project: ['**/*.{ts,tsx,js,jsx}', '!**/*.d.ts', '!{node_modules,.next,dist,build,coverage,.turbo,.vercel}/**/*'],
    ignore: ['**/*.{test,spec}.{ts,tsx,js,jsx}', '**/__tests__/**', '**/*.stories.{ts,tsx,js,jsx}'],
    ignoreDependencies: ['postcss', 'tailwindcss'],
}

export default config
