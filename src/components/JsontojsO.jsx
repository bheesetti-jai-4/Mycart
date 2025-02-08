
 function JsontojsO() {
   const employe =  {"id":11,
                    "name":"jagan",
                    "age":34,
                    "location":"hyderabad",
                    "address":{"dono":"2-2",
                                "street":"amerpeta",
                                "pincode":5487},
                    "skills":["java","spring","spring-book","microservices"],
                    "isAdmin":true
    }

    const addressdetails = (
        <li>
          {employe.address.dono} - {employe.address.street} - {employe.address.pincode}
        </li>
      );

     const skillsdetails = employe.skills.map((skill,index)=>(
                                <li key={index} >
                                    {skill}
                                </li>
     ))

    // const fulldetails = 


  return (
    <>
        <h2>Json to js object</h2>
        <p>Name :{employe.name} </p>
        <p>Age :{employe.age} </p>
        <p>Location : {employe.location} </p>
        <p>Address : {addressdetails} </p>
        <p>Skills : {skillsdetails} </p>
        <p>isAdimin : {employe.isAdmin ? "True Yes" : "False No"} </p>
        
    </>
  )
}
export default JsontojsO;
