import { getRequest, postRequest } from "../../util/apiRequest";

export async function GET(req: Request, res: Response) {
  const query = `SELECT * FROM [JournalEntries];`;

  return await getRequest(req, res, query);
}

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const { author, content } = body;

  const query = `
    INSERT INTO [JournalEntries] (author, date, content)
    VALUES ($author, GETDATETIME(), $content)
  `;

  return await postRequest(req, res, query, {
    $author: author,
    $content: content,
  });
}
