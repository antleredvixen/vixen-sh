import { withAuth } from "next-auth/middleware"

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    // You can use the token for custom logic here if needed
    // console.log(req.nextauth.token)
  },
  {
    // Specify which routes should be protected
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
)

export const config = {
  matcher: [
    // Protect these routes
    '/dashboard/:path*',
    '/api/:path*',
    // Add more protected routes as needed
  ],
}