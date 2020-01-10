import React, { useState, useEffect, useCallback } from 'react';
import { Header, HeaderContainer, ToolBar, Search, ToolsContainer } from './styles';
import Profile from '../../styles/components/Profile';
import { PrimaryButton } from '../../styles/components/PrimaryButton';
import { Input } from '../../styles/components/Input';
import Checkbox from '../../styles/components/Checkbox';
import NewTool from '../NewTool';
import searchIcon from '../../assets/search.svg';
import api from '../../services/api';
import debounce from 'lodash/debounce';

const pageSize = 4;
const bottomOffset = 20;

export default function Dashboard() {
  const [filter, setFilter] = useState('');
  const [tagsOnly, setTagsOnly] = useState(false);  
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [tools, setTools] = useState([]);
  const [isFetching, setFetching] = useState(false);
  const [newTool, setNewTool] = useState(false);
  
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
    const lastLi = document.querySelector('.tools > li:last-child');
    const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;
    if (pageOffset > lastLiOffset - bottomOffset) {
      setFetching(true);
    } 
  }, [currentPage, isFetching, pages]);

  const handleDebounceScroll = debounce(handleScroll, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleDebounceScroll);    
    return () => {
      window.removeEventListener('scroll', handleDebounceScroll);
    }  
  }, [handleDebounceScroll]);
  
  const loadMore = useCallback(async () => {
    const url = `/tools/?search=${filter}&tagsOnly=${tagsOnly}&pageSize=${pageSize}&page=${currentPage - 1}`;
    const response = await api.get(url);
    const { results } = response.data;

    setTools(old => [...old, ...results]);
    setFetching(false);  
    setCurrentPage(old => old + 1); 
  }, [filter, tagsOnly, currentPage]);

  useEffect(() => {
    if (!isFetching) {
      return;
    }
    loadMore();    
  }, [isFetching, loadMore]);

  async function loadInit() {
    const url = `/tools/?search=${filter}&tagsOnly=${tagsOnly}&pageSize=${pageSize}&page=${0}`;
    const response = await api.get(url);
    const { pages, results } = response.data;

    setTools(results);
    setPages(pages);
    setFetching(false);  
    setCurrentPage(2); 
  };
  
  function keyPressed(e) {
    if (e.key !== 'Enter') { 
      return
    }
    if (!filter) { 
      return
    }
    loadInit();
  }

  function handleNewToolClose() {
    setNewTool(false);
  }
  
  return (
    <React.Fragment>
      <Header>
        <Profile/>
        <HeaderContainer>
          <h1>VUTTR</h1>
          <p>Very Usefull Tools to Remenber</p>
          <ToolBar>
            <Search>
              <div>
                <Input 
                  onChange={e => {
                    setFilter(e.target.value)
                  }}
                  onKeyPress={keyPressed}
                  value={filter}
                  autoFocus='on' 
                  placeholder='search'
                />
                <span>
                  <img src={searchIcon} alt='Search'/>                
                </span>
              </div>
              <Checkbox 
                onChange={() => { 
                  setTagsOnly(!tagsOnly)
                }}
                caption='search in tags only'
                checked={tagsOnly}
              />
            </Search>
            <PrimaryButton onClick={() => setNewTool(true)}>
              <span>&#10010;</span>          
              Add
            </PrimaryButton>
          </ToolBar>
        </HeaderContainer>
      </Header>
      <ToolsContainer>
        <ul className='tools'>
          { tools && tools.map((tool, idx) => (
            <li key={idx}>
              <div>
                <a href={tool.link} target='blank'>{tool.title}</a>
                <button>
                  <span>&#10006;</span>
                  remove
                </button>
              </div>
              <p>{tool.description}</p>
              {tool.tags && tool.tags.map((tag, idx) => (
                <span key={idx}>{`#${tag}`}&nbsp;</span>
              ))}
            </li>
          ))}
        </ul>
      </ToolsContainer>    
      <NewTool open={newTool} onClose={handleNewToolClose}/>
    </React.Fragment>
  );
}