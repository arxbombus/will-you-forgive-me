import type { Stage } from "~/components/stage-content";

interface ApologyCardProps {
  currentStage: Stage;
  helperText: string;
  isForgiven: boolean;
  noButtonHidden: boolean;
  onForgive: () => void;
  onRefuse: () => void;
  refuseScale: number;
  forgiveScale: number;
  successMessage: string;
}

function DecorativeBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-60">
      <div className="absolute -top-16 -left-14 h-60 w-60 rounded-full bg-rose-100 blur-3xl" />
      <div className="absolute right-6 -bottom-16 h-64 w-64 rounded-full bg-amber-100 blur-3xl" />
      <div className="absolute top-8 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full bg-pink-100 blur-2xl" />
    </div>
  );
}

function StatusPill() {
  return (
    <p className="rounded-full border border-rose-100 bg-rose-50/90 px-4 py-2 font-semibold text-rose-500 text-xs shadow-sm">
      小貓誠摯道歉中
    </p>
  );
}

function StickerFrame({
  stage,
  isForgiven,
}: {
  stage: Stage;
  isForgiven: boolean;
}) {
  return (
    <div className="floaty grid size-64 place-items-center rounded-3xl bg-white/85 shadow-inner shadow-rose-100 ring-1 ring-rose-50 sm:size-72">
      {/** biome-ignore lint/correctness/useImageSize: decorative sticker sizing is intentional */}
      <img
        alt="可愛小貓貼圖"
        className="max-h-full max-w-full drop-shadow-md"
        src={isForgiven ? "/cat_heart_heart.png" : stage.image}
      />
    </div>
  );
}

function MessageBlock({
  isForgiven,
  helperText,
  successMessage,
  currentStage,
}: {
  isForgiven: boolean;
  helperText: string;
  successMessage: string;
  currentStage: Stage;
}) {
  return (
    <div className="space-y-2">
      <p
        aria-live="polite"
        className="font-semibold text-2xl text-rose-700 sm:text-3xl"
      >
        {isForgiven ? successMessage : currentStage.message}
      </p>
      <p className="text-rose-500 text-sm">{helperText}</p>
    </div>
  );
}

function ActionButtons({
  onForgive,
  onRefuse,
  forgiveScale,
  refuseScale,
  noButtonHidden,
  isForgiven,
}: Pick<
  ApologyCardProps,
  | "onForgive"
  | "onRefuse"
  | "forgiveScale"
  | "refuseScale"
  | "noButtonHidden"
  | "isForgiven"
>) {
  return (
    <div className="flex items-center justify-center gap-4 sm:gap-6">
      <button
        className="group relative overflow-hidden rounded-full bg-linear-to-r from-rose-500 via-pink-400 to-amber-300 px-10 py-4 font-semibold text-white text-xl shadow-lg shadow-rose-200 transition-all duration-300 hover:shadow-rose-300"
        onClick={onForgive}
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
          className="rounded-full border border-rose-100 bg-white/90 px-8 py-3 font-semibold text-lg text-rose-500 shadow-sm transition-all duration-300 hover:border-rose-200 hover:shadow-md"
          onClick={onRefuse}
          style={{
            transform: `scale(${Math.max(refuseScale, 0.05)})`,
          }}
          type="button"
        >
          不原諒
        </button>
      )}
    </div>
  );
}

function ApologyCard({
  currentStage,
  helperText,
  isForgiven,
  noButtonHidden,
  onForgive,
  onRefuse,
  refuseScale,
  forgiveScale,
  successMessage,
}: ApologyCardProps) {
  return (
    <div className="relative w-full max-w-6xl overflow-hidden rounded-[32px] border border-rose-100 bg-linear-to-br from-white via-rose-50/70 to-amber-50 shadow-[0_25px_80px_rgba(244,114,182,0.2)] ring-1 ring-white/60 backdrop-blur-md">
      <DecorativeBlobs />

      <div className="relative z-10 flex flex-col items-center gap-8 px-6 py-10 sm:px-10">
        <StatusPill />

        <div className="flex flex-col items-center gap-4 text-center">
          <StickerFrame isForgiven={isForgiven} stage={currentStage} />
          <MessageBlock
            currentStage={currentStage}
            helperText={helperText}
            isForgiven={isForgiven}
            successMessage={successMessage}
          />
        </div>

        <ActionButtons
          forgiveScale={forgiveScale}
          isForgiven={isForgiven}
          noButtonHidden={noButtonHidden}
          onForgive={onForgive}
          onRefuse={onRefuse}
          refuseScale={refuseScale}
        />
      </div>
    </div>
  );
}

export default ApologyCard;
