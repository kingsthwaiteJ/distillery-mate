import { apiGet, apiPost } from "../api/database";

export async function getRequest(req: Request, res: Response, sql: string) {
  let status, data;
  try {
    data = await apiGet(sql);
    status = 200;
    return Response.json(data, {
      status,
    });
  } catch (error: any) {
    console.error(error.message);
    return Response.json(
      { error: error },
      {
        status: 400,
      }
    );
  }
}

export async function postRequest(
  req: Request,
  res: Response,
  sql: string,
  values: { [key: string]: string | number }
) {
  let status, respBody;
  try {
    const newId = await apiPost(sql, values);
    status = 200;
    respBody = {
      message: "Successfully created consumable",
      data: { id: newId },
    };
    return Response.json(respBody, {
      status,
    });
  } catch (error: any) {
    console.error(error.message);
    return Response.json(
      { error: error },
      {
        status: 400,
      }
    );
  }
}
