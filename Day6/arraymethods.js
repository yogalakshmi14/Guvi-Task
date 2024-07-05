
// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
// Get all the countries from Asia continent /region using Filter method
// Get all the countries with a population of less than 2 lakhs using Filter method
// Print the following details name, capital, flag, using forEach method
// Print the total population of countries using reduce method
// Print the country that uses US dollars as currency.

const axios = require('axios');

const countriesAPI = "https://restcountries.com/v3.1/all";

axios.get(countriesAPI)
  .then(response => {
    const countries = response.data;

    // 1. Get all the countries from Asia continent /region using Filter method
    const asianCountries = countries.filter(country => country.region === 'Asia');
    console.log('Asian Countries:', asianCountries);

    // 2. Get all the countries with a population of less than 2 lakhs using Filter method
    const smallPopulationCountries = countries.filter(country => country.population < 200000);
    console.log('Countries with population less than 2 lakhs:', smallPopulationCountries);

    // 3. Print the following details name, capital, flag, using forEach method
    countries.forEach(country => {
      console.log(`Name: ${country.name.common}, Capital: ${country.capital ? country.capital[0] : 'N/A'}, Flag: ${country.flags.svg}`);
    });

    // 4. Print the total population of countries using reduce method
    const totalPopulation = countries.reduce((sum, country) => sum + country.population, 0);
    console.log('Total Population:', totalPopulation);

    // 5. Print the country that uses US dollars as currency
    const usdCountries = countries.filter(country => {
      if (country.currencies) {
        return Object.keys(country.currencies).includes('USD');
      }
      return false;
    });
    console.log('Countries using US Dollars:', usdCountries);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
