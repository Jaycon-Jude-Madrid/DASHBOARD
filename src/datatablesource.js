export const userColumns = [
    {
        field: "id",
        headerName: "ID",
        width: 70,

        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.id}`}>
                    <p>{params.row.id}</p>
                </div>
            )
        }
    },

    {
        field: "name",
        headerName: "Name",
        width: 200,

        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
                    <div className={`cellWidthStatus ${params.row.name}`}>
                        <p>{params.row.name}</p>
                    </div>
                </div>

            );
        },

    },

    {
        field: "phoneNumber",
        headerName: "Phone Number",
        width: 150,
    },

    {
        field: "address",
        headerName: "Address",
        width: 150,

        renderCell: (params) => {
            return (
                <div className={`cellWidthStatus ${params.row.address}`}>
                    {params.row.address}
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
