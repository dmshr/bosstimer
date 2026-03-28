// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Boss Timer",
  description: "Realtime Boss Tracking System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased font-sans">

        {/* ===== HEADER ===== */}
        <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-gray-800">
          <div className="relative flex items-center px-4 md:px-6 py-4">

            {/* LEFT MENU */}
            <div className="flex items-center gap-4 text-yellow-400 text-xl">
              <span className="cursor-pointer hover:scale-110 transition">🔍</span>
              <span className="cursor-pointer hover:scale-110 transition">＋</span>
              <span className="text-sm text-blue-400 cursor-pointer hover:text-red-400 transition">
                Invasion
              </span>
            </div>

            {/* CENTER LOGO */}
            <div className="absolute left-1/2 -translate-x-1/2 text-center">
              <div className="text-green-400 font-bold tracking-widest">
                KAIN
              </div>
              <div className="text-xs text-gray-400">
                Login as User
              </div>
            </div>

            {/* RIGHT MENU */}
            <div className="ml-auto flex items-center gap-4 text-gray-400">
              <span className="cursor-pointer hover:text-white transition">🔊</span>
              <span className="cursor-pointer hover:text-white transition">⚙️</span>
              <span className="text-sm text-red-400 cursor-pointer hover:text-red-300 transition">
                Logout
              </span>
            </div>
          </div>

          {/* ===== TABLE HEADER ===== */}
          <div className="grid grid-cols-3 px-4 md:px-6 py-2 text-gray-400 text-sm border-t border-gray-800">
            <span>Boss</span>
            <span className="text-center">Spawn</span>
            <span className="text-right">Countdown</span>
          </div>

          {/* ===== RED LINE ===== */}
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-red-500 to-transparent" />
        </header>

        {/* ===== MAIN CONTENT ===== */}
        <main className="min-h-screen">
          {children}
        </main>

      </body>
    </html>
  );
}