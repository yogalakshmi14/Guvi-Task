// Write a “person” class to hold all the details.

class Person {
    constructor (FirstName, MiddleName, LastName, DOB, Gender, Maritalstatus, 
        Occupation, MobileNumber, EmailID, Address, pincode, State, Country){
        this.FirstName =  FirstName;
        this.MiddleName = MiddleName;
        this.LastName = LastName;
        this.DOB = DOB;
        this.Gender = Gender;
        this.Maritalstatus = Maritalstatus;
        this.Occupation = Occupation;
        this.MobileNumber = MobileNumber;
        this.EmailID = EmailID;
        this.Address = Address;
        this.pincode = pincode;
        this.State = State;
        this.Country = Country;
    }
      getGender (){
        return this.Gender;
      }

      getFirstName (){
        return this.FirstName;
      }

      getOccupation (){
        return this.Occupation ;
      }

      getState (){
        return this.State;
      } }

const sathya = new Person(
    "sathiamurthy",
    "",
    "Ganeshan",
    "14.06.91",
    "Male",
    "Married",
    "Associate Manager",
    "8856043222",
    "sathiamurthy@gmail.com",
    "No:21, jawaharlal street, boominapet, puducherry",
    "603209",
    "TamilNadu",
    "India"
);

    console.log(sathya);

   