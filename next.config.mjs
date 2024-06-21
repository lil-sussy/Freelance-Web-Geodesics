/** @type {import('next').NextConfig} */
// const nextConfig = {
//   async headers() {
//     return [
//       {
//         source: "/(.*)",
//         headers: [
//           {
//             key: "Content-Security-Policy",
//             value: "default-src 'self'; font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com;",
//           },
//         ],
//       },
//     ];
//   },
// };

/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   async headers() {
//     return [
//       {
//         source: '/(.*)',
//         headers: [
//           {
//             key: 'Content-Security-Policy',
//             value: `
//               default-src 'self';
//               script-src 'self' 'unsafe-inline';
//               style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.cdnfonts.com;
//               font-src 'self' https://fonts.gstatic.com https://fonts.cdnfonts.com;
//               img-src 'self' blob: data:;
//               connect-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com https://fonts.cdnfonts.com;
//             `.replace(/\s{2,}/g, ' ').trim()
//           },
//         ],
//       },
//     ]
//   },
// }

const nextConfig = {}
export default nextConfig;
