import { get, push, post } from './BaseServices'

export const QuanLyDatVeServices = (thongTinLich) => { // mã lịch chiếu lấy từ url param
    return get(`api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${thongTinLich}`)
}

export const QuanLyDatVeServiceMoi = (phimPush) => {
    return post(`api/QuanLyDatVe/DatVe`, phimPush)
}

export const ThemPhimUploadHinh = (hinhAnh) => {
    return post(`api/QuanLyPhim/ThemPhimUploadHinh`, hinhAnh)
}


