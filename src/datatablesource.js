export const userColumns = [
    {
        field: "id",
        headerName: "ID",
        width: 70,
    },

    {
        field: "user",
        headerName: "User",
        width: 230,

        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    <p>{params.row.username}</p>
                </div>
            );
        },

    },

    {
        field: "email",
        headerName: "Email",
        width: 200

    },

    {
        field: "address",
        headerName: "Age",
        width: 200

    },

    {
        field: "status",
        headerName: "Status",
        width: 200,

        renderCell: (params) => {
            return (
                <div className={`cellWidthStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }

    }
];


// temporary data
// export const userRows = [
//     {
//         id: 1,
//         username: "Christian",
//         img: "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         status: "Approved",
//         email: "flores.com",
//         age: 22,
//     },

//     {
//         id: 2,
//         username: "Paul",
//         img: "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         status: "Approved",
//         email: "example.com",
//         age: 20,
//     },

//     {
//         id: 3,
//         username: "John",
//         img: "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         status: "Pending",
//         email: "example.com",
//         age: 20,
//     },

//     {
//         id: 4,
//         username: "Higado",
//         img: "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         status: "Pending",
//         email: "example.com",
//         age: 20,
//     },

//     {
//         id: 5,
//         username: "John Doe",
//         img: "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         status: "Pending",
//         email: "example.com",
//         age: 20,
//     },

//     {
//         id: 6,
//         username: "John Doe",
//         img: "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         status: "Pending",
//         email: "example.com",
//         age: 20,
//     },

//     {
//         id: 7,
//         username: "John Doe",
//         img: "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         status: "Pending",
//         email: "example.com",
//         age: 20,
//     },
// ];
