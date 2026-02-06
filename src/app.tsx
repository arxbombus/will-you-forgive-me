import { useMemo, useState } from "react";
import ApologyCard from "~/components/apology-card";
import Footer from "~/components/footer";
import { stages, successMessage } from "~/components/stage-content";
import "~/app.css";

function App() {
  const [step, setStep] = useState(0);
  const [isForgiven, setIsForgiven] = useState(false);

  const clampedStep = Math.min(step, stages.length - 1);
  const progress = clampedStep / (stages.length - 1);
  const currentStage = stages[clampedStep];
  const noButtonHidden = clampedStep >= stages.length - 1 || isForgiven;

  const refuseScale = Math.max(0, 1 - progress * 0.9);
  const forgiveScale = isForgiven ? 1.2 : 1 + progress;

  const helperText = useMemo(() => {
    if (isForgiven) {
      return "抱緊緊！再帶你去吃好吃的，走！";
    }
    if (noButtonHidden) {
      return "不原諒的按鈕縮小到消失，只能選擇原諒他了！";
    }
    return "點一下「不原諒」看看貓咪還能拿出多少誠意，或直接原諒他吧";
  }, [isForgiven, noButtonHidden]);

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
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1 items-center justify-center px-4 py-10">
        <ApologyCard
          currentStage={currentStage}
          forgiveScale={forgiveScale}
          helperText={helperText}
          isForgiven={isForgiven}
          noButtonHidden={noButtonHidden}
          onForgive={handleForgive}
          onRefuse={handleRefuse}
          refuseScale={refuseScale}
          successMessage={successMessage}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
