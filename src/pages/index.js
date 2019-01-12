import React from "react"

import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "@material-ui/core/Button"
import LocationList from "../components/locationList"

// data from json-generator.com using this template
// [ 
//     "{{repeat(7)}}",
//     {
//       id: "{{objectId()}}",
//       name: "{{company()}}",
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
      "id": "5c3a52f93a94b8b03acad67c",
      "name": "Codact",
      "deals": [
        {
          "id": "5c3a52f97779dfc27f0da7e9",
          "locationId": "5c3a52f9754269ffdb9111d0",
          "LocationName": "Futuris",
          "description": "Officia mollit nisi ad quis minim culpa nulla magna duis laboris pariatur.",
          "types": [
            "drinks"
          ],
          "days": [
            "Wed"
          ]
        },
        {
          "id": "5c3a52f9853b453c006d621c",
          "locationId": "5c3a52f906f647415ed07a8e",
          "LocationName": "Concility",
          "description": "Dolor sunt aliqua reprehenderit excepteur amet reprehenderit dolore.",
          "types": [
            "food"
          ],
          "days": [
            "Wed"
          ]
        },
        {
          "id": "5c3a52f9d457227308ada56b",
          "locationId": "5c3a52f97d141ebff3e4d061",
          "LocationName": "Radiantix",
          "description": "Ad et ullamco dolor cupidatat culpa sit officia reprehenderit exercitation dolore quis ullamco.",
          "types": [
            "drinks"
          ],
          "days": [
            "Mon"
          ]
        },
        {
          "id": "5c3a52f96e8da7a06dae813e",
          "locationId": "5c3a52f9f30c197c424c393d",
          "LocationName": "Kineticut",
          "description": "Officia deserunt cupidatat velit qui in ea ad.",
          "types": [
            "food"
          ],
          "days": [
            "Sun"
          ]
        },
        {
          "id": "5c3a52f9dbdd4377953bb3a2",
          "locationId": "5c3a52f91f74cd82f2de9458",
          "LocationName": "Zilencio",
          "description": "Excepteur proident nulla sunt enim dolor commodo ad dolor ex labore id voluptate.",
          "types": [
            "drinks"
          ],
          "days": [
            "Wed"
          ]
        }
      ]
    },
    {
      "id": "5c3a52f9bbb2c553ae960b21",
      "name": "Zilidium",
      "deals": [
        {
          "id": "5c3a52f9d4b5ef1f1ff42665",
          "locationId": "5c3a52f92c8c0ca2241561e2",
          "LocationName": "Eclipsent",
          "description": "Labore id minim excepteur irure deserunt laboris eiusmod voluptate laboris ipsum id excepteur duis ut.",
          "types": [
            "food"
          ],
          "days": [
            "Thu"
          ]
        },
        {
          "id": "5c3a52f9dfa6229f260e0034",
          "locationId": "5c3a52f9e6a5b99b55db8278",
          "LocationName": "Arctiq",
          "description": "Sit tempor veniam fugiat deserunt cupidatat.",
          "types": [
            "food"
          ],
          "days": [
            "Mon"
          ]
        },
        {
          "id": "5c3a52f9ad51263102bde55e",
          "locationId": "5c3a52f912312f99a00ddc3a",
          "LocationName": "Flexigen",
          "description": "Pariatur nisi in ad est.",
          "types": [
            "food"
          ],
          "days": [
            "Fri"
          ]
        },
        {
          "id": "5c3a52f9e1afb9c5075616f2",
          "locationId": "5c3a52f9ad606f4bf2ebaf97",
          "LocationName": "Lotron",
          "description": "Enim esse ut enim ad laboris commodo dolore minim.",
          "types": [
            "drinks"
          ],
          "days": [
            "Fri"
          ]
        },
        {
          "id": "5c3a52f985356074f512540c",
          "locationId": "5c3a52f9238e145740d2ed8b",
          "LocationName": "Exoplode",
          "description": "Sunt non nulla tempor in exercitation Lorem.",
          "types": [
            "drinks"
          ],
          "days": [
            "Mon"
          ]
        }
      ]
    },
    {
      "id": "5c3a52f9ebfee7ca79fb2808",
      "name": "Techmania",
      "deals": [
        {
          "id": "5c3a52f95e5ddfc115e8cf85",
          "locationId": "5c3a52f9db25e471b11325ae",
          "LocationName": "Biospan",
          "description": "Qui dolor proident do elit.",
          "types": [
            "drinks"
          ],
          "days": [
            "Tues"
          ]
        },
        {
          "id": "5c3a52f9d5cece8dece9ffde",
          "locationId": "5c3a52f93663b99929d6688d",
          "LocationName": "Filodyne",
          "description": "Consectetur aute tempor dolor eu commodo dolor sint officia reprehenderit laboris cillum pariatur ad reprehenderit.",
          "types": [
            "food"
          ],
          "days": [
            "Sat"
          ]
        },
        {
          "id": "5c3a52f9d1c9a9d9c9961b21",
          "locationId": "5c3a52f99539e245aaf01b8a",
          "LocationName": "Gology",
          "description": "Aliquip anim pariatur do do fugiat amet voluptate in anim.",
          "types": [
            "food"
          ],
          "days": [
            "Sun"
          ]
        },
        {
          "id": "5c3a52f9915c901e1586f32d",
          "locationId": "5c3a52f9417f9ac610600c60",
          "LocationName": "Orbin",
          "description": "Quis sint deserunt ullamco officia velit reprehenderit est.",
          "types": [
            "food"
          ],
          "days": [
            "Mon"
          ]
        },
        {
          "id": "5c3a52f9f2996ab0de5b8fb7",
          "locationId": "5c3a52f9595c50b3c8af44be",
          "LocationName": "Manglo",
          "description": "Eu nostrud exercitation excepteur veniam consequat commodo ullamco mollit eu deserunt mollit.",
          "types": [
            "drinks"
          ],
          "days": [
            "Fri"
          ]
        }
      ]
    },
    {
      "id": "5c3a52f9c49c28d16b268d11",
      "name": "Netility",
      "deals": [
        {
          "id": "5c3a52f91edac819881ddb87",
          "locationId": "5c3a52f9aa594a357c70fac3",
          "LocationName": "Tetratrex",
          "description": "Dolore exercitation enim qui qui culpa aliquip magna est.",
          "types": [
            "drinks"
          ],
          "days": [
            "Tues"
          ]
        },
        {
          "id": "5c3a52f9d5280fc762de067a",
          "locationId": "5c3a52f9568afec65d8ea1bf",
          "LocationName": "Viocular",
          "description": "Incididunt elit exercitation minim officia est deserunt laborum in.",
          "types": [
            "drinks"
          ],
          "days": [
            "Sun"
          ]
        },
        {
          "id": "5c3a52f9f821f88f195f4064",
          "locationId": "5c3a52f97226028955951f7e",
          "LocationName": "Prowaste",
          "description": "Laboris sint qui fugiat velit laborum occaecat sint enim id labore.",
          "types": [
            "food"
          ],
          "days": [
            "Wed"
          ]
        },
        {
          "id": "5c3a52f924b019dd963c1e33",
          "locationId": "5c3a52f97e155c1c2526c205",
          "LocationName": "Dancity",
          "description": "Fugiat esse sit esse ut.",
          "types": [
            "food"
          ],
          "days": [
            "Mon"
          ]
        },
        {
          "id": "5c3a52f9e43cd0ef07013756",
          "locationId": "5c3a52f953208021d2199f4e",
          "LocationName": "Bittor",
          "description": "Ea reprehenderit ut est nulla incididunt consectetur.",
          "types": [
            "drinks"
          ],
          "days": [
            "Sun"
          ]
        }
      ]
    },
    {
      "id": "5c3a52f94e8657118cad51cb",
      "name": "Atomica",
      "deals": [
        {
          "id": "5c3a52f998738c80dce25c28",
          "locationId": "5c3a52f9e2c04d28175ef100",
          "LocationName": "Digiprint",
          "description": "Reprehenderit eu eu velit in esse excepteur aliquip.",
          "types": [
            "event"
          ],
          "days": [
            "Fri"
          ]
        },
        {
          "id": "5c3a52f91dabfd28bba99301",
          "locationId": "5c3a52f9b7796facac46b869",
          "LocationName": "Jamnation",
          "description": "Ullamco irure esse enim incididunt sint in est.",
          "types": [
            "event"
          ],
          "days": [
            "Mon"
          ]
        },
        {
          "id": "5c3a52f9cdf97e78dc8e3387",
          "locationId": "5c3a52f922c3bfc3065570de",
          "LocationName": "Eventex",
          "description": "Fugiat elit consectetur ad anim magna aute mollit reprehenderit elit enim nulla laborum.",
          "types": [
            "food"
          ],
          "days": [
            "Sun"
          ]
        },
        {
          "id": "5c3a52f95478b285495e395d",
          "locationId": "5c3a52f93ff8d431dbbc156d",
          "LocationName": "Supportal",
          "description": "Consectetur esse anim veniam non culpa.",
          "types": [
            "drinks"
          ],
          "days": [
            "Tues"
          ]
        },
        {
          "id": "5c3a52f9329a73df2fe8b364",
          "locationId": "5c3a52f97b639065dc50b0c2",
          "LocationName": "Isoplex",
          "description": "Quis tempor est aliqua aute fugiat incididunt ipsum incididunt laboris ex ipsum culpa enim sint.",
          "types": [
            "drinks"
          ],
          "days": [
            "Fri"
          ]
        }
      ]
    },
    {
      "id": "5c3a52f90e507cb12e65000c",
      "name": "Perkle",
      "deals": [
        {
          "id": "5c3a52f97ac16576a49c962b",
          "locationId": "5c3a52f9af9cae1d7090c3e8",
          "LocationName": "Comstruct",
          "description": "Minim velit anim reprehenderit eu aliquip eu id adipisicing aliqua commodo pariatur ad.",
          "types": [
            "event"
          ],
          "days": [
            "Fri"
          ]
        },
        {
          "id": "5c3a52f97e5c1d31e0c6464c",
          "locationId": "5c3a52f9fb5f18c23083ab1d",
          "LocationName": "Quotezart",
          "description": "Ipsum laboris voluptate ad id eiusmod laborum irure nostrud nulla velit labore cupidatat voluptate.",
          "types": [
            "event"
          ],
          "days": [
            "Fri"
          ]
        },
        {
          "id": "5c3a52f9cf3a2b08bd7d8403",
          "locationId": "5c3a52f9baed30bb51a7f24d",
          "LocationName": "Imperium",
          "description": "Velit culpa excepteur officia minim enim deserunt sunt incididunt sint nisi irure.",
          "types": [
            "drinks"
          ],
          "days": [
            "Sun"
          ]
        },
        {
          "id": "5c3a52f9c526db451b628e1b",
          "locationId": "5c3a52f97b59c719c249dda3",
          "LocationName": "Acruex",
          "description": "Adipisicing in deserunt nulla exercitation sint proident aliqua incididunt commodo aute sit commodo.",
          "types": [
            "drinks"
          ],
          "days": [
            "Wed"
          ]
        },
        {
          "id": "5c3a52f9d463a8322c6cf469",
          "locationId": "5c3a52f97fd8dc07df780487",
          "LocationName": "Musanpoly",
          "description": "Minim quis sint consequat aliqua culpa excepteur sit cillum aliquip elit proident.",
          "types": [
            "food"
          ],
          "days": [
            "Thu"
          ]
        }
      ]
    },
    {
      "id": "5c3a52f973e5c2f08f641679",
      "name": "Anivet",
      "deals": [
        {
          "id": "5c3a52f9fc342df351454467",
          "locationId": "5c3a52f9f44b335368c6513f",
          "LocationName": "Gushkool",
          "description": "Aliquip do dolor velit occaecat officia dolor in amet est exercitation et.",
          "types": [
            "event"
          ],
          "days": [
            "Mon"
          ]
        },
        {
          "id": "5c3a52f965931d0041261758",
          "locationId": "5c3a52f9ba296d217081c785",
          "LocationName": "Coash",
          "description": "Eiusmod ipsum amet laboris mollit qui cillum eiusmod adipisicing veniam.",
          "types": [
            "event"
          ],
          "days": [
            "Fri"
          ]
        },
        {
          "id": "5c3a52f95abbfeafc3f990d0",
          "locationId": "5c3a52f97b6c4f412b0615c2",
          "LocationName": "Cipromox",
          "description": "Minim amet culpa aliqua proident mollit qui esse deserunt proident voluptate.",
          "types": [
            "event"
          ],
          "days": [
            "Mon"
          ]
        },
        {
          "id": "5c3a52f9819c84b78e96fe42",
          "locationId": "5c3a52f9ff6ecb391c5d818e",
          "LocationName": "Amtas",
          "description": "Labore magna excepteur ipsum fugiat voluptate laborum qui qui proident tempor ea tempor aliqua do.",
          "types": [
            "drinks"
          ],
          "days": [
            "Sat"
          ]
        },
        {
          "id": "5c3a52f92a9ef8b1d6a23bf0",
          "locationId": "5c3a52f9822ff24ad02468dd",
          "LocationName": "Vurbo",
          "description": "Ipsum eu ipsum enim velit sint velit est ipsum minim ad do eu consequat.",
          "types": [
            "drinks"
          ],
          "days": [
            "Sat"
          ]
        }
      ]
    }
  ]

class IndexPage extends React.Component {
    state = {
        searchValue: "",
        isLoading: true,
    }

    searchOnChange = (event) => {
        this.setState({ searchValue: event.target.value })
    }

    componentDidMount() {
        // call api here for initial deals, this is just to simulate loading data
        setTimeout(() => this.setState({ isLoading: false }), 1000)
      }

    filterItems() {
        const value = this.state.searchValue.toLowerCase()
        return items.filter(i => { return i.name.toLowerCase().indexOf(value) !== -1})
    }

    render() {
        return (
            <Layout>
                <Header searchOnChange={this.searchOnChange}/>
                <div
                    style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0px 1.0875rem 1.45rem`,
                    paddingTop: 0,
                    }}
                >
                    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
                    <Button color="primary">Primary</Button>
                    <Button color="secondary">Secondary</Button>
                    <div>
                        {this.state.searchValue}
                    </div>
                    <LocationList items={this.filterItems()} isLoading={this.state.isLoading}/>
                </div>
            </Layout>
          )
    }
}

export default IndexPage
