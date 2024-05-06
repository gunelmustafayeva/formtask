import './Randomnum.css'


function Randomnum({state}){
    
        return (
            <div className='random'>
                <p>{state?.number}</p>
            </div>
        )
}



export default Randomnum