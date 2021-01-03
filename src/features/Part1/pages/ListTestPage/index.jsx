import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const cards = [
    {
        id: 0,
        name: "In the office 2",
        mota: "Học viên luyện tập Part 1 Photographs với chủ đề In the office 2",
        img:"https://noidung.tienganh123.com/file/luyen-thi-toeic//part1%20practice/images.jpg",
    },
    {
        id: 1,
        name: "In The Room",
        mota: "Học viên luyện tập Part 1 - Photographs với chủ đề At a restauran",
        img:"https://noidung.tienganh123.com/file/luyen-thi-toeic//part1%20practice/at%20a-%20restaurant.jpg",
        
    },
    {
        id: 2,
        name: "At The Bus Top",
        mota: "Học viên luyện tập Part 1 - Photographs với chủ đề At the bus stop",
        img:"https://noidung.tienganh123.com/file/luyen-thi-toeic//part1%20practice/at-the%20bus%20stop.JPG",
    },        
    {
        id: 3,
        name: "Outdoor Activies",
        mota: "Học viên luyện nghe part 1 - Photographs với chủ đề Outdoor activities",
        img:"https://noidung.tienganh123.com/file/luyen-thi-toeic//part1%20practice/outdoor%202.jpg",
    },
    {
        id: 3,
        name: "Communications",
        mota: "Học viên luyện nghe part 1 - Photographs với chủ đề Communications",
        img:"https://noidung.tienganh123.com/file/luyen-thi-toeic//part1%20practice/communication%202.jpg",
    },
    {
        id: 3,
        name: "On The Street",
        mota: "Học viên luyện nghe part 1 - Photographs với chủ đề On the street ",
        img:"https://noidung.tienganh123.com/file/luyen-thi-toeic//part1%20practice/On%20the%20street%202.jpg",
    }
];


function ListTestPage(props) {
    const classes = useStyles();
    return (
        <div className="container">
            <React.Fragment>
                <CssBaseline />
                {/*  */}
                <main>
                    {/* Hero unit */}
                    <div className={classes.heroContent}>
                        <Container maxWidth="sm">
                            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                               Toiec - Part 1 
              </Typography>

                            <div className={classes.heroButtons}>
                                <Grid container spacing={2} justify="center">
                                    <Grid item>
                                        <Button variant="contained" color="primary">
                                            
                    </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="outlined" color="primary">
                                            
                    </Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </Container>
                    </div>
                    <Container className={classes.cardGrid} maxWidth="md">
                        {/* End hero unit */}
                        <Grid container spacing={4}>
                            {cards.map((card) => (
                                <Grid item key={card} xs={12} sm={6} md={4}>
                                    <Card className={classes.card}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image={card.img}
                                            title="Image title"
                                        />
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                               {card.name}
                                            </Typography>

                                            <Typography>
                                               {card.mota}
                                             </Typography>

                                        </CardContent>

                                        <CardActions>
                                            <Link to="part1/1" >
                                                <Button size="small" color="primary">
                                                    Làm Bài Ngay
                                            </Button>
                                            </Link>


                                            <Button size="small" color="primary">
                                                Diểm
                                        </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </main>
                {/* Footer */}
                <footer className={classes.footer}>
                    <Typography variant="h6" align="center" gutterBottom>
                        Footer
          </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        Something here to give the footer a purpose!
          </Typography>

                </footer>
                {/* End footer */}
            </React.Fragment>
        </div>
    );
}

export default ListTestPage;