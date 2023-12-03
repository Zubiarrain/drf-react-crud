import React from 'react'
import { useNavigate } from 'react-router-dom'

function TaskCard({id, title, description}) {
    const navigate = useNavigate()

    return (
        <div 
        className='bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer'
        onClick={() => {
            navigate('/tasks/'+id)
        }}
        > 
            <h1 className='font-bold uppercase'>{title}</h1>
            <p className='text-slate-400'>{description}</p>
        </div>
    )
}

export {TaskCard}
