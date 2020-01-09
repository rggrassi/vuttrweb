import React, { useState, useEffect, useCallback } from 'react';
import { Header, HeaderContainer, ToolBar, Search, ToolsContainer } from './styles';
import Profile from '../../styles/components/Profile';
import { PrimaryButton } from '../../styles/components/PrimaryButton';
import { Input } from '../../styles/components/Input';
import Checkbox from '../../styles/components/Checkbox';
import NewTool from '../NewTool';
import searchIcon from '../../assets/search.svg';
import api from '../../services/api';

const pageSize = 8;
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

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }  
  }, [handleScroll]);
  
  useEffect(() => {
    if (!isFetching) {
      return;
    }
    loadTools();    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching]);

  async function loadTools() {
    const url = `/tools/?search=${filter}&tagsOnly=${tagsOnly}&pageSize=${pageSize}&page=${currentPage - 1}`;
    const response = await api.get(url);
    const { pages, results } = response.data;

    setTools([...tools, ...results]);
    setPages(pages);
    setFetching(false);  
    setCurrentPage(currentPage + 1);    
  };
  
  function keyPressed(e) {
    if (e.key !== 'Enter') { 
      return
    }
    if (!filter) { 
      return
    }
    loadTools();
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