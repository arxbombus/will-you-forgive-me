import { useState } from "react";
import "./app.css";

interface Stage {
  image: string;
  message: string;
}

const stages: Stage[] = [
  { image: "/cat_bow.png", message: "對不起，可以原諒我嗎" },
  { image: "/cat_tears_of_joy.png", message: "原諒我嘛寶貝" },
  { image: "/cat_heart_heart.png", message: "帶你去吃好吃的喔" },
  { image: "/cat_thankful_cry.png", message: "真的不原諒我嗎？錢錢都給你喔" },
  { image: "/cat_head_nod.png", message: "我幫你做一週家務，還送抱抱券" },
  {
    image: "/cat_happy.png",
    message: "我改掉惹你生氣的小毛病，我們一起做excel表～",
  },
  { image: "/cat_excited.png", message: "帶你一起去旅行，去你想去的地方喔！" },
  {
    image: "/cat_happy_skip_sing.png",
    message: "可以當你的情緒隨身充電小助手",
  },
  { image: "/cat_heart_love.png", message: "最後一次求求你，真的離不開你" },
  {
    image: "/cat_thumbs_up.png",
    message: "喵喵跪求，按下原諒我，我永遠對你好",
  },
];

const successMessage = "耶！耶！耶！和好了，最愛你了～";

function App() {
  const [step, setStep] = useState(0);
  const [isForgiven, setIsForgiven] = useState(false);

  const clampedStep = Math.min(step, stages.length - 1);
  const progress = clampedStep / (stages.length - 1);
  const currentStage = stages[clampedStep];
  const noButtonHidden = clampedStep >= stages.length - 1 || isForgiven;

  const refuseScale = Math.max(0, 1 - progress * 0.9);
  const forgiveScale = isForgiven ? 1.25 : 1 + progress;

  const getHelperText = () => {
    if (isForgiven) {
      return "抱緊緊！再帶你去吃好吃的，走！";
    }
    if (noButtonHidden) {
      return "不原諒的按鈕縮小到消失，只能選擇原諒他了！";
    }
    return "點一下「不原諒」看看貓咪還能拿出多少誠意，或直接原諒他吧";
  };
  const helperText = getHelperText();

  const handleRefuse = () => {
    if (noButtonHidden) {
      return;
    }
    setStep((prev) => Math.min(prev + 1, stages.length - 1));
  };

  const handleForgive = () => {
    setIsForgiven(true);
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="relative w-full max-w-6xl overflow-hidden rounded-3xl border border-rose-100 bg-white/80 shadow-[0_25px_80px_rgba(244,114,182,0.25)] backdrop-blur">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -top-10 -left-10 h-48 w-48 rounded-full bg-pink-200 blur-3xl" />
          <div className="absolute right-4 -bottom-12 h-56 w-56 rounded-full bg-amber-200 blur-3xl" />
          <div className="absolute top-6 left-1/3 h-24 w-24 rounded-full bg-rose-100 blur-2xl" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-8 px-6 py-10 sm:px-10">
          <p className="rounded-full border border-rose-100 bg-rose-50 px-4 py-2 font-semibold text-rose-500 text-xs shadow-sm">
            小貓誠摯道歉中
          </p>

          <div className="flex flex-col items-center gap-4 text-center">
            <div className="floaty grid size-64 place-items-center rounded-2xl bg-white/80 shadow-inner shadow-rose-100 ring-1 ring-rose-50 sm:size-72">
              {/** biome-ignore lint/correctness/useImageSize: decorative sticker sizing is intentional */}
              <img
                alt="可愛小貓貼圖"
                className="max-h-full max-w-full drop-shadow-md"
                src={isForgiven ? "/cat_heart_heart.png" : currentStage.image}
              />
            </div>

            <div className="space-y-2">
              <p
                aria-live="polite"
                className="font-semibold text-2xl text-rose-700 sm:text-3xl"
              >
                {isForgiven ? successMessage : currentStage.message}
              </p>
              <p className="text-rose-500 text-sm">{helperText}</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <button
                className="group relative overflow-hidden rounded-full bg-linear-to-r from-rose-400 via-pink-400 to-amber-300 px-10 py-4 font-semibold text-white text-xl shadow-lg shadow-rose-200 transition-all duration-300 hover:shadow-rose-300"
                onClick={handleForgive}
                style={{ transform: `scale(${forgiveScale})` }}
                type="button"
              >
                <span className="relative z-10">
                  {isForgiven ? "已經原諒，抱抱～" : "原諒他"}
                </span>
                <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-30" />
              </button>

              {noButtonHidden ? null : (
                <button
                  className="rounded-full border border-rose-100 bg-white/90 px-8 py-3 font-semibold text-lg text-rose-500 shadow-sm transition-all duration-300"
                  onClick={handleRefuse}
                  style={{
                    transform: `scale(${Math.max(refuseScale, 0.05)}) translateY(${progress * 10}px)`,
                  }}
                  type="button"
                >
                  不原諒
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
