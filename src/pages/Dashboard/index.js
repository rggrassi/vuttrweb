import React from 'react';
import { Header, HeaderContainer, ToolBar, Search, ToolsContainer } from './styles';
import Profile from '../../styles/components/Profile';
import { PrimaryButton } from '../../styles/components/PrimaryButton';
import { Input } from '../../styles/components/Input';
import Checkbox from '../../styles/components/Checkbox';
import NewTool from '../NewTool';
import searchIcon from '../../assets/search.svg';
import api from '../../services/api';

const pageSize = 4;
const bottomOffset = 20;

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: '',
      tagsOnly: false,
      currentPage: 1,
      pages: 0,
      tools: [],
      scrolling: false,
      newTool: false
    }
  }
  
  handleScroll = () => { 
    const { currentPage, pages, scrolling } = this.state; 

    if (scrolling) {
      return;
    }
    if (currentPage >= pages) {
      return;
    }     
    
    const lastLi = document.querySelector('.tools > li:last-child');
    const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;
    if (pageOffset > lastLiOffset - bottomOffset) {
      this.loadMore();
    }
  }

  componentDidMount() {
    this.scrollListenner = window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    this.scrollListenner = null;
  }  

  loadMore = () => {
    this.setState(prev => ({
      currentPage: prev.currentPage + 1,
      scrolling: true
    }), this.loadTools);
  }

  loadTools = async () => {
    const { filter, tagsOnly } = this.state;
    const { currentPage, tools } = this.state;
    const url = `/tools/?search=${filter}&tagsOnly=${tagsOnly}&pageSize=${pageSize}&page=${currentPage - 1}`;
    const response = await api.get(url);
    const { pages, results } = response.data;
    this.setState({ 
      ...this.state,
      scrolling: false,
      tools: [...tools, ...results ] ,
      pages
    });
  };  
  
  keyPressed = (e) => {
    if (e.key !== 'Enter') { 
      return
    }
    if (!this.state.filter) { 
      return
    }
    this.loadTools();
  }

  handleNewToolClose = () => {
    this.setState({
      ...this.state,
       newTool: false 
    });
  }
  
  render() {  
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
                      this.setState({
                        ...this.state, 
                        filter: e.target.value
                      })
                    }}
                    onKeyPress={this.keyPressed}
                    value={this.state.filter}
                    autoFocus='on' 
                    placeholder='search'
                  />
                  <span>
                    <img src={searchIcon} alt='Search'/>                
                  </span>
                </div>
                <Checkbox 
                  onChange={() => this.setState({ 
                    ...this.state, 
                    tagsOnly: !this.state.tagsOnly
                  })}
                  caption='search in tags only'
                  checked={this.state.tagsOnly}
                />
              </Search>
              <PrimaryButton onClick={() => this.setState({ ...this.state, newTool: true })}>
                <span>&#10010;</span>          
                Add
              </PrimaryButton>
            </ToolBar>
          </HeaderContainer>
        </Header>
        <ToolsContainer>
          <ul className='tools'>
            { this.state.tools && this.state.tools.map(tool => (
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
        <NewTool open={this.state.newTool} onClose={this.handleNewToolClose}/>
      </React.Fragment>
    )
  }
}