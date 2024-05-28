import { tmdbInstance } from './instance'

const getDetails = async (id) => {
  const response = await tmdbInstance.get(`/movie/${id}?language=ko-KR`)
  return response.data
}

const getPopular = async () => {
  const response = await tmdbInstance.get(
    '/movie/popular?language=ko-KR&page=1&region=KOR',
  )
  return response.data
}

export { getDetails, getPopular }
