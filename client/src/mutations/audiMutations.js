import { gql } from "@apollo/client";

const DELETE_AUDI = gql`
    mutation deleteBrand($id : String!) {
        deleteBrand(id: $id) {
            id
           
        }
    }
`;

export { DELETE_AUDI };