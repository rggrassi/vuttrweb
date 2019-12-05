import React, { useState } from 'react';
import { Header, HeaderContainer, ToolBar, Search, ToolsContainer } from './styles';
import Profile from '../../styles/components/Profile';
import { PrimaryButton } from '../../styles/components/PrimaryButton';
import { Input } from '../../styles/components/Input';
import Checkbox from '../../styles/components/Checkbox';
import NewTool from '../NewTool';
import search from '../../assets/search.svg';

export default function Dashboard() {
  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);
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
                <Input type='text' autoComplete='off'  autoFocus='on' placeholder='search'/>
                <span>
                  <img src={search} alt='Search'/>                
                </span>
              </div>
              <Checkbox caption='search in tags only'/>
            </Search>
            <PrimaryButton onClick={() => setOpen(true)}>
              <span>&#10010;</span>          
              Add
            </PrimaryButton>
          </ToolBar>
        </HeaderContainer>
      </Header>
      <ToolsContainer>
        <ul>
          <li>
            <div>
              <a href='https://github.com/' target='blank'>GitHub</a>
              <button>
                <span>&#10006;</span>
                remove
              </button>
            </div>
            <p>O usuário deve poder adicionar uma nova ferramenta</p>
            <p>#node #web #github</p>
          </li>
        </ul>
      </ToolsContainer>    
      { open &&
        <NewTool open={open} onClose={handleClose}/>
      }
    </React.Fragment>
  );
}
