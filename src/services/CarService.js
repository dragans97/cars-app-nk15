import axios from 'axios';

class CarService { 

    constructor(){
        // postavljamo url do servera
        this.client = axios.create({
            baseUrl: 'http://localhost:3000/api',
        });
    }

    async getAll(){
        // probamo da dobavimo podatke sa server
        try { 
            const { data } = await this.client.get('cars');
            return data;
        } catch(error){
            // ako ne uspe daj nam error zasto
            console.log(error);
        }
        // ako nema nista na serveru vrati prazan niz
        return [];
    }

}

export default new CarService();