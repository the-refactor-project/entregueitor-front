import { Delivery } from "@/types";
import "./DeliveriesList.css";
import { useContext } from "react";
import { AuthContext } from "@/context/auth/AuthContext";

interface DeliveriesListProps {
  deliveries: Delivery[];
  deleteDelivery: (
    deliveryId: number,
    deliveryOwner: string,
    deliveryWeek: number
  ) => void;
}

const DeliveriesList = ({
  deliveries,
  deleteDelivery,
}: DeliveriesListProps): React.ReactElement => {
  const { student } = useContext(AuthContext);

  return (
    <ul className="weeks">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((week) => (
        <li className="week" key={week}>
          <h2>Week {week}</h2>
          <ul className="deliveries">
            {deliveries
              .filter((delivery) => delivery.week === week)
              .map(
                ({
                  id,
                  owner,
                  frontRepoUrl,
                  frontProductionUrl,
                  sprint1TrelloUrl,
                  sprint2TrelloUrl,
                  firstTeammateName,
                  secondTeammateName,
                }) => (
                  <li className="delivery" key={id}>
                    <h3>
                      {owner}
                      {!!firstTeammateName && ` - ${firstTeammateName}`}
                      {!!secondTeammateName && ` - ${secondTeammateName}`}
                    </h3>
                    <ul className="delivery__links">
                      <li>
                        <a href={frontRepoUrl} target="_blank">
                          Repo front
                        </a>
                      </li>
                      <li>
                        <a href={frontProductionUrl} target="_blank">
                          Production front
                        </a>
                      </li>
                      <li>
                        <a href={sprint1TrelloUrl} target="_blank">
                          Sprint 1 Trello
                        </a>
                      </li>
                      {!!sprint2TrelloUrl && (
                        <li>
                          <a href={sprint2TrelloUrl} target="_blank">
                            Sprint 2 Trello
                          </a>
                        </li>
                      )}
                    </ul>
                    {(owner === student ||
                      firstTeammateName === student ||
                      secondTeammateName === student) && (
                      <button
                        className="button button--icon delivery__action"
                        title="delete delivery"
                        onClick={() => deleteDelivery(id, owner, week)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-square-rounded-x-filled"
                          width="44"
                          height="44"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#000000"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path
                            d="M12 2l.324 .001l.318 .004l.616 .017l.299 .013l.579 .034l.553 .046c4.785 .464 6.732 2.411 7.196 7.196l.046 .553l.034 .579c.005 .098 .01 .198 .013 .299l.017 .616l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.464 4.785 -2.411 6.732 -7.196 7.196l-.553 .046l-.579 .034c-.098 .005 -.198 .01 -.299 .013l-.616 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.785 -.464 -6.732 -2.411 -7.196 -7.196l-.046 -.553l-.034 -.579a28.058 28.058 0 0 1 -.013 -.299l-.017 -.616c-.003 -.21 -.005 -.424 -.005 -.642l.001 -.324l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.464 -4.785 2.411 -6.732 7.196 -7.196l.553 -.046l.579 -.034c.098 -.005 .198 -.01 .299 -.013l.616 -.017c.21 -.003 .424 -.005 .642 -.005zm-1.489 7.14a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z"
                            fill="currentColor"
                            strokeWidth="0"
                          />
                        </svg>
                      </button>
                    )}
                  </li>
                )
              )}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default DeliveriesList;
