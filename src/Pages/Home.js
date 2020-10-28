import React from 'react'
import classes from './styles/home.module.css'
import { MenuItem } from '@material-ui/core';
import Link from 'react-router-dom/Link';
const Home = () => {
    return (
        
		<div  className={classes.section}>
			<div className="center">
				<div className="container">
					<div className="row">
						<div className={classes.bookingform}>
							<div className={classes.booking1bg}></div>
							<form>
								<div className={classes.formheader}>
									<h2>Sushikung</h2>
								</div>
								<div className={classes.formbtn}>
									<Link to="/Booking"><button className={classes.submitbtn} >จองที่นั่ง</button></Link>
								</div>
								<div className={classes.formbtn}>
									<Link to="/TicketChecking"><button className={classes.submitDbtn} >ตรวจสอบรายละเอียดการจอง</button></Link>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	
    )
}

export default Home
