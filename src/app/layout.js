import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/provider/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "City Remit",
  description: "City Remit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </head>
      <body className={inter.className + ""}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
