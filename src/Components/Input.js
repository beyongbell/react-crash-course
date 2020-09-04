import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Input({ addPost }) {
    const [input, setInput] = useState('');
    return (
        <div className="Input">
            <div className="Input__header"> Create Post </div>
            <input className="Input__field" type="text" value={input}/>
        </div>
    )
}

Input.propTypes = {
    addPost: PropTypes.func.isRequired
}
