import { protectedApiBaseUrl, publicApiBaseUrl } from "@/helpers/api.helper.js";
import { serialize } from "@/helpers/serialize.helper.js";
import { to } from "await-to-js";

export const findAllProducts = async (context, params) => {
  const [err, data] = await to(publicApiBaseUrl.get("/products", {params}));

  return serialize(err ? err.response : data);
};

