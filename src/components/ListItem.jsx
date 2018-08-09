import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {List} from 'antd-mobile';
import '../custom.css';

const ListItem = props => {
    return (
        <div style={{padding: '10px'}}>
            {props.data.map(datum => {
                return (
                    <Grid container spacing={8} alignItems="center">
                        <Grid item xs={3}>
                            <img src={datum.image} alt="" />
                        </Grid>
                        <Grid item xs={9}>
                            <Typography variant="body1">
                                {datum.title}
                            </Typography>
                            <Typography variant="caption" color="#E0E0E0">
                                {datum.zone}
                            </Typography>
                            <Typography variant="caption" color="#E0E0E0">
                                30
                            </Typography>
                        </Grid>
                    </Grid>
                );
            })}
        </div>
    );
};

export default ListItem;
