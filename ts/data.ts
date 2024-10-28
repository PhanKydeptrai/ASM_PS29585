type THocVien = { id:number; ten:string; phone:string; phai:TGioiTinh}
type TGioiTinh = string | boolean;
type TKhoaHoc = { id:number; tenkhoa: string; khaigiang: string; ghichu:string  }
type TDangHoc = THocVien & TKhoaHoc; 
type TCoSo = { id:number;  ten:string;  diachi:string;  hinh:string; }
const khoahoc_arr:TKhoaHoc[] = [
    {id:1, tenkhoa:"18.1", khaigiang:"2022-04", "ghichu":"Covid tung hoành"},
    {id:2, tenkhoa:"18.2", khaigiang:"2022-09", "ghichu":"Online Rực lửa"},
    {id:3, tenkhoa:"18.3", khaigiang:"2023-01", "ghichu":"Sinh viên đông"},
    {id:4, tenkhoa:"19.1", khaigiang:"2023-04", "ghichu":"Chương trình mới"},
    {id:5, tenkhoa:"19.2", khaigiang:"2023-09", "ghichu":"Chương trình mới"},
    {id:6, tenkhoa:"20.1", khaigiang:"2024-01", "ghichu":" Học 6 kỳ"},
 ];
let hv_arr:TDangHoc[] = [
    {id:1, ten:"Hoàng Hoa", phone:"918123456", phai:"Nữ", tenkhoa:"18.3", khaigiang:"2023-01", ghichu:"dễ thương"},
    {id:2, ten:"Trúc Vàng", phone:"914123451", phai:true, tenkhoa:"18.3", khaigiang:"2023-01", ghichu:"dễ mến"},
    {id:3, ten:"Thu Mấy", phone:"938123461", phai:"Nam", tenkhoa:"19.1", khaigiang:"2023-04", ghichu:"học giỏi"},
    {id:4, ten:"Ngọc Độ", phone:"112345632", phai:false, tenkhoa:"19.1", khaigiang:"2023-04", ghichu:"hát hay"},
    {id:5, ten:"Hải Công", phone:"42125690", phai:"Nam", tenkhoa:"19.2", khaigiang:"2023-09", ghichu:"nhanh nhẹn"},
    {id:6, ten:"Thanh Sơn", phone:"52169036", phai:"Nam", tenkhoa:"19.2", khaigiang:"2023-09", ghichu:"khỏe khắn"} 
];
const coso_arr:TCoSo[] = [
    { id:1, ten:"Beach light", diachi: "", "hinh": "images/Beach_light.png"},
    { id:2, ten:"City light", diachi: "", "hinh": "images/City_light.png"},
    { id:3, ten:"Dessert light", diachi: "", "hinh": "images/Dessert_light.png"},
    { id:4, ten:"Forest Light", diachi: "", "hinh": "images/Forest-Light.png"},
    { id:5, ten:"Mountain Light", diachi: "", "hinh": "images/Mountain_light.png"},
    { id:6, ten:"Fuji light", diachi: "", "hinh": "images/Fuji_light.png"},
    { id:7, ten:"Garden Light", diachi: "", "hinh": "images/Garden-Light.png"},
    { id:8, ten:"highway light", diachi: "", "hinh": "images/highway_light.png"},
    { id:9, ten:"japan street Light", diachi: "", "hinh": "images/japan-street-Light.png"},
    { id:10, ten:"kitty light", diachi: "", "hinh": "images/kitty_light.png"},
    { id:11, ten:"Lady Light", diachi: "", "hinh": "images/Lady-Light.png"},
    { id:12, ten:"Mountain light", diachi: "", "hinh": "images/Mountain_light.png"},
    { id:13, ten:"Riverside light", diachi: "", "hinh": "images/Riverside_light.png"},
    { id:14, ten:"Summer Scene Light", diachi: "", "hinh": "images/Summer-Scene-Light.png"}

];
export { TCoSo, TDangHoc, THocVien, TKhoaHoc, TGioiTinh}
export { hv_arr, coso_arr, khoahoc_arr}
  