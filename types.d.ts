declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production";
    readonly VITE_DEV_SERVER_HOST: string;
    readonly VITE_DEV_SERVER_PORT: string;
    readonly VITE_APP_NAME: string;
  }
}
