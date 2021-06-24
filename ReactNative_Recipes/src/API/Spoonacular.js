import axios from "axios";

export default axios.create({

    baseURL: 'https://api.spoonacular.com/recipes',
    headers: {
        Authorization : 'Bearer 214646a8a7c7476b8fb158a343055d00'
    }
}); 