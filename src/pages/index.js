import React from "react"

import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LocationList from "../components/locationList"

// data from json-generator.com using this template
// [
//     "{{repeat(7)}}",
//     {
//       id: "{{objectId()}}",
//       name: "{{company()}}",
//       displayAddress: "{{integer()}} {{street()}}, {{city()}}, {{state()}}",
//       phoneNumber: "{{phone()}}",
//       website: "{{company()}}.com",
//       hours: [
//         "{{repeat(7)}}",
//         { start: 10, end: 2 }
//       ],
//     deals: [
//           "{{repeat(5)}}",
//           {
//               id: "{{objectId()}}",
//               locationId: "{{objectId()}}",
//               LocationName:  "{{company()}}",
//               description:  "{{lorem()}}",
//               types: [
//                   "{{random('drinks','event','food')}}"
//               ],
//               days: [
//                   "{{random('Mon','Tues','Wed','Thu','Fri','Sat','Sun')}}"
//               ]
//           }
//       ]
//     }
//   ]

const items = [
  {
    id: "5c3bb4faa05bf06da6e528d6",
    name: "Perkle",
    displayAddress: "8 Grattan Street, Kent, Florida",
    phoneNumber: "(852) 569-3431",
    website: "Corporana.com",
    hours: [
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
    ],
    deals: [
      {
        id: "5c3bb4fae69c8c97c334625f",
        locationId: "5c3bb4fa0378e52e9e0c5fa8",
        LocationName: "Farmex",
        description:
          "Sint minim deserunt incididunt quis do consequat ipsum est fugiat officia elit velit nostrud.",
        types: ["food"],
        days: ["Thu"],
      },
      {
        id: "5c3bb4fa152d6650698c6d83",
        locationId: "5c3bb4fa7cb1a438e180bb28",
        LocationName: "Satiance",
        description:
          "Ullamco labore laborum adipisicing amet veniam consequat aliquip laboris.",
        types: ["event"],
        days: ["Sat"],
      },
      {
        id: "5c3bb4fa78bfd09bc382d886",
        locationId: "5c3bb4fa45e7393df26c5037",
        LocationName: "Valreda",
        description:
          "Fugiat nostrud exercitation irure laboris ullamco cillum.",
        types: ["food"],
        days: ["Mon"],
      },
      {
        id: "5c3bb4faf0974feee5867050",
        locationId: "5c3bb4fac3986792879193b9",
        LocationName: "Ecratic",
        description:
          "Ea irure ex adipisicing pariatur ipsum aliquip ipsum aliqua irure laborum non deserunt voluptate.",
        types: ["food"],
        days: ["Fri"],
      },
      {
        id: "5c3bb4fa558b581dc33033b6",
        locationId: "5c3bb4fa6af23c968f63cb3f",
        LocationName: "Orboid",
        description:
          "Deserunt occaecat pariatur qui sit occaecat consequat amet consequat consectetur voluptate ad.",
        types: ["food"],
        days: ["Sun"],
      },
    ],
  },
  {
    id: "5c3bb4fabb83f1b8f254f694",
    name: "Skinserve",
    displayAddress: "2 Wallabout Street, Bellfountain, Virgin Islands",
    phoneNumber: "(840) 495-3429",
    website: "Geeketron.com",
    hours: [
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
    ],
    deals: [
      {
        id: "5c3bb4face8863507dede365",
        locationId: "5c3bb4faf53d9b7ef0b27acc",
        LocationName: "Xiix",
        description: "Irure ad occaecat dolore esse anim enim veniam sint.",
        types: ["event"],
        days: ["Thu"],
      },
      {
        id: "5c3bb4fa5d122c440bcfe17d",
        locationId: "5c3bb4fa0955646fb8dc41a7",
        LocationName: "Ceprene",
        description:
          "Sunt reprehenderit non ex exercitation do ea fugiat ipsum amet magna ad minim et dolor.",
        types: ["drinks"],
        days: ["Fri"],
      },
      {
        id: "5c3bb4facd738f32a000923a",
        locationId: "5c3bb4fa1c5cfbc69cf2bf36",
        LocationName: "Waretel",
        description:
          "Aliqua pariatur consequat sit esse mollit incididunt ea irure incididunt esse.",
        types: ["drinks"],
        days: ["Thu"],
      },
      {
        id: "5c3bb4fa8e09700b2ad83649",
        locationId: "5c3bb4fae676b49d40c2cf76",
        LocationName: "Handshake",
        description:
          "Aute voluptate tempor culpa commodo voluptate voluptate anim excepteur quis.",
        types: ["drinks"],
        days: ["Sun"],
      },
      {
        id: "5c3bb4faa92b92084993c1f9",
        locationId: "5c3bb4fa092564c98d4be216",
        LocationName: "Orbaxter",
        description: "Enim enim ea sit mollit magna in non dolor.",
        types: ["food"],
        days: ["Sun"],
      },
    ],
  },
  {
    id: "5c3bb4fa4296b128ecb9a8f6",
    name: "Radiantix",
    displayAddress: "9 Amity Street, Wilsonia, Kansas",
    phoneNumber: "(871) 579-2295",
    website: "Digifad.com",
    hours: [
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
    ],
    deals: [
      {
        id: "5c3bb4fa26f0121273303094",
        locationId: "5c3bb4faf7c094998e89af3a",
        LocationName: "Utarian",
        description:
          "Do aliqua voluptate nostrud dolor non laborum eu voluptate commodo ad esse magna anim amet.",
        types: ["food"],
        days: ["Wed"],
      },
      {
        id: "5c3bb4fa3489b8a071595d44",
        locationId: "5c3bb4fa1b67cd5d6b87ff8b",
        LocationName: "Lumbrex",
        description:
          "Amet non cupidatat esse consequat sit adipisicing ad voluptate nulla adipisicing pariatur.",
        types: ["food"],
        days: ["Fri"],
      },
      {
        id: "5c3bb4fa9853e1797974afe1",
        locationId: "5c3bb4fa68fc893e4e4d98a9",
        LocationName: "Idetica",
        description: "Ea id quis sint occaecat amet.",
        types: ["food"],
        days: ["Wed"],
      },
      {
        id: "5c3bb4fa21b99228aa49a6a5",
        locationId: "5c3bb4fac423251216c0b114",
        LocationName: "Bytrex",
        description:
          "Esse minim irure sint in ipsum exercitation reprehenderit duis laborum aliquip quis mollit.",
        types: ["food"],
        days: ["Sun"],
      },
      {
        id: "5c3bb4fa7dcedb1f12fa4ef7",
        locationId: "5c3bb4fa9cbf6a22cfe63afe",
        LocationName: "Talkola",
        description: "Id excepteur ad ut culpa amet enim.",
        types: ["drinks"],
        days: ["Wed"],
      },
    ],
  },
  {
    id: "5c3bb4fa583fb160acdff86f",
    name: "Zentility",
    displayAddress: "5 Coles Street, Spokane, Guam",
    phoneNumber: "(965) 597-3023",
    website: "Steeltab.com",
    hours: [
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
    ],
    deals: [
      {
        id: "5c3bb4fa6952316f10f29729",
        locationId: "5c3bb4faded7340d418c8401",
        LocationName: "Xth",
        description:
          "Et labore cillum adipisicing cupidatat et irure veniam aliquip qui deserunt aliqua culpa est ut.",
        types: ["drinks"],
        days: ["Sat"],
      },
      {
        id: "5c3bb4fa9da6a13643b9d59f",
        locationId: "5c3bb4fa55e01a9459f0e046",
        LocationName: "Magmina",
        description:
          "Duis laboris occaecat fugiat ut adipisicing fugiat velit irure Lorem sint.",
        types: ["drinks"],
        days: ["Sat"],
      },
      {
        id: "5c3bb4fa2ff384f73257aa41",
        locationId: "5c3bb4faf78addb6263fb10b",
        LocationName: "Maroptic",
        description: "Est adipisicing nisi occaecat nulla fugiat.",
        types: ["event"],
        days: ["Mon"],
      },
      {
        id: "5c3bb4fa632e12960e145c14",
        locationId: "5c3bb4fa6d63bb32a328152b",
        LocationName: "Typhonica",
        description:
          "Consequat et voluptate eiusmod id dolor nisi nisi ad proident commodo.",
        types: ["food"],
        days: ["Fri"],
      },
      {
        id: "5c3bb4fae73979225b614db2",
        locationId: "5c3bb4fabb46bfbce9a44968",
        LocationName: "Premiant",
        description: "Adipisicing aliqua fugiat labore est eu nisi.",
        types: ["drinks"],
        days: ["Fri"],
      },
    ],
  },
  {
    id: "5c3bb4fa5228c5b1d1912de2",
    name: "Zillacom",
    displayAddress: "0 Judge Street, Bodega, Puerto Rico",
    phoneNumber: "(957) 437-3092",
    website: "Exostream.com",
    hours: [
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
    ],
    deals: [
      {
        id: "5c3bb4fabc6f556e8280648a",
        locationId: "5c3bb4fa9721e25071ce6eec",
        LocationName: "Multiflex",
        description:
          "Mollit id occaecat cupidatat proident culpa ex esse cillum est excepteur velit adipisicing commodo labore.",
        types: ["event"],
        days: ["Wed"],
      },
      {
        id: "5c3bb4fa31e2acc5bb197e30",
        locationId: "5c3bb4fa1452ea24f7b87419",
        LocationName: "Geekfarm",
        description: "Enim quis aute incididunt duis eiusmod ullamco.",
        types: ["drinks"],
        days: ["Thu"],
      },
      {
        id: "5c3bb4fac1d41ba1fb0728a0",
        locationId: "5c3bb4fa83477c9c668ed9a6",
        LocationName: "Cablam",
        description:
          "Ullamco cupidatat ullamco aliquip non cillum excepteur sit proident.",
        types: ["event"],
        days: ["Wed"],
      },
      {
        id: "5c3bb4fa5663c57df1d531f6",
        locationId: "5c3bb4fa429f6afb8ad09075",
        LocationName: "Trollery",
        description:
          "Ea id laboris amet eu proident in labore labore ad qui tempor Lorem adipisicing.",
        types: ["food"],
        days: ["Fri"],
      },
      {
        id: "5c3bb4fa12a6dcad694e292b",
        locationId: "5c3bb4fa62efc0c962c5810b",
        LocationName: "Boilicon",
        description: "Esse tempor aliquip ut dolore amet exercitation.",
        types: ["drinks"],
        days: ["Tues"],
      },
    ],
  },
  {
    id: "5c3bb4fa1cbcc4f891a9a97f",
    name: "Vitricomp",
    displayAddress: "4 Grimes Road, Masthope, New York",
    phoneNumber: "(862) 562-3178",
    website: "Marqet.com",
    hours: [
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
    ],
    deals: [
      {
        id: "5c3bb4fa21b48f114a1e3787",
        locationId: "5c3bb4fac2b60bc6a4610aab",
        LocationName: "Voipa",
        description:
          "Ut nisi sit sit ea proident est adipisicing voluptate nisi exercitation magna.",
        types: ["food"],
        days: ["Thu"],
      },
      {
        id: "5c3bb4fa98e16be44e50c086",
        locationId: "5c3bb4fa2eb0b068515c438a",
        LocationName: "Sulfax",
        description: "Do ad incididunt irure amet occaecat ipsum.",
        types: ["drinks"],
        days: ["Thu"],
      },
      {
        id: "5c3bb4fa3c5b43964fafa557",
        locationId: "5c3bb4fada07eebb16c684af",
        LocationName: "Nixelt",
        description: "Nostrud consequat aliquip non quis.",
        types: ["event"],
        days: ["Tues"],
      },
      {
        id: "5c3bb4faa828f2b190375c30",
        locationId: "5c3bb4fa1423b3ec3278c3c1",
        LocationName: "Nebulean",
        description: "Amet voluptate consequat id mollit do.",
        types: ["food"],
        days: ["Fri"],
      },
      {
        id: "5c3bb4fa836d1277240cfc2d",
        locationId: "5c3bb4facd42c1e03ac152b0",
        LocationName: "Envire",
        description: "Proident sunt officia est adipisicing.",
        types: ["food"],
        days: ["Tues"],
      },
    ],
  },
  {
    id: "5c3bb4fa174b468e4277cc2d",
    name: "Artiq",
    displayAddress: "0 Woodruff Avenue, Alden, Arizona",
    phoneNumber: "(923) 476-3874",
    website: "Bezal.com",
    hours: [
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
      {
        start: 10,
        end: 2,
      },
    ],
    deals: [
      {
        id: "5c3bb4fac17d2921bb5be20e",
        locationId: "5c3bb4fa74bc2d1cf8127a3b",
        LocationName: "Icology",
        description: "Non laborum consectetur elit labore cillum eu sint.",
        types: ["drinks"],
        days: ["Wed"],
      },
      {
        id: "5c3bb4fa68aa0475d431c65b",
        locationId: "5c3bb4fa478d557b30f10a2d",
        LocationName: "Bolax",
        description:
          "In reprehenderit anim aliquip est laborum dolore adipisicing et id pariatur.",
        types: ["event"],
        days: ["Mon"],
      },
      {
        id: "5c3bb4fa6084ce5e804150a7",
        locationId: "5c3bb4fafcfab5c68a056ede",
        LocationName: "Momentia",
        description:
          "Ut adipisicing ut aliqua duis tempor mollit incididunt ad.",
        types: ["drinks"],
        days: ["Sat"],
      },
      {
        id: "5c3bb4fac6a71532acae8f30",
        locationId: "5c3bb4fad946b211b1e67fc7",
        LocationName: "Intradisk",
        description:
          "Cupidatat commodo est aliquip voluptate pariatur ipsum sit nisi do anim quis quis qui occaecat.",
        types: ["drinks"],
        days: ["Tues"],
      },
      {
        id: "5c3bb4fa74533926641b6151",
        locationId: "5c3bb4fa522b028189358fff",
        LocationName: "Ronbert",
        description:
          "Ut reprehenderit id esse amet aute aliqua eiusmod consectetur dolore exercitation minim.",
        types: ["food"],
        days: ["Thu"],
      },
    ],
  },
]

class IndexPage extends React.Component {
  state = {
    searchValue: "",
    isLoading: true,
  }

  searchOnChange = event => {
    this.setState({ searchValue: event.target.value })
  }

  componentDidMount() {
    // call api here for initial deals, this is just to simulate loading data
    setTimeout(() => this.setState({ isLoading: false }), 1000)
  }

  filterItems() {
    const value = this.state.searchValue.toLowerCase()
    return items.filter(i => {
      for (let d of i.deals) {
        if (d.description.toLowerCase().indexOf(value) !== -1) {
          return true
        }
      }
      return false
    })
  }

  render() {
    return (
      <Layout>
        <Header searchOnChange={this.searchOnChange} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <div>{this.state.searchValue}</div>
          <LocationList
            items={this.filterItems()}
            isLoading={this.state.isLoading}
          />
        </div>
      </Layout>
    )
  }
}

export default IndexPage
