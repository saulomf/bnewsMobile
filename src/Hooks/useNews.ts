import { useQuery } from 'react-query';
import { getNewsFromAPI } from '../Services/api';

const useNews = (page: number) => useQuery('news', () => getNewsFromAPI({ qtd: 10, page }));

export default useNews;