import React from 'react'
import { Card, Button, Fade } from 'react-bootstrap'

export default function QouteBox({ Currqoute, open, ManageQoutes, ManageFade }) {
    return (
        <section id="quote-box">
            <Card className="Card">
                <Card.Body>
                    <Fade in={open}><Card.Title id='text' className='text-white'>{Currqoute && Currqoute.q}</Card.Title></Fade>
                    <Fade in={open}><Card.Subtitle className="mb-2 text-white" id='author'>- {Currqoute && Currqoute.a}</Card.Subtitle></Fade>
                    <nav className='button-group'>
                        {Currqoute.error
                            ?
                            <Button variant="btn btn-primary" id="new-quote" className='mb-2 text-white' onClick={() => { setTimeout(ManageQoutes, 700); ManageFade() }} aria-controls="text author" aria-expanded={open} role="button" disabled>No qoute available</Button>
                            :
                            <Button variant="btn btn-primary" id="new-quote" className='mb-2 text-white' onClick={() => { setTimeout(ManageQoutes, 700); ManageFade() }} aria-controls="text author" aria-expanded={open} role="button">Next qoute</Button>
                        }
                        <Button variant="btn btn-secondary" href={`https://twitter.com/intent/tweet?text=${Currqoute && Currqoute.q} %0A%0A- ${Currqoute && Currqoute.a}`} id="tweet-quote" className='mb-2 text-white' target='blank' role="button">Tweet current qoute!</Button>
                    </nav>
                </Card.Body>
            </Card>
        </section>
    )
}