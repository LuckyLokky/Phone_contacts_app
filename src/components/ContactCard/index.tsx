import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { contactsData } from "../Data";
type ContactInfo = {
  id: number;
  name: string;
  surName: string;
  phoneNumber: string;
  friends: number[];
};
const ContactCard: React.FunctionComponent = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}>Go back</button>
      <h2>
        {state.name} {state.surName}&nbsp;&nbsp; --- &nbsp;&nbsp;
        {state.phoneNumber}
      </h2>
      <h3>Friends</h3>
      <ul>
        {state.friends.map((item: {}) => {
          return contactsData.map((user: ContactInfo) => {
            if (item === user.id) {
              return (
                <li key={user.id}>
                  <Link to={`/contacts/${user.id}`} state={user}>
                    {user.name} {user.surName} --- {user.phoneNumber}
                  </Link>
                </li>
              );
            } else return null;
          });
        })}
      </ul>
    </div>
  );
};

export default React.memo(ContactCard);
