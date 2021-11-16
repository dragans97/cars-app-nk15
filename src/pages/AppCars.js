import React, { useEffect, useState } from 'react';
import SingleCar from '../components/SingleCar';
import CarService from '../services/CarService';

function AppCars(){
    const [cars, setCars] = useState([]);

    useEffect(()=>{
        async function retrieveCars(){
            // preko servisa u datu stavimo sve podatke sa servera preko getAll metode
            const data = await CarService.getAll();
            //preko stejta postavimo sve podatke u nasu promenljivu cars pomocu setCars
            setCars(data);
        };
        retrieveCars();
    }, []);

    return (
        <div>
            <div class="row">
                <div class="col-12">
                    <h1>Cars</h1>
                </div>
                {/* preko .map izlistamo sve dobijene rezultate pomocu single car komponente */}
                { cars.map((car)=>{
                    <SingleCar 
                        key={car.id}
                        id={car.id}
                        brand={car.brand}
                        model={car.model}
                        year={car.year}
                        maxSpeed={car.maxSpeed}
                        isAutomatic={car.isAutomatic}
                        engine={car.engine}
                        numberOfDoors={car.numberOfDoors}
                    />
                }) }
            </div>
        </div>
    )
        
    
}

export default AppCars;

