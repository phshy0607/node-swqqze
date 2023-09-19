import path from "node:path";
import { createDocitPlugin } from "@blizzbolts/vite-plugin-docit";
import express from "express";
import { createServer as createViteServer } from "vite";
import { coreLogger } from "@blizzbolts/docit-shared";
import { getDirname } from "@blizzbolts/docit-shared/node";
import fsx from "fs-extra";

const r = (p: string = "") => path.resolve(getDirname(import.meta.url), "../", p);
const ENTRY_CLIENT = r("./client/entry-client.js");
const ENTRY_SERVER = r("./client/entry-server.js");

export const start = async (root: string) => {
  const app = express();

  const vite = await createViteServer({
    root: path.resolve(process.cwd(), "./", root),
    server: {
      middlewareMode: true,
      watch: {
        usePolling: true,
        interval: 100,
      },
    },
    resolve: {
      alias: {
        "doc-root": path.resolve(process.cwd(), "./", root),
      },
    },
    appType: "custom",
    plugins: [createDocitPlugin()],
  });

  app.use(vite.middlewares);

  app.use("*", async (req, res) => {
    const url = req.originalUrl;
    try {
      let template = await fsx.readFile(r("./client/index.html"), { encoding: "utf-8" });
      template = await vite.transformIndexHtml(url, template);
      const { render } = await vite.ssrLoadModule(ENTRY_SERVER);
      const context: { url?: string } = {};
      const appHtml = await render(url, context);
      if (context.url) {
        return res.redirect(301, context.url);
      }

      const html = template
        // .replace(`<!--entry-point-->`, `/@fs/${ENTRY_CLIENT}`)
        .replace(`<!--ssr-outlet-->`, appHtml);
      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      if (e instanceof Error) {
        // 如果捕获到了一个错误，让 Vite 来修复该堆栈，这样它就可以映射回
        // 你的实际源码中。
        vite.ssrFixStacktrace(e);
        coreLogger.error(e.stack);
        res.status(500).end(e.stack);
      }
    }
  });

  const server = app.listen(3000, () => {
    const address = server.address();
    if (typeof address === "string") {
      coreLogger.success("Docit dev server started at: ", address);
    } else {
      coreLogger.success("Docit dev server started at: ", address?.port);
    }
  });
};
