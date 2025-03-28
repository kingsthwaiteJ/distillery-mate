import { getRequest, postRequest } from "../../util/apiRequest";

export async function GET(req: Request, res: Response) {
  const query = `
       SELECT * from Consumables
     `;

  return await getRequest(req, res, query);
}

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const { name, brand, type, price, quantity } = body;

  const query = `
    INSERT INTO Consumables(name, brand, type, price, quantity)
    VALUES(?, ?, ?, ?, ?)
  `;
  const values = [name, brand, type, price, quantity];

  return await postRequest(req, res, query, values);
}
