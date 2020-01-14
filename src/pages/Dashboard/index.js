import React, { useState } from 'react';
import { Header, HeaderContainer, ToolBar, Search, ToolsContainer } from './styles';
import { PrimaryButton } from '../../styles/components/PrimaryButton';
import { Input } from '../../styles/components/Input';
import Checkbox from '../../styles/components/Checkbox';
import NewTool from '../NewTool';
import searchIcon from '../../assets/search.svg';
import api from '../../services/api';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

const pageSize = 8;

export default function Dashboard() {
  const [filter, setFilter] = useState('');
  const [tagsOnly, setTagsOnly] = useState(false);  
  const [pages, setPages] = useState(0);
  const [tools, setTools] = useState([]);
  const [newTool, setNewTool] = useState(false);

  const [ 
    isFetching, 
    setFetching, 
    currentPage, 
    setCurrentPage 
  ] = useInfiniteScroll(pages, fetchMore);
  
  function fetchMore() {
    const url = `/tools/?search=${filter}&tagsOnly=${tagsOnly}&pageSize=${pageSize}&page=${currentPage - 1}`;    
    api.get(url)
      .then(response => {
        const { results } = response.data;
        setTimeout(() => {
            setTools(old => [...old, ...results]);
            setFetching(false);  
            setCurrentPage(old => old + 1);              
        }, 1000);
      })
  } 

  async function initFetch() {
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
    initFetch();
  }

  function handleNewToolClose() {
    setNewTool(false);
  }
  
  return (
    <React.Fragment>
      <Header>
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
        <ul>
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
          {isFetching && 
            <li style={{ textAlign: 'center' }}>
              <p>Loading...</p>
            </li>
          }
        </ul>
      </ToolsContainer>    
      <NewTool open={newTool} onClose={handleNewToolClose}/>
    </React.Fragment>
  );
}