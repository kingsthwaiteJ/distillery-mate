import { getRequest, postRequest } from "../../util/apiRequest";

export async function GET(req: Request, res: Response) {
  const query = `SELECT * FROM [Consumables];`;

  return await getRequest(req, res, query);
}

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const { name, brand, type, price, quantity } = body;

  const query = `
    INSERT INTO [Consumables] (name, brand, type, price, quantity)
    VALUES($name, $brand, $type, $price, $quantity);
  `;

  return await postRequest(req, res, query, {
    $name: name,
    $brand: brand,
    $type: type,
    $price: price,
    $quantity: parseInt(quantity),
  });
}
