import React from 'react'
import Layout from './Layouts/main'
import Routes from './routes/index'
import {BrowserRouter as Router} from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MUIThemeProvider, StylesProvider } from '@material-ui/core/styles'
import {NewUiTheme} from './styles/theme.style'
import {GlobalStyles} from './styles/GlobalStyles'

const App: React.FC = props => {
  return (
    <StylesProvider injectFirst>
      <MUIThemeProvider theme={NewUiTheme}>
          <ThemeProvider theme={NewUiTheme}>
              <GlobalStyles />
              <Router>
                  <Layout {...props}>
                    <Routes />
                  </Layout>
              </Router>
            </ThemeProvider>
          </MUIThemeProvider>
      </StylesProvider>
  );
}

export default App;

