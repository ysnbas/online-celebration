import "@Assets/styles/globals.css";
import "@Assets/styles/import.scss";

export const metadata = {
  title: "Online Celebration",
  description: "Virtual celebration of your friends.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
