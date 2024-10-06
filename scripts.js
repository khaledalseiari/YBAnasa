document.addEventListener('DOMContentLoaded', () => {
    // OCO-2 CO₂ Concentrations (2015-2022)
    const oco2Ctx = document.getElementById('oco2Chart').getContext('2d');
    const oco2Chart = new Chart(oco2Ctx, {
        type: 'line',
        data: {
            labels: ['1960', '1965', '1970', '1975', '1980', '1985', '1990', '1995', '2000', '2005', '2010', '2015', '2020', '2025'], // X-axis labels (years)
            datasets: [{
                label: 'CO₂ Concentration (ppm)',
                data: [316.9, 320.0, 325.7, 330.5, 338.9, 346.1, 354.3, 360.0, 370.6, 379.8, 390.8, 400.8, 415.0, 416.5, 426], // CO₂ levels from 1960 to projected 2025
                borderColor: 'rgba(255, 99, 132, 1)',
                fill: false
            }]
        },
        
        options: {
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        color: 'white' // Change y-axis ticks color to white
                    },
                    grid: {
                        color: 'white' // Change y-axis grid lines color to white
                    }
                },
                x: {
                    ticks: {
                        color: 'white' // Change x-axis ticks color to white
                    },
                    grid: {
                        color: 'white' // Change x-axis grid lines color to white
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'white' // Change legend text color to white
                    }
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
                    beginAtZero: true,
                    ticks: {
                        color: 'white' // Change y-axis ticks color to white
                    },
                    grid: {
                        color: 'white' // Change y-axis grid lines color to white
                    }
                },
                x: {
                    ticks: {
                        color: 'white' // Change x-axis ticks color to white
                    },
                    grid: {
                        color: 'white' // Change x-axis grid lines color to white
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'white' // Change legend text color to white
                    }
                }
            }
        }
    });

    // Wetland Methane Emissions (1990-present)
    const wetlandCtx = document.getElementById('wetlandChart').getContext('2d');
    const wetlandChart = new Chart(wetlandCtx, {
        type: 'line',
        data: {
            labels: ['1985', '1987', '1990', '1992', '1995', '1997', '2000', '2002', '2005', '2007', '2010', '2012', '2015', '2017', '2020'], // X-axis labels (years)
            datasets: [{
                label: 'Methane Emissions (CH₄ Mole Fraction in parts per billion)',
                data: [1640, 1660, 1700, 1720, 1750, 1770, 1790, 1800, 1820, 1830, 1850, 1865, 1880, 1890, 1900], // Estimated data points for methane emissions (ppb)
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false
            }]
        },
        
        
        options: {
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        color: 'white' // Change y-axis ticks color to white
                    },
                    grid: {
                        color: 'white' // Change y-axis grid lines color to white
                    }
                },
                x: {
                    ticks: {
                        color: 'white' // Change x-axis ticks color to white
                    },
                    grid: {
                        color: 'white' // Change x-axis grid lines color to white
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'white' // Change legend text color to white
                    }
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
