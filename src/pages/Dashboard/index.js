import React from 'react';
import { Header, ToolBar, Search } from './styles';
import { PrimaryButton } from '../../styles/components/PrimaryButton/styles';
import search from '../../assets/search.svg';

export default function Dashboard() {
  return (
    <React.Fragment>
      <Header>
        <h1>VUTTR</h1>
        <p>Very Usefull Tools to Remenber</p>
      </Header>
      <ToolBar>
        <Search>
          <div>
            <input type='text' autoComplete='off' autoCorrect='off' placeholder='search'/>
            <span>
              <img src={search} alt='Search'/>                
            </span>
          </div>
          <label htmlFor='tags'>
            search in tags only
            <input id='tags' type='checkbox'/>
            <span></span>
          </label>
        </Search>
        <PrimaryButton>
          <span/><span/>
          Add
        </PrimaryButton>
      </ToolBar>
    </React.Fragment>
  );
}
