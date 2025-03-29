export async function getRakutenToken(): Promise<{
  refresh_token: string;
  token_type: string;
  access_token: string;
  expires_in: number;
}> {
  const response = await fetch("https://api.linksynergy.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: process.env.RAKUTEN_TOKEN,
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch Rakuten token: ${response.status}`);
  }

  return response.json();
}
