//index.js

import express from 'express';
import axios from 'axios';

const app = express();
const port = 3001

app.use(express.static('public'));
app.set('view engine', 'ejs');

// HOME ROUTE
app.get('/', (req, res) =>{
    res.render('index',{artworks: null, error :null});
});


// Search route
app.get('/search', async (req, res) => {
    const query = req.query.q;
    const url = `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${query}`;

    try {
        const response = await axios.get(url);
        const artworkIDs = response.data.objectIDs ? response.data.objectIDs.slice(0, 10) : []; // Limit to 10 results
        const artworks = await Promise.all(artworkIDs.map(id => axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)));

        res.render('index', {
            artworks: artworks.map(res => res.data),
            error: null,
        });
    } catch (error) {
        console.error(error);
        res.render('index', { artworks: [], error: 'No artworks found' }); // Set artworks to an empty array
    }
});

//port 
app.listen(port , (req, res) => {
    console.log(`serever is running on port ${port}`)
});