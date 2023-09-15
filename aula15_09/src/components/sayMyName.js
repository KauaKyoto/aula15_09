function SayMyName(props) {

    return(
        <div>
            <p> He'ya {props.name}, what's up? </p> 
            <p> My profission is {props.profission}. I love this profission </p> 
            <p> I'm {props.age} years old </p>
            <p> My dream is be a {props.dream} i'm confident =) </p>  
        </div>
    )

}
export default SayMyName