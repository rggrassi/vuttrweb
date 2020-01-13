import { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash/debounce';

const bottomOffset = 20;

export default function useInfiniteScroll(pages, callback) {
  const [isFetching, setFetching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const load = useCallback(callback, [currentPage]);

  const handleScroll = useCallback(() => {
    if (isFetching) {
      return;
    }   
    if (pages === 0) {
      return;
    }
    if (currentPage > pages) {
      return;
    }

    if (window.innerHeight + window.pageYOffset > document.documentElement.scrollHeight - bottomOffset) {
      setFetching(true);
    }    
  }, [currentPage, isFetching, pages]);

  const debouncedHandleScroll = debounce(handleScroll, 100);

  useEffect(() => {
    window.addEventListener('scroll', debouncedHandleScroll);
    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    }
  }, [debouncedHandleScroll]);

  useEffect(() => {
    if (!isFetching) {
      return;
    }
    load();    
  }, [isFetching, load]);

  return [isFetching, setFetching, currentPage, setCurrentPage];
}