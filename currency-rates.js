async function getCurrencyPairInfo() {
            // Get currency pair symbols from user input
            var currency1 = document.getElementById('currency1').value;
            var currency2 = document.getElementById('currency2').value;

            // Check if both input boxes are filled
            if (!currency1 || !currency2) {
                alert('Please enter both currency codes.');
                return;
            }

            const url = `https://currency-exchange.p.rapidapi.com/exchange?q=1&from=${currency1}&to=${currency2}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '3ae636fe26mshc2f8359d260fc59p1cd1d8jsn27515a485dec',
                    'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();

                // Update the content of the "currencyPairs" div
                document.getElementById('currencyPairs').innerHTML = `
                    <h2>Exchange Rate</h2>
                    <p>1 ${currency1} = ${result} ${currency2}</p>
                `;
            } catch (error) {
                console.error('Error fetching currency pair info:', error);
                document.getElementById('currencyPairs').innerHTML = '<p>Error fetching currency pair info. Please try again.</p>';
            }
        }
