import React from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"

// splitDealsByDay() = (deals) => {
//     let days = {};
//     deals.forEach(deal => {
//         deal.days.forEach(day => {
//             if (typeof days[day] !== "undefined" && days[day]) {
//                 days[day].push(deal)
//             }
//         })
//     });
// }

class DealsContainer extends React.Component {
  render() {
    const deals = this.props.deals

    return (
      <Card
        style={{
          backgroundColor: `#f3f3f3`,
          margin: `2em`,
          boxShadow: `8px 8px 5px 0px #888888`,
        }}
      >
        <CardContent>
          <List>
            {deals.map(d => (
              <ListItem key={d.id}>{d.description}</ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    )
  }
}

export default DealsContainer
