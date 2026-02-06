function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-8 overflow-hidden border-rose-100 border-t bg-white/80 px-6 py-1.5 text-rose-500 text-sm shadow-[0_-8px_40px_rgba(244,114,182,0.12)] backdrop-blur">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute top-0 -left-6 h-24 w-24 rounded-full bg-pink-200 blur-3xl" />
        <div className="absolute right-4 -bottom-10 h-28 w-28 rounded-full bg-amber-200 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-rose-50 shadow-inner ring-1 ring-rose-100">
            {/** biome-ignore lint/correctness/useImageSize: decorative sticker sizing is intentional */}
            <img
              alt="可愛小貓送上愛心"
              className="h-10 w-10 drop-shadow-sm"
              src="/cat_heart_love.png"
            />
          </span>
          <p>用滿滿的道歉誠意與小貓加持，為你打造的可愛角落。</p>
        </div>
        <p>© {currentYear} Harrison Chan · arxbombus. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
