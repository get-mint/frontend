export async function getRakutenToken(): Promise<{
  refresh_token: string;
  token_type: string;
  access_token: string;
  expires_in: number;
}> {
  const params = new URLSearchParams();
  params.append('scope', '4483382');

  const response = await fetch("https://api.linksynergy.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": `Bearer ${process.env.RAKUTEN_TOKEN}`,
    },
    body: params.toString(),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const errorMessage = errorData.error_description || errorData.error || errorData.message || 'Unknown error';
    const errorCode = errorData.error_code || response.status;
    const errorDetails = {
      status: response.status,
      statusText: response.statusText,
      errorCode,
      errorMessage,
      timestamp: new Date().toISOString(),
    };
    
    console.error('Rakuten Token Error:', errorDetails);
    throw new Error(`Failed to fetch Rakuten token: ${errorCode} - ${errorMessage}`);
  }

  return response.json();
}
