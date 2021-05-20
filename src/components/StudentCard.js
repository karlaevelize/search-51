import "./StudentCard.css"

export default function StudentCard(props){

  return(
    <div className="container">
      <div className="card">
        <img src={props.img} alt={props.firsName}/>
        <p><b>{props.firstName} {props.lastName}</b> - {props.house}</p>   
      </div>
    </div>
  )
}