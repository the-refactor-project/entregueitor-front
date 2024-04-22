import { Delivery } from "@/types";

interface DeliveriesListProps {
  deliveries: Delivery[];
}

const DeliveriesList = ({
  deliveries,
}: DeliveriesListProps): React.ReactElement => {
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
