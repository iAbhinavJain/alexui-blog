// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Blog";
export const SITE_DESCRIPTION =
  "A blog about web development, programming, and computer science by a weird web developer trying to be a designer.";
export const TWITTER_HANDLE = "@iAbhinavJain";
export const MY_NAME = "Abhinav Jain";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
