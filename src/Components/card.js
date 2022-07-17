export default function Card(props){
    return (
        <div className="card">
            <img src={`../images/${props.img}`} alt="log-image"/>
            <p className='text-card'>
                {props.text}
            </p>
        </div>
    )
}
