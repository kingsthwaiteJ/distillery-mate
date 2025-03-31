import { getRequest } from "../../../util/apiRequest";

export async function GET(req: Request, res: Response) {
  const ids = req.url.split("/");
  const query = `SELECT * FROM [Consumables] WHERE [id] = ${
    ids[ids.length - 1]
  };`;

  return await getRequest(req, res, query);
}
