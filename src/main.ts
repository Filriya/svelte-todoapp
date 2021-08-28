import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    counter: 10,
  }
});

export default app;