import React from "react";

function Header() {
  return (
    <header className="flex gap-2 flex item-center gap-2">
      <img src="/public/favicon.png" alt="Favicon" className="w-10 h-10" />
      <p className="text-2xl font-semibold">Untitled UI</p>
    </header>
  );
}

export default Header;
