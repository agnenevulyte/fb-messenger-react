import React from 'react'

export default function Avatar({ user, size = "medium" }) {
    return (
        <img
            className={`avatar ${size}`}
            src={`images/${user.username}_lg.jpg`}
            alt={`${user.username}`}
        />
    )
}
