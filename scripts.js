document.addEventListener('DOMContentLoaded', () => {
    // OCO-2 CO₂ Concentrations (2015-2022)
    const oco2Ctx = document.getElementById('oco2Chart').getContext('2d');
    const oco2Chart = new Chart(oco2Ctx, {
        type: 'line',
        data: {
            labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'], // X-axis labels (years)
            datasets: [{
                label: 'CO₂ Concentration (ppm)',
                data: [399.8, 402.1, 404.5, 407.2, 409.5, 411.8, 414.0, 416.5], // Sample data for CO₂ levels (ppm)
                borderColor: 'rgba(255, 99, 132, 1)',
                fill: false
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });

    // MiCASA Carbon Flux (NPP, Rh, FIRE, FUEL, NEE, NBE)
    const micasaCtx = document.getElementById('micasaChart').getContext('2d');
    const micasaChart = new Chart(micasaCtx, {
        type: 'bar',
        data: {
            labels: ['NPP', 'Rh', 'FIRE', 'FUEL', 'NEE', 'NBE'], // Carbon flux parameters
            datasets: [{
                label: 'Carbon Flux (gC/m²/day)',
                data: [3.5, 2.1, 0.8, 0.3, 1.1, 1.5],
                backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0', '#9966ff', '#ff9f40']
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Wetland Methane Emissions (1990-present)
    const wetlandCtx = document.getElementById('wetlandChart').getContext('2d');
    const wetlandChart = new Chart(wetlandCtx, {
        type: 'line',
        data: {
            labels: ['1990', '1995', '2000', '2005', '2010', '2015', '2020'], // X-axis labels (years)
            datasets: [{
                label: 'Methane Emissions (Tg CH₄)',
                data: [180, 185, 190, 195, 200, 205, 210], // Sample data for methane emissions in teragrams (Tg)
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });

   
    const map = L.map('map').setView([20, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    const locations = [
        {
            name: "Los Angeles, USA",
            coords: [34.0522, -118.2437],
            info: "Known for high urban CO₂ emissions."
        },
        {
            name: "Beijing, China",
            coords: [39.9042, 116.4074],
            info: "Major industrial city with significant emissions."
        },
        {
            name: "Mumbai, India",
            coords: [19.0760, 72.8777],
            info: "Rapidly urbanizing city contributing to greenhouse gases."
        }
    ];

    locations.forEach(location => {
        const marker = L.marker(location.coords).addTo(map);
        marker.bindPopup(`<strong>${location.name}</strong><br>${location.info}`);
    });


});
