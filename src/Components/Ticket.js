import React from 'react'
import classes from './styles/Ticket.module.css'

const Ticket = (props) => {
    return (
        <div className={classes.card}>
            <div className={classes.cardImage}>
                <img className={classes.cardImageimg} src="https://i.ibb.co/sJXZDWG/sushi-1.jpg" />
                <div className={classes.ticketDetail}>
                    <h2>เลขที่นั่ง: {props.TicketId}</h2>
                    <p>ชื่อ : {props.name}</p>
                    <p>เบอร์โทร : {props.tel}</p>
                    <p>สาขา : {props.location}</p>
                    <p>รอบเวลา: {props.time}</p>
                    <p>จำนวนที่นั่ง: {props.seat}</p>
                    <p>วันที่จอง : {props.date}</p>
                </div>
            </div>
        </div>
    )
}

export default Ticket
