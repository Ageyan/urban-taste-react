import { useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3030/";

export const useFetch = (endpoint) => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const send = async (data) => {
    setIsLoading(true);
    setError("");
    setSuccess(false);

    try {
      await axios.post(endpoint, data);
      setSuccess(true);

      setTimeout(() => setSuccess(false), 3000);

    } catch (err) {
      setError("Error sending data");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { send, isLoading, success, error };
};