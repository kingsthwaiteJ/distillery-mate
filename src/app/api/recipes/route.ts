import { getRequest, postRequest } from "../../util/apiRequest";

export async function GET(req: Request, res: Response) {
  const query = `SELECT * FROM [Recipes];`;

  return await getRequest(req, res, query);
}

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const { name, ingredients, output } = body;

  const query = `
    INSERT INTO [Recipes] (name, productName, productQuantity, productUnit)
    VALUES($name, $productName, $productQuantity, $productUnit);
  `;

  return await postRequest(req, res, query, {
    $name: name,
    $productName: output.name,
    $productQuantity: output.quantity,
    $productUnit: output.unit,
  });
}
