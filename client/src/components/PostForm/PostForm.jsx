import React, { useState } from 'react'
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"

export default function PostForm() {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault()

    }
    return (

        <Form onSubmit={handleSubmit}>
            <Card.Title>Post Title</Card.Title>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Start adding to your community</Form.Label>
                <Form.Control placeholder="Title" value={title} onChange={(event) => { setTitle(event.target.value) }} />
                <Form.Control as="textarea" rows={3} placeholder="Body" value={body} onChange={(event) => (setBody(event.target.value))} />
            </Form.Group>
        </Form>


    )
}
