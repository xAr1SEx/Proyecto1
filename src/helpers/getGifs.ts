interface GifData {
  id: string;
  title: string;
  images: {
    downsized_medium: {
      url: string;
    };
  };
}
export const getGifs = async (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=Z5CB52lqadjft7L1gyYGARo6YrUbHG3Q&q=${category}&limit=20`;
  const resp = await fetch(url);
  const { data = [] }: { data: GifData[] } = await resp.json();

  const gifs = data.map((img: GifData) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  console.log(gifs);
  return gifs;
};
