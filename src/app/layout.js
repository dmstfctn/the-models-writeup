import "./globals.css";



export const metadata = {
  title: "The Models (2025), dmstfctn",
  description: "A technical overview of The Models* (2025), an interactive installation by artist duo dmstfctn exploring the improvisational nature of generative AI, and its sometimes unexpected and nonsensical character",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
