// Data pumped from the SVG in worldsvg
const countries = [
	{
		"id": "AD",
		"name": "Andorra"
	},
	{
		"id": "AE",
		"name": "United Arab Emirates"
	},
	{
		"id": "AF",
		"name": "Afghanistan"
	},
	{
		"id": "AG",
		"name": "Antigua and Barbuda"
	},
	{
		"id": "AI",
		"name": "Anguilla"
	},
	{
		"id": "AL",
		"name": "Albania"
	},
	{
		"id": "AM",
		"name": "Armenia"
	},
	{
		"id": "AO",
		"name": "Angola"
	},
	{
		"id": "AR",
		"name": "Argentina"
	},
	{
		"id": "AS",
		"name": "American Samoa"
	},
	{
		"id": "AT",
		"name": "Austria"
	},
	{
		"id": "AU",
		"name": "Australia"
	},
	{
		"id": "AW",
		"name": "Aruba"
	},
	{
		"id": "AX",
		"name": "Aland Islands"
	},
	{
		"id": "AZ",
		"name": "Azerbaijan"
	},
	{
		"id": "BA",
		"name": "Bosnia and Herzegovina"
	},
	{
		"id": "BB",
		"name": "Barbados"
	},
	{
		"id": "BD",
		"name": "Bangladesh"
	},
	{
		"id": "BE",
		"name": "Belgium"
	},
	{
		"id": "BF",
		"name": "Burkina Faso"
	},
	{
		"id": "BG",
		"name": "Bulgaria"
	},
	{
		"id": "BH",
		"name": "Bahrain"
	},
	{
		"id": "BI",
		"name": "Burundi"
	},
	{
		"id": "BJ",
		"name": "Benin"
	},
	{
		"id": "BL",
		"name": "Saint Barthelemy"
	},
	{
		"id": "BN",
		"name": "Brunei Darussalam"
	},
	{
		"id": "BO",
		"name": "Bolivia"
	},
	{
		"id": "BM",
		"name": "Bermuda"
	},
	{
		"id": "BQ",
		"name": "Bonaire,  Saint Eustachius and Saba"
	},
	{
		"id": "BR",
		"name": "Brazil"
	},
	{
		"id": "BS",
		"name": "Bahamas"
	},
	{
		"id": "BT",
		"name": "Bhutan"
	},
	{
		"id": "BV",
		"name": "Bouvet Island"
	},
	{
		"id": "BW",
		"name": "Botswana"
	},
	{
		"id": "BY",
		"name": "Belarus"
	},
	{
		"id": "BZ",
		"name": "Belize"
	},
	{
		"id": "CA",
		"name": "Canada"
	},
	{
		"id": "CC",
		"name": "Cocos  (Keeling)  Islands"
	},
	{
		"id": "CD",
		"name": "Democratic Republic of Congo"
	},
	{
		"id": "CF",
		"name": "Central African Republic"
	},
	{
		"id": "CG",
		"name": "Republic of Congo"
	},
	{
		"id": "CH",
		"name": "Switzerland"
	},
	{
		"id": "CI",
		"name": "Côte d'Ivoire"
	},
	{
		"id": "CK",
		"name": "Cook Islands"
	},
	{
		"id": "CL",
		"name": "Chile"
	},
	{
		"id": "CM",
		"name": "Cameroon"
	},
	{
		"id": "CN",
		"name": "China"
	},
	{
		"id": "CO",
		"name": "Colombia"
	},
	{
		"id": "CR",
		"name": "Costa Rica"
	},
	{
		"id": "CU",
		"name": "Cuba"
	},
	{
		"id": "CV",
		"name": "Cape Verde"
	},
	{
		"id": "CW",
		"name": "Curaçao"
	},
	{
		"id": "CX",
		"name": "Christmas Island"
	},
	{
		"id": "CY",
		"name": "Cyprus"
	},
	{
		"id": "CZ",
		"name": "Czech Republic"
	},
	{
		"id": "DE",
		"name": "Germany"
	},
	{
		"id": "DJ",
		"name": "Djibouti"
	},
	{
		"id": "DK",
		"name": "Denmark"
	},
	{
		"id": "DM",
		"name": "Dominica"
	},
	{
		"id": "DO",
		"name": "Dominican Republic"
	},
	{
		"id": "DZ",
		"name": "Algeria"
	},
	{
		"id": "EC",
		"name": "Ecuador"
	},
	{
		"id": "EG",
		"name": "Egypt"
	},
	{
		"id": "EE",
		"name": "Estonia"
	},
	{
		"id": "EH",
		"name": "Western Sahara"
	},
	{
		"id": "ER",
		"name": "Eritrea"
	},
	{
		"id": "ES",
		"name": "Spain"
	},
	{
		"id": "ET",
		"name": "Ethiopia"
	},
	{
		"id": "FI",
		"name": "Finland"
	},
	{
		"id": "FJ",
		"name": "Fiji"
	},
	{
		"id": "FK",
		"name": "Falkland Islands"
	},
	{
		"id": "FM",
		"name": "Federated States of Micronesia"
	},
	{
		"id": "FO",
		"name": "Faroe Islands"
	},
	{
		"id": "FR",
		"name": "France"
	},
	{
		"id": "GA",
		"name": "Gabon"
	},
	{
		"id": "GB",
		"name": "United Kingdom"
	},
	{
		"id": "GE",
		"name": "Georgia"
	},
	{
		"id": "GD",
		"name": "Grenada"
	},
	{
		"id": "GF",
		"name": "French Guiana"
	},
	{
		"id": "GG",
		"name": "Guernsey"
	},
	{
		"id": "GH",
		"name": "Ghana"
	},
	{
		"id": "GI",
		"name": "Gibraltar"
	},
	{
		"id": "GL",
		"name": "Greenland"
	},
	{
		"id": "GM",
		"name": "Gambia"
	},
	{
		"id": "GN",
		"name": "Guinea"
	},
	{
		"id": "GO",
		"name": "Glorioso Islands"
	},
	{
		"id": "GP",
		"name": "Guadeloupe"
	},
	{
		"id": "GQ",
		"name": "Equatorial Guinea"
	},
	{
		"id": "GR",
		"name": "Greece"
	},
	{
		"id": "GS",
		"name": "South Georgia and South Sandwich Islands"
	},
	{
		"id": "GT",
		"name": "Guatemala"
	},
	{
		"id": "GU",
		"name": "Guam"
	},
	{
		"id": "GW",
		"name": "Guinea-Bissau"
	},
	{
		"id": "GY",
		"name": "Guyana"
	},
	{
		"id": "HK",
		"name": "Hong Kong"
	},
	{
		"id": "HM",
		"name": "Heard Island and McDonald Islands"
	},
	{
		"id": "HN",
		"name": "Honduras"
	},
	{
		"id": "HR",
		"name": "Croatia"
	},
	{
		"id": "HT",
		"name": "Haiti"
	},
	{
		"id": "HU",
		"name": "Hungary"
	},
	{
		"id": "ID",
		"name": "Indonesia"
	},
	{
		"id": "IE",
		"name": "Ireland"
	},
	{
		"id": "IL",
		"name": "Israel"
	},
	{
		"id": "IM",
		"name": "Isle of Man"
	},
	{
		"id": "IN",
		"name": "India"
	},
	{
		"id": "IO",
		"name": "British Indian Ocean Territory"
	},
	{
		"id": "IQ",
		"name": "Iraq"
	},
	{
		"id": "IR",
		"name": "Iran"
	},
	{
		"id": "IS",
		"name": "Iceland"
	},
	{
		"id": "IT",
		"name": "Italy"
	},
	{
		"id": "JE",
		"name": "Jersey"
	},
	{
		"id": "JM",
		"name": "Jamaica"
	},
	{
		"id": "JO",
		"name": "Jordan"
	},
	{
		"id": "JP",
		"name": "Japan"
	},
	{
		"id": "JU",
		"name": "Juan De Nova Island"
	},
	{
		"id": "KE",
		"name": "Kenya"
	},
	{
		"id": "KG",
		"name": "Kyrgyzstan"
	},
	{
		"id": "KH",
		"name": "Cambodia"
	},
	{
		"id": "KI",
		"name": "Kiribati"
	},
	{
		"id": "KM",
		"name": "Comoros"
	},
	{
		"id": "KN",
		"name": "Saint Kitts and Nevis"
	},
	{
		"id": "KP",
		"name": "North Korea"
	},
	{
		"id": "KR",
		"name": "South Korea"
	},
	{
		"id": "XK",
		"name": "Kosovo"
	},
	{
		"id": "KW",
		"name": "Kuwait"
	},
	{
		"id": "KY",
		"name": "Cayman Islands"
	},
	{
		"id": "KZ",
		"name": "Kazakhstan"
	},
	{
		"id": "LA",
		"name": "Lao People's Democratic Republic"
	},
	{
		"id": "LB",
		"name": "Lebanon"
	},
	{
		"id": "LC",
		"name": "Saint Lucia"
	},
	{
		"id": "LI",
		"name": "Liechtenstein"
	},
	{
		"id": "LK",
		"name": "Sri Lanka"
	},
	{
		"id": "LR",
		"name": "Liberia"
	},
	{
		"id": "LS",
		"name": "Lesotho"
	},
	{
		"id": "LT",
		"name": "Lithuania"
	},
	{
		"id": "LU",
		"name": "Luxembourg"
	},
	{
		"id": "LV",
		"name": "Latvia"
	},
	{
		"id": "LY",
		"name": "Libya"
	},
	{
		"id": "MA",
		"name": "Morocco"
	},
	{
		"id": "MC",
		"name": "Monaco"
	},
	{
		"id": "MD",
		"name": "Moldova"
	},
	{
		"id": "MG",
		"name": "Madagascar"
	},
	{
		"id": "ME",
		"name": "Montenegro"
	},
	{
		"id": "MF",
		"name": "Saint Martin"
	},
	{
		"id": "MH",
		"name": "Marshall Islands"
	},
	{
		"id": "MK",
		"name": "Macedonia"
	},
	{
		"id": "ML",
		"name": "Mali"
	},
	{
		"id": "MO",
		"name": "Macau"
	},
	{
		"id": "MM",
		"name": "Myanmar"
	},
	{
		"id": "MN",
		"name": "Mongolia"
	},
	{
		"id": "MP",
		"name": "Northern Mariana Islands"
	},
	{
		"id": "MQ",
		"name": "Martinique"
	},
	{
		"id": "MR",
		"name": "Mauritania"
	},
	{
		"id": "MS",
		"name": "Montserrat"
	},
	{
		"id": "MT",
		"name": "Malta"
	},
	{
		"id": "MU",
		"name": "Mauritius"
	},
	{
		"id": "MV",
		"name": "Maldives"
	},
	{
		"id": "MW",
		"name": "Malawi"
	},
	{
		"id": "MX",
		"name": "Mexico"
	},
	{
		"id": "MY",
		"name": "Malaysia"
	},
	{
		"id": "MZ",
		"name": "Mozambique"
	},
	{
		"id": "NA",
		"name": "Namibia"
	},
	{
		"id": "NC",
		"name": "New Caledonia"
	},
	{
		"id": "NE",
		"name": "Niger"
	},
	{
		"id": "NF",
		"name": "Norfolk Island"
	},
	{
		"id": "NG",
		"name": "Nigeria"
	},
	{
		"id": "NI",
		"name": "Nicaragua"
	},
	{
		"id": "NL",
		"name": "Netherlands"
	},
	{
		"id": "NO",
		"name": "Norway"
	},
	{
		"id": "NP",
		"name": "Nepal"
	},
	{
		"id": "NR",
		"name": "Nauru"
	},
	{
		"id": "NU",
		"name": "Niue"
	},
	{
		"id": "NZ",
		"name": "New Zealand"
	},
	{
		"id": "OM",
		"name": "Oman"
	},
	{
		"id": "PA",
		"name": "Panama"
	},
	{
		"id": "PE",
		"name": "Peru"
	},
	{
		"id": "PF",
		"name": "French Polynesia"
	},
	{
		"id": "PG",
		"name": "Papua New Guinea"
	},
	{
		"id": "PH",
		"name": "Philippines"
	},
	{
		"id": "PK",
		"name": "Pakistan"
	},
	{
		"id": "PL",
		"name": "Poland"
	},
	{
		"id": "PM",
		"name": "Saint Pierre and Miquelon"
	},
	{
		"id": "PN",
		"name": "Pitcairn Islands"
	},
	{
		"id": "PR",
		"name": "Puerto Rico"
	},
	{
		"id": "PS",
		"name": "Palestinian Territories"
	},
	{
		"id": "PT",
		"name": "Portugal"
	},
	{
		"id": "PW",
		"name": "Palau"
	},
	{
		"id": "PY",
		"name": "Paraguay"
	},
	{
		"id": "QA",
		"name": "Qatar"
	},
	{
		"id": "RE",
		"name": "Reunion"
	},
	{
		"id": "RO",
		"name": "Romania"
	},
	{
		"id": "RS",
		"name": "Serbia"
	},
	{
		"id": "RU",
		"name": "Russia"
	},
	{
		"id": "RW",
		"name": "Rwanda"
	},
	{
		"id": "SA",
		"name": "Saudi Arabia"
	},
	{
		"id": "SB",
		"name": "Solomon Islands"
	},
	{
		"id": "SC",
		"name": "Seychelles"
	},
	{
		"id": "SD",
		"name": "Sudan"
	},
	{
		"id": "SE",
		"name": "Sweden"
	},
	{
		"id": "SG",
		"name": "Singapore"
	},
	{
		"id": "SH",
		"name": "Saint Helena"
	},
	{
		"id": "SI",
		"name": "Slovenia"
	},
	{
		"id": "SJ",
		"name": "Svalbard and Jan Mayen"
	},
	{
		"id": "SK",
		"name": "Slovakia"
	},
	{
		"id": "SL",
		"name": "Sierra Leone"
	},
	{
		"id": "SM",
		"name": "San Marino"
	},
	{
		"id": "SN",
		"name": "Senegal"
	},
	{
		"id": "SO",
		"name": "Somalia"
	},
	{
		"id": "SR",
		"name": "Suriname"
	},
	{
		"id": "SS",
		"name": "South Sudan"
	},
	{
		"id": "ST",
		"name": "Sao Tome and Principe"
	},
	{
		"id": "SV",
		"name": "El Salvador"
	},
	{
		"id": "SX",
		"name": "Saint Martin"
	},
	{
		"id": "SY",
		"name": "Syria"
	},
	{
		"id": "SZ",
		"name": "Swaziland"
	},
	{
		"id": "TC",
		"name": "Turks and Caicos Islands"
	},
	{
		"id": "TD",
		"name": "Chad"
	},
	{
		"id": "TF",
		"name": "French Southern and Antarctic Lands"
	},
	{
		"id": "TG",
		"name": "Togo"
	},
	{
		"id": "TH",
		"name": "Thailand"
	},
	{
		"id": "TJ",
		"name": "Tajikistan"
	},
	{
		"id": "TK",
		"name": "Tokelau"
	},
	{
		"id": "TL",
		"name": "Timor-Leste"
	},
	{
		"id": "TM",
		"name": "Turkmenistan"
	},
	{
		"id": "TN",
		"name": "Tunisia"
	},
	{
		"id": "TO",
		"name": "Tonga"
	},
	{
		"id": "TR",
		"name": "Turkey"
	},
	{
		"id": "TT",
		"name": "Trinidad and Tobago"
	},
	{
		"id": "TV",
		"name": "Tuvalu"
	},
	{
		"id": "TW",
		"name": "Taiwan"
	},
	{
		"id": "TZ",
		"name": "Tanzania"
	},
	{
		"id": "UA",
		"name": "Ukraine"
	},
	{
		"id": "UG",
		"name": "Uganda"
	},
	{
		"id": "UM-DQ",
		"name": "Jarvis Island"
	},
	{
		"id": "UM-FQ",
		"name": "Baker Island"
	},
	{
		"id": "UM-HQ",
		"name": "Howland Island"
	},
	{
		"id": "UM-JQ",
		"name": "Johnston Atoll"
	},
	{
		"id": "UM-MQ",
		"name": "Midway Islands"
	},
	{
		"id": "UM-WQ",
		"name": "Wake Island"
	},
	{
		"id": "US",
		"name": "United States"
	},
	{
		"id": "UY",
		"name": "Uruguay"
	},
	{
		"id": "UZ",
		"name": "Uzbekistan"
	},
	{
		"id": "VA",
		"name": "Vatican City"
	},
	{
		"id": "VC",
		"name": "Saint Vincent and the Grenadines"
	},
	{
		"id": "VE",
		"name": "Venezuela"
	},
	{
		"id": "VG",
		"name": "British Virgin Islands"
	},
	{
		"id": "VI",
		"name": "US Virgin Islands"
	},
	{
		"id": "VN",
		"name": "Vietnam"
	},
	{
		"id": "VU",
		"name": "Vanuatu"
	},
	{
		"id": "WF",
		"name": "Wallis and Futuna"
	},
	{
		"id": "WS",
		"name": "Samoa"
	},
	{
		"id": "YE",
		"name": "Yemen"
	},
	{
		"id": "YT",
		"name": "Mayotte"
	},
	{
		"id": "ZA",
		"name": "South Africa"
	},
	{
		"id": "ZM",
		"name": "Zambia"
	},
	{
		"id": "ZW",
		"name": "Zimbabwe"
	}
];