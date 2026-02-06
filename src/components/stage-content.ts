export interface Stage {
  image: string;
  message: string;
}

export const stages: Stage[] = [
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

export const successMessage = "耶！耶！耶！和好了，最愛你了～";
