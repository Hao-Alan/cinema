import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetailData } from "../../../Redux/counter/DetailSlice";
import DetailCinema from "./DetailCinema";
import DetailFeature from "./DetailFeature";

const DetailTotal = () => {
  const { detail } = useSelector((state) => state.DetailSlice);
  const dispatch = useDispatch();
  const { id } = useParams();
  // console.log({ detail });

  useEffect(() => {
    dispatch(fetchDetailData(id));
  }, []);
  // console.log({ detail });
  return (
    <div>
      <DetailCinema detail={detail} />
      <DetailFeature detail={detail} />
    </div>
  );
};

export default DetailTotal;
