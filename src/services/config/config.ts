export const config = {
  development: {
    apiUrl: process.env.NEXT_PUBLIC_BACK_DEV,
  },
  production: {
    apiUrl: process.env.NEXT_PUBLIC_BACK_PROD,
  },
};
