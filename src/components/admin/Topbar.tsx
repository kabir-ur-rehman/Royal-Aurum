import React, { useEffect, useState } from "react";
import { Sun, Moon, Search } from "lucide-react";

const Topbar: React.FC<{ onSearch?: (q: string) => void }> = ({ onSearch }) => {
  const [dark, setDark] = useState<boolean>(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 border-b">
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-semibold">Admin Panel</h2>
        <div className="hidden sm:flex items-center bg-slate-50 dark:bg-slate-800 border rounded px-2">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            onChange={(e) => onSearch?.(e.target.value)}
            placeholder="Search orders or products..."
            className="bg-transparent px-2 py-1 outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button onClick={() => setDark((d) => !d)} className="p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800">
          {dark ? <Sun /> : <Moon />}
        </button>
      </div>
    </header>
  );
};

export default Topbar;
