import { FaEdit, FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_AUDI } from "../mutations/audiMutations";

export default function AudiRow({ audi }) {
  const [deleteBrand] = useMutation(DELETE_AUDI, {
    variables: { id: audi.id },
    // refetchQueries
  });
  return (
    <tr>
      <td>{audi.id}</td>
      <td>{audi.BN}</td>
      <td>{audi.IPR}</td>
      <td>{audi.Designation}</td>
      <td>{audi.SD}</td>
      <td>{audi.Status}</td>
      <td>{audi.Number}</td>
      <td>{audi.Office}</td>
      <td>{audi.NC}</td>
      <td>{audi.Owner}</td>
      <td>
        <button className="btn btn-sm" onClick={deleteBrand}
        >
          <FaTrash />
        </button>

        <button className="btn btn-sm ml-2">
          <FaEdit />
        </button>
        


      </td>
    </tr>
  );
}
