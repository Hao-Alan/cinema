import { get, post, put } from './BaseServices'





export const LayDanhSachBanner = () => {
    return (
        get(`/api/QuanLyPhim/LayDanhSachBanner`)
    )
}

export const LayDanhSachPhim = () => {
    return (
        get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`)
    )

}
export const LayThongTinLichChieuHeThongRap = () => {
    return (
        get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01`)
    )
}


export const LayThongTinLichChieuPhim = (props) => {
    return (
        get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${props}`)
    )
}