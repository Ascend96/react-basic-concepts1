import axios from "axios";

class CountryService {
    /**
     * Gets all countries
     */
    static async getAllCountries() {
        return axios.get(`https://mmartens-medals-api-v1.azurewebsites.net/api/country/get-all-countries`,
        );
    }

    /**
     * Returns a specific country based on the id
     * @param countryId The id of a country to return
     */
    static async getCountry(countryId: number){
        return axios.get(`https://mmartens-medals-api-v1.azurewebsites.net/api/country/get-country/${countryId}`
        );
    }

    /**
     * Adds a country to the application
     * @param country A country object to add
     */
    static async addCountry(country: object) {
        return axios.post(`https://mmartens-medals-api-v1.azurewebsites.net/api/country/add-country`, country);
    }

    /**
     * Deletes a country from the application
     * @param countryId The id of a country to remove
     */
    static async deleteCountry(countryId: number) {
        return axios.delete(`https://mmartens-medals-api-v1.azurewebsites.net/api/country/delete/${countryId}`)
    }
}

export default CountryService;