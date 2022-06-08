import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy, { ProxyResCallback } from "http-proxy";
import Cookies from "cookies";
import { appConfig } from "config";

const proxy = httpProxy.createProxyServer();

type Data = {
  message: string;
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(404).json({ message: "Method not supported" });
  }

  return new Promise((resolve) => {
    req.headers.cookie = "";

    const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
      let body = "";
      proxyRes.on("data", function (chunk) {
        body += chunk;
      });

      proxyRes.on("end", function () {
        try {
          const { accessToken, expiredAt } = JSON.parse(body);

          const cookies = new Cookies(req, res, {
            secure: appConfig.environment !== "development",
          });
          cookies.set("access_token", accessToken, {
            httpOnly: true,
            sameSite: "lax",
            expires: new Date(expiredAt),
          });

          (res as NextApiResponse)
            .status(200)
            .json({ message: "Login successfully" });
        } catch (error) {
          (res as NextApiResponse)
            .status(500)
            .json({ message: "Something went wrong" });
        }

        resolve(true);
      });
    };

    proxy.web(req, res, {
      target: appConfig.server.url,
      changeOrigin: true,
      selfHandleResponse: true,
    });

    proxy.once("proxyRes", handleLoginResponse);
  });
}
