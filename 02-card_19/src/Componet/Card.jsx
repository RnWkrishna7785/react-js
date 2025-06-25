const Card = (props) => {
    return (

        <div className="col-4">
            <div className="card-item">
                <h1>{props.item.id}</h1>
                <div className="card-img">
                    <img src={props.item.image} alt="" />
                </div>

                <h1>{props.item.name}</h1>
                <h1>{props.item.role}</h1>
                <h1>{props.item.email}</h1>



            </div>

        </div>
    );
};


export default Card;

