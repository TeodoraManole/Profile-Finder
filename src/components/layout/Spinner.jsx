import loading from './assets/load3.gif'


function Spinner() {
    return (
        <div className='w-100 mt-20'>
            <img 
            className="text-center mx-auto"
            width={180}
            src={loading} 
            alt="Loading..." 
             
            />
        </div>
    )
}

export default Spinner
