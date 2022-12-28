import { gql } from "@apollo/client";



const GET_AUDIS = gql`
  query getAudis {
    Audis {
      id
      Brand_name
      Logo
      IPR
      Designation
      Status_date
      Status
      Number
      Office
      Nice_classification
      Owner
    }
  }
`;

export { GET_AUDIS };