// Event listener for the form submission
        document.getElementById('searchForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevents the default form submission behavior

            // Get the value from the input field
            var countryName = document.getElementById('countryName').value;

            // Create a new XMLHttpRequest object for country information
            var xhrInfo = new XMLHttpRequest();

            // Define the URL for the Restcountries API request
            var urlInfo = "https://restcountries.com/v2/name/" + countryName;

            // Open the connection to the server with the specified method (GET), URL, and asynchronous flag (true)
            xhrInfo.open('GET', urlInfo, true);

            // Define the onload callback function to handle the response
            xhrInfo.onload = function() {
                // Parse the request into JSON
                var dataInfo = JSON.parse(this.response);

                // Display country information in the div
                displayCountryInfo(dataInfo);

                // Fetch and display the flag of the country
                fetchAndDisplayFlag(countryName);
            }

            // Send the request to the server asynchronously
            xhrInfo.send();
        });

        // Function to display country information in the div
        function displayCountryInfo(countryData) {
            var countryInfoDiv = document.getElementById('countryInfo');

            // Clear previous content
            countryInfoDiv.innerHTML = "";

            // Check if data is available
            if (countryData.length > 0) {
                var country = countryData[0];

                // Create HTML content for displaying country information
                var htmlContent = `
                    <h3>${country.name}</h3>
                    <p>Capital: ${country.capital}</p>
                    <p>Population: ${country.population}</p>
                    <p>Region: ${country.region}</p>
                    <p>Subregion: ${country.subregion}</p>
                    <p>Area: ${country.area} square kilometers</p>
                    <p>Languages: ${country.languages.map(lang => lang.name).join(', ')}</p>
                    <p>Currencies: ${country.currencies.map(currency => `${currency.name} (${currency.code})`).join(', ')}</p>
                    <p>Timezones: ${country.timezones.join(', ')}</p>
                    <p>Calling Codes: ${country.callingCodes.join(', ')}</p>
                    <p>Top Level Domain: ${country.topLevelDomain.join(', ')}</p>
                `;

                // Set the HTML content in the div
                countryInfoDiv.innerHTML = htmlContent;
            } else {
                // Display a message if no data is found
                countryInfoDiv.innerHTML = "<p>No information found for the entered country.</p>";
            }
        }

        // Function to fetch and display the flag of the country
        function fetchAndDisplayFlag(countryName) {
            // Create a new XMLHttpRequest object for flag
            var xhrFlag = new XMLHttpRequest();

            // Define the URL for the Restcountries API request for flag
            var urlFlag = "https://restcountries.com/v2/name/" + countryName;

            // Open the connection to the server with the specified method (GET), URL, and asynchronous flag (true)
            xhrFlag.open('GET', urlFlag, true);

            // Define the onload callback function to handle the response
            xhrFlag.onload = function() {
                // Parse the request into JSON
                var dataFlag = JSON.parse(this.response);

                // Display the flag in the flag container
                displayFlag(dataFlag);
            }

            // Send the request to the server asynchronously
            xhrFlag.send();
        }

        // Function to display the flag in the flag container
        function displayFlag(dataFlag) {
            var flagContainer = document.getElementById('flagContainer');

            // Clear previous content
            flagContainer.innerHTML = "";

            // Check if data is available
            if (dataFlag.length > 0 && dataFlag[0].flags) {
                var flagUrl = dataFlag[0].flags.svg;

                // Create HTML content for displaying the flag
                var htmlFlagContent = `<img src="${flagUrl}" alt="Flag of the country">`;

                // Set the HTML content in the flag container
                flagContainer.innerHTML = htmlFlagContent;
            } else {
                // Display a message if no flag data is found
                flagContainer.innerHTML = "<p>No flag information found for the entered country.</p>";
            }
        }
 
