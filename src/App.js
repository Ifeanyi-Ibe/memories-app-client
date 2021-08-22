import React, { useState, useEffect } from 'react';

import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Form from './components/Form/Form'
import Posts from './components/Posts/Posts'

import { getPosts } from './actions/posts'
 
import memories from './images/memories.png';

import { useDispatch } from 'react-redux';

import useStyles from './styles';

const App  = () => {
        const [currentId, setCurrentId] = useState(null);
        const styleClasses = useStyles();
         
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(getPosts());
        }, [ currentId, dispatch ]);

        return (
            <Container maxWidth="lg">
                <AppBar className={styleClasses.appBar} position="static" color="inherit">
                    <Typography className={styleClasses.heading} variant="h2" align="center">Memories</Typography>
                    <img src={memories} className={styleClasses.image} alt="Memorable Times" height="60" width={60} />
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid container className={styleClasses.mainContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={7}>
                                <Posts setCurrentId={setCurrentId} />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Form currentId={currentId} setCurrentId={setCurrentId } />
                            </Grid> 
                         </Grid>
                    </Container> 
                </Grow>
            </Container>
        );    
}

export default App;