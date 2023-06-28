import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { contactsData } from "../Data";
import { ContactsContainer } from "./style";
type ContactInfo = {
  id: number;
  name: string;
  surName: string;
  phoneNumber: string;
  friends: number[];
};
const Contacts: FunctionComponent = () => {
  return (
    <ContactsContainer>
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
                  <Link className="Link" to={`/${user.id}`} state={user}>
                    {user.name} {user.surName}
                  </Link>
                </td>
                <td>
                  <Link className="Link" to={`/${user.id}`} state={user}>
                    {user.phoneNumber}
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </ContactsContainer>
  );
};

export default Contacts;
