import { FormEvent } from 'react';
import './PageInitial.css'
import { useNavigate } from 'react-router-dom';

function PageInitial() {

  const navigate = useNavigate();

  const handleSubmit = (event:FormEvent) => {
    event.preventDefault();
    navigate("/site01")
  }
    
  return(
    <>
      <form onSubmit={handleSubmit}>
        <button title='button 01' >Site 01</button>
      </form>
    </>
  )
}

export default PageInitial;