import { useState } from "react";
import Spoonacular from "../API/Spoonacular";

export default () => {

    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async () => {
        try{
            const response = await Spoonacular.get('/complexSearch', {
                params: {
                    apiKey: '214646a8a7c7476b8fb158a343055d00',
                    number: 100
                    // ranking: 1
                    //ignorePantry: true
                }
            });
            setResults(response.data);
            //console.log(results);
        }

        catch (e) {
            setErrorMessage("Something went wrong!");
        }
    };

    return [searchApi, results, errorMessage];

};
