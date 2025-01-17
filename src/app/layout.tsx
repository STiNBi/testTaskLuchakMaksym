import "./globals.css";
import Footer from "./components/footer/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mainbox">
        {children}
        <Footer />
      </body>
    </html>
  );
}
