import React from 'react';
import logo from './logo.svg';
import './App.css';
import Element from './bulma/elements';
import Columns from './bulma/columns';
import Button from './bulma/button';

function App() {
  return (
    <div className="App">
        <Columns multiline desktop={{gap:0}}>
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
              <Button color='success' mb={3}>
                My button
              </Button>
            </div>
          </Columns.Column>

        </Columns>
    </div>
  );
}

export default App;
