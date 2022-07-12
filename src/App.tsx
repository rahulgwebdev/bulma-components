import React from 'react';
import logo from './logo.svg';
import './App.css';
import Element from './bulma/elements';
import Columns from './bulma/columns';

function App() {
  return (
    <div className="App">
        <Columns multiline>
          <Columns.Column>
            <div style={{
              backgroundColor: 'magenta',
              minHeight: '400px' 
            }}>
              ashknfcjhasvgdf
            </div>
          </Columns.Column>
          <Columns.Column>
          <div style={{
              backgroundColor: 'moccasin',
              minHeight: '400px' 
            }}>
              ashknfcjhasvgdf
            </div>
          </Columns.Column>

        </Columns>
    </div>
  );
}

export default App;
