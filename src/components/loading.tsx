import React from 'react'
import ReactLoading from 'react-loading'
import '../App.css'

export default function Loading(){

    return(
        <div className='loading-center'>
            <ReactLoading type={'bars'} color={'white'}/> 
            <h6>Loading ...</h6>
        </div>
    )
}