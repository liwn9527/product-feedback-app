export default function fetcher(url: string) {
  return async () => {
    const res = await fetch(url);

    return await res.json();
  };
}
