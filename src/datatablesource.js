export const userColumns = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.First_name} {params.row.last_name}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "phone_no",
    headerName: "Phone No",
    width: 150,
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.value}`}>{params.value}</div>
      );
    },
  },
];

export const productColumns = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "product",
    headerName: "Product",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="product" />
          {params.row.title}
        </div>
      );
    },
  },
  {
    field: "category",
    headerName: "Category",
    width: 150,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "stock",
    headerName: "Stock",
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.value > 0 ? 'active' : 'passive'}`}>
          {params.value > 0 ? 'In Stock' : 'Out of Stock'}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    First_name: "Snow",
    last_name: "Jude",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    phone_no: "081052345",
  },
  {
    id: 2,
    First_name: "Arrow",
    last_name: "Med",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    status: "passive",
    phone_no: "081052345",
  },
  {
    id: 3,
    First_name: "Bello",
    last_name: "Essien",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "pending",
    phone_no: "081052345",
  },
  {
    id: 4,
    First_name: "Don",
    last_name: "Bee",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "active",
    phone_no: "081052345",
  },
  {
    id: 5,
    First_name: "Snow",
    last_name: "Jude",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "passive",
    phone_no: "081052345",
  },
  {
    id: 6,
    First_name: "Snow",
    last_name: "Jude",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "active",
    phone_no: "081052345",
  },
  {
    id: 7,
    First_name: "Snow",
    last_name: "Jude",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    status: "passive",
    phone_no: "081052345",
  },
  {
    id: 8,
    First_name: "Snow",
    last_name: "Jude",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "active",
    phone_no: "081052345",
  },
  {
    id: 9,
    First_name: "Snow",
    last_name: "Jude",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "pending",
    phone_no: "081052345",
  },
  {
    id: 10,
    First_name: "Snow",
    last_name: "Jude",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    phone_no: "081052345",
  },
];

export const productRows = [
  {
    id: 1,
    title: "iPhone 13 Pro",
    img: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    category: "Electronics",
    price: "$999",
    stock: 25,
  },
  {
    id: 2,
    title: "MacBook Pro",
    img: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    category: "Electronics",
    price: "$1999",
    stock: 15,
  },
  {
    id: 3,
    title: "Nike Air Max",
    img: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    category: "Fashion",
    price: "$150",
    stock: 0,
  },
  {
    id: 4,
    title: "Samsung Galaxy S21",
    img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    category: "Electronics",
    price: "$799",
    stock: 30,
  },
  {
    id: 5,
    title: "Dell XPS 13",
    img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    category: "Electronics",
    price: "$1299",
    stock: 12,
  },
];