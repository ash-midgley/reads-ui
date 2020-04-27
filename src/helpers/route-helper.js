export const validAnonymousPath = (pathname) => {
    return pathname === '/' || pathname === '/forgot-password' || pathname.includes('shelf')  || pathname.includes('review') || pathname.includes('reset-password');
}