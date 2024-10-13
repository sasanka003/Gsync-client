import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Provider from "@/utils/redux/Provider";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Gsync - Analytical and Automation for in-House Plantation",
  description: "Analytical and Automation for in-House Plantation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Provider>
            <main>{children}</main>
          </Provider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
