import axios from "axios";


async function getUserDetails(){
  await new Promise((r)=>setTimeout(r,5000))
  // const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
  // console.log(response);
  const response = await axios.get("http://localhost:3000/api/user")
  return response.data
}
//async component
export default async function Home() {
  const userDetails = await getUserDetails()
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border  text-left flex-col p-4 rounded-lg shadow-sm">
        <h1 className="">Name: {userDetails?.name}</h1>
        <p>Email: {userDetails?.email}</p>
        <span className="">
          <h4>Address:</h4>
          <span>HouseNumber {userDetails.address.houseNumber}, City {userDetails.address.city}, State {userDetails.address.city}</span>
        </span>
      </div>
      {/* <p>{userDetails?.address}</p> */}
    </div>
  );
}
// address: { city: 'Delhi', state: 'Delhi', houseNumber: '21' }