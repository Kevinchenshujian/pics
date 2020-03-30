import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/search/photos",
  headers: {
    Authorization: "Client-ID qhAN6DtIPLx3IP9Kmky5ydlLljFJCElmjK4ADIGGsaI"
  }
});
