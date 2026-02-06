const config = {
  extends: ["@commitlint/config-conventional"],
  ignores: [
    (message = "") => {
      const trimmed = message.trim();
      if (trimmed === "init") {
        return true;
      }

      const [header = "", ...rest] = message.split("\n");
      const body = rest.join("\n").trim();

      return header.trim().length === 0 && body === "init";
    },
  ],
};

export default config;
