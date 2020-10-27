import React from 'react'
import classes from './styles/home.module.css'
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
									<button className={classes.submitbtn} href =''>Book Now</button>
								</div>
								<div className={classes.formbtn}>
									<button className={classes.submitDbtn} href =''>Detail</button>
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
