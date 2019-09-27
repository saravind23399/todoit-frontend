import { createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: blue[500],
    },
  },
  typography: {
    fontFamily: ['"Product Sans"'],
  },
});

export default theme;
