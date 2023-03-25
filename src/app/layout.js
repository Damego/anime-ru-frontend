import "./globals.css";

export const metadata = {
  title: "Anime ru",
  description: "Оценивайте просмотренные вами аниме тайтлы",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50">{children}</body>
    </html>
  );
}
