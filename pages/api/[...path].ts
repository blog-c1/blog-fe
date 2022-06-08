import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy from "http-proxy";
import Cookies from "cookies";
import { appConfig } from "config";

const proxy = httpProxy.createProxyServer();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  return new Promise((resolve) => {
    const cookies = new Cookies(req, res);
    const accessToken = cookies.get("access_token");
    if (accessToken) {
      req.headers.authorization = `Bearer ${accessToken}`;
    }

    req.headers.cookie = "";

    proxy.web(req, res, {
      target: appConfig.server.url,
      changeOrigin: true,
      selfHandleResponse: false,
    });

    proxy.once("proxyRes", () => {
      resolve(true);
    });
  });
}
