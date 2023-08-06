function ListGroup() {
    const items = ["India", "Australia", "USA", "UAE", "Germany"]

    return (
        <div>
            <h1>List Group</h1>
            <ul className="list-group">
                {items.map((item, index) => <li className="list-group-item" key={item}
                onClick={(event) =>
                    console.log(event + "Clicked " + item + " " + index)}>{item}</li>)}
            </ul>
        </div>
    )
}

export default ListGroup