export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      testKey: "testValue",
    },
  };
});
