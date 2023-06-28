import React from "react";
import { Link } from "react-router-dom";
import { contactsData } from "../Data";
type ContactInfo = {
  id: number;
  name: string;
  surName: string;
  phoneNumber: string;
  friends: number[];
};
const Contacts = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Contact Name</td>
            <td>Phone Number</td>
          </tr>
        </thead>
        <tbody>
          {contactsData.map((user: ContactInfo) => {
            return (
              <tr key={user.id}>
                <td>
                  <Link to={`/contacts/${user.id}`} state={user}>
                    {user.name} {user.surName}
                  </Link>
                </td>
                <td>
                  <Link to={`/contacts/${user.id}`} state={user}>
                    {user.phoneNumber}
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
