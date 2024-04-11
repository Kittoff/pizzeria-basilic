import { Poppins } from "next/font/google";
import "../global.css";
import Header from "./components/header/index.jsx";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="wrapper">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
