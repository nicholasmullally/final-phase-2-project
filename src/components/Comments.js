import React, { useState, useEffect } from 'react'

function Comments() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [comment, setComment] = useState("")
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState({})

    useEffect(() => {
        getComments()
    }, [newComment])

    const getComments = () => {
        fetch("http://localhost:5000/comments")
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setComments(data)
            })
            .catch((error) => { console.log(error.message) })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch("http://localhost:5000/comments", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, body: comment })
        })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
               setNewComment(data)
            })
            .catch((error) => { console.log(error.message) })
    }

    return (
        <div >
            <h4><u>Comments</u></h4>
            <div className='comments'>
                {
                    comments.map((comment) => {
                        return (
                            <div key={comment.id} className="comment">
                                <p>Name: {comment.name}</p>
                                <p>{comment.body}</p>
                            </div>
                        )
                    })
                }
            </div>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Comment: </label>
                    <textarea value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                </div>
                <div>
                    <input type="submit" className='submit'/>
                </div>
            </form>

        </div>
    )
}

export default Comments