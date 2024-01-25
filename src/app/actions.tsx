"use server";

const API_URL = process.env.API_URL || "https://rickandmortyapi.com/api/";

export async function fetchEpisodes(
  page: number = 1
): Promise<[{ id: number; name: string }]> {
  const response = await fetch(`${API_URL}episode?page=${page}`, {
    cache: "force-cache",
    next: { tags: ["episodes"] },
  });
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    // throw new Error("Failed to fetch data");
    return [] as any;
  }
  const data = await response.json();
  return data.results?.length
    ? data.results.map((ep: any) => ({ id: ep.id, name: ep.name }))
    : [];
}
async function fetchCharacters(url: string) {
  const response = await fetch(url, {
    cache: "force-cache",
    next: { tags: ["character", url] },
  });
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  return { id: data.id, name: data.name, image: data.image };
}

export async function fetchEpisodeWithCharacters(id: number) {
  const response = await fetch(`${API_URL}episode/${id}`, {
    cache: "force-cache",
    next: { tags: ["episode", `${id}`] },
  });
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  const characters = data.characters?.length
    ? Promise.all(data.characters?.map(fetchCharacters))
    : [];
  return { ...data, characters };
}

export async function fetchHomeCharacters(): Promise<
  [{ id: number; name: string, image: string }]
> {
  const response = await fetch(`${API_URL}character`, {
    cache: "force-cache",
    next: { tags: ["character"] },
  });
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data.results?.length
    ? data.results.map((ch: any) => ({ id: ch.id, name: ch.name, image:ch.image }))
    : [];
}
