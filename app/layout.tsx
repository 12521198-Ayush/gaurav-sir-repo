//"use client";
import { Karla } from "next/font/google";
import "./globals.css";
import { auth } from "@/auth";
import { ThemeProvider } from "@/components/common/theme-provider";
import {AuthProvider} from "@/components/common/auth-wrapper";

const karla = Karla({ 
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-karla" 
});

export default async function RootLayout({ children,
}: {
  children: React.ReactNode
}) {

  const session = await auth();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={karla.className + 'h-screen'}>
        <ThemeProvider
          themes={['dark', 'custom', 'light']}
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider session={session}>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
