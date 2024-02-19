# Svelte Superforms Dependency Warning

1. all optional validation libraries are installed which is not good
2. `vite build` complains on `Circular dependency`

**Reproduce:**

```bash
# install dependencies
yarn

# build (or yarn vite build)
yarn build
```

**Screenshot:**

![Screenshot](screenshot.png)