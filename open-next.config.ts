import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // Exclude sharp since images are unoptimized and it uses native binaries
  // that don't work in Cloudflare Workers
});
