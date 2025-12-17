
const StudentCard = (props) => {
    console.log(props)
    let firstname = "john"
    let secondname = "smith"
  return (
    <div>
      <h1>Student Details</h1>
      First Name : {props.fname} <br />
      Second namen:{props.lname} <br />
      full name :{props.fname}{props.lname}
      
    </div>
  );
};

export default StudentCard;
