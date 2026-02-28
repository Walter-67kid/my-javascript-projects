/**
 * World Clock - Premium Edition
 * Comprehensive country time display with real-time updates
 */

// Complete list of all countries with accurate timezone data
const countries = [
    // Africa
    { name: "Algeria", city: "Algiers", timezone: "Africa/Algiers", flag: "🇩🇿", region: "Africa" },
    { name: "Angola", city: "Luanda", timezone: "Africa/Luanda", flag: "🇦🇴", region: "Africa" },
    { name: "Benin", city: "Porto-Novo", timezone: "Africa/Porto-Novo", flag: "🇧🇯", region: "Africa" },
    { name: "Botswana", city: "Gaborone", timezone: "Africa/Gaborone", flag: "🇧🇼", region: "Africa" },
    { name: "Burkina Faso", city: "Ouagadougou", timezone: "Africa/Ouagadougou", flag: "🇧🇫", region: "Africa" },
    { name: "Burundi", city: "Gitega", timezone: "Africa/Gitega", flag: "🇧🇮", region: "Africa" },
    { name: "Cameroon", city: "Yaoundé", timezone: "Africa/Douala", flag: "🇨🇲", region: "Africa" },
    { name: "Cape Verde", city: "Praia", timezone: "Africa/Cabo_Verde", flag: "🇨🇻", region: "Africa" },
    { name: "Central African Republic", city: "Bangui", timezone: "Africa/Bangui", flag: "🇨🇫", region: "Africa" },
    { name: "Chad", city: "N'Djamena", timezone: "Africa/Ndjamena", flag: "🇹🇩", region: "Africa" },
    { name: "Comoros", city: "Moroni", timezone: "Africa/Comoro", flag: "🇰🇲", region: "Africa" },
    { name: "Democratic Republic of Congo", city: "Kinshasa", timezone: "Africa/Kinshasa", flag: "🇨🇩", region: "Africa" },
    { name: "Republic of Congo", city: "Brazzaville", timezone: "Africa/Brazzaville", flag: "🇨🇬", region: "Africa" },
    { name: "Djibouti", city: "Djibouti", timezone: "Africa/Djibouti", flag: "🇩🇯", region: "Africa" },
    { name: "Egypt", city: "Cairo", timezone: "Africa/Cairo", flag: "🇪🇬", region: "Africa" },
    { name: "Equatorial Guinea", city: "Malabo", timezone: "Africa/Malabo", flag: "🇬🇶", region: "Africa" },
    { name: "Eritrea", city: "Asmara", timezone: "Africa/Asmara", flag: "🇪🇷", region: "Africa" },
    { name: "Eswatini", city: "Mbabane", timezone: "Africa/Mbabane", flag: "🇸🇿", region: "Africa" },
    { name: "Ethiopia", city: "Addis Ababa", timezone: "Africa/Addis_Ababa", flag: "🇪🇹", region: "Africa" },
    { name: "Gabon", city: "Libreville", timezone: "Africa/Libreville", flag: "🇬🇦", region: "Africa" },
    { name: "Gambia", city: "Banjul", timezone: "Africa/Banjul", flag: "🇬🇲", region: "Africa" },
    { name: "Ghana", city: "Accra", timezone: "Africa/Accra", flag: "🇬🇭", region: "Africa" },
    { name: "Guinea", city: "Conakry", timezone: "Africa/Conakry", flag: "🇬🇳", region: "Africa" },
    { name: "Guinea-Bissau", city: "Bissau", timezone: "Africa/Bissau", flag: "🇬🇼", region: "Africa" },
    { name: "Ivory Coast", city: "Yamoussoukro", timezone: "Africa/Abidjan", flag: "🇨🇮", region: "Africa" },
    { name: "Kenya", city: "Nairobi", timezone: "Africa/Nairobi", flag: "🇰🇪", region: "Africa" },
    { name: "Lesotho", city: "Maseru", timezone: "Africa/Maseru", flag: "🇱🇸", region: "Africa" },
    { name: "Liberia", city: "Monrovia", timezone: "Africa/Monrovia", flag: "🇱🇷", region: "Africa" },
    { name: "Libya", city: "Tripoli", timezone: "Africa/Tripoli", flag: "🇱🇾", region: "Africa" },
    { name: "Madagascar", city: "Antananarivo", timezone: "Africa/Antananarivo", flag: "🇲🇬", region: "Africa" },
    { name: "Malawi", city: "Lilongwe", timezone: "Africa/Blantyre", flag: "🇲🇼", region: "Africa" },
    { name: "Mali", city: "Bamako", timezone: "Africa/Bamako", flag: "🇲🇱", region: "Africa" },
    { name: "Mauritania", city: "Nouakchott", timezone: "Africa/Nouakchott", flag: "🇲🇷", region: "Africa" },
    { name: "Mauritius", city: "Port Louis", timezone: "Africa/Port_Mathurin", flag: "🇲🇺", region: "Africa" },
    { name: "Morocco", city: "Rabat", timezone: "Africa/Casablanca", flag: "🇲🇦", region: "Africa" },
    { name: "Mozambique", city: "Maputo", timezone: "Africa/Maputo", flag: "🇲🇿", region: "Africa" },
    { name: "Namibia", city: "Windhoek", timezone: "Africa/Windhoek", flag: "🇳🇦", region: "Africa" },
    { name: "Niger", city: "Niamey", timezone: "Africa/Niamey", flag: "🇳🇪", region: "Africa" },
    { name: "Nigeria", city: "Abuja", timezone: "Africa/Lagos", flag: "🇳🇬", region: "Africa" },
    { name: "Rwanda", city: "Kigali", timezone: "Africa/Kigali", flag: "🇷🇼", region: "Africa" },
    { name: "São Tomé and Príncipe", city: "São Tomé", timezone: "Africa/Sao_Tome", flag: "🇸🇹", region: "Africa" },
    { name: "Senegal", city: "Dakar", timezone: "Africa/Dakar", flag: "🇸🇳", region: "Africa" },
    { name: "Seychelles", city: "Victoria", timezone: "Africa/Mahe", flag: "🇸🇨", region: "Africa" },
    { name: "Sierra Leone", city: "Freetown", timezone: "Africa/Freetown", flag: "🇸🇱", region: "Africa" },
    { name: "Somalia", city: "Mogadishu", timezone: "Africa/Mogadishu", flag: "🇸🇴", region: "Africa" },
    { name: "South Africa", city: "Pretoria", timezone: "Africa/Johannesburg", flag: "🇿🇦", region: "Africa" },
    { name: "South Sudan", city: "Juba", timezone: "Africa/Juba", flag: "🇸🇸", region: "Africa" },
    { name: "Sudan", city: "Khartoum", timezone: "Africa/Khartoum", flag: "🇸🇩", region: "Africa" },
    { name: "Tanzania", city: "Dodoma", timezone: "Africa/Dar_es_Salaam", flag: "🇹🇿", region: "Africa" },
    { name: "Togo", city: "Lomé", timezone: "Africa/Lome", flag: "🇹🇬", region: "Africa" },
    { name: "Tunisia", city: "Tunis", timezone: "Africa/Tunis", flag: "🇹🇳", region: "Africa" },
    { name: "Uganda", city: "Kampala", timezone: "Africa/Kampala", flag: "🇺🇬", region: "Africa" },
    { name: "Zambia", city: "Lusaka", timezone: "Africa/Lusaka", flag: "🇿🇲", region: "Africa" },
    { name: "Zimbabwe", city: "Harare", timezone: "Africa/Harare", flag: "🇿🇼", region: "Africa" },

    // Asia
    { name: "Afghanistan", city: "Kabul", timezone: "Asia/Kabul", flag: "🇦🇫", region: "Asia" },
    { name: "Armenia", city: "Yerevan", timezone: "Asia/Yerevan", flag: "🇦🇲", region: "Asia" },
    { name: "Azerbaijan", city: "Baku", timezone: "Asia/Baku", flag: "🇦🇿", region: "Asia" },
    { name: "Bahrain", city: "Manama", timezone: "Asia/Bahrain", flag: "🇧🇭", region: "Asia" },
    { name: "Bangladesh", city: "Dhaka", timezone: "Asia/Dhaka", flag: "🇧🇩", region: "Asia" },
    { name: "Bhutan", city: "Thimphu", timezone: "Asia/Thimphu", flag: "🇧🇹", region: "Asia" },
    { name: "Brunei", city: "Bandar Seri Begawan", timezone: "Asia/Brunei", flag: "🇧🇳", region: "Asia" },
    { name: "Cambodia", city: "Phnom Penh", timezone: "Asia/Phnom_Penh", flag: "🇰🇭", region: "Asia" },
    { name: "China", city: "Beijing", timezone: "Asia/Shanghai", flag: "🇨🇳", region: "Asia" },
    { name: "Cyprus", city: "Nicosia", timezone: "Asia/Famagusta", flag: "🇨🇾", region: "Asia" },
    { name: "Georgia", city: "Tbilisi", timezone: "Asia/Tbilisi", flag: "🇬🇪", region: "Asia" },
    { name: "India", city: "New Delhi", timezone: "Asia/Kolkata", flag: "🇮🇳", region: "Asia" },
    { name: "Indonesia", city: "Jakarta", timezone: "Asia/Jakarta", flag: "🇮🇩", region: "Asia" },
    { name: "Iran", city: "Tehran", timezone: "Asia/Tehran", flag: "🇮🇷", region: "Asia" },
    { name: "Iraq", city: "Baghdad", timezone: "Asia/Baghdad", flag: "🇮🇶", region: "Asia" },
    { name: "Israel", city: "Jerusalem", timezone: "Asia/Jerusalem", flag: "🇮🇱", region: "Asia" },
    { name: "Japan", city: "Tokyo", timezone: "Asia/Tokyo", flag: "🇯🇵", region: "Asia" },
    { name: "Jordan", city: "Amman", timezone: "Asia/Amman", flag: "🇯🇴", region: "Asia" },
    { name: "Kazakhstan", city: "Almaty", timezone: "Asia/Almaty", flag: "🇰🇿", region: "Asia" },
    { name: "Kuwait", city: "Kuwait City", timezone: "Asia/Kuwait", flag: "🇰🇼", region: "Asia" },
    { name: "Kyrgyzstan", city: "Bishkek", timezone: "Asia/Bishkek", flag: "🇰🇬", region: "Asia" },
    { name: "Laos", city: "Vientiane", timezone: "Asia/Vientiane", flag: "🇱🇦", region: "Asia" },
    { name: "Lebanon", city: "Beirut", timezone: "Asia/Beirut", flag: "🇱🇧", region: "Asia" },
    { name: "Malaysia", city: "Kuala Lumpur", timezone: "Asia/Kuala_Lumpur", flag: "🇲🇾", region: "Asia" },
    { name: "Maldives", city: "Malé", timezone: "Indian/Maldives", flag: "🇲🇻", region: "Asia" },
    { name: "Mongolia", city: "Ulaanbaatar", timezone: "Asia/Ulaanbaatar", flag: "🇲🇳", region: "Asia" },
    { name: "Myanmar", city: "Naypyidaw", timezone: "Asia/Yangon", flag: "🇲🇲", region: "Asia" },
    { name: "Nepal", city: "Kathmandu", timezone: "Asia/Kathmandu", flag: "🇳🇵", region: "Asia" },
    { name: "North Korea", city: "Pyongyang", timezone: "Asia/Pyongyang", flag: "🇰🇵", region: "Asia" },
    { name: "Oman", city: "Muscat", timezone: "Asia/Muscat", flag: "🇴🇲", region: "Asia" },
    { name: "Pakistan", city: "Islamabad", timezone: "Asia/Karachi", flag: "🇵🇰", region: "Asia" },
    { name: "Palestine", city: "Gaza", timezone: "Asia/Gaza", flag: "🇵🇸", region: "Asia" },
    { name: "Philippines", city: "Manila", timezone: "Asia/Manila", flag: "🇵🇭", region: "Asia" },
    { name: "Qatar", city: "Doha", timezone: "Asia/Qatar", flag: "🇶🇦", region: "Asia" },
    { name: "Saudi Arabia", city: "Riyadh", timezone: "Asia/Riyadh", flag: "🇸🇦", region: "Asia" },
    { name: "Singapore", city: "Singapore", timezone: "Asia/Singapore", flag: "🇸🇬", region: "Asia" },
    { name: "South Korea", city: "Seoul", timezone: "Asia/Seoul", flag: "🇰🇷", region: "Asia" },
    { name: "Sri Lanka", city: "Colombo", timezone: "Asia/Colombo", flag: "🇱🇰", region: "Asia" },
    { name: "Syria", city: "Damascus", timezone: "Asia/Damascus", flag: "🇸🇾", region: "Asia" },
    { name: "Taiwan", city: "Taipei", timezone: "Asia/Taipei", flag: "🇹🇼", region: "Asia" },
    { name: "Tajikistan", city: "Dushanbe", timezone: "Asia/Dushanbe", flag: "🇹🇯", region: "Asia" },
    { name: "Thailand", city: "Bangkok", timezone: "Asia/Bangkok", flag: "🇹🇭", region: "Asia" },
    { name: "Timor-Leste", city: "Dili", timezone: "Asia/Dili", flag: "🇹🇱", region: "Asia" },
    { name: "Turkey", city: "Ankara", timezone: "Europe/Istanbul", flag: "🇹🇷", region: "Asia" },
    { name: "Turkmenistan", city: "Ashgabat", timezone: "Asia/Ashgabat", flag: "🇹🇲", region: "Asia" },
    { name: "United Arab Emirates", city: "Abu Dhabi", timezone: "Asia/Dubai", flag: "🇦🇪", region: "Asia" },
    { name: "Uzbekistan", city: "Tashkent", timezone: "Asia/Tashkent", flag: "🇺🇿", region: "Asia" },
    { name: "Vietnam", city: "Hanoi", timezone: "Asia/Ho_Chi_Minh", flag: "🇻🇳", region: "Asia" },
    { name: "Yemen", city: "Sana'a", timezone: "Asia/Aden", flag: "🇾🇪", region: "Asia" },

    // Europe
    { name: "Albania", city: "Tirana", timezone: "Europe/Tirane", flag: "🇦🇱", region: "Europe" },
    { name: "Andorra", city: "Andorra la Vella", timezone: "Europe/Andorra", flag: "🇦🇩", region: "Europe" },
    { name: "Austria", city: "Vienna", timezone: "Europe/Vienna", flag: "🇦🇹", region: "Europe" },
    { name: "Belarus", city: "Minsk", timezone: "Europe/Minsk", flag: "🇧🇾", region: "Europe" },
    { name: "Belgium", city: "Brussels", timezone: "Europe/Brussels", flag: "🇧🇪", region: "Europe" },
    { name: "Bosnia and Herzegovina", city: "Sarajevo", timezone: "Europe/Sarajevo", flag: "🇧🇦", region: "Europe" },
    { name: "Bulgaria", city: "Sofia", timezone: "Europe/Sofia", flag: "🇧🇬", region: "Europe" },
    { name: "Croatia", city: "Zagreb", timezone: "Europe/Zagreb", flag: "🇭🇷", region: "Europe" },
    { name: "Czech Republic", city: "Prague", timezone: "Europe/Prague", flag: "🇨🇿", region: "Europe" },
    { name: "Denmark", city: "Copenhagen", timezone: "Europe/Copenhagen", flag: "🇩🇰", region: "Europe" },
    { name: "Estonia", city: "Tallinn", timezone: "Europe/Tallinn", flag: "🇪🇪", region: "Europe" },
    { name: "Finland", city: "Helsinki", timezone: "Europe/Helsinki", flag: "🇫🇮", region: "Europe" },
    { name: "France", city: "Paris", timezone: "Europe/Paris", flag: "🇫🇷", region: "Europe" },
    { name: "Germany", city: "Berlin", timezone: "Europe/Berlin", flag: "🇩🇪", region: "Europe" },
    { name: "Greece", city: "Athens", timezone: "Europe/Athens", flag: "🇬🇷", region: "Europe" },
    { name: "Hungary", city: "Budapest", timezone: "Europe/Budapest", flag: "🇭🇺", region: "Europe" },
    { name: "Iceland", city: "Reykjavik", timezone: "Atlantic/Reykjavik", flag: "🇮🇸", region: "Europe" },
    { name: "Ireland", city: "Dublin", timezone: "Europe/Dublin", flag: "🇮🇪", region: "Europe" },
    { name: "Italy", city: "Rome", timezone: "Europe/Rome", flag: "🇮🇹", region: "Europe" },
    { name: "Kosovo", city: "Pristina", timezone: "Europe/Belgrade", flag: "🇽🇰", region: "Europe" },
    { name: "Latvia", city: "Riga", timezone: "Europe/Riga", flag: "🇱🇻", region: "Europe" },
    { name: "Liechtenstein", city: "Vaduz", timezone: "Europe/Vaduz", flag: "🇱🇮", region: "Europe" },
    { name: "Lithuania", city: "Vilnius", timezone: "Europe/Vilnius", flag: "🇱🇹", region: "Europe" },
    { name: "Luxembourg", city: "Luxembourg City", timezone: "Europe/Luxembourg", flag: "🇱🇺", region: "Europe" },
    { name: "Malta", city: "Valletta", timezone: "Europe/Malta", flag: "🇲🇹", region: "Europe" },
    { name: "Moldova", city: "Chișinău", timezone: "Europe/Chisinau", flag: "🇲🇩", region: "Europe" },
    { name: "Monaco", city: "Monaco", timezone: "Europe/Monaco", flag: "🇲🇨", region: "Europe" },
    { name: "Montenegro", city: "Podgorica", timezone: "Europe/Podgorica", flag: "🇲🇪", region: "Europe" },
    { name: "Netherlands", city: "Amsterdam", timezone: "Europe/Amsterdam", flag: "🇳🇱", region: "Europe" },
    { name: "North Macedonia", city: "Skopje", timezone: "Europe/Skopje", flag: "🇲🇰", region: "Europe" },
    { name: "Norway", city: "Oslo", timezone: "Europe/Oslo", flag: "🇳🇴", region: "Europe" },
    { name: "Poland", city: "Warsaw", timezone: "Europe/Warsaw", flag: "🇵🇱", region: "Europe" },
    { name: "Portugal", city: "Lisbon", timezone: "Europe/Lisbon", flag: "🇵🇹", region: "Europe" },
    { name: "Romania", city: "Bucharest", timezone: "Europe/Bucharest", flag: "🇷🇴", region: "Europe" },
    { name: "Russia", city: "Moscow", timezone: "Europe/Moscow", flag: "🇷🇺", region: "Europe" },
    { name: "San Marino", city: "San Marino", timezone: "Europe/San_Marino", flag: "🇸🇲", region: "Europe" },
    { name: "Serbia", city: "Belgrade", timezone: "Europe/Belgrade", flag: "🇷🇸", region: "Europe" },
    { name: "Slovakia", city: "Bratislava", timezone: "Europe/Bratislava", flag: "🇸🇰", region: "Europe" },
    { name: "Slovenia", city: "Ljubljana", timezone: "Europe/Ljubljana", flag: "🇸🇮", region: "Europe" },
    { name: "Spain", city: "Madrid", timezone: "Europe/Madrid", flag: "🇪🇸", region: "Europe" },
    { name: "Sweden", city: "Stockholm", timezone: "Europe/Stockholm", flag: "🇸🇪", region: "Europe" },
    { name: "Switzerland", city: "Zurich", timezone: "Europe/Zurich", flag: "🇨🇭", region: "Europe" },
    { name: "Ukraine", city: "Kyiv", timezone: "Europe/Kyiv", flag: "🇺🇦", region: "Europe" },
    { name: "United Kingdom", city: "London", timezone: "Europe/London", flag: "🇬🇧", region: "Europe" },
    { name: "Vatican City", city: "Vatican City", timezone: "Europe/Vatican", flag: "🇻🇦", region: "Europe" },

    // North America
    { name: "Antigua and Barbuda", city: "St. John's", timezone: "America/Antigua", flag: "🇦🇬", region: "North America" },
    { name: "Bahamas", city: "Nassau", timezone: "America/Nassau", flag: "🇧🇸", region: "North America" },
    { name: "Barbados", city: "Bridgetown", timezone: "America/Barbados", flag: "🇧🇧", region: "North America" },
    { name: "Belize", city: "Belmopan", timezone: "America/Belize", flag: "🇧🇿", region: "North America" },
    { name: "Canada", city: "Ottawa", timezone: "America/Toronto", flag: "🇨🇦", region: "North America" },
    { name: "Costa Rica", city: "San José", timezone: "America/Costa_Rica", flag: "🇨🇷", region: "North America" },
    { name: "Cuba", city: "Havana", timezone: "America/Havana", flag: "🇨🇺", region: "North America" },
    { name: "Dominica", city: "Roseau", timezone: "America/Dominica", flag: "🇩🇲", region: "North America" },
    { name: "Dominican Republic", city: "Santo Domingo", timezone: "America/Santo_Domingo", flag: "🇩🇴", region: "North America" },
    { name: "El Salvador", city: "San Salvador", timezone: "America/El_Salvador", flag: "🇸🇻", region: "North America" },
    { name: "Grenada", city: "St. George's", timezone: "America/Grenada", flag: "🇬🇩", region: "North America" },
    { name: "Guatemala", city: "Guatemala City", timezone: "America/Guatemala", flag: "🇬🇹", region: "North America" },
    { name: "Haiti", city: "Port-au-Prince", timezone: "America/Port-au-Prince", flag: "🇭🇹", region: "North America" },
    { name: "Honduras", city: "Tegucigalpa", timezone: "America/Tegucigalpa", flag: "🇭🇳", region: "North America" },
    { name: "Jamaica", city: "Kingston", timezone: "America/Jamaica", flag: "🇯🇲", region: "North America" },
    { name: "Mexico", city: "Mexico City", timezone: "America/Mexico_City", flag: "🇲🇽", region: "North America" },
    { name: "Nicaragua", city: "Managua", timezone: "America/Managua", flag: "🇳🇮", region: "North America" },
    { name: "Panama", city: "Panama City", timezone: "America/Panama", flag: "🇵🇦", region: "North America" },
    { name: "Saint Kitts and Nevis", city: "Basseterre", timezone: "America/St_Kitts", flag: "🇰🇳", region: "North America" },
    { name: "Saint Lucia", city: "Castries", timezone: "America/St_Lucia", flag: "🇱🇨", region: "North America" },
    { name: "Saint Vincent and the Grenadines", city: "Kingstown", timezone: "America/St_Vincent", flag: "🇻🇨", region: "North America" },
    { name: "Trinidad and Tobago", city: "Port of Spain", timezone: "America/Port_of_Spain", flag: "🇹🇹", region: "North America" },
    { name: "United States", city: "Washington, D.C.", timezone: "America/New_York", flag: "🇺🇸", region: "North America" },

    // South America
    { name: "Argentina", city: "Buenos Aires", timezone: "America/Argentina/Buenos_Aires", flag: "🇦🇷", region: "South America" },
    { name: "Bolivia", city: "Sucre", timezone: "America/La_Paz", flag: "🇧🇴", region: "South America" },
    { name: "Brazil", city: "Brasília", timezone: "America/Sao_Paulo", flag: "🇧🇷", region: "South America" },
    { name: "Chile", city: "Santiago", timezone: "America/Santiago", flag: "🇨🇱", region: "South America" },
    { name: "Colombia", city: "Bogotá", timezone: "America/Bogota", flag: "🇨🇴", region: "South America" },
    { name: "Ecuador", city: "Quito", timezone: "America/Guayaquil", flag: "🇪🇨", region: "South America" },
    { name: "Guyana", city: "Georgetown", timezone: "America/Guyana", flag: "🇬🇾", region: "South America" },
    { name: "Paraguay", city: "Asunción", timezone: "America/Asuncion", flag: "🇵🇾", region: "South America" },
    { name: "Peru", city: "Lima", timezone: "America/Lima", flag: "🇵🇪", region: "South America" },
    { name: "Suriname", city: "Paramaribo", timezone: "America/Paramaribo", flag: "🇸🇷", region: "South America" },
    { name: "Uruguay", city: "Montevideo", timezone: "America/Montevideo", flag: "🇺🇾", region: "South America" },
    { name: "Venezuela", city: "Caracas", timezone: "America/Caracas", flag: "🇻🇪", region: "South America" },

    // Oceania
    { name: "Australia", city: "Canberra", timezone: "Australia/Sydney", flag: "🇦🇺", region: "Oceania" },
    { name: "Fiji", city: "Suva", timezone: "Pacific/Fiji", flag: "🇫🇯", region: "Oceania" },
    { name: "Kiribati", city: "Tarawa", timezone: "Pacific/Tarawa", flag: "🇰🇮", region: "Oceania" },
    { name: "Marshall Islands", city: "Majuro", timezone: "Pacific/Majuro", flag: "🇲🇭", region: "Oceania" },
    { name: "Micronesia", city: "Palikir", timezone: "Pacific/Pohnpei", flag: "🇫🇲", region: "Oceania" },
    { name: "Nauru", city: "Yaren", timezone: "Pacific/Nauru", flag: "🇳🇷", region: "Oceania" },
    { name: "New Zealand", city: "Wellington", timezone: "Pacific/Auckland", flag: "🇳🇿", region: "Oceania" },
    { name: "Palau", city: "Ngerulmud", timezone: "Pacific/Palau", flag: "🇵🇼", region: "Oceania" },
    { name: "Papua New Guinea", city: "Port Moresby", timezone: "Pacific/Port_Moresby", flag: "🇵🇬", region: "Oceania" },
    { name: "Samoa", city: "Apia", timezone: "Pacific/Apia", flag: "🇼🇸", region: "Oceania" },
    { name: "Solomon Islands", city: "Honiara", timezone: "Pacific/Guadalcanal", flag: "🇸🇧", region: "Oceania" },
    { name: "Tonga", city: "Nukuʻalofa", timezone: "Pacific/Tongatapu", flag: "🇹🇴", region: "Oceania" },
    { name: "Tuvalu", city: "Funafuti", timezone: "Pacific/Funafuti", flag: "🇹🇻", region: "Oceania" },
    { name: "Vanuatu", city: "Port Vila", timezone: "Pacific/Efate", flag: "🇻🇺", region: "Oceania" }
];

// State
let currentFilter = 'all';
let currentView = 'grid';
let searchQuery = '';

// DOM Elements
const regionsContainer = document.getElementById('regionsContainer');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const viewButtons = document.querySelectorAll('.view-btn');
const noResults = document.getElementById('noResults');
const localTimeEl = document.getElementById('localTime');
const localDateEl = document.getElementById('localDate');

// Format time with leading zeros
function formatTimeUnit(unit) {
    return unit.toString().padStart(2, '0');
}

// Get formatted time for a timezone
function getTimeForTimezone(timezone) {
    try {
        const now = new Date();
        const options = {
            timeZone: timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        };
        
        const formatter = new Intl.DateTimeFormat('en-US', options);
        const parts = formatter.formatToParts(now);
        
        const timePart = parts.find(p => p.type === 'hour').value + ':' +
                        parts.find(p => p.type === 'minute').value + ':' +
                        parts.find(p => p.type === 'second').value;
        
        const datePart = parts.find(p => p.type === 'weekday').value + ', ' +
                        parts.find(p => p.type === 'month').value + ' ' +
                        parts.find(p => p.type === 'day').value;
        
        const hour = parseInt(parts.find(p => p.type === 'hour').value);
        
        return { time: timePart, date: datePart, hour };
    } catch (e) {
        return { time: '--:--:--', date: 'N/A', hour: 0 };
    }
}

// Get timezone abbreviation
function getTimezoneAbbr(timezone) {
    try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: timezone,
            timeZoneName: 'short'
        });
        const parts = formatter.formatToParts(now);
        return parts.find(p => p.type === 'timeZoneName')?.value || timezone;
    } catch (e) {
        return timezone.split('/').pop();
    }
}

// Check if it's night time (for visual indicator)
function isNightTime(hour) {
    return hour < 6 || hour >= 18;
}

// Create country card HTML
function createCountryCard(country, index) {
    const { time, date, hour } = getTimeForTimezone(country.timezone);
    const timezoneAbbr = getTimezoneAbbr(country.timezone);
    const isNight = isNightTime(hour);
    
    return `
        <div class="country-card" data-region="${country.region}" data-name="${country.name.toLowerCase()}" style="animation-delay: ${index * 0.02}s">
            <div class="country-info">
                <span class="flag">${country.flag}</span>
                <h3 class="country-name">${country.name}</h3>
                <span class="city-name">${country.city}</span>
            </div>
            <div class="time-info">
                <div class="time">${time}</div>
                <div class="date">${date}</div>
                <span class="timezone-badge">${timezoneAbbr}</span>
                <div class="day-night ${isNight ? 'is-night' : ''}">
                    <span class="icon">${isNight ? '🌙' : '☀️'}</span>
                    <span>${isNight ? 'Night' : 'Day'}</span>
                </div>
            </div>
        </div>
    `;
}

// Filter and render countries
function renderCountries() {
    let filteredCountries = countries;
    
    // Apply region filter
    if (currentFilter !== 'all') {
        filteredCountries = filteredCountries.filter(c => c.region === currentFilter);
    }
    
    // Apply search filter
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filteredCountries = filteredCountries.filter(c => 
            c.name.toLowerCase().includes(query) || 
            c.city.toLowerCase().includes(query)
        );
    }
    
    // Show/hide no results message
    if (filteredCountries.length === 0) {
        regionsContainer.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    
    // Group countries by region if showing all
    if (currentFilter === 'all' && !searchQuery) {
        const regions = {};
        const regionIcons = {
            'Africa': '🌍',
            'Asia': '🌏',
            'Europe': '🌍',
            'North America': '🌎',
            'South America': '🌎',
            'Oceania': '🌏'
        };
        
        filteredCountries.forEach(country => {
            if (!regions[country.region]) {
                regions[country.region] = [];
            }
            regions[country.region].push(country);
        });
        
        let html = '';
        let cardIndex = 0;
        
        Object.entries(regions).forEach(([region, regionCountries]) => {
            html += `<div class="region-section">
                <h2 class="region-title">
                    <span class="region-icon">${regionIcons[region]}</span>
                    ${region}
                </h2>
                <div class="regions-container ${currentView === 'list' ? 'list-view' : ''}">`;
            
            regionCountries.forEach(country => {
                html += createCountryCard(country, cardIndex++);
            });
            
            html += `</div></div>`;
        });
        
        regionsContainer.innerHTML = html;
    } else {
        // Show filtered results without grouping
        let html = `<div class="regions-container ${currentView === 'list' ? 'list-view' : ''}">`;
        
        filteredCountries.forEach((country, index) => {
            html += createCountryCard(country, index);
        });
        
        html += '</div>';
        regionsContainer.innerHTML = html;
    }
    
    // Update view class on container
    regionsContainer.className = currentView === 'list' ? 'list-view' : '';
}

// Update local time display
function updateLocalTime() {
    const now = new Date();
    
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    
    const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    
    localTimeEl.textContent = now.toLocaleTimeString('en-US', timeOptions);
    localDateEl.textContent = now.toLocaleDateString('en-US', dateOptions);
}

// Event Listeners
searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderCountries();
});

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderCountries();
    });
});

viewButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        viewButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentView = btn.dataset.view;
        renderCountries();
    });
});

// Initialize
function init() {
    updateLocalTime();
    renderCountries();
    
    // Update local time every second
    setInterval(updateLocalTime, 1000);
    
    // Update all times every second
    setInterval(() => {
        if (searchQuery || currentFilter !== 'all') {
            renderCountries();
        }
    }, 1000);
}

// Start the app
init();
