import SwipedMatchCard from "../MatchCards/SwipedMatchCard";
import styled from "styled-components";

const StyledRemoveButton = styled.button`
  padding: 8px 12px;
  border-radius: 12px;
  font-size: 14px;
  margin-right: 8px;
  background: linear-gradient(90deg, #f85440 0%, #f82978 100%);
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 11px;
  margin-bottom: 8px;

  &:hover {
    background-color: #ff3d3d;
  }
`;

const SwipedMatchList = ({ matchedCompanies, headlineText, onRemove }) => (
  <>
    <h2
      style={{
        textAlign: "center",
        color: "black",
        fontSize: "1.3rem",
        marginTop: "0px",
      }}
    >
      {headlineText}
    </h2>
    {console.log(
      "~~~~~ PFERD MatchList  THESE UNMATCHED MATCHES ARRIVED IN PROPS",
      matchedCompanies
    )}
    {matchedCompanies.map(({ id, name, logo }) => {
      return (
        <div key={id}>
          <>
            <SwipedMatchCard id={id} name={name} logo={logo} />
          </>
          <>
            <div onClick={() => onRemove(id)}>
              {/* <svg
                id="Layer_1"
                enable-background="new 0 0 50 50"
                viewBox="0 0 50 50"
            
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Layer_2_00000027567050021241608690000008485663118675404440_">
                  <g id="delete_left">
                    <path d="m10.8 278.7c44 44 88.2 87.9 132.5 131.6 11.3 11.2 25.1 16.3 41.1 16.2 44.4-.2 88.8-.1 133.2-.1h134.4c34.8-.1 59.5-23.3 59.7-57.9.5-75.2.5-150.3 0-225.4-.2-34.1-25-57.6-58.9-57.6-89.9-.1-179.9-.1-269.8-.1-15.2 0-28.3 5.1-39 15.6-44.6 44-89 88.1-133.3 132.4-14.3 14.3-14.2 31.1.1 45.3zm271-22.6-40.8-40.7c-8.7-8.7-8.7-22.7 0-31.4s22.7-8.7 31.4 0l40.7 40.7 40.7-40.7c8.7-8.7 22.7-8.7 31.4 0s8.7 22.7 0 31.4l-40.7 40.7 40.7 40.7c8.7 8.7 8.7 22.7 0 31.4s-22.7 8.7-31.4 0l-40.7-40.7-40.7 40.7c-8.9 8.5-22.9 8.1-31.4-.7-8.2-8.6-8.2-22.1 0-30.7z" />
                  </g>
                </g>
              </svg> */}
            </div>
            {/* TODO: THIS NEEDS TO BE THE MATCHID NOT COMPANY ID!!!!! */}
          </>
        </div>
      );
    })}
  </>
);

export default SwipedMatchList;