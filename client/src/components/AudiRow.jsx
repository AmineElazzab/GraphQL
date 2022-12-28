import { FaEdit, FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_AUDI } from "../mutations/clientMutations";

export default function AudiRow({ audi }) {
  return (
    <tr>
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
        <button className="btn btn-sm">
            <FaTrash />
        </button>

        <button className="btn btn-sm ml-2">
          <FaEdit />
        </button>
      </td>
    </tr>
  );
}
