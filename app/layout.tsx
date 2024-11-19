import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
            <main className="container mx-auto flex-grow p-4">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
