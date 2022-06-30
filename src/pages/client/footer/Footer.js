import { Avatar, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

import storeIcon from 'assets/icons/storeIcon.png';
import product5 from 'assets/images/product23.png';
import product4 from 'assets/images/product24.png';
import product3 from 'assets/images/product25.png';
import product2 from 'assets/images/product26.png';
import product1 from 'assets/images/product27.png';
import ItemProductRecomend from 'components/ItemProductRecommend';
import MenuComponent from 'components/MenuComponent';

const useStyles = makeStyles(() => ({
  container: {
    background: 'white',
    marginTop: 20,
    padding: '0px 20px 20px 20px',
  },
  branch: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
  },
  branchName: {
    fontSize: 17,
    fontWeight: 400,
    color: 'black',
    fontFamily: 'Orbitron',
    marginLeft: 10,
  },
  textFooter: {
    fontSize: 14,
    fontFamily: 'Lato',
    color: '#686868',
  },
  subTitle: {
    fontSize: 15,
    fontFamily: 'Lato',
    color: 'black',
    fontWeight: 500,
    marginBottom: 10,
  },
  recommendProducts: {
    width: '70%',
  },
}))

const footerMenuData = [
  {
    id: 1,
    label: 'Privicy Policy',
    link: '/privicy-policy',
    subMenu: [],
  },
  {
    id: 2,
    label: 'Refund Policy',
    link: '/refund-policy',
    subMenu: [],
  },
  {
    id: 3,
    label: 'Term & Conditions',
    link: '/term-and-conditions',
    subMenu: [],
  },
];

const popularData = [
  {
    id: 1,
    name: 'Suspendisse gravida lacus varius',
    link: '/',
    image: product1,
    oldPrice: 12.01,
    newPrice: 9.99,
  },
  {
    id: 2,
    name: 'Aliquam erat volutpat',
    link: '/',
    image: product2,
    oldPrice: null,
    newPrice: 200.99,
  },
  {
    id: 3,
    name: 'In fringilla felis non nulla porta rutrum',
    link: '/',
    image: product3,
    oldPrice: 12.01,
    newPrice: 9.99,
  },
  {
    id: 4,
    name: 'Suspendisse volutpat massa',
    link: '/',
    image: product4,
    oldPrice: 12.01,
    newPrice: 9.99,
  },
  {
    id: 5,
    name: 'Microsoft Surface Laptop 3',
    link: '/',
    image: product5,
    oldPrice: null,
    newPrice: 500.99,
  },
];

function Footer({ location }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container>
        <Grid
          container
          item
          xs={12}
          justifyContent="center"
          style={{ borderBottom: 'solid 0.5px #d5d3d3', marginBottom: 20 }}
        >
          <MenuComponent data={footerMenuData} location={location} />
        </Grid>

        <Grid container item xs={12}>
          {/* 1/2 footer1 */}
          <Grid container item xs={12} sm={6} md={6} lg={6} spacing={2}>
            {/* 1/4 footer */}
            <Grid container item xs={12}>
              {/* 1/8 footer */}
              <Grid container item xs={12} sm={6} md={6} lg={6}>
                <Grid item xs={12} className={classes.branch}>
                  <Avatar variant='square' src={storeIcon}></Avatar>
                  <Typography className={classes.branchName}> Tech Store </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.textFooter}>
                    Nullam porttitor pharetra ullamcorper. Praesent varius erat vitae nibh. Suspendisse consectetur ipsum augue, a varius enim tempus a. Phasellus id nibh arcu.
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item xs={12} sm={6} md={6} lg={6}>
                <Grid item xs={12}>
                  <Typography className={classes.subTitle}>
                    End Points
                  </Typography>
                  <Typography className={classes.textFooter}>Orders</Typography>
                  <Typography className={classes.textFooter}>Addresses</Typography>
                  <Typography className={classes.textFooter}>Downloads</Typography>
                  <Typography className={classes.textFooter}>Account details</Typography>
                  <Typography className={classes.textFooter}>Lost Password</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid container item xs={12} spacing={2}>
              {/* 1/8 footer */}
              <Grid container item xs={12} sm={6} md={6} lg={6}>
                <Grid item xs={12}>
                  <Typography className={classes.subTitle}>
                    Connect With Us
                  </Typography>
                  <Typography className={classes.textFooter}>Facebook</Typography>
                  <Typography className={classes.textFooter}>Twitter</Typography>
                  <Typography className={classes.textFooter}>Instagram</Typography>
                  <Typography className={classes.textFooter}>Whatsapp</Typography>
                </Grid>
              </Grid>
              <Grid container item xs={12} sm={6} md={6} lg={6}>
                <Grid item xs={12}>
                  <Typography className={classes.subTitle}>
                    More About Store
                  </Typography>
                  <Typography className={classes.textFooter}>Multiple Branches</Typography>
                  <Typography className={classes.textFooter}>Take Franchise</Typography>
                  <Typography className={classes.textFooter}>Scheduled Offers</Typography>
                  <Typography className={classes.textFooter}>More Links</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container item xs={12} sm={6} md={6} lg={6}>
            {/* 1/4 footer */}
            <Grid container item xs={12} sm={6} md={6} lg={6}>
              {/* 1/8 footer */}
              <div className={classes.recommendProducts}>
                <Typography className={classes.subTitle}> Products</Typography>
                {
                  popularData.map(item => (
                    <ItemProductRecomend item={item} myClass="products" key={item.id}/>
                  ))
                }
              </div>
            </Grid>
            <Grid container item xs={12} sm={6} md={6} lg={6} spacing={2}>
              {/* 1/8 footer */}
              <Grid container item xs={12}>
                <Grid item xs={12}>
                  <Typography className={classes.subTitle}>
                    Contact Details
                  </Typography>
                  <Typography className={classes.textFooter}>
                    Address: 3548 Columbia Mine Road,
                  </Typography>
                  <Typography className={classes.textFooter}>Wheeling, West Virginia,</Typography>
                  <Typography className={classes.textFooter}>26003</Typography>
                  <Typography className={classes.textFooter}>Contact : 304-559-3023</Typography>
                  <Typography className={classes.textFooter}>304-650-2694</Typography>
                  <Typography className={classes.textFooter}>E-mail : shopnow@store.com</Typography>
                  <Typography className={classes.textFooter}>contact@top.com</Typography>
                </Grid>
              </Grid>
              <Grid container item xs={12}>
              <Grid item xs={12}>
                  <Typography className={classes.subTitle}>
                    Offline Stores
                  </Typography>
                  <Typography className={classes.textFooter}>
                    Address: 3548 Columbia Mine Road,
                  </Typography>
                  <Typography className={classes.textFooter}>Delhi</Typography>
                  <Typography className={classes.textFooter}>Chandigarh</Typography>
                  <Typography className={classes.textFooter}>Indore</Typography>
                  <Typography className={classes.textFooter}>Ahmedabad</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

        </Grid>

        <Grid 
          container item xs={12}
          justifyContent="center"
          alignItems="center"
          style={{
            borderTop: 'solid 0.5px #d5d3d3',
            paddingTop: 20,
            marginTop: 10,
          }}
        >
          <Typography className={classes.textFooter}>© 2022 Top Store Designed by Themehunk, Clone by Cops</Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer;