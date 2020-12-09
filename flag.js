import React, { useState } from "react";
import "./styles.css";

const flagDictionary = {
  "🏁": "Race Flag/ Checkered Flag",
  "🚩": "Red flag/ Golf Post Flag",
  "🎌": "Crossed Flags",
  "🏴": "Black Flag",
  "🏳️": "White Flag / Surrender Flag",
  "🏳️‍🌈": "Pride Flag/ LGBT Flag/ Rainbow Flag",
  "🏳️‍⚧️": "Transgender Flag",
  "🏴‍☠️": "Pirate Flag",
  "🇦🇨": "Flag of Ascension Island",
  "🇦🇩": "Flag of Andorra",
  "🇦🇪": "Flag of United Arab Emirates",
  "🇦🇫": "Flag for Afghanistan",
  "🇦🇬": "Flag of Antigua & Barbuda",
  "🇦🇮": "Flag of Anguilla",
  "🇦🇱": "Flag of Albania",
  "🇦🇲": "Flag of Armenia",
  "🇦🇴": "Flag of Angola",
  "🇦🇶": "Flag of Antarctica",
  "🇦🇷": "Flag of Argentina",
  "🇦🇸": "Flag of American Samoa",
  "🇦🇹": "Flag of Austria",
  "🇦🇺": "Flag of Australia",
  "🇦🇼": "Flag of Aruba",
  "🇦🇽": "Flag of Åland Islands",
  "🇦🇿": "Flag of Azerbaijan",
  "🇧🇦": "Flag of Bosnia & Herzegovina",
  "🇧🇧": "Flag of Barbados",
  "🇧🇩": "Flag of Bangladesh",
  "🇧🇪": "Flag of Belgium",
  "🇧🇫": "Flag of Burkina Faso",
  "🇧🇬": "Flag of Bulgaria",
  "🇧🇭": "Flag of Bahrain",
  "🇧🇮": "Flag of Burundi",
  "🇧🇯": "Flag of Benin",
  "🇧🇱": "Flag of St. Barthélemy",
  "🇧🇲": "Flag of Bermuda",
  "🇧🇳": "Flag of Brunei",
  "🇧🇴": "Flag of Bolivia",
  "🇧🇶": "Flag of Caribbean Netherlands",
  "🇧🇷": "Flag of Brazil",
  "🇧🇸": "Flag of Bahamas",
  "🇧🇹": "Flag of Bhutan",
  "🇧🇻": "Flag of Bouvet Island",
  "🇧🇼": "Flag of Botswana",
  "🇧🇾": "Flag of Belarus",
  "🇧🇿": "Flag of Belize",
  "🇨🇦": "Flag of Canada",
  "🇨🇨": "Flag of Cocos (Keeling) Islands",
  "🇨🇩": "Flag of Congo - Kinshasa",
  "🇨🇫": "Flag of Central African Republic",
  "🇨🇬": "Flag of Congo - Brazzaville",
  "🇨🇭": "Flag of Switzerland",
  "🇨🇮": "Flag of Côte d’Ivoire",
  "🇨🇰": "Flag of Cook Islands",
  "🇨🇱": "Flag of Chile",
  "🇨🇲": "Flag of Cameroon",
  "🇨🇳": "Flag of China",
  "🇨🇴": "Flag of Colombia",
  "🇨🇵": "Flag of Clipperton Island",
  "🇨🇷": "Flag of Costa Rica",
  "🇨🇺": "Flag of Cuba",
  "🇨🇻": "Flag of Cape Verde",
  "🇨🇼": "Flag of Curaçao",
  "🇨🇽": "Flag of Christmas Island",
  "🇨🇾": "Flag of Cyprus",
  "🇨🇿": "Flag of Czechia",
  "🇩🇪": "Flag of Germany",
  "🇩🇬": "Flag of Diego Garcia",
  "🇩🇯": "Flag of Djibouti",
  "🇩🇰": "Flag of Denmark",
  "🇩🇲": "Flag of Dominica",
  "🇩🇴": "Flag of Dominican Republic",
  "🇩🇿": "Flag of Algeria",
  "🇪🇦": "Flag of Ceuta & Melilla",
  "🇪🇨": "Flag of Ecuador",
  "🇪🇪": "Flag of Estonia",
  "🇪🇬": "Flag of Egypt",
  "🇪🇭": "Flag of Western Sahara",
  "🇪🇷": "Flag of Eritrea",
  "🇪🇸": "Flag of Spain",
  "🇪🇹": "Flag of Ethiopia",
  "🇪🇺": "Flag European Union",
  "🇫🇮": "Flag of Finland",
  "🇫🇯": "Flag of Fiji",
  "🇫🇰": "Flag of Falkland Islands",
  "🇫🇲": "Flag of Micronesia",
  "🇫🇴": "Flag of Faroe Islands",
  "🇫🇷": "Flag of France",
  "🇬🇦": "Flag of Gabon",
  "🇬🇧": "Flag of United Kingdom",
  "🇬🇩": "Flag of Grenada",
  "🇬🇪": "Flag of Georgia",
  "🇬🇫": "Flag of French Guiana",
  "🇬🇬": "Flag of Guernsey",
  "🇬🇭": "Flag of Ghana",
  "🇬🇮": "Flag of Gibraltar",
  "🇬🇱": "Flag of Greenland",
  "🇬🇲": "Flag of Gambia",
  "🇬🇳": "Flag of Guinea",
  "🇬🇵": "Flag of Guadeloupe",
  "🇬🇶": "Flag of Equatorial Guinea",
  "🇬🇷": "Flag of Greece",
  "🇬🇸": "Flag of South Georgia & South Sandwich Islands",
  "🇬🇹": "Flag of Guatemala",
  "🇬🇺": "Flag of Guam",
  "🇬🇼": "Flag of Guinea-Bissau",
  "🇬🇾": "Flag of Guyana",
  "🇭🇰": "Flag of Hong Kong SAR China",
  "🇭🇲": "Flag of Heard & McDonald Islands",
  "🇭🇳": "Flag of Honduras",
  "🇭🇷": "Flag of Croatia",
  "🇭🇹": "Flag of Haiti",
  "🇭🇺": "Flag of Hungary",
  "🇮🇨": "Flag of Canary Islands",
  "🇮🇩": "Flag of Indonesia",
  "🇮🇪": "Flag of Ireland",
  "🇮🇱": "Flag of Israel",
  "🇮🇲": "Flag of Isle of Man",
  "🇮🇳": "Flag of India",
  "🇮🇴": "Flag of British Indian Ocean Territory",
  "🇮🇶": "Flag of Iraq",
  "🇮🇷": "Flag of Iran",
  "🇮🇸": "Flag of Iceland",
  "🇮🇹": "Flag of Italy",
  "🇯🇪": "Flag of Jersey",
  "🇯🇲": "Flag of Jamaica",
  "🇯🇴": "Flag of Jordan",
  "🇯🇵": "Flag of Japan",
  "🇰🇪": "Flag of Kenya",
  "🇰🇬": "Flag of Kyrgyzstan",
  "🇰🇭": "Flag of Cambodia",
  "🇰🇮": "Flag of Kiribati",
  "🇰🇲": "Flag of Comoros",
  "🇰🇳": "Flag of St. Kitts & Nevis",
  "🇰🇵": "Flag of North Korea",
  "🇰🇷": "Flag of South Korea",
  "🇰🇼": "Flag of Kuwait",
  "🇰🇾": "Flag of Cayman Islands",
  "🇰🇿": "Flag of Kazakhstan",
  "🇱🇦": "Flag of Laos",
  "🇱🇧": "Flag of Lebanon",
  "🇱🇨": "Flag of St. Lucia",
  "🇱🇮": "Flag of Liechtenstein",
  "🇱🇰": "Flag of Sri Lanka",
  "🇱🇷": "Flag of Liberia",
  "🇱🇸": "Flag of Lesotho",
  "🇱🇹": "Flag of Lithuania",
  "🇱🇺": "Flag of Luxembourg",
  "🇱🇻": "Flag of Latvia",
  "🇱🇾": "Flag of Libya",
  "🇲🇦": "Flag of Morocco",
  "🇲🇨": "Flag of Monaco",
  "🇲🇩": "Flag of Moldova",
  "🇲🇪": "Flag of Montenegro",
  "🇲🇫": "Flag of St. Martin",
  "🇲🇬": "Flag of Madagascar",
  "🇲🇭": "Flag of Marshall Islands",
  "🇲🇰": "Flag of North Macedonia",
  "🇲🇱": "Flag of Mali",
  "🇲🇲": "Flag of Myanmar (Burma)",
  "🇲🇳": "Flag of Mongolia",
  "🇲🇴": "Flag of Macao Sar China",
  "🇲🇵": "Flag of Northern Mariana Islands",
  "🇲🇶": "Flag of Martinique",
  "🇲🇷": "Flag of Mauritania",
  "🇲🇸": "Flag of Montserrat",
  "🇲🇹": "Flag of Malta",
  "🇲🇺": "Flag of Mauritius",
  "🇲🇻": "Flag of Maldives",
  "🇲🇼": "Flag of Malawi",
  "🇲🇽": "Flag of Mexico",
  "🇲🇾": "Flag of Malaysia",
  "🇲🇿": "Flag of Mozambique",
  "🇳🇦": "Flag of Namibia",
  "🇳🇨": "Flag of New Caledonia",
  "🇳🇪": "Flag of Niger",
  "🇳🇫": "Flag of Norfolk Island",
  "🇳🇬": "Flag of Nigeria",
  "🇳🇮": "Flag of Nicaragua",
  "🇳🇱": "Flag of Netherlands",
  "🇳🇴": "Flag of Norway",
  "🇳🇵": "Flag of Nepal",
  "🇳🇷": "Flag of Nauru",
  "🇳🇺": "Flag of Niue",
  "🇳🇿": "Flag of New Zealand",
  "🇴🇲": "Flag of Oman",
  "🇵🇦": "Flag of Panama",
  "🇵🇪": "Flag of Peru",
  "🇵🇫": "Flag of French Polynesia",
  "🇵🇬": "Flag of Papua New Guinea",
  "🇵🇭": "Flag of Philippines",
  "🇵🇰": "Flag of Pakistan",
  "🇵🇱": "Flag of Poland",
  "🇵🇲": "Flag of St. Pierre & Miquelon",
  "🇵🇳": "Flag of Pitcairn Islands",
  "🇵🇷": "Flag of Puerto Rico",
  "🇵🇸": "Flag of Palestinian Territories",
  "🇵🇹": "Flag of Portugal",
  "🇵🇼": "Flag of Palau",
  "🇵🇾": "Flag of Paraguay",
  "🇶🇦": "Flag of Qatar",
  "🇷🇪": "Flag of Réunion",
  "🇷🇴": "Flag of Romania",
  "🇷🇸": "Flag of Serbia",
  "🇷🇺": "Flag of Russia",
  "🇷🇼": "Flag of Rwanda",
  "🇸🇦": "Flag of Saudi Arabia",
  "🇸🇧": "Flag of Solomon Islands",
  "🇸🇨": "Flag of Seychelles",
  "🇸🇩": "Flag of Sudan",
  "🇸🇪": "Flag of Sweden",
  "🇸🇬": "Flag of Singapore",
  "🇸🇭": "Flag of St. Helena",
  "🇸🇮": "Flag of Slovenia",
  "🇸🇯": "Flag of Svalbard & Jan Mayen",
  "🇸🇰": "Flag of Slovakia",
  "🇸🇱": "Flag of Sierra Leone",
  "🇸🇲": "Flag of San Marino",
  "🇸🇳": "Flag of Senegal",
  "🇸🇴": "Flag of Somalia",
  "🇸🇷": "Flag of Suriname",
  "🇸🇸": "Flag of South Sudan",
  "🇸🇹": "Flag of São Tomé & Príncipe",
  "🇸🇻": "Flag of El Salvador",
  "🇸🇽": "Flag of Sint Maarten",
  "🇸🇾": "Flag of Syria",
  "🇸🇿": "Flag of Eswatini",
  "🇹🇦": "Flag of Tristan Da Cunha",
  "🇹🇨": "Flag of Turks & Caicos Islands",
  "🇹🇩": "Flag of Chad",
  "🇹🇫": "Flag of French Southern Territories",
  "🇹🇬": "Flag of Togo",
  "🇹🇭": "Flag of Thailand",
  "🇹🇯": "Flag of Tajikistan",
  "🇹🇰": "Flag of Tokelau",
  "🇹🇱": "Flag of Timor-Leste",
  "🇹🇲": "Flag of Turkmenistan",
  "🇹🇳": "Flag of Tunisia",
  "🇹🇴": "Flag of Tonga",
  "🇹🇷": "Flag of Turkey",
  "🇹🇹": "Flag of Trinidad & Tobago",
  "🇹🇻": "Flag of Tuvalu",
  "🇹🇼": "Flag of Taiwan",
  "🇹🇿": "Flag of Tanzania",
  "🇺🇦": "Flag of Ukraine",
  "🇺🇬": "Flag of Uganda",
  "🇺🇲": "Flag of U.S. Outlying Islands",
  "🇺🇳": "Flag of United Nations",
  "🇺🇸": "Flag of United States",
  "🇺🇾": "Flag of Uruguay",
  "🇺🇿": "Flag of Uzbekistan",
  "🇻🇦": "Flag of Vatican City",
  "🇻🇨": "Flag of St. Vincent & Grenadines",
  "🇻🇪": "Flag of Venezuela",
  "🇻🇬": "Flag of British Virgin Islands",
  "🇻🇮": "Flag of U.S. Virgin Islands",
  "🇻🇳": "Flag of Vietnam",
  "🇻🇺": "Flag of Vanuatu",
  "🇼🇫": "Flag of Wallis & Futuna",
  "🇼🇸": "Flag of Samoa",
  "🇽🇰": "Flag of Kosovo",
  "🇾🇪": "Flag of Yemen",
  "🇾🇹": "Flag of Mayotte",
  "🇿🇦": "Flag of South Africa",
  "🇿🇲": "Flag of Zambia",
  "🇿🇼": "Flag of Zimbabwe",
  "🏴󠁧󠁢󠁥󠁮󠁧󠁿": "Flag of England",
  "🏴󠁧󠁢󠁳󠁣󠁴󠁿": "Flag: Scotland",
  "":""
};

const flags = Object.keys(flagDictionary);

export default function App() {
  const [flag, setFlag] = useState("");
  const [meaning, setMeaning] = useState("flag name will appear here..");

  function changeHandler(event) {
    const inputFlag = event.target.value;
    setFlag(inputFlag);
    if (inputFlag in flagDictionary) setMeaning(flagDictionary[inputFlag]);
    else setMeaning("can not identify flag");
  }

  function flagClickHandler(inputFlag) {
    setMeaning(flagDictionary[inputFlag]);
  }

  return (
    <div className="App">
      <h1>Know your Flag</h1>
      <input
        onChange={changeHandler}
        value={flag}
        placeholder={"Search your flag"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />
      <h2> {flag} </h2> {}
      <h3> {meaning} </h3> {}
      {flags.map((flag) => (
        <span
          onClick={() => flagClickHandler(flag)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {flag}{" "}
        </span>
      ))}
    </div>
  );
}
