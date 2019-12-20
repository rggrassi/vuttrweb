import React, { useState, useEffect, useCallback } from 'react';
import { Header, HeaderContainer, ToolBar, Search, ToolsContainer } from './styles';
import Profile from '../../styles/components/Profile';
import { PrimaryButton } from '../../styles/components/PrimaryButton';
import { Input } from '../../styles/components/Input';
import Checkbox from '../../styles/components/Checkbox';
import NewTool from '../NewTool';
import searchIcon from '../../assets/search.svg';
import api from '../../services/api';

const pageSize = 2;
const bottomOffset = 20;

export default function Dashboard() {
  const [search, setSearch] = useState({
    filter: '',
    tagsOnly: false
  });
  
  const [currentPage, setCurrentPage] = useState(null);
  const [pages, setPages] = useState(0);
  const [tools, setTools] = useState([]);
  const [scrolling, setScrolling] = useState(false);
  const [newTool, setNewTool] = useState(false);  
  
  const handleScroll = () => {    

    if (scrolling) {
      return;
    }
    
    console.log(currentPage, pages);

    if (currentPage >= pages) {
      //console.log(pages, currentPage)
      return;
    }     
    
    const lastLi = document.querySelector('.tools > li:last-child');
    const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;
    //console.log(pageOffset, lastLiOffset);
    if (pageOffset > lastLiOffset - bottomOffset) {
      console.log('currentPage: ', currentPage);
      setScrolling(true);
      setCurrentPage(currentPage + 1);
    }
    //console.log('lastLi', lastLi);
  }

  //useEffect(() => {
    window.addEventListener('scroll', handleScroll);    
    //return () => {
      //window.removeEventListener('scroll', handleScroll)
    //}  
  //}, []);
  

  const loadTools = useCallback(async (page, search, tools) => {
    const { filter, tagsOnly } = search;
    const url = `/tools/?search=${filter}&tagsOnly=${tagsOnly}&pageSize=${pageSize}&page=${page}`;
    const response = await api.get(url);
    const { pages, results } = response.data;
    setTools([...tools, ...results]);
    setPages(pages);
    setScrolling(false);
  }, []);
  
  useEffect(() => {
    if (currentPage > 0) {
      loadTools(currentPage, search, tools);
    }  
  }, [currentPage, loadTools]);
  
  function keyPressed(e) {
    if (e.key !== 'Enter') { 
      return
    }
    if (!search.filter) { 
      return
    }
    setCurrentPage(0);
    loadTools(0, search, []);
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
                    setSearch({
                      ...search, 
                      filter: e.target.value
                    })
                  }}
                  onKeyPress={keyPressed}
                  value={search.filter}
                  autoFocus='on' 
                  placeholder='search'
                />
                <span>
                  <img src={searchIcon} alt='Search'/>                
                </span>
              </div>
              <Checkbox 
                onChange={() => setSearch({ 
                  ...search, 
                  tagsOnly: !search.tagsOnly
                })}
                caption='search in tags only'
                checked={search.tagsOnly}
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
          { tools && tools.map(tool => (
            <li key={tool._id}>
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