import React from 'react';
import { Header, ToolBar } from './styles';
import { MdSearch } from 'react-icons/md';

export default function Dashboard() {
  return (
    <React.Fragment>
      <Header>
        <h1>VUTTR</h1>
        <p>Very Usefull Tools to Remenber</p>
      </Header>
      <ToolBar>
        <div>
          <input type='search' autoComplete='off' autoCorrect='off' />
          <span>
            <button>
              <MdSearch/>
            </button>
          </span>
        </div>
        <input type='checkbox' checked/>
      </ToolBar>
    </React.Fragment>
  );
}
