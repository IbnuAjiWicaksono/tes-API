import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../style/landingpage.css'

const HomePage = () => {
    return (        
    <div className='bg'>
    <h1 className='judul'>Get To Know</h1>
    <h2 className='subjudul'>ASEAN</h2>
    <p className='desc1'>Find out about ASEAN countries here and discover new knowledge</p>
    
    <div className='button'>
    <Button as={Link} to="/Cardnegara" className='submit' variant='outline-none'>Mulai</Button>
    </div>
    </div>   
    
)
}
export default HomePage
