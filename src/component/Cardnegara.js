import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import '../style/Isi.css'

const Asean = () => {
  const url = "https://mocki.io/v1/82fa43ad-ecae-4932-aacf-8d1ccdafbe29";
  const [ASEAN_Countries, setAsean] = useState([]);

  const getDataasean = async () => {
    try {
      const response = await fetch(url);
      const dataasean = await response.json();
      setAsean(dataasean.ASEAN_Countries); // pastikan ini sesuai dengan struktur data JSON Anda
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  useEffect(() => {
    getDataasean();
  }, []); // Tambahkan array kosong agar useEffect hanya dijalankan sekali

  return (
    <div className='container'>
      <div className='row'>
        <h1 className='isi'>ASEAN COUNTRIES</h1>
        {ASEAN_Countries.map((Asean, index) => (
          <div style={{display:'flex', padding: '1rem', justifyContent:'center', textAlign:'center'}} className="col-7 col-sm-6 col-md-5 col-lg-4 col-xl-3 d-flex justify-content-center mb-4" key={index}>
            <CardNegara
              name={Asean.name}
              flag_image={Asean.flag_image}
              history={Asean.history}
            />
          </div>
        ))}
      </div>
      <div className='backbut'>
      <Button as={Link} to="/" className='submit2' variant='outline-none'>Kembali</Button>
      </div>
    </div>
  );
};

function CardNegara(props) {
  return (
    <div>
    <Card className='card'>
      <Card.Img variant="top" src={props.flag_image} className='imgcard'/>
      <Card.Body>
        <Card.Title className='name'>{props.name}</Card.Title>
        <Card.Text className='desc'>{props.history}</Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Asean;
