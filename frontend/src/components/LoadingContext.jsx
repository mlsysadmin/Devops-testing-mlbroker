import React, { useContext, useState } from "react";

const LoadingContext = React.createContext();

export const useLoading = () => {
  return useContext(LoadingContext);
};

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState("LOADING");

  const closeModal = () => {
    setLoading(true)
  };

  return (
    <LoadingContext.Provider
      value={{
        loading,
        closeModal
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
