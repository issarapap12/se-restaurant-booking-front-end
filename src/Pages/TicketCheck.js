import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import classes from '../Components/styles/Ticket.module.css';
import swal from 'sweetalert';
import axios from 'axios';
import Ticket from '../Components/Ticket'
const TicketCheck = () => {

    const [ticketId,SetTicketId] = useState('')
    const [TicketDetail,SetTicketDetail] = useState({})

    const onChangeTicketId = (e) => {
        SetTicketId(e.target.value)
    }

    const SubmitHandler = (e) => {
        e.preventDefault();

        console.log(ticketId)

        if(isTicketId(ticketId) === null || ticketId.length !== 4){
            swal("เลขที่นั่งไม่ถูกต้อง","","error")
        }else{
            axios.get(`http://localhost:8071/getTicket/${ticketId}`)
            .then((doc) => {
                if(doc.data) {
                    SetTicketDetail(doc.data)
                }else{
                    swal("ไม่พบเลขที่นั่งในระบบ","","error")
                }
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

    const isTicketId =(Id) => {
        const regex = /\d{4}/;
        const found = Id.match(regex)
        return found
    }


    return (
        <Grid container spacing={3}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <div className={classes.inputField}>
                        <h1>Ticket Check</h1>
                        <br/>
                        <form onSubmit={(e) => SubmitHandler(e)}>
                        <TextField 
                            id="outlined-basic"  
                            variant="outlined"
                            name="TicketId"
                            value={ticketId}
                            onChange={ (e) => onChangeTicketId(e)}
                            
                            />
                        <br/>
                        <br/>
                        <Button type="submit" variant="contained" color="primary">ยืนยัน</Button>
                        </form>
                    </div>
                    <br/>
                    <br/>
                    
                    { Object.keys(TicketDetail).length !== 0 ? <Ticket 
                                        name={TicketDetail.name} 
                                        tel={TicketDetail.tel}
                                        time={TicketDetail.time}
                                        location={TicketDetail.location}
                                        seat={TicketDetail.seat}
                                        date={TicketDetail.date}
                                        TicketId={TicketDetail.id} /> : null}
                    
                </Grid>
            </Grid>
        </Grid>
    )
}

export default TicketCheck
