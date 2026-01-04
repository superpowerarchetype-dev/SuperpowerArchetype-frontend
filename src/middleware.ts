// middleware.ts
import createMiddleware from 'next-intl/middleware';
import { routing } from '~/lib/navigation'; // แนะนำให้ import routing ที่สร้างไว้มาใช้

export default createMiddleware(routing);

export const config = {
  // Matcher มาตรฐานที่ดักทุก path ยกเว้นไฟล์ static, api, และ next internal
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};