import './PageInitial.css'
import { useNavigate } from 'react-router-dom';

function PageInitial() {

  const navigate = useNavigate();

  const handleChange = () => {
    navigate("/site01")
  }
    
  return(
    <>
      <button type='button' title='button 01' onChange={handleChange} >Site 01</button>
    </>
  )
}

export default PageInitial;