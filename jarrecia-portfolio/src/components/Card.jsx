function Card() {
    return (
        <div style={
            {
                border: "1px solid black",
                width: "200px",
                height: "200px",
                padding: "10px",
                borderRadius: "10px",
                padding:"16px",
                maxWidth:"300px",
                margin:"16px",
                boxShadow:"0 4px 8px rgba(0,0,0,0.1)",
                transition:"box-shadow 0.3s ease-in-out",

            }

        }>

            <h2>{props.nameProps}</h2>
            <p>{prop.descriptionProps}</p>
            <img style={{
                height:"100px"
                
            }}
            src="https://thumbs.dreamstime.com/b/beautiful-pink-ocean-sparkling-water-bright-sun-background-filled-glitter-creating-mesmerizing-dreamy-360046868.jpg"/>
        </div>
    )
}
export default Card; 