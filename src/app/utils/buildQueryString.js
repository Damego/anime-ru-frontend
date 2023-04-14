export default function buildQueryString({sort, genres, search}) {
  const params = {};
  if (sort) params.sort = sort;
  if (genres) params.genres = genres;
  if (search && search.trim()) params.search = search.trim();

  const queryParams = new URLSearchParams(params).toString()
  return "?" + queryParams;
}