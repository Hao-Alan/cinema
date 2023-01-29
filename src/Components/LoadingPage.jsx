import React from "react";
import { useSelector } from "react-redux";

const LoadingPage = () => {
  const { loading } = useSelector(
    (state) => state.QuanLyDatVeServicesSliceReducer
  );

  return (
    <>
      {loading ? (
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100%",
            position: "fixed",
            top: 0,
            left: 0,

            zIndex: 99,
          }}
          className="text-white text-4xl"
        >
          Loading...
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default LoadingPage;
