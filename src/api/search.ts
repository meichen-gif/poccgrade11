export default async function handler(req: any, res: any) {
  const { q } = req.query;

  try {
    const response = await fetch(
      `https://serpapi.com/search.json?engine=google_images&q=${q}&api_key=${process.env.VITE_SERPAPI_KEY}`
    );

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch images" });
  }
}