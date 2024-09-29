/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_API_URL: string;
  VITE_STUDENTS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
