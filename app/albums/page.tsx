import React from 'react';

const Albums = () => [
    {
        name: "Ronaldo", 
        age: 37, 
        teams: ["Madrid", "United"], 
        address: "Lisbon, Portugal", 
        price: 100
    },
    {
        name: "Salah", 
        age: 30, 
        teams: ["Roma", "Liverpool"], 
        address: "Nagrig, Egypt", 
        price: 90
    },
    {
        name: "Haaland", 
        age: 22, 
        teams: ["Dortmund", "City"], 
        address: "Leeds, England", 
        price: 150
    },
    {
        name: "Bruyne", 
        age: 31, 
        teams: ["Wolfsburg", "City"], 
        address: "Ghent, Belgium", 
        price: 120
    }
];

const App = () => {
    // Filter pemain yang bermain di tim "City"
    const filteredPlayers = Albums().filter(p => p.teams.includes("City"));

    // Filter data pemain bernama "Ronaldo"
    const ronaldoPlayer = Albums().find(p => p.name === "Ronaldo");

    // Filter pemain yang berumur 30
    const playersAge30 = Albums().filter(p => p.age === 30);

    // Tampilkan semua data pemain
    const allPlayers = Albums();

    // Fungsi filter data berdasarkan address
    const filterByAddress = (address) => {
        return Albums().filter(player => player.address.includes(address));
    };

    // Fungsi filter data berdasarkan price > min_price
    const filterByMinPrice = (minPrice) => {
        return Albums().filter(player => player.price > minPrice);
    };

    // Menggunakan filter yang baru ditambahkan
    const playersFromLisbon = filterByAddress("Lisbon");
    const expensivePlayers = filterByMinPrice(100);

    return (
        <div>
            <h1> <b> Players in City</b></h1>
            <ul>
                {filteredPlayers.map(player => (
                    <li key={player.name}>
                        {player.name} - Age: {player.age}
                    </li>
                ))}
            </ul> <br />

            <h2>  <b> Data Ronaldo</b></h2>
            {ronaldoPlayer ? (
                <div>
                    <p>Name: {ronaldoPlayer.name}</p>
                    <p>Age: {ronaldoPlayer.age}</p>
                    <p>Teams: {ronaldoPlayer.teams.join(", ")}</p>
                </div>
            ) : (
                <p>Ronaldo not found</p>
            )} <br />

            <h2> <b>Players Age 30</b> </h2>
            <ul>
                {playersAge30.length > 0 ? (
                    playersAge30.map(player => (
                        <li key={player.name}>
                            {player.name} - Age: {player.age} - Teams: {player.teams.join(", ")}
                        </li>
                    ))
                ) : (
                    <li>No players age 30 found</li>
                )}
            </ul> <br />

            <h2> <b>All Players</b> </h2>
            <ul>
                {allPlayers.map(player => (
                    <li key={player.name}>
                        {player.name} - Age: {player.age} - Teams: {player.teams.join(", ")}
                    </li>
                ))}
            </ul> <br />

            <h2> <b>Players from Lisbon</b> </h2>
            <ul>
                {playersFromLisbon.length > 0 ? (
                    playersFromLisbon.map(player => (
                        <li key={player.name}>
                            {player.name} - Age: {player.age} - Teams: {player.teams.join(", ")}
                        </li>
                    ))
                ) : (
                    <li>No players found from Lisbon</li>
                )}
            </ul> <br />

            <h2> <b>Expensive Players</b> </h2>
            <ul>
                {expensivePlayers.length > 0 ? (
                    expensivePlayers.map(player => (
                        <li key={player.name}>
                            {player.name} - Age: {player.age} - Teams: {player.teams.join(", ")} - Price: ${player.price}
                        </li>
                    ))
                ) : (
                    <li>No players with price greater than 100 found</li>
                )}
            </ul> 
        </div>
    );
};

export default App;
