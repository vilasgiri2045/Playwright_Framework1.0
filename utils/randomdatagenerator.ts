
import { fa, faker } from "@faker-js/faker";

export class RandomDataUtil
{

    static getFirstname()
    {
      return  faker.person.firstName();
    }
    

    static getlastname()
    {
       return faker.person.lastName();
    }

    static getEmail()
    {
      return  faker.internet.email();
    }
    static getPhonenumber()
    {
       return faker.phone.number();
    }

    static getUsername()
    {
      return  faker.internet.username();

    }
    static getPassword()
    {
      return faker.internet.password();
    }

    static getCountry()
    {
    return    faker.location.country();
    }

    static getCity()
    {
        faker.location.city();
    }
}