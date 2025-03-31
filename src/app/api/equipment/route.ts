import { getRequest, postRequest } from "../../util/apiRequest";

export async function GET(req: Request, res: Response) {
  const query = `SELECT * FROM [Equipment];`;

  return await getRequest(req, res, query);
}

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const { name, brand, material, price, quantity } = body;

  const query = `
    INSERT INTO [Equipment] (name, brand, material, price, quantity)
    VALUES($name, $brand, $material, $price, $quantity);
  `;

  return await postRequest(req, res, query, {
    $name: name,
    $brand: brand,
    $material: material,
    $price: price,
    $quantity: parseInt(quantity),
  });
}
