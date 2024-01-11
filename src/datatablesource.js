export const userColumns = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "First_name",
    headerName: "First Name",
    width: 150,
  },
  {
    field: "last_name",
    headerName: "Last Name",
    width: 150,
  },

  {
    field: "email",
    headerName: "Email",
    width: 180,
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
