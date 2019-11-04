/*query Ship($simulatorId: ID!) {
  shortRangeComm(simulatorId: $simulatorId) {
    id
    simulatorId
    name
    arrows {
      id
      muted
      signal
      frequency
      connected
      __typename
    }
    signals {
      id
      name
      image
      range {
        lower
        upper
        __typename
      }
      color
      __typename
    }
    state
    frequency
    amplitude
    power {
      power
      powerLevels
      __typename
    }
    damage {
      damaged
      report
      __typename
    }
    __typename
  }
}
*/
export default {
  shortRangeComm: [
    {
      id: "6db37956-797d-4373-bbc3-d856d23669af",
      simulatorId: "e0b50c95-092b-4010-a08f-89fbdea782df",
      name: "Short Range Communications",
      arrows: [
        {
          id: "32765eb3-b9a5-41c5-80c6-ccbb18d9e0e7",
          signal: "0a014e45-1fa4-4fc6-aa40-1c7155fed7c2",
          frequency: 0.62,
          connected: false,
          muted: false,
          __typename: "CommArrow",
        },
        {
          id: "0e085979-d2d6-418f-a0ac-e619e9a94cb0",
          signal: "51c1a326-b81d-4817-8bd6-4019ae3a4e11",
          frequency: 0.24,
          connected: false,
          muted: false,
          __typename: "CommArrow",
        },
      ],
      signals: [
        {
          id: "8b887969-b9d2-451f-bdf2-af1f89d9345c",
          name: "Romulan",
          image: "/Comm Images/Romulan.png",
          range: {
            lower: 0.85,
            upper: 1,
            __typename: "CommRange",
          },
          color: "#00ff00",
          __typename: "CommSignal",
        },
        {
          id: "94c425e6-c570-4cc4-ae7d-9ab03060525e",
          name: "Cardassian",
          image: "/Comm Images/Cardassian.png",
          range: {
            lower: 0.75,
            upper: 0.85,
            __typename: "CommRange",
          },
          color: "#ffaa00",
          __typename: "CommSignal",
        },
        {
          id: "0a014e45-1fa4-4fc6-aa40-1c7155fed7c2",
          name: "General Use",
          image: "/Comm Images/General Use.png",
          range: {
            lower: 0.58,
            upper: 0.75,
            __typename: "CommRange",
          },
          color: "#ffffff",
          __typename: "CommSignal",
        },
        {
          id: "c4a1a1bf-503b-41b0-bc92-f90100e1b094",
          name: "Starfleet",
          image: "/Comm Images/Starfleet.png",
          range: {
            lower: 0.4,
            upper: 0.58,
            __typename: "CommRange",
          },
          color: "#0088ff",
          __typename: "CommSignal",
        },
        {
          id: "387fbaa7-ee7b-4b08-bfd5-67ae0cc4b480",
          name: "Klingon",
          image: "/Comm Images/Klingon.png",
          range: {
            lower: 0.3,
            upper: 0.4,
            __typename: "CommRange",
          },
          color: "#ff0000",
          __typename: "CommSignal",
        },
        {
          id: "51c1a326-b81d-4817-8bd6-4019ae3a4e11",
          name: "Orion",
          image: "/Comm Images/Orion.png",
          range: {
            lower: 0.22,
            upper: 0.3,
            __typename: "CommRange",
          },
          color: "#888888",
          __typename: "CommSignal",
        },
        {
          id: "dc578187-418b-4846-95cd-741b5d8bce1b",
          name: "Ferengi",
          image: "/Comm Images/Ferengi.png",
          range: {
            lower: 0,
            upper: 0.22,
            __typename: "CommRange",
          },
          color: "#ffff00",
          __typename: "CommSignal",
        },
      ],
      state: "idle",
      frequency: 0.5,
      amplitude: 0.5,
      power: {
        power: 3,
        powerLevels: [3],
        __typename: "Power",
      },
      damage: {
        damaged: false,
        report: null,
        __typename: "Damage",
      },
      __typename: "ShortRangeComm",
    },
  ],
  /* 
   query Ship($simulatorId: ID!) {
  internalComm(simulatorId: $simulatorId) {
    id
    name
    state
    outgoing
    incoming
    damage {
      damaged
      report
      __typename
    }
    power {
      power
      powerLevels
      __typename
    }
    __typename
  }
}
*/
  internalComm: [
    {
      id: "b4d3ce23-c44e-49f4-83d4-c86c918cb91d",
      name: "Internal Communications",
      state: "idle",
      outgoing: null,
      incoming: null,
      damage: {
        damaged: false,
        report: null,
        __typename: "Damage",
      },
      power: {
        power: 0,
        powerLevels: [],
        __typename: "Power",
      },
      __typename: "InternalComm",
    },
  ],
  /* query Ship($simulatorId: ID!) {
  longRangeCommunications(simulatorId: $simulatorId) {
    id
    simulatorId
    name
    satellites
    presetMessages {
      label
      value
      __typename
    }
    messages {
      id
      a
      f
      ra
      rf
      sender
      message
      decodedMessage
      encrypted
      sent
      timestamp
      datestamp
      deleted
      approved
      crew
      __typename
    }
    interception
    difficulty
    locked
    decoded
    damage {
      damaged
      report
      __typename
    }
    power {
      power
      powerLevels
      __typename
    }
    __typename
  }
}
*/
  longRangeCommunications: [
    {
      id: "7aef492a-f314-47c4-8985-3d59c1c2c5c6",
      simulatorId: "e0b50c95-092b-4010-a08f-89fbdea782df",
      name: "Long Range Communications",
      satellites: 3,
      presetMessages: [
        {
          label: "Update please",
          value:
            "To: Voyager\nFrom: Starbase 74\n\nWhat is your status, Voyager? We haven't heard from you in a while.\n\nStarbase 74 out.",
          __typename: "PresetAnswer",
        },
      ],
      messages: [
        {
          id: "d215379a-2e5b-439d-bde5-8187b0f85246",
          a: 10,
          f: 10,
          ra: 35,
          rf: 45,
          sender: "Hi there!",
          message: "Hello there, friend. Woot!",
          decodedMessage: "",
          encrypted: false,
          sent: false,
          timestamp:
            "Mon Nov 04 2019 08:08:27 GMT-0700 (Mountain Standard Time)",
          datestamp: "8523.4",
          deleted: false,
          approved: false,
          crew: false,
          __typename: "LRMessage",
        },
      ],
      interception: false,
      difficulty: 30000,
      locked: false,
      decoded: false,
      damage: {
        damaged: false,
        report: null,
        __typename: "Damage",
      },
      power: {
        power: 2,
        powerLevels: [2],
        __typename: "Power",
      },
      __typename: "LRCommunications",
    },
  ],
  /* query Ship($simulatorId: ID!) {
  probes(simulatorId: $simulatorId) {
    id
    simulatorId
    name
   type
    torpedo
    types {
      id
      name
      size
      count
      description
      availableEquipment {
        id
        name
        size
        count
        description
        __typename
      }
      __typename
    }
    processedData
    probes {
      id
      type
      name
      launched
      equipment {
        id
        name
        count
        __typename
      }
      charge
      __typename
    }
    damage {
      damaged
      report
      __typename
    }
    power {
      power
      powerLevels
      __typename
    }
    __typename
  }
}
 */
  probes: [
    {
      id: "9f96decf-59ff-4992-abaf-0c54a4059b2b",
      simulatorId: "e0b50c95-092b-4010-a08f-89fbdea782df",
      name: "Probe Launcher",
      type: "Probes",
      torpedo: false,
      types: [
        {
          id: "class-i",
          name: "Class I Probe",
          size: 4,
          count: 30,
          description:
            "The smallest probe; can only hold 4 units of equipment. Use for probe networks and general purposes.",
          availableEquipment: [
            {
              id: "probe-network-package",
              name: "Probe Network Package",
              size: 1,
              count: 60,
              description:
                "A probe network package instructs the probe to network with up to 7 other probes.",
              __typename: "ProbeEquipment",
            },
            {
              id: "radio-transceiver",
              name: "Radio Transceiver",
              size: 1,
              count: 54,
              description:
                "A radio transceiver is used to let the probe communicate.",
              __typename: "ProbeEquipment",
            },
            {
              id: "video-camera",
              name: "Video Camera",
              size: 1,
              count: 47,
              description: "A Video Camera can take still or moving pictures.",
              __typename: "ProbeEquipment",
            },
            {
              id: "communications-signal-booster",
              name: "Communications Signal Booster",
              size: 2,
              count: 38,
              description:
                "A Communications Signal Booster gives the probe's radio more range.",
              __typename: "ProbeEquipment",
            },
            {
              id: "encoding-sequencer",
              name: "Encoding Sequencer",
              size: 2,
              count: 25,
              description:
                "Encodes and encrypts signals, making them more secure.",
              __typename: "ProbeEquipment",
            },
            {
              id: "extra-data-storage",
              name: "Extra Data Storage",
              size: 2,
              count: 61,
              description:
                "Increases the amount of on-board data storage, allowing the probe to store more data.",
              __typename: "ProbeEquipment",
            },
            {
              id: "extra-fuel-cell",
              name: "Extra Fuel Cell",
              size: 2,
              count: 79,
              description:
                "An Extra Fuel Cell lets the probe travel further and perform longer.",
              __typename: "ProbeEquipment",
            },
            {
              id: "sensor-array",
              name: "Sensor Array",
              size: 2,
              count: 120,
              description:
                "The Sensor Array gives the probe general scanning abilities.",
              __typename: "ProbeEquipment",
            },
            {
              id: "chemical-analysis-package",
              name: "Chemical Analysis Package",
              size: 3,
              count: 24,
              description:
                "A Chemical Analysis Package lets the probe research what chemicals it has found.",
              __typename: "ProbeEquipment",
            },
            {
              id: "sample-retrieval-package",
              name: "Sample Retrieval Package",
              size: 3,
              count: 22,
              description:
                "A Sample Retrieval Package lets the probe get something and return it to the ship.",
              __typename: "ProbeEquipment",
            },
            {
              id: "radiation-shielding",
              name: "Radiation Shielding",
              size: 3,
              count: 16,
              description:
                "Protects the probe from moderate levels of radiation.",
              __typename: "ProbeEquipment",
            },
            {
              id: "ecm-package",
              name: "ECM Package",
              size: 4,
              count: 26,
              description:
                "An ECM (Electronic Counter Measures) Package is used to jam electronics.",
              __typename: "ProbeEquipment",
            },
            {
              id: "gas-giant-encounter-package",
              name: "Gas Giant Encounter Package",
              size: 4,
              count: 11,
              description:
                "A Gas Giant Encounter Package allows the probe to research a gas giant.",
              __typename: "ProbeEquipment",
            },
            {
              id: "nebula-encounter-package",
              name: "Nebula Encounter Package",
              size: 4,
              count: 14,
              description:
                "A Nebula Encounter Package allows the probe to research a nebula.",
              __typename: "ProbeEquipment",
            },
            {
              id: "planetary-encounter-package",
              name: "Planetary Encounter Package",
              size: 4,
              count: 14,
              description:
                "A Planetary Encounter Package allows the probe to research a planet.",
              __typename: "ProbeEquipment",
            },
            {
              id: "decoy-package",
              name: "Decoy Package",
              size: 4,
              count: 23,
              description:
                "A Decoy Package sends out signals to make sensor devices detect the probe as a ship.",
              __typename: "ProbeEquipment",
            },
            {
              id: "tractor-beam",
              name: "Tractor Beam",
              size: 5,
              count: 7,
              description:
                "Projects dark matter particles to create areas of negative gravitation. Can be used to pull objects towards the probe.",
              __typename: "ProbeEquipment",
            },
            {
              id: "subspace-encounter-package",
              name: "Subspace Encounter Package",
              size: 5,
              count: 6,
              description:
                "A Subspace Encounter Package allows the probe to research subspace.",
              __typename: "ProbeEquipment",
            },
            {
              id: "solar-encounter-package",
              name: "Solar Encounter Package",
              size: 5,
              count: 19,
              description:
                "A Solar Encounter Package allows the probe to research a star.",
              __typename: "ProbeEquipment",
            },
            {
              id: "transporter-relay",
              name: "Transporter Relay",
              size: 5,
              count: 15,
              description:
                "A transporter relay extends the transporter range of this ship.",
              __typename: "ProbeEquipment",
            },
            {
              id: "hologram-projector-package",
              name: "Hologram Projector Package",
              size: 5,
              count: 5,
              description:
                "A Hologram Projector Package makes the probe look like a ship.",
              __typename: "ProbeEquipment",
            },
            {
              id: "metaphasic-shield-generator",
              name: "Metaphasic Shield Generator",
              size: 6,
              count: 7,
              description:
                "Shield Generator that can construct a Shield Grid with other probes up to 2,500 Km protecting from radiation.",
              __typename: "ProbeEquipment",
            },
          ],
          __typename: "ProbeType",
        },
        {
          id: "class-ii",
          name: "Class II Probe",
          size: 10,
          count: 30,
          description:
            "This medium-sized probe can hold 10 units of equipment. Use for probe networks and general purposes.",
          availableEquipment: [
            {
              id: "probe-network-package",
              name: "Probe Network Package",
              size: 1,
              count: 60,
              description:
                "A probe network package instructs the probe to network with up to 7 other probes.",
              __typename: "ProbeEquipment",
            },
            {
              id: "radio-transceiver",
              name: "Radio Transceiver",
              size: 1,
              count: 54,
              description:
                "A radio transceiver is used to let the probe communicate.",
              __typename: "ProbeEquipment",
            },
            {
              id: "video-camera",
              name: "Video Camera",
              size: 1,
              count: 47,
              description: "A Video Camera can take still or moving pictures.",
              __typename: "ProbeEquipment",
            },
            {
              id: "communications-signal-booster",
              name: "Communications Signal Booster",
              size: 2,
              count: 38,
              description:
                "A Communications Signal Booster gives the probe's radio more range.",
              __typename: "ProbeEquipment",
            },
            {
              id: "encoding-sequencer",
              name: "Encoding Sequencer",
              size: 2,
              count: 25,
              description:
                "Encodes and encrypts signals, making them more secure.",
              __typename: "ProbeEquipment",
            },
            {
              id: "extra-data-storage",
              name: "Extra Data Storage",
              size: 2,
              count: 61,
              description:
                "Increases the amount of on-board data storage, allowing the probe to store more data.",
              __typename: "ProbeEquipment",
            },
            {
              id: "extra-fuel-cell",
              name: "Extra Fuel Cell",
              size: 2,
              count: 79,
              description:
                "An Extra Fuel Cell lets the probe travel further and perform longer.",
              __typename: "ProbeEquipment",
            },
            {
              id: "sensor-array",
              name: "Sensor Array",
              size: 2,
              count: 120,
              description:
                "The Sensor Array gives the probe general scanning abilities.",
              __typename: "ProbeEquipment",
            },
            {
              id: "chemical-analysis-package",
              name: "Chemical Analysis Package",
              size: 3,
              count: 24,
              description:
                "A Chemical Analysis Package lets the probe research what chemicals it has found.",
              __typename: "ProbeEquipment",
            },
            {
              id: "sample-retrieval-package",
              name: "Sample Retrieval Package",
              size: 3,
              count: 22,
              description:
                "A Sample Retrieval Package lets the probe get something and return it to the ship.",
              __typename: "ProbeEquipment",
            },
            {
              id: "radiation-shielding",
              name: "Radiation Shielding",
              size: 3,
              count: 16,
              description:
                "Protects the probe from moderate levels of radiation.",
              __typename: "ProbeEquipment",
            },
            {
              id: "ecm-package",
              name: "ECM Package",
              size: 4,
              count: 26,
              description:
                "An ECM (Electronic Counter Measures) Package is used to jam electronics.",
              __typename: "ProbeEquipment",
            },
            {
              id: "gas-giant-encounter-package",
              name: "Gas Giant Encounter Package",
              size: 4,
              count: 11,
              description:
                "A Gas Giant Encounter Package allows the probe to research a gas giant.",
              __typename: "ProbeEquipment",
            },
            {
              id: "nebula-encounter-package",
              name: "Nebula Encounter Package",
              size: 4,
              count: 14,
              description:
                "A Nebula Encounter Package allows the probe to research a nebula.",
              __typename: "ProbeEquipment",
            },
            {
              id: "planetary-encounter-package",
              name: "Planetary Encounter Package",
              size: 4,
              count: 14,
              description:
                "A Planetary Encounter Package allows the probe to research a planet.",
              __typename: "ProbeEquipment",
            },
            {
              id: "decoy-package",
              name: "Decoy Package",
              size: 4,
              count: 23,
              description:
                "A Decoy Package sends out signals to make sensor devices detect the probe as a ship.",
              __typename: "ProbeEquipment",
            },
            {
              id: "tractor-beam",
              name: "Tractor Beam",
              size: 5,
              count: 7,
              description:
                "Projects dark matter particles to create areas of negative gravitation. Can be used to pull objects towards the probe.",
              __typename: "ProbeEquipment",
            },
            {
              id: "subspace-encounter-package",
              name: "Subspace Encounter Package",
              size: 5,
              count: 6,
              description:
                "A Subspace Encounter Package allows the probe to research subspace.",
              __typename: "ProbeEquipment",
            },
            {
              id: "solar-encounter-package",
              name: "Solar Encounter Package",
              size: 5,
              count: 19,
              description:
                "A Solar Encounter Package allows the probe to research a star.",
              __typename: "ProbeEquipment",
            },
            {
              id: "transporter-relay",
              name: "Transporter Relay",
              size: 5,
              count: 15,
              description:
                "A transporter relay extends the transporter range of this ship.",
              __typename: "ProbeEquipment",
            },
            {
              id: "hologram-projector-package",
              name: "Hologram Projector Package",
              size: 5,
              count: 5,
              description:
                "A Hologram Projector Package makes the probe look like a ship.",
              __typename: "ProbeEquipment",
            },
            {
              id: "metaphasic-shield-generator",
              name: "Metaphasic Shield Generator",
              size: 6,
              count: 7,
              description:
                "Shield Generator that can construct a Shield Grid with other probes up to 2,500 Km protecting from radiation.",
              __typename: "ProbeEquipment",
            },
          ],
          __typename: "ProbeType",
        },
        {
          id: "class-iii",
          name: "Class III Probe",
          size: 16,
          count: 30,
          description:
            "This is the largest standard probe. It can hold up to 16 units of equipment. Use for probe networks and general purposes.",
          availableEquipment: [
            {
              id: "probe-network-package",
              name: "Probe Network Package",
              size: 1,
              count: 60,
              description:
                "A probe network package instructs the probe to network with up to 7 other probes.",
              __typename: "ProbeEquipment",
            },
            {
              id: "radio-transceiver",
              name: "Radio Transceiver",
              size: 1,
              count: 54,
              description:
                "A radio transceiver is used to let the probe communicate.",
              __typename: "ProbeEquipment",
            },
            {
              id: "video-camera",
              name: "Video Camera",
              size: 1,
              count: 47,
              description: "A Video Camera can take still or moving pictures.",
              __typename: "ProbeEquipment",
            },
            {
              id: "communications-signal-booster",
              name: "Communications Signal Booster",
              size: 2,
              count: 38,
              description:
                "A Communications Signal Booster gives the probe's radio more range.",
              __typename: "ProbeEquipment",
            },
            {
              id: "encoding-sequencer",
              name: "Encoding Sequencer",
              size: 2,
              count: 25,
              description:
                "Encodes and encrypts signals, making them more secure.",
              __typename: "ProbeEquipment",
            },
            {
              id: "extra-data-storage",
              name: "Extra Data Storage",
              size: 2,
              count: 61,
              description:
                "Increases the amount of on-board data storage, allowing the probe to store more data.",
              __typename: "ProbeEquipment",
            },
            {
              id: "extra-fuel-cell",
              name: "Extra Fuel Cell",
              size: 2,
              count: 79,
              description:
                "An Extra Fuel Cell lets the probe travel further and perform longer.",
              __typename: "ProbeEquipment",
            },
            {
              id: "sensor-array",
              name: "Sensor Array",
              size: 2,
              count: 120,
              description:
                "The Sensor Array gives the probe general scanning abilities.",
              __typename: "ProbeEquipment",
            },
            {
              id: "chemical-analysis-package",
              name: "Chemical Analysis Package",
              size: 3,
              count: 24,
              description:
                "A Chemical Analysis Package lets the probe research what chemicals it has found.",
              __typename: "ProbeEquipment",
            },
            {
              id: "sample-retrieval-package",
              name: "Sample Retrieval Package",
              size: 3,
              count: 22,
              description:
                "A Sample Retrieval Package lets the probe get something and return it to the ship.",
              __typename: "ProbeEquipment",
            },
            {
              id: "radiation-shielding",
              name: "Radiation Shielding",
              size: 3,
              count: 16,
              description:
                "Protects the probe from moderate levels of radiation.",
              __typename: "ProbeEquipment",
            },
            {
              id: "ecm-package",
              name: "ECM Package",
              size: 4,
              count: 26,
              description:
                "An ECM (Electronic Counter Measures) Package is used to jam electronics.",
              __typename: "ProbeEquipment",
            },
            {
              id: "gas-giant-encounter-package",
              name: "Gas Giant Encounter Package",
              size: 4,
              count: 11,
              description:
                "A Gas Giant Encounter Package allows the probe to research a gas giant.",
              __typename: "ProbeEquipment",
            },
            {
              id: "nebula-encounter-package",
              name: "Nebula Encounter Package",
              size: 4,
              count: 14,
              description:
                "A Nebula Encounter Package allows the probe to research a nebula.",
              __typename: "ProbeEquipment",
            },
            {
              id: "planetary-encounter-package",
              name: "Planetary Encounter Package",
              size: 4,
              count: 14,
              description:
                "A Planetary Encounter Package allows the probe to research a planet.",
              __typename: "ProbeEquipment",
            },
            {
              id: "decoy-package",
              name: "Decoy Package",
              size: 4,
              count: 23,
              description:
                "A Decoy Package sends out signals to make sensor devices detect the probe as a ship.",
              __typename: "ProbeEquipment",
            },
            {
              id: "tractor-beam",
              name: "Tractor Beam",
              size: 5,
              count: 7,
              description:
                "Projects dark matter particles to create areas of negative gravitation. Can be used to pull objects towards the probe.",
              __typename: "ProbeEquipment",
            },
            {
              id: "subspace-encounter-package",
              name: "Subspace Encounter Package",
              size: 5,
              count: 6,
              description:
                "A Subspace Encounter Package allows the probe to research subspace.",
              __typename: "ProbeEquipment",
            },
            {
              id: "solar-encounter-package",
              name: "Solar Encounter Package",
              size: 5,
              count: 19,
              description:
                "A Solar Encounter Package allows the probe to research a star.",
              __typename: "ProbeEquipment",
            },
            {
              id: "transporter-relay",
              name: "Transporter Relay",
              size: 5,
              count: 15,
              description:
                "A transporter relay extends the transporter range of this ship.",
              __typename: "ProbeEquipment",
            },
            {
              id: "hologram-projector-package",
              name: "Hologram Projector Package",
              size: 5,
              count: 5,
              description:
                "A Hologram Projector Package makes the probe look like a ship.",
              __typename: "ProbeEquipment",
            },
            {
              id: "metaphasic-shield-generator",
              name: "Metaphasic Shield Generator",
              size: 6,
              count: 7,
              description:
                "Shield Generator that can construct a Shield Grid with other probes up to 2,500 Km protecting from radiation.",
              __typename: "ProbeEquipment",
            },
          ],
          __typename: "ProbeType",
        },
        {
          id: "defense",
          name: "Defensive Probe",
          size: 20,
          count: 20,
          description:
            "This weapon-like probe has access to additional equipment. You can use it to defend your ship. It holds 20 units of equipment.",
          availableEquipment: [
            {
              id: "probe-network-package",
              name: "Probe Network Package",
              size: 1,
              count: 60,
              description:
                "A probe network package instructs the probe to network with up to 7 other probes.",
              __typename: "ProbeEquipment",
            },
            {
              id: "radio-transceiver",
              name: "Radio Transceiver",
              size: 1,
              count: 54,
              description:
                "A radio transceiver is used to let the probe communicate.",
              __typename: "ProbeEquipment",
            },
            {
              id: "video-camera",
              name: "Video Camera",
              size: 1,
              count: 47,
              description: "A Video Camera can take still or moving pictures.",
              __typename: "ProbeEquipment",
            },
            {
              id: "communications-signal-booster",
              name: "Communications Signal Booster",
              size: 2,
              count: 38,
              description:
                "A Communications Signal Booster gives the probe's radio more range.",
              __typename: "ProbeEquipment",
            },
            {
              id: "encoding-sequencer",
              name: "Encoding Sequencer",
              size: 2,
              count: 25,
              description:
                "Encodes and encrypts signals, making them more secure.",
              __typename: "ProbeEquipment",
            },
            {
              id: "extra-data-storage",
              name: "Extra Data Storage",
              size: 2,
              count: 61,
              description:
                "Increases the amount of on-board data storage, allowing the probe to store more data.",
              __typename: "ProbeEquipment",
            },
            {
              id: "extra-fuel-cell",
              name: "Extra Fuel Cell",
              size: 2,
              count: 79,
              description:
                "An Extra Fuel Cell lets the probe travel further and perform longer.",
              __typename: "ProbeEquipment",
            },
            {
              id: "sensor-array",
              name: "Sensor Array",
              size: 2,
              count: 120,
              description:
                "The Sensor Array gives the probe general scanning abilities.",
              __typename: "ProbeEquipment",
            },
            {
              id: "chemical-analysis-package",
              name: "Chemical Analysis Package",
              size: 3,
              count: 24,
              description:
                "A Chemical Analysis Package lets the probe research what chemicals it has found.",
              __typename: "ProbeEquipment",
            },
            {
              id: "sample-retrieval-package",
              name: "Sample Retrieval Package",
              size: 3,
              count: 22,
              description:
                "A Sample Retrieval Package lets the probe get something and return it to the ship.",
              __typename: "ProbeEquipment",
            },
            {
              id: "radiation-shielding",
              name: "Radiation Shielding",
              size: 3,
              count: 16,
              description:
                "Protects the probe from moderate levels of radiation.",
              __typename: "ProbeEquipment",
            },
            {
              id: "ecm-package",
              name: "ECM Package",
              size: 4,
              count: 26,
              description:
                "An ECM (Electronic Counter Measures) Package is used to jam electronics.",
              __typename: "ProbeEquipment",
            },
            {
              id: "gas-giant-encounter-package",
              name: "Gas Giant Encounter Package",
              size: 4,
              count: 11,
              description:
                "A Gas Giant Encounter Package allows the probe to research a gas giant.",
              __typename: "ProbeEquipment",
            },
            {
              id: "nebula-encounter-package",
              name: "Nebula Encounter Package",
              size: 4,
              count: 14,
              description:
                "A Nebula Encounter Package allows the probe to research a nebula.",
              __typename: "ProbeEquipment",
            },
            {
              id: "planetary-encounter-package",
              name: "Planetary Encounter Package",
              size: 4,
              count: 14,
              description:
                "A Planetary Encounter Package allows the probe to research a planet.",
              __typename: "ProbeEquipment",
            },
            {
              id: "decoy-package",
              name: "Decoy Package",
              size: 4,
              count: 23,
              description:
                "A Decoy Package sends out signals to make sensor devices detect the probe as a ship.",
              __typename: "ProbeEquipment",
            },
            {
              id: "tractor-beam",
              name: "Tractor Beam",
              size: 5,
              count: 7,
              description:
                "Projects dark matter particles to create areas of negative gravitation. Can be used to pull objects towards the probe.",
              __typename: "ProbeEquipment",
            },
            {
              id: "subspace-encounter-package",
              name: "Subspace Encounter Package",
              size: 5,
              count: 6,
              description:
                "A Subspace Encounter Package allows the probe to research subspace.",
              __typename: "ProbeEquipment",
            },
            {
              id: "solar-encounter-package",
              name: "Solar Encounter Package",
              size: 5,
              count: 19,
              description:
                "A Solar Encounter Package allows the probe to research a star.",
              __typename: "ProbeEquipment",
            },
            {
              id: "transporter-relay",
              name: "Transporter Relay",
              size: 5,
              count: 15,
              description:
                "A transporter relay extends the transporter range of this ship.",
              __typename: "ProbeEquipment",
            },
            {
              id: "hologram-projector-package",
              name: "Hologram Projector Package",
              size: 5,
              count: 5,
              description:
                "A Hologram Projector Package makes the probe look like a ship.",
              __typename: "ProbeEquipment",
            },
            {
              id: "metaphasic-shield-generator",
              name: "Metaphasic Shield Generator",
              size: 6,
              count: 7,
              description:
                "Shield Generator that can construct a Shield Grid with other probes up to 2,500 Km protecting from radiation.",
              __typename: "ProbeEquipment",
            },
            {
              id: "self-destruct-kit",
              name: "Self-Destruct Kit",
              size: 1,
              count: 17,
              description:
                "A Self-Destruct Kit allows the probe to receive a self-destruct signal from the station.",
              __typename: "ProbeEquipment",
            },
            {
              id: "warp-nacelle",
              name: "Warp Nacelle",
              size: 1,
              count: 20,
              description:
                "A Warp Nacelle (warp core included) allows the probe to travel at warp speed.",
              __typename: "ProbeEquipment",
            },
            {
              id: "targeting-sensors",
              name: "Targeting Sensors",
              size: 2,
              count: 21,
              description:
                "Targeting sensors extends the targeting range of the probe.",
              __typename: "ProbeEquipment",
            },
            {
              id: "proximity-destruct",
              name: "Proximity Destruct",
              size: 2,
              count: 20,
              description:
                "A Proximity Self-Destruct detector tells the probe to blow-up when an enemy is near.",
              __typename: "ProbeEquipment",
            },
            {
              id: "titanium-armor-alloy",
              name: "Titanium Armor Alloy",
              size: 2,
              count: 15,
              description:
                "Titanium Armor Alloy increases the probe's defenses.",
              __typename: "ProbeEquipment",
            },
            {
              id: "stealth-field",
              name: "Stealth Field",
              size: 3,
              count: 7,
              description:
                "A stealth field masks the probe making it harder to detect.",
              __typename: "ProbeEquipment",
            },
            {
              id: "phaser-head",
              name: "Phaser Head",
              size: 3,
              count: 27,
              description:
                "A Phaser Head allows the probe to fire one phaser shot at an enemy ship.",
              __typename: "ProbeEquipment",
            },
          ],
          __typename: "ProbeType",
        },
        {
          id: "science",
          name: "Science Probe",
          size: 12,
          count: 20,
          description:
            "This probe can use special emitters and detectors for specific scientific experiments. It holds 12 units of equipment.",
          availableEquipment: [
            {
              id: "probe-network-package",
              name: "Probe Network Package",
              size: 1,
              count: 60,
              description:
                "A probe network package instructs the probe to network with up to 7 other probes.",
              __typename: "ProbeEquipment",
            },
            {
              id: "radio-transceiver",
              name: "Radio Transceiver",
              size: 1,
              count: 54,
              description:
                "A radio transceiver is used to let the probe communicate.",
              __typename: "ProbeEquipment",
            },
            {
              id: "video-camera",
              name: "Video Camera",
              size: 1,
              count: 47,
              description: "A Video Camera can take still or moving pictures.",
              __typename: "ProbeEquipment",
            },
            {
              id: "communications-signal-booster",
              name: "Communications Signal Booster",
              size: 2,
              count: 38,
              description:
                "A Communications Signal Booster gives the probe's radio more range.",
              __typename: "ProbeEquipment",
            },
            {
              id: "encoding-sequencer",
              name: "Encoding Sequencer",
              size: 2,
              count: 25,
              description:
                "Encodes and encrypts signals, making them more secure.",
              __typename: "ProbeEquipment",
            },
            {
              id: "extra-data-storage",
              name: "Extra Data Storage",
              size: 2,
              count: 61,
              description:
                "Increases the amount of on-board data storage, allowing the probe to store more data.",
              __typename: "ProbeEquipment",
            },
            {
              id: "extra-fuel-cell",
              name: "Extra Fuel Cell",
              size: 2,
              count: 79,
              description:
                "An Extra Fuel Cell lets the probe travel further and perform longer.",
              __typename: "ProbeEquipment",
            },
            {
              id: "sensor-array",
              name: "Sensor Array",
              size: 2,
              count: 120,
              description:
                "The Sensor Array gives the probe general scanning abilities.",
              __typename: "ProbeEquipment",
            },
            {
              id: "chemical-analysis-package",
              name: "Chemical Analysis Package",
              size: 3,
              count: 24,
              description:
                "A Chemical Analysis Package lets the probe research what chemicals it has found.",
              __typename: "ProbeEquipment",
            },
            {
              id: "sample-retrieval-package",
              name: "Sample Retrieval Package",
              size: 3,
              count: 22,
              description:
                "A Sample Retrieval Package lets the probe get something and return it to the ship.",
              __typename: "ProbeEquipment",
            },
            {
              id: "radiation-shielding",
              name: "Radiation Shielding",
              size: 3,
              count: 16,
              description:
                "Protects the probe from moderate levels of radiation.",
              __typename: "ProbeEquipment",
            },
            {
              id: "ecm-package",
              name: "ECM Package",
              size: 4,
              count: 26,
              description:
                "An ECM (Electronic Counter Measures) Package is used to jam electronics.",
              __typename: "ProbeEquipment",
            },
            {
              id: "gas-giant-encounter-package",
              name: "Gas Giant Encounter Package",
              size: 4,
              count: 11,
              description:
                "A Gas Giant Encounter Package allows the probe to research a gas giant.",
              __typename: "ProbeEquipment",
            },
            {
              id: "nebula-encounter-package",
              name: "Nebula Encounter Package",
              size: 4,
              count: 14,
              description:
                "A Nebula Encounter Package allows the probe to research a nebula.",
              __typename: "ProbeEquipment",
            },
            {
              id: "planetary-encounter-package",
              name: "Planetary Encounter Package",
              size: 4,
              count: 14,
              description:
                "A Planetary Encounter Package allows the probe to research a planet.",
              __typename: "ProbeEquipment",
            },
            {
              id: "decoy-package",
              name: "Decoy Package",
              size: 4,
              count: 23,
              description:
                "A Decoy Package sends out signals to make sensor devices detect the probe as a ship.",
              __typename: "ProbeEquipment",
            },
            {
              id: "tractor-beam",
              name: "Tractor Beam",
              size: 5,
              count: 7,
              description:
                "Projects dark matter particles to create areas of negative gravitation. Can be used to pull objects towards the probe.",
              __typename: "ProbeEquipment",
            },
            {
              id: "subspace-encounter-package",
              name: "Subspace Encounter Package",
              size: 5,
              count: 6,
              description:
                "A Subspace Encounter Package allows the probe to research subspace.",
              __typename: "ProbeEquipment",
            },
            {
              id: "solar-encounter-package",
              name: "Solar Encounter Package",
              size: 5,
              count: 19,
              description:
                "A Solar Encounter Package allows the probe to research a star.",
              __typename: "ProbeEquipment",
            },
            {
              id: "transporter-relay",
              name: "Transporter Relay",
              size: 5,
              count: 15,
              description:
                "A transporter relay extends the transporter range of this ship.",
              __typename: "ProbeEquipment",
            },
            {
              id: "hologram-projector-package",
              name: "Hologram Projector Package",
              size: 5,
              count: 5,
              description:
                "A Hologram Projector Package makes the probe look like a ship.",
              __typename: "ProbeEquipment",
            },
            {
              id: "metaphasic-shield-generator",
              name: "Metaphasic Shield Generator",
              size: 6,
              count: 7,
              description:
                "Shield Generator that can construct a Shield Grid with other probes up to 2,500 Km protecting from radiation.",
              __typename: "ProbeEquipment",
            },
            {
              id: "tachyon-emitter",
              name: "Tachyon Emitter",
              size: 3,
              count: 8,
              description:
                "A Tachyon Emitter allows the probe to interact with tachyon particles.",
              __typename: "ProbeEquipment",
            },
            {
              id: "resonance-emitter",
              name: "Resonance Emitter",
              size: 3,
              count: 8,
              description:
                "A Resonance Emitter allows the probe to interact with resonating particles.",
              __typename: "ProbeEquipment",
            },
            {
              id: "lithium-emitter",
              name: "Lithium Emitter",
              size: 3,
              count: 10,
              description:
                "A Lithium Emitter allows the probe to interact with lithium particles.",
              __typename: "ProbeEquipment",
            },
            {
              id: "carbon-emitter",
              name: "Carbon Emitter",
              size: 3,
              count: 8,
              description:
                "A Carbon Emitter allows the probe to interact with carbon particles.",
              __typename: "ProbeEquipment",
            },
            {
              id: "radiation-emitter",
              name: "Radiation Emitter",
              size: 3,
              count: 8,
              description:
                "A Radiation Emitter allows the probe to interact with radioactive particles.",
              __typename: "ProbeEquipment",
            },
            {
              id: "oxygen-emitter",
              name: "Oxygen Emitter",
              size: 3,
              count: 8,
              description:
                "An Oxygen Emitter allows the probe to interact with oxygen particles.",
              __typename: "ProbeEquipment",
            },
            {
              id: "hydrogen-emitter",
              name: "Hydrogen Emitter",
              size: 3,
              count: 8,
              description:
                "A Hydrogen Emitter allows the probe to interact with hydrogen particles.",
              __typename: "ProbeEquipment",
            },
            {
              id: "helium-emitter",
              name: "Helium Emitter",
              size: 3,
              count: 8,
              description:
                "A Helium Emitter allows the probe to interact with helium particles.",
              __typename: "ProbeEquipment",
            },
            {
              id: "graviton-emitter",
              name: "Graviton Emitter",
              size: 3,
              count: 8,
              description:
                "A Graviton Emitter allows the probe to interact with graviton particles.",
              __typename: "ProbeEquipment",
            },
            {
              id: "magnetic-emitter",
              name: "Magnetic Emitter",
              size: 3,
              count: 8,
              description:
                "A Magnetic Emitter allows the probe to interact with magnetic particles.",
              __typename: "ProbeEquipment",
            },
          ],
          __typename: "ProbeType",
        },
      ],
      processedData: "",
      probes: [],
      damage: {
        damaged: false,
        report: null,
        __typename: "Damage",
      },
      power: {
        power: 0,
        powerLevels: [],
        __typename: "Power",
      },
      __typename: "Probes",
    },
  ],
  /* 
  query Ship($simulatorId: ID!) {
  railgun(simulatorId: $simulatorId) {
    id
    simulatorId
    name
    displayName
    ammo
    maxAmmo
    availableAmmo
    damage {
      damaged
      report
      __typename
    }
    power {
      power
      powerLevels
      __typename
    }
    __typename
  }
}
*/
  railgun: [
    {
      id: "1bf5361c-3e98-4547-986c-d08d6bf090b0",
      simulatorId: "e0b50c95-092b-4010-a08f-89fbdea782df",
      name: "Railgun",
      displayName: "Railgun",
      ammo: 0,
      maxAmmo: 25,
      availableAmmo: 250,
      damage: {
        damaged: false,
        report: null,
        __typename: "Damage",
      },
      power: {
        power: 5,
        powerLevels: [5],
        __typename: "Power",
      },
      __typename: "Railgun",
    },
  ],
  /* query Ship($simulatorId: ID!) {
  targeting(simulatorId: $simulatorId) {
    id
    simulatorId
    type
    name
    displayName
    range
    quadrants
    coordinateTargeting
    interference
    calculatedTarget {
      x
      y
      z
      __typename
    }
    enteredTarget {
      x
      y
      z
      __typename
    }
    targetedSensorContact {
      id
      name
      picture
      __typename
    }
    classes {
      id
      name
      size
      icon
      speed
      picture
      quadrant
      moving

      __typename
    }
    contacts {
      id
      quadrant
      icon
      size
      name
      class
      speed
      system
      picture
      targeted
      destroyed
      moving
      __typename
    }
    damage {
      damaged
      report
      __typename
    }
    power {
      power
      powerLevels
      __typename
    }
    __typename
  }
}
 */
  targeting: [
    {
      id: "d0b63c32-75f7-4896-9b99-cf86bf7cb09f",
      simulatorId: "e0b50c95-092b-4010-a08f-89fbdea782df",
      type: "Targeting",
      name: "Targeting",
      displayName: "Targeting",
      range: 0.33,
      quadrants: false,
      coordinateTargeting: false,
      interference: 0.22,
      calculatedTarget: null,
      enteredTarget: null,
      targetedSensorContact: null,
      classes: [
        {
          id: "92cc915a-d997-450e-b08c-edcf7331600d",
          name: "Target",
          size: 1,
          icon: "/Sensor Contacts/Icons/Default.svg",
          speed: 1,
          picture: "/Sensor Contacts/Pictures/Default.png",
          quadrant: 1,
          moving: true,
          __typename: "TargetingClass",
        },
      ],
      contacts: [
        {
          id: "99a6a194-458a-4153-93cb-f540e136ec69",
          quadrant: 1,
          icon: "/Sensor Contacts/Icons/Default.svg",
          size: 1,
          name: "Target",
          class: "92cc915a-d997-450e-b08c-edcf7331600d",
          speed: 1,
          system: "General",
          picture: "/Sensor Contacts/Pictures/Default.png",
          targeted: false,
          destroyed: false,
          moving: true,
          __typename: "TargetingContact",
        },
        {
          id: "c1334a79-1c97-4d15-90a5-24f0b60e1e66",
          quadrant: 1,
          icon: "/Sensor Contacts/Icons/Default.svg",
          size: 1,
          name: "Target",
          class: "92cc915a-d997-450e-b08c-edcf7331600d",
          speed: 1,
          system: "General",
          picture: "/Sensor Contacts/Pictures/Default.png",
          targeted: false,
          destroyed: false,
          moving: true,
          __typename: "TargetingContact",
        },
      ],
      damage: {
        damaged: false,
        report: null,
        __typename: "Damage",
      },
      power: {
        power: 2,
        powerLevels: [2],
        __typename: "Power",
      },
      __typename: "Targeting",
    },
  ],
  /* query Ship($simulatorId: ID!) {
  phasers(simulatorId: $simulatorId) {
    id
    simulatorId
   name
    arc
    coolant
    holdToCharge
    beams {
      id
      state
      charge
      heat
      __typename
    }
    damage {
      damaged
      report
      __typename
    }
    power {
      power
      powerLevels
      __typename
    }
    __typename
  }
}
 */
  phasers: [
    {
      id: "64cfa652-b984-4f58-a430-e379043caa66",
      simulatorId: "e0b50c95-092b-4010-a08f-89fbdea782df",
      name: "Phaser",
      arc: 0.5,
      coolant: 1,
      holdToCharge: false,
      beams: [
        {
          id: "9d563be3-e933-4a45-8c1a-abcdd3060d8e",
          state: "idle",
          charge: 0,
          heat: 0,
          __typename: "PhaserBeam",
        },
        {
          id: "1c551834-d645-4d24-908a-29fad4ea00f0",
          state: "idle",
          charge: 0,
          heat: 0,
          __typename: "PhaserBeam",
        },
        {
          id: "35add545-7d3a-43c4-a9a7-7b846f39301a",
          state: "idle",
          charge: 0,
          heat: 0,
          __typename: "PhaserBeam",
        },
        {
          id: "89d9012a-d3f8-4785-9e80-0278181b887d",
          state: "idle",
          charge: 0,
          heat: 0,
          __typename: "PhaserBeam",
        },
        {
          id: "331f3f9f-909b-4121-82e4-08b11edce324",
          state: "idle",
          charge: 0,
          heat: 0,
          __typename: "PhaserBeam",
        },
        {
          id: "82ea59dc-616a-48dc-b42c-c639fabc3608",
          state: "idle",
          charge: 0,
          heat: 0,
          __typename: "PhaserBeam",
        },
        {
          id: "69009cf3-9f81-4720-b91a-1896164e5d15",
          state: "idle",
          charge: 0,
          heat: 0,
          __typename: "PhaserBeam",
        },
        {
          id: "51e63203-42c1-416b-af07-d8f1b60460f7",
          state: "idle",
          charge: 0,
          heat: 0,
          __typename: "PhaserBeam",
        },
      ],
      damage: {
        damaged: false,
        report: null,
        __typename: "Damage",
      },
      power: {
        power: 6,
        powerLevels: [6],
        __typename: "Power",
      },
      __typename: "Phaser",
    },
  ],
  /* query Ship($simulatorId: ID!) {
  torpedos(simulatorId: $simulatorId) {
    id
    simulatorId
    name
    loaded
    state
    inventory {
      id
      type
      probe {
        id
      }
      __typename
    }
    damage {
      damaged
      report
      __typename
    }
    power {
      power
      powerLevels
      __typename
    }
    __typename
  }
}
 */
  torpedos: [
    {
      id: "18c5016b-fa07-489e-a87d-5e8b7af2cb89",
      simulatorId: "e0b50c95-092b-4010-a08f-89fbdea782df",
      name: "Fore Launcher",
      loaded: null,
      state: "idle",
      inventory: [
        {
          id: "5a88c6fd-6019-4b8c-b862-46c44ecd60cc",
          type: "photon",
          probe: null,
          __typename: "Warhead",
        },
        {
          id: "596f6dc6-95b5-44fc-bfdf-a75c4baa3141",
          type: "photon",
          probe: null,
          __typename: "Warhead",
        },
        {
          id: "506b2011-9fc8-48f3-8d21-4a80984bfdde",
          type: "photon",
          probe: null,
          __typename: "Warhead",
        },
        {
          id: "52ee16da-6fcb-4329-a1c7-ffcc0f9c885f",
          type: "photon",
          probe: null,
          __typename: "Warhead",
        },
        {
          id: "49bd14e2-d1ca-4094-ac17-bd922fbc4826",
          type: "photon",
          probe: null,
          __typename: "Warhead",
        },
        {
          id: "97e395c1-a519-43d4-adfc-edc2dcefe624",
          type: "photon",
          probe: null,
          __typename: "Warhead",
        },
        {
          id: "f98b04cc-67be-4ce0-93a4-6b3d02c68b01",
          type: "photon",
          probe: null,
          __typename: "Warhead",
        },
        {
          id: "c5623404-13a3-4404-991b-215cf4cb5225",
          type: "photon",
          probe: null,
          __typename: "Warhead",
        },
        {
          id: "8df592d1-0cd4-4fc3-8388-82070838419f",
          type: "quantum",
          probe: null,
          __typename: "Warhead",
        },
        {
          id: "39ca8e19-8df3-4e1f-bd3d-03a9aa3911c6",
          type: "quantum",
          probe: null,
          __typename: "Warhead",
        },
      ],
      damage: {
        damaged: false,
        report: null,
        __typename: "Damage",
      },
      power: {
        power: 5,
        powerLevels: [5],
        __typename: "Power",
      },
      __typename: "Torpedo",
    },
    {
      id: "8f0d2765-4c85-4c65-a293-314dae2da6c1",
      simulatorId: "e0b50c95-092b-4010-a08f-89fbdea782df",
      name: "Aft Launcher",
      loaded: null,
      state: "idle",
      inventory: [
        {
          id: "959a78d8-f6b8-468d-a45e-d6f2406af318",
          type: "photon",
          probe: null,
          __typename: "Warhead",
        },
        {
          id: "3b52ab9b-2c29-41b6-b106-6dc288aa9a19",
          type: "photon",
          probe: null,
          __typename: "Warhead",
        },
        {
          id: "bb8e1eb7-3abc-4630-adfa-db5c6297e46a",
          type: "photon",
          probe: null,
          __typename: "Warhead",
        },
        {
          id: "f39d2ca2-605e-4727-9d2d-0f3483ca17f5",
          type: "photon",
          probe: null,
          __typename: "Warhead",
        },
        {
          id: "78c37992-7c2a-42de-baed-4c8c066c5a16",
          type: "photon",
          probe: null,
          __typename: "Warhead",
        },
        {
          id: "b22d945b-bb37-45ee-ba44-924791d7a287",
          type: "photon",
          probe: null,
          __typename: "Warhead",
        },
        {
          id: "65af5504-d138-4bb8-a082-2268a278bb24",
          type: "photon",
          probe: null,
          __typename: "Warhead",
        },
        {
          id: "62b06460-6045-4157-8060-bb7228a54e57",
          type: "photon",
          probe: null,
          __typename: "Warhead",
        },
        {
          id: "06c78aef-4e7e-439e-b974-34884adb492a",
          type: "quantum",
          probe: null,
          __typename: "Warhead",
        },
        {
          id: "4962a48e-3ede-43ab-a826-ec5849c18dfa",
          type: "quantum",
          probe: null,
          __typename: "Warhead",
        },
      ],
      damage: {
        damaged: false,
        report: null,
        __typename: "Damage",
      },
      power: {
        power: 5,
        powerLevels: [5],
        __typename: "Power",
      },
      __typename: "Torpedo",
    },
  ],
};
