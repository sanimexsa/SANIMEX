# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: "[plugin:vite:css] [postcss] /Users/mahir/Desktop/SANIMEX/src/index.css:106:3: You cannot `@apply` the `font-serif` utility here because it creates a circular dependency."
  - generic [ref=e5]: /Users/mahir/Desktop/SANIMEX/src/index.css:106:2
  - generic [ref=e6]: "104 | } 105 | 106 | h1, | ^ 107 | h2, 108 | h3,"
  - generic [ref=e7]: at Input.error (/Users/mahir/Desktop/SANIMEX/node_modules/postcss/lib/input.js:135:16) at Rule.error (/Users/mahir/Desktop/SANIMEX/node_modules/postcss/lib/node.js:146:32) at processApply (/Users/mahir/Desktop/SANIMEX/node_modules/tailwindcss/lib/lib/expandApplyAtRules.js:443:32) at /Users/mahir/Desktop/SANIMEX/node_modules/tailwindcss/lib/lib/expandApplyAtRules.js:551:9 at /Users/mahir/Desktop/SANIMEX/node_modules/tailwindcss/lib/processTailwindFeatures.js:55:50 at async plugins (/Users/mahir/Desktop/SANIMEX/node_modules/tailwindcss/lib/plugin.js:38:17) at async LazyResult.runAsync (/Users/mahir/Desktop/SANIMEX/node_modules/postcss/lib/lazy-result.js:293:11) at async runPostCSS (file:///Users/mahir/Desktop/SANIMEX/node_modules/vite/dist/node/chunks/config.js:30144:19) at async compilePostCSS (file:///Users/mahir/Desktop/SANIMEX/node_modules/vite/dist/node/chunks/config.js:30128:6) at async compileCSS (file:///Users/mahir/Desktop/SANIMEX/node_modules/vite/dist/node/chunks/config.js:30058:26) at async TransformPluginContext.handler (file:///Users/mahir/Desktop/SANIMEX/node_modules/vite/dist/node/chunks/config.js:29591:54) at async EnvironmentPluginContainer.transform (file:///Users/mahir/Desktop/SANIMEX/node_modules/vite/dist/node/chunks/config.js:28796:14) at async loadAndTransform (file:///Users/mahir/Desktop/SANIMEX/node_modules/vite/dist/node/chunks/config.js:22669:26)
  - generic [ref=e8]:
    - text: Click outside, press Esc key, or fix the code to dismiss.
    - text: You can also disable this overlay by setting
    - code [ref=e9]: server.hmr.overlay
    - text: to
    - code [ref=e10]: "false"
    - text: in
    - code [ref=e11]: vite.config.ts
    - text: .
```