import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
   return (
      <main>
         <h1>hello world</h1>
         <div className="mt-0 py-0 mt-0 text-clip"></div>
         <p className="mt-0 pb-3 grid "></p>
         <div className="mt">Lorem ipsum dolor sit amet.</div>
      </main>
   );
}
