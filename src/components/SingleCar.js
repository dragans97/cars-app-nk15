function SingleCar({
    id,
    brand,
    model,
    year,
    maxSpeed,
    isAutomatic,
    engine,
    numberOfDoors
}) {
    return (
        <div class="col-lg-4 col-sm-12">
            <h2>{brand} - {model} ({year})</h2>
            <p>Max speed: {maxSpeed} km/h</p>
            <p>Gearbox: {isAutomatic ? 'Automatic' : 'Manual'}</p>
            <p>Engine: {engine}</p>
            <p>Number of doors: {numberOfDoors}</p>
        </div>
    );
}

export default SingleCar;