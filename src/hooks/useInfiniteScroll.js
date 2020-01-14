import { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash/debounce';
import PropTypes from 'prop-types';

const bottomOffset = 20;

export default function useInfiniteScroll(pages, fetchMore) {
  const [isFetching, setFetching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const fetch = useCallback(fetchMore, [currentPage]);

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
    fetch();    
  }, [isFetching, fetch]);

  return [isFetching, setFetching, currentPage, setCurrentPage];
}

useInfiniteScroll.propTypes = {
  pages: PropTypes.number.isRequired,
  fetchMore: PropTypes.func.isRequired
}

useInfiniteScroll.defaultProps = {
  pages: 0
}