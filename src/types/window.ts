export {};

declare global {
  interface Window {
    hashtagFinder?: {
        loaded: boolean
        active: boolean
    };
  }
}