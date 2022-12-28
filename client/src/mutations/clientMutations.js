import { gql } from "@apollo/client";

const DELETE_AUDI = gql`
    mutation deleteAudi($id: ID!) {
        deleteAudi(id: $id) {
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

export { DELETE_AUDI };