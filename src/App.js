import { useState, useEffect } from "react";
import { Container, Typography } from '@mui/material';

import Layout from "./components/Layout";
import SearchBar from "./components/SearchBar";
import ImageContainer from "./components/ImageContainer";


const URL = "https://pixabay.com/api/?key=28299197-4fe0de3596423076566ff1616&q=";
function App() {
  const [imageData, setImageData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("Nepal");
  const [amount, setAmount] = useState(20);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    callFetch()
  }, []);
  useEffect(() => {
    console.log(error);
  }, [error]);

  //Calling the fetch Api
  const callFetch = () => {
    fetch(`${URL}${searchTerm}&image_type=photo&pretty=true&per_page=${amount}`)
    .then(res => res.json())
    .then(data => {
      setImageData(data.hits);
      setIsLoading(false);
    })
    .catch(err => {
      console.log(err);
      setIsLoading(false);
      setError(true);
    });
  }



  //Handle Change
  const handleChange = (option, e) => {
    e.preventDefault();
    switch(option){
      case "amount":
        setAmount(e.target.value);
        break;
      case "searchTerm":
        setSearchTerm(e.target.value);
        break;
      default:
        break;
    }
  }

  return (
    <Container maxWidth="xl">
      <Layout title="PixaBay Image Finder">
        <SearchBar handleChange={handleChange} callFetch={callFetch} values={{searchTerm: searchTerm, amount: amount}} />
        {
          !isLoading?
          <>
            {
              !error?
              <ImageContainer imageData={imageData} />:
              <Typography variant="subtitle1" component="p" style={{margin: "20px", color: "rgb(234, 96, 96)"}}>
                Error Loading Data
              </Typography>
            }

          </>:
          <Typography variant="subtitle1" component="p" style={{margin: "20px"}}>
            Loading ...
          </Typography>
        }
      </Layout>
    </Container>
  );
}

export default App;
