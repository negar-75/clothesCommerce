export default async function handler(req, res) {
  const accessToken = process.env.UNSPLASH_ACCESS_TOKEN;

  const response = await fetch(
    `https://api.unsplash.com/photos/5xfNCD_BuyI/?client_id=${accessToken}`,
    {
      method: "GET",
    }
  );
}
