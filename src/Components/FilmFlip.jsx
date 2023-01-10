import React from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import "./FilmFlip.css";

const FilmFlip = ({ features }) => {
  const navigate = useNavigate();

  return (
    <div className="mb-14">
      <div class="artboard p-0 mb-2">
        <div class="card">
          <div class="card__side card__side--back">
            <div class="card__cover">
              <h4 class="card__heading">
                <span class="card__heading-span">{features.tenPhim}</span>
              </h4>
            </div>
            <div class="card__details">
              <p>
                {features.moTa.length > 50
                  ? `${features?.moTa?.slice(0, 50)}...`
                  : features.moTa}
              </p>
            </div>
            <div>
              <button class="px-8 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Đặt vé
              </button>
            </div>
          </div>

          <div class="card__side card__side--front">
            <div class="card__theme">
              <img
                src={features.hinhAnh}
                alt={features.hinhAnh}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <buttonxx>Đặt vé</buttonxx>
        </div>
      </div>

      {/* <Link to={`/detail/${features.maPhim}`}>
        <button className="rounded-md bg-slate-500 py-2 px-28 text-lime-100 hover:bg-slate-400 hover:text-black">
          Đặt vé
        </button>
      </Link> */}
      <button
        onClick={() => {
          navigate(`/detail/${features.maPhim}`);
        }}
        className="rounded-md bg-slate-500 py-2 px-28 text-lime-100 hover:bg-slate-400 hover:text-black"
      >
        Đặt vé
      </button>
    </div>
  );
};

export default FilmFlip;
