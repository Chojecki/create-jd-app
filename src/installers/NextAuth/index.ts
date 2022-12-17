import { KeyOrKeyArray, withPackages } from "~helpers/packages";
import { IInstaller } from "~types";

const config: IInstaller = (ctx) => {
  //   const usePrisma = ctx.installers.includes("Prisma");
  const normal: KeyOrKeyArray<"normal"> = ["@auth/core", "@solid-auth/next"];
  //   if (usePrisma) {
  //     normal.push("@next-auth/prisma-adapter");
  //   }
  return {
    pkgs: withPackages({
      normal,
    }),
    files: [
      {
        // path: `${__dirname}/files/${usePrisma ? "prisma-" : ""}handler.txt`,
        path: `${__dirname}/files/handler.txt`,
        to: `${ctx.userDir}/src/routes/api/auth/[...solidauth].ts`,
      },
    ],
    env: [
      {
        key: "GITHUB_ID",
        type: "string()",
        kind: "server",
      },
      {
        key: "GITHUB_SECRET",
        type: "string()",
        kind: "server",
      },
      {
        key: "AUTH_SECRET",
        type: "string()",
        defaulValue: "b198e07a64406260b98f06e21c457b84",
        kind: "server",
      },
      {
        key: "AUTH_TRUST_HOST",
        type: "string().optional()",
        kind: "server",
        defaulValue: "true",
      },
      {
        key: "NEXTAUTH_URL",
        defaulValue: "http://localhost:3000",
        type: "string().optional()",
        kind: "server",
      },
    ],
  };
};

export default config;
