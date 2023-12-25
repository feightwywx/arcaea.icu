import './App.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import LaunchIcon from '@mui/icons-material/Launch';
import { Link } from '@mui/material';
import React from 'react';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { blueGrey } from '@mui/material/colors';
import useMediaQuery from '@mui/material/useMediaQuery';

const styles = {
  whiteText: {
    color: '#FFF'
  }
}

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          primary: blueGrey,
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );
  
  const upSmall = useMediaQuery(theme.breakpoints.up('sm'))
  const upMiddle = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <header className="App-header">
          <ButtonAppBar />
        </header>
        <Box sx={{ mx: upMiddle ? 8 : 0, pt: upMiddle ? '200px' : '100px' }}>
          <Typography align={upMiddle ? 'left' : 'center'} variant={upSmall ? 'h1' : 'h2'} style={styles.whiteText}>
            arcaea.icu
          </Typography>
          <Typography align={upMiddle ? 'left' : 'center'} variant='h6' style={styles.whiteText}>
            .direwolf 的 Arcaea 相关堆放站
          </Typography>
          <Typography align={upMiddle ? 'left' : 'center'} variant='h6' style={styles.whiteText}>
            交流群：477499123
          </Typography>
        </Box>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ xs: 'center', md: 'flex-start' }}
          alignItems={{ xs: 'strench', md: 'flex-start' }}
          spacing={2}
          sx={{ mx: upSmall ? 8 : 4, mt: 8, pb: 8 }}
        >
          <ProjectCard
            title='arcfutil'
            content='为处理Arcaea相关文件（谱面，songlist等）设计的Python模块。'
            buttonText='开发文档'
            buttonLink='https://docs.arcaea.icu/'
            upMiddle={upMiddle}
          />
          <ProjectCard
            title='AFF工具箱'
            content='一个基于Web的便利的Arcaea谱面段落图形化生成工具。'
            buttonText='现在使用'
            buttonLink='https://aff.arcaea.icu/'
            upMiddle={upMiddle}
          />
          <ProjectCard
            title='封面生成工具'
            content='用于生成Arcaea自制视频封面的一个小工具。'
            buttonText='现在使用'
            upMiddle={upMiddle}
            buttonLink='https://cover.arcaea.icu/'
          />
        </Stack>
        <Box sx={{ mx: upMiddle ? 8 : 0, pt: upMiddle ? 8 : 2, pb: 8 }}>
          <Typography align={upMiddle ? 'left' : 'center'} variant='subtitle2' style={styles.whiteText}>
            Copyright © .direwolf 2024.
          </Typography>
          <Typography align={upMiddle ? 'left' : 'center'} variant='subtitle2' style={styles.whiteText}>
            Background image is stolen from lowiro.
          </Typography>
        </Box>
      </ThemeProvider>
    </div >
  );
}

function ProjectCard(props: { title: string, content: string, buttonText: string, upMiddle: boolean, buttonLink?: string, buttonDisabled?: boolean }) {
  return (
    <Card sx={props.upMiddle ? { height: 185, width: 300 } : { minHeight: 185 }}>
      <CardContent>
        <Typography variant='h5' component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
          {props.content}
        </Typography>
      </CardContent>
      <CardActions sx={{ mt: props.upMiddle ? 1 : 3, pl: 2 }}>
        <Button variant='outlined' disabled={props.buttonDisabled ? true : false} href={props.buttonLink}>{props.buttonText}</Button>
      </CardActions>
    </Card>
  )
}

function ButtonAppBar() {
  return (
    <AppBar color='transparent' position="static" sx={{ boxShadow: 0 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={styles.whiteText}>
          arcaea.icu
        </Typography>
        <Button
          variant="text"
          color="inherit"
          href="https://drwf.ink"
          startIcon={<LaunchIcon />}
          style={styles.whiteText}>drwf.ink</Button>
      </Toolbar>
    </AppBar>
  );
}

export default App;
