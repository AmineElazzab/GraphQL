import { useQuery } from "@apollo/client";
import AudiRow from "./AudiRow";
import { GET_AUDIS } from "../queries/audiQueries";
import Spinner from "./Spinner";


export default function Audis() {
  const { loading, error, data } = useQuery(GET_AUDIS);

  if (loading) return <Spinner/>;
  if (error) return <p>Error</p>;

  return (
    <>
      {!loading && !error && (
        <table className="table table-sm table-hover mt-3">
          <thead>
            <tr>
              <th scope="col" style={{ width: "100px" }}>
                B.N
              </th>
              {/* <th scope="col">Logo</th> */}
              <th scope="col" style={{ width: "100px" }}>
                IPR
              </th>
              <th scope="col" style={{ width: "100px" }}>
                Designation
              </th>
              <th scope="col" style={{ width: "100px" }}>
                S.D
              </th>
              <th scope="col" style={{ width: "100px" }}>
                Status
              </th>
              <th scope="col" style={{ width: "100px" }}>
                Number
              </th>
              <th scope="col" style={{ width: "100px" }}>
                Office
              </th>
              <th scope="col" style={{ width: "100px" }}>
                N.C
              </th>
              <th scope="col" style={{ width: "100px" }}>
                Owner
              </th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.Audis.map((audi) => (
             <AudiRow key={audi.id} audi={audi} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
