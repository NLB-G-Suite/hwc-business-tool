import { Injectable } from '@angular/core';

@Injectable()
export class AssetsService {

  public kickstarterCategories = [
    { id: 16, name: 'Tout technologie' },
    { id: 336, name: 'Aviation' },
    { id: 334, name: 'Bricolage électronique' },
    { id: 362, name: 'Espaces créatifs' },
    { id: 340, name: 'Exploration spatiale' },
    { id: 333, name: 'Equipement photo/vidéo' },
    { id: 337, name: 'Gadgets' },
    { id: 331, name: 'Impression' },
    { id: 52, name: 'Matériels' },
    { id: 335, name: 'Outils de fabrication' },
    { id: 341, name: 'Prêt à porter' },
    { id: 338, name: 'Robot' },
    { id: 339, name: 'Son' }
  ];

  public indiegogoCategories = [
    'Animals',
    'Art',
    'Audio',
    'Cause',
    'Comic',
    'Community',
    'Creative',
    'Dance',
    'Design',
    'Education',
    'Entrepreneurial',
    'Energy & Green Tech',
    'Environment',
    'Fashion',
    'Fashion & Wearables',
    'Food & Beverages',
    'Film',
    'Food',
    'Gaming',
    'Health',
    'Health & Fitness',
    'Home',
    'Music',
    'Phones & Accessories',
    'Photography',
    'Politics',
    'Productivity',
    'Religion',
    'Small Business',
    'Sports',
    'Technology',
    'Theatre',
    'Transportation',
    'Transmedia',
    'Travel & Outdoors',
    'Video / Web',
    'Writing'
  ];

  // Get more woe_id : http://www.woeidlookup.com/
  public countries = [{
      name: 'Afghanistan',
      woe_id: 0,
      ISO: {
        alpha_2: 'AF',
        alpha_3: 'AFG',
        alpha_numeric_code: ''
      },
      capital: {
        name: 'Kabul',
        woe_id: 1922738
      }
    }, {
      name: 'Aland Islands',
      woe_id: 0,
      ISO: {
        alpha_2: 'AX',
        alpha_3: 'ALA',
        alpha_numeric_code: ''
      },
      capital: {
        name: 'Mariehamn',
        woe_id: 569561
      }
    }, {
      name: 'Albania',
      woe_id: 0,
      ISO: {
        alpha_2: 'AL',
        alpha_3: 'ALB',
        alpha_numeric_code: ''
      },
      capital: {
        name: 'Tirana',
        woe_id: 472135
      }
    }, {
      name: 'Algeria',
      woe_id: 0,
      ISO: {
        alpha_2: 'DZ',
        alpha_3: 'DZA',
        alpha_numeric_code: ''
      },
      capital: {
        name: 'Algiers',
        woe_id: 1253079
      }
    }, {
      name: 'American Samoa',
      woe_id: 0,
      ISO: {
        alpha_2: 'AS',
        alpha_3: 'ASM',
        alpha_numeric_code: ''
      },
      capital: {
        name: 'Pago Pago',
        woe_id: 1062841
      }
    }, {
      name: 'Andorra',
      woe_id: 23424744,
      ISO: {
        alpha_2: 'AD',
        alpha_3: 'AND',
        alpha_numeric_code: ''
      },
      capital: {
        name: 'Andorra la Vella',
        woe_id: 472553
      }
    }, {
      name: 'Angola',
      woe_id: 0,
      ISO: {
        alpha_2: 'AO',
        alpha_3: 'AGO',
        alpha_numeric_code: ''
      },
      capital: {
        name: 'Luanda',
        woe_id: 1261906
      }
    }, {
      name: 'Anguilla',
      woe_id: 0,
      ISO: {
        alpha_2: 'AI',
        alpha_3: 'AIA',
        alpha_numeric_code: ''
      },
      capital: {
        name: 'The Valley',
        woe_id: 56273
      }
    }, {
      name: 'Antigua and Barbuda',
      woe_id: 0,
      ISO: {
        alpha_2: 'AG',
        alpha_3: 'ATG',
        alpha_numeric_code: ''
      },
      capital: {
        name: 'Saint John\'s',
        woe_id: 56220
      }
    }, {
      name: 'Argentina',
      woe_id: 23424747,
      ISO: {
        alpha_2: 'AR',
        alpha_3: 'ARG',
        alpha_numeric_code: ''
      },
      capital: {
        name: 'Buenos Aires',
        woe_id: 468739
      }
    }, {
      name: 'Armenia',
      woe_id: 0,
      ISO: {
        alpha_2: 'AM',
        alpha_3: 'ARM',
        alpha_numeric_code: ''
      },
      capital: {
        name: 'Yerevan',
        woe_id: 2214662
      }
    }, {
      name: 'Aruba',
      woe_id: 0,
      ISO: {
        alpha_2: 'AW',
        alpha_3: 'ABW',
        alpha_numeric_code: ''
      },
      capital: {
        name: 'Oranjestad',
        woe_id: 56069
      }
    }, {
      name: 'Australia',
      woe_id: 23424748,
      ISO: {
        alpha_2: 'AU',
        alpha_3: 'AUS',
        alpha_numeric_code: '036'
      },
      capital: {
        name: 'Adelaide',
        woe_id: 1099805
      }
    }, {
      name: 'Australia',
      woe_id: 23424748,
      ISO: {
        alpha_2: 'AU',
        alpha_3: 'AUS',
        alpha_numeric_code: '036'
      },
      capital: {
        name: 'Brisbane',
        woe_id: 1100661
      }
    }, {
      name: 'Australia',
      woe_id: 23424748,
      ISO: {
        alpha_2: 'AU',
        alpha_3: 'AUS',
        alpha_numeric_code: '036'
      },
      capital: {
        name: 'Canberra',
        woe_id: 1100968
      }
    }, {
      name: 'Australia',
      woe_id: 23424748,
      ISO: {
        alpha_2: 'AU',
        alpha_3: 'AUS',
        alpha_numeric_code: '036'
      },
      capital: {
        name: 'Darwin',
        woe_id: 1101597
      }
    }, {
      name: 'Australia',
      woe_id: 23424748,
      ISO: {
        alpha_2: 'AU',
        alpha_3: 'AUS',
        alpha_numeric_code: '036'
      },
      capital: {
        name: 'Hobart',
        woe_id: 1102670
      }
    }, {
      name: 'Australia',
      woe_id: 23424748,
      ISO: {
        alpha_2: 'AU',
        alpha_3: 'AUS',
        alpha_numeric_code: '036'
      },
      capital: {
        name: 'Melbourne',
        woe_id: 1103816
      }
    }, {
      name: 'Australia',
      woe_id: 23424748,
      ISO: {
        alpha_2: 'AU',
        alpha_3: 'AUS',
        alpha_numeric_code: '036'
      },
      capital: {
        name: 'Perth',
        woe_id: 1098081
      }
    }, {
      name: 'Australia',
      woe_id: 23424748,
      ISO: {
        alpha_2: 'AU',
        alpha_3: 'AUS',
        alpha_numeric_code: '036'
      },
      capital: {
        name: 'Sydney',
        woe_id: 1105779
      }
    }, {
      name: 'Austria',
      woe_id: 23424750,
      ISO: {
        alpha_2: 'AT',
        alpha_3: 'AUT',
        alpha_numeric_code: ''
      },
      capital: {
        name: 'Vienna',
        woe_id: 551801
      }
    }, {
      name: 'Azerbaijan',
      woe_id: 0,
      ISO: {
        alpha_2: 'AZ',
        alpha_3: 'AZE',
        alpha_numeric_code: ''
      },
      capital: {
        name: 'Baku',
        woe_id: 1951874
      }
    }, {
      name: 'Bahamas',
      woe_id: 0,
      ISO: {
        alpha_2: 'BS',
        alpha_3: 'BHS',
        alpha_numeric_code: '044'
      },
      capital: {
        name: 'Nassau',
        woe_id: 57024
      }
    }, {
      name: 'Bahrain',
      woe_id: 0,
      ISO: {
        alpha_2: 'BH',
        alpha_3: 'BHR',
        alpha_numeric_code: '048'
      },
      capital: {
        name: 'Manama',
        woe_id: 1967057
      }
    }, {
      name: 'Bangladesh',
      woe_id: 0,
      ISO: {
        alpha_2: 'BD',
        alpha_3: 'BGD',
        alpha_numeric_code: '050'
      },
      capital: {
        name: 'Dhaka',
        woe_id: 1915035
      }
    }, {
      name: 'Barbados',
      woe_id: 0,
      ISO: {
        alpha_2: 'BB',
        alpha_3: 'BRB',
        alpha_numeric_code: '052'
      },
      capital: {
        name: 'Bridgetown',
        woe_id: 56334
      }
    }, {
      name: 'Belarus',
      woe_id: 0,
      ISO: {
        alpha_2: 'BY',
        alpha_3: 'BLR',
        alpha_numeric_code: '112'
      },
      capital: {
        name: 'Minsk',
        woe_id: 834463
      }
    }, {
      name: 'Belgium',
      woe_id: 23424757,
      ISO: {
        alpha_2: 'BE',
        alpha_3: 'BEL',
        alpha_numeric_code: '056'
      },
      capital: {
        name: 'Brussels',
        woe_id: 968019
      }
    }, {
      name: 'Belize',
      woe_id: 0,
      ISO: {
        alpha_2: 'BZ',
        alpha_3: 'BLZ',
        alpha_numeric_code: '084'
      },
      capital: {
        name: 'Belmopan',
        woe_id: 57172
      }
    }, {
      name: 'Benin',
      woe_id: 0,
      ISO: {
        alpha_2: 'BJ',
        alpha_3: 'BEN',
        alpha_numeric_code: '204'
      },
      capital: {
        name: 'Porto-Novo',
        woe_id: 1268465
      }
    }, {
      name: 'Bermuda',
      woe_id: 0,
      ISO: {
        alpha_2: 'BM',
        alpha_3: 'BMU',
        alpha_numeric_code: '060'
      },
      capital: {
        name: 'Hamilton',
        woe_id: 56793
      }
    }, {
      name: 'Bhutan',
      woe_id: 0,
      ISO: {
        alpha_2: 'BT',
        alpha_3: 'BTN',
        alpha_numeric_code: '064'
      },
      capital: {
        name: 'Thimphu',
        woe_id: 1887896
      }
    }, {
      name: 'Bolivia',
      woe_id: 0,
      ISO: {
        alpha_2: 'BO',
        alpha_3: 'BOL',
        alpha_numeric_code: '068'
      },
      capital: {
        name: 'La Paz',
        woe_id: 346057
      }
    }, {
      name: 'Bosnia and Herzegovina',
      woe_id: 0,
      ISO: {
        alpha_2: 'BA',
        alpha_3: 'BIH',
        alpha_numeric_code: '070'
      },
      capital: {
        name: 'Sarajevo',
        woe_id: 943828
      }
    }, {
      name: 'Botswana',
      woe_id: 0,
      ISO: {
        alpha_2: 'BW',
        alpha_3: 'BWA',
        alpha_numeric_code: '072'
      },
      capital: {
        name: 'Gaborone',
        woe_id: 1265547
      }
    }, {
      name: 'Brazil',
      woe_id: 23424768,
      ISO: {
        alpha_2: 'BR',
        alpha_3: 'BRA',
        alpha_numeric_code: '076'
      },
      capital: {
        name: 'Brasilia',
        woe_id: 455819
      }
    }, {
      name: 'British Indian Ocean Territory',
      woe_id: 0,
      ISO: {
        alpha_2: 'IO',
        alpha_3: 'IOT',
        alpha_numeric_code: '086'
      },
      capital: {
        name: 'Diego Garcia',
        woe_id: 1339594
      }
    }, {
      name: 'Brunei Darussalam',
      woe_id: 0,
      ISO: {
        alpha_2: 'BN',
        alpha_3: 'BRN',
        alpha_numeric_code: '096'
      },
      capital: {
        name: 'Bandar Seri Begawan',
        woe_id: 1020725
      }
    }, {
      name: 'Bulgaria',
      woe_id: 0,
      ISO: {
        alpha_2: 'BG',
        alpha_3: 'BGR',
        alpha_numeric_code: '100'
      },
      capital: {
        name: 'Sofia',
        woe_id: 839722
      }
    }, {
      name: 'Burkina Faso',
      woe_id: 0,
      ISO: {
        alpha_2: 'BF',
        alpha_3: 'BFA',
        alpha_numeric_code: '854'
      },
      capital: {
        name: 'Ouagadougou',
        woe_id: 1461080
      }
    }, {
      name: 'Burundi',
      woe_id: 0,
      ISO: {
        alpha_2: 'BI',
        alpha_3: 'BDI',
        alpha_numeric_code: '108'
      },
      capital: {
        name: 'Bujumbura',
        woe_id: 1269399
      }
    }, {
      name: 'Cambodia',
      woe_id: 0,
      ISO: {
        alpha_2: 'KH',
        alpha_3: 'KHM',
        alpha_numeric_code: '116'
      },
      capital: {
        name: 'Phnom Penh',
        woe_id: 1020985
      }
    }, {
      name: 'Cameroon',
      woe_id: 0,
      ISO: {
        alpha_2: 'CM',
        alpha_3: 'CMR',
        alpha_numeric_code: '120'
      },
      capital: {
        name: 'Yaounde',
        woe_id: 1305860
      }
    }, {
      name: 'Canada',
      woe_id: 23424775,
      ISO: {
        alpha_2: 'CA',
        alpha_3: 'CAN',
        alpha_numeric_code: '124'
      },
      capital: {
        name: 'Ottawa',
        woe_id: 91982014
      }
    }, {
      name: 'Cape Verde',
      woe_id: 0,
      ISO: {
        alpha_2: 'CV',
        alpha_3: 'CPV',
        alpha_numeric_code: '132'
      },
      capital: {
        name: 'Praia',
        woe_id: 1310855
      }
    }, {
      name: 'Cayman Islands',
      woe_id: 0,
      ISO: {
        alpha_2: 'KY',
        alpha_3: 'CYM',
        alpha_numeric_code: '136'
      },
      capital: {
        name: 'George Town',
        woe_id: 57596
      }
    }, {
      name: 'Central African Republic',
      woe_id: 0,
      ISO: {
        alpha_2: 'CF',
        alpha_3: 'CAF',
        alpha_numeric_code: '140'
      },
      capital: {
        name: 'Bangui',
        woe_id: 1306666
      }
    }, {
      name: 'Chad',
      woe_id: 0,
      ISO: {
        alpha_2: 'TD',
        alpha_3: 'TCD',
        alpha_numeric_code: '148'
      },
      capital: {
        name: 'N\'Djamena',
        woe_id: 1273423
      }
    }, {
      name: 'Chile',
      woe_id: 23424782,
      ISO: {
        alpha_2: 'CL',
        alpha_3: 'CHL',
        alpha_numeric_code: '152'
      },
      capital: {
        name: 'Santiago',
        woe_id: 349859
      }
    }, {
      name: 'China',
      woe_id: 23424781,
      ISO: {
        alpha_2: 'CN',
        alpha_3: 'CHN',
        alpha_numeric_code: '156'
      },
      capital: {
        name: 'Beijing',
        woe_id: 2151330
      }
    }, {
      name: 'Christmas Island',
      woe_id: 0,
      ISO: {
        alpha_2: 'CX',
        alpha_3: 'CXR',
        alpha_numeric_code: '162'
      },
      capital: {
        name: 'The Settlement',
        woe_id: 1049073
      }
    }, {
      name: 'Cocos Islands',
      woe_id: 0,
      ISO: {
        alpha_2: 'CC',
        alpha_3: 'CCK',
        alpha_numeric_code: '166'
      },
      capital: {
        name: 'West Island',
        woe_id: 1062839
      }
    }, {
      name: 'Colombia',
      woe_id: 23424787,
      ISO: {
        alpha_2: 'CO',
        alpha_3: 'COL',
        alpha_numeric_code: '170'
      },
      capital: {
        name: 'Bogota',
        woe_id: 368148
      }
    }, {
      name: 'Comoros',
      woe_id: 0,
      ISO: {
        alpha_2: 'KM',
        alpha_3: 'COM',
        alpha_numeric_code: '174'
      },
      capital: {
        name: 'Moroni',
        woe_id: 1306106
      }
    }, {
      name: 'Cook Islands',
      woe_id: 0,
      ISO: {
        alpha_2: 'CK',
        alpha_3: 'COK',
        alpha_numeric_code: '184'
      },
      capital: {
        name: 'Avarua',
        woe_id: 1064303
      }
    }, {
      name: 'Costa Rica',
      woe_id: 0,
      ISO: {
        alpha_2: 'CR',
        alpha_3: 'CRI',
        alpha_numeric_code: '188'
      },
      capital: {
        name: 'San Jose',
        woe_id: 59426
      }
    }, {
      name: 'Cote D\'ivoire',
      woe_id: 0,
      ISO: {
        alpha_2: 'CI',
        alpha_3: 'CIV',
        alpha_numeric_code: '384'
      },
      capital: {
        name: 'Yamoussoukro',
        woe_id: 1347063
      }
    }, {
      name: 'Croatia',
      woe_id: 0,
      ISO: {
        alpha_2: 'HR',
        alpha_3: 'HRV',
        alpha_numeric_code: '191'
      },
      capital: {
        name: 'Zagreb',
        woe_id: 851128
      }
    }, {
      name: 'Cuba',
      woe_id: 0,
      ISO: {
        alpha_2: 'CU',
        alpha_3: 'CUB',
        alpha_numeric_code: '192'
      },
      capital: {
        name: 'Havana',
        woe_id: 63817
      }
    }, {
      name: 'Curacao',
      woe_id: 0,
      ISO: {
        alpha_2: 'NULlllll----------------------------------',
        alpha_3: '',
        alpha_numeric_code: ''
      },
      capital: {
        name: 'Willemstad',
        woe_id: 152045
      }
    }, {
      name: 'Cyprus',
      woe_id: 26812346,
      ISO: {
        alpha_2: 'CY',
        alpha_3: 'CYP',
        alpha_numeric_code: '196'
      },
      capital: {
        name: 'Nicosia',
        woe_id: 841546
      }
    }, {
      name: 'Cyprus',
      woe_id: 26812346,
      ISO: {
        alpha_2: 'CY',
        alpha_3: 'CYP',
        alpha_numeric_code: '196'
      },
      capital: {
        name: 'North Nicosia',
        woe_id: 841546
      }
    }, {
      name: 'Czech Republic',
      woe_id: 23424810,
      ISO: {
        alpha_2: 'CZ',
        alpha_3: 'CZE',
        alpha_numeric_code: '203'
      },
      capital: {
        name: 'Prague',
        woe_id: 796597
      }
    }, {
      name: 'Democratic Republic of Congo',
      woe_id: 0,
      ISO: {
        alpha_2: 'CD',
        alpha_3: 'COD',
        alpha_numeric_code: '180'
      },
      capital: {
        name: 'Kinshasa',
        woe_id: 1290062
      }
    }, {
      name: 'Denmark',
      woe_id: 23424796,
      ISO: {
        alpha_2: 'DK',
        alpha_3: 'DNM',
        alpha_numeric_code: '208'
      },
      capital: {
        name: 'Copenhagen',
        woe_id: 554890
      }
    }, {
      name: 'Djibouti',
      woe_id: 0,
      ISO: {
        alpha_2: 'DJ',
        alpha_3: 'DJM',
        alpha_numeric_code: '262'
      },
      capital: {
        name: 'Djibouti City',
        woe_id: 1310941
      }
    }, {
      name: 'Dominica',
      woe_id: 0,
      ISO: {
        alpha_2: 'DM',
        alpha_3: 'DMM',
        alpha_numeric_code: '212'
      },
      capital: {
        name: 'Roseau',
        woe_id: 68829
      }
    }, {
      name: 'Dominican Republic',
      woe_id: 0,
      ISO: {
        alpha_2: 'DO',
        alpha_3: 'DOM',
        alpha_numeric_code: '214'
      },
      capital: {
        name: 'Santo Domingo',
        woe_id: 76456
      }
    }, {
      name: 'Ecuador',
      woe_id: 0,
      ISO: {
        alpha_2: 'EC',
        alpha_3: 'ECU',
        alpha_numeric_code: '218'
      },
      capital: {
        name: 'Quito',
        woe_id: 375732
      }
    }, {
      name: 'Egypt',
      woe_id: 23424802,
      ISO: {
        alpha_2: 'EG',
        alpha_3: 'EGY',
        alpha_numeric_code: '818'
      },
      capital: {
        name: 'Cairo',
        woe_id: 1521894
      }
    }, {
      name: 'El Salvador',
      woe_id: 0,
      ISO: {
        alpha_2: 'SV',
        alpha_3: 'SLV',
        alpha_numeric_code: '222'
      },
      capital: {
        name: 'San Salvador',
        woe_id: 79825
      }
    }, {
      name: 'Equatorial Guinea',
      woe_id: 0,
      ISO: {
        alpha_2: 'GQ',
        alpha_3: 'GNQ',
        alpha_numeric_code: '226'
      },
      capital: {
        name: 'Malabo',
        woe_id: 1480564
      }
    }, {
      name: 'Eritrea',
      woe_id: 0,
      ISO: {
        alpha_2: 'ER',
        alpha_3: 'ERI',
        alpha_numeric_code: '232'
      },
      capital: {
        name: 'Asmara',
        woe_id: 1312120
      }
    }, {
      name: 'Estonia',
      woe_id: 23424805,
      ISO: {
        alpha_2: 'EE',
        alpha_3: 'EST',
        alpha_numeric_code: '233'
      },
      capital: {
        name: 'Tallinn',
        woe_id: 845743
      }
    }, {
      name: 'Ethiopia',
      woe_id: 0,
      ISO: {
        alpha_2: 'ET',
        alpha_3: 'ETH',
        alpha_numeric_code: '231'
      },
      capital: {
        name: 'Addis Ababa',
        woe_id: 1313090
      }
    }, {
      name: 'Falkland Islands',
      woe_id: 0,
      ISO: {
        alpha_2: 'FK',
        alpha_3: 'FLK',
        alpha_numeric_code: '238'
      },
      capital: {
        name: 'Stanley',
        woe_id: 379330
      }
    }, {
      name: 'Faroe Islands',
      woe_id: 0,
      ISO: {
        alpha_2: 'FO',
        alpha_3: 'FRO',
        alpha_numeric_code: '234'
      },
      capital: {
        name: 'Torshavn',
        woe_id: 472768
      }
    }, {
      name: 'Fiji',
      woe_id: 0,
      ISO: {
        alpha_2: 'FJ',
        alpha_3: 'FJI',
        alpha_numeric_code: '242'
      },
      capital: {
        name: 'Suva',
        woe_id: 1064103
      }
    }, {
      name: 'Finland',
      woe_id: 23424812,
      ISO: {
        alpha_2: 'FI',
        alpha_3: 'FIN',
        alpha_numeric_code: '246'
      },
      capital: {
        name: 'Helsinki',
        woe_id: 565346
      }
    }, {
      name: 'France',
      woe_id: 23424819,
      ISO: {
        alpha_2: 'FR',
        alpha_3: 'FRA',
        alpha_numeric_code: '250'
      },
      capital: {
        name: 'Paris',
        woe_id: 615702
      }
    }, {
      name: 'French Polynesia',
      woe_id: 0,
      ISO: {
        alpha_2: 'PF',
        alpha_3: 'PYF',
        alpha_numeric_code: '258'
      },
      capital: {
        name: 'Papeete',
        woe_id: 1062847
      }
    }, {
      name: 'Gabon',
      woe_id: 0,
      ISO: {
        alpha_2: 'GA',
        alpha_3: 'GAB',
        alpha_numeric_code: '266'
      },
      capital: {
        name: 'Libreville',
        woe_id: 1324195
      }
    }, {
      name: 'Gambia',
      woe_id: 0,
      ISO: {
        alpha_2: 'GM',
        alpha_3: 'GMB',
        alpha_numeric_code: '270'
      },
      capital: {
        name: 'Banjul',
        woe_id: 1321151
      }
    }, {
      name: 'Georgia',
      woe_id: 0,
      ISO: {
        alpha_2: 'GE',
        alpha_3: 'GEO',
        alpha_numeric_code: '268'
      },
      capital: {
        name: 'Tbilisi',
        woe_id: 1965878
      }
    }, {
      name: 'Germany',
      woe_id: 23424829,
      ISO: {
        alpha_2: 'DE',
        alpha_3: 'DEU',
        alpha_numeric_code: '276'
      },
      capital: {
        name: 'Berlin',
        woe_id: 638242
      }
    }, {
      name: 'Ghana',
      woe_id: 0,
      ISO: {
        alpha_2: 'GH',
        alpha_3: 'GHA',
        alpha_numeric_code: '288'
      },
      capital: {
        name: 'Accra',
        woe_id: 1326075
      }
    }, {
      name: 'Gibraltar',
      woe_id: 0,
      ISO: {
        alpha_2: 'GI',
        alpha_3: 'GIB',
        alpha_numeric_code: '292'
      },
      capital: {
        name: 'Gibraltar',
        woe_id: 472800
      }
    }, {
      name: 'Greece',
      woe_id: 23424833,
      ISO: {
        alpha_2: 'GR',
        alpha_3: 'GRC',
        alpha_numeric_code: '300'
      },
      capital: {
        name: 'Athens',
        woe_id: 946738
      }
    }, {
      name: 'Greenland',
      woe_id: 0,
      ISO: {
        alpha_2: 'GL',
        alpha_3: 'GRL',
        alpha_numeric_code: '304'
      },
      capital: {
        name: 'Nuuk',
        woe_id: 472856
      }
    }, {
      name: 'Grenada',
      woe_id: 0,
      ISO: {
        alpha_2: 'GD',
        alpha_3: 'GRD',
        alpha_numeric_code: '308'
      },
      capital: {
        name: 'Saint George\'s',
        woe_id: 80438
      }
    }, {
      name: 'Guam',
      woe_id: 0,
      ISO: {
        alpha_2: 'GU',
        alpha_3: 'GUM',
        alpha_numeric_code: '316'
      },
      capital: {
        name: 'Hagatna',
        woe_id: 28718593
      }
    }, {
      name: 'Guatemala',
      woe_id: 0,
      ISO: {
        alpha_2: 'GT',
        alpha_3: 'GTM',
        alpha_numeric_code: '320'
      },
      capital: {
        name: 'Guatemala City',
        woe_id: 83123
      }
    }, {
      name: 'Guernsey',
      woe_id: 0,
      ISO: {
        alpha_2: 'GG',
        alpha_3: 'GGY',
        alpha_numeric_code: '831'
      },
      capital: {
        name: 'Saint Peter Port',
        woe_id: 538498
      }
    }, {
      name: 'Guinea',
      woe_id: 0,
      ISO: {
        alpha_2: 'GN',
        alpha_3: 'GIN',
        alpha_numeric_code: '324'
      },
      capital: {
        name: 'Conakry',
        woe_id: 1334760
      }
    }, {
      name: 'Guinea-bissau',
      woe_id: 0,
      ISO: {
        alpha_2: 'GW',
        alpha_3: 'GNB',
        alpha_numeric_code: '624'
      },
      capital: {
        name: 'Bissau',
        woe_id: 1559861
      }
    }, {
      name: 'Guyana',
      woe_id: 0,
      ISO: {
        alpha_2: 'GY',
        alpha_3: 'GUY',
        alpha_numeric_code: '328'
      },
      capital: {
        name: 'Georgetown',
        woe_id: 376765
      }
    }, {
      name: 'Haiti',
      woe_id: 0,
      ISO: {
        alpha_2: 'HT',
        alpha_3: 'HTI',
        alpha_numeric_code: '332'
      },
      capital: {
        name: 'Port-au-Prince',
        woe_id: 96110
      }
    }, {
      name: 'Holy See (Vatican City State)',
      woe_id: 0,
      ISO: {
        alpha_2: 'VA',
        alpha_3: 'VAT',
        alpha_numeric_code: '336'
      },
      capital: {
        name: 'Vatican City',
        woe_id: 537842
      }
    }, {
      name: 'Honduras',
      woe_id: 0,
      ISO: {
        alpha_2: 'HN',
        alpha_3: 'HND',
        alpha_numeric_code: '340'
      },
      capital: {
        name: 'Tegucigalpa',
        woe_id: 107681
      }
    }, {
      name: 'Hong Kong',
      woe_id: 24865698,
      ISO: {
        alpha_2: 'HK',
        alpha_3: 'HKG',
        alpha_numeric_code: '344'
      },
      capital: {
        name: 'Hong Kong',
        woe_id: 2165352
      }
    }, {
      name: 'Hungary',
      woe_id: 0,
      ISO: {
        alpha_2: 'HU',
        alpha_3: 'HUN',
        alpha_numeric_code: '348'
      },
      capital: {
        name: 'Budapest',
        woe_id: 804365
      }
    }, {
      name: 'Iceland',
      woe_id: 23424845,
      ISO: {
        alpha_2: 'IS',
        alpha_3: 'ISL',
        alpha_numeric_code: '352'
      },
      capital: {
        name: 'Reykjavik',
        woe_id: 980389
      }
    }, {
      name: 'India',
      woe_id: 23424848,
      ISO: {
        alpha_2: 'IN',
        alpha_3: 'IND',
        alpha_numeric_code: '356'
      },
      capital: {
        name: 'New Delhi',
        woe_id: 29229014
      }
    }, {
      name: 'Indonesia',
      woe_id: 23424846,
      ISO: {
        alpha_2: 'ID',
        alpha_3: 'IDN',
        alpha_numeric_code: '360'
      },
      capital: {
        name: 'Jakarta',
        woe_id: 1047378
      }
    }, {
      name: 'Iran, Islamic Republic of',
      woe_id: 0,
      ISO: {
        alpha_2: 'IR',
        alpha_3: 'IRN',
        alpha_numeric_code: '364'
      },
      capital: {
        name: 'Tehran',
        woe_id: 2251945
      }
    }, {
      name: 'Iraq',
      woe_id: 0,
      ISO: {
        alpha_2: 'IQ',
        alpha_3: 'IRQ',
        alpha_numeric_code: '368'
      },
      capital: {
        name: 'Baghdad',
        woe_id: 1979455
      }
    }, {
      name: 'Ireland',
      woe_id: 23424803,
      ISO: {
        alpha_2: 'IE',
        alpha_3: 'IRL',
        alpha_numeric_code: '372'
      },
      capital: {
        name: 'Dublin',
        woe_id: 560743
      }
    }, {
      name: 'Isle of Man',
      woe_id: 0,
      ISO: {
        alpha_2: 'IM',
        alpha_3: 'IMN',
        alpha_numeric_code: '833'
      },
      capital: {
        name: 'Douglas',
        woe_id: 538629
      }
    }, {
      name: 'Israel',
      woe_id: 0,
      ISO: {
        alpha_2: 'IL',
        alpha_3: 'ISR',
        alpha_numeric_code: '376'
      },
      capital: {
        name: 'Jerusalem',
        woe_id: 1968222
      }
    }, {
      name: 'Italy',
      woe_id: 23424853,
      ISO: {
        alpha_2: 'IT',
        alpha_3: 'ITA',
        alpha_numeric_code: '380'
      },
      capital: {
        name: 'Rome',
        woe_id: 721943
      }
    }, {
      name: 'Jamaica',
      woe_id: 0,
      ISO: {
        alpha_2: 'JM',
        alpha_3: 'JAM',
        alpha_numeric_code: '388'
      },
      capital: {
        name: 'Kingston',
        woe_id: 109251
      }
    }, {
      name: 'Japan',
      woe_id: 23424856,
      ISO: {
        alpha_2: 'JP',
        alpha_3: 'JPN',
        alpha_numeric_code: '392'
      },
      capital: {
        name: 'Tokyo',
        woe_id: 1118370
      }
    }, {
      name: 'Jordan',
      woe_id: 0,
      ISO: {
        alpha_2: 'JO',
        alpha_3: 'JOR',
        alpha_numeric_code: '400'
      },
      capital: {
        name: 'Amman',
        woe_id: 1968902
      }
    }, {
      name: 'Kazakhstan',
      woe_id: 0,
      ISO: {
        alpha_2: 'KZ',
        alpha_3: 'KAZ',
        alpha_numeric_code: '398'
      },
      capital: {
        name: 'Astana',
        woe_id: 2264962
      }
    }, {
      name: 'Kenya',
      woe_id: 0,
      ISO: {
        alpha_2: 'KE',
        alpha_3: 'KEN',
        alpha_numeric_code: '404'
      },
      capital: {
        name: 'Nairobi',
        woe_id: 1528488
      }
    }, {
      name: 'Kiribati',
      woe_id: 0,
      ISO: {
        alpha_2: 'KI',
        alpha_3: 'KIR',
        alpha_numeric_code: '296'
      },
      capital: {
        name: 'Tarawa',
        woe_id: 29112751
      }
    }, {
      name: 'Korea, Democratic People\'s Republic of',
      woe_id: 23424868,
      ISO: {
        alpha_2: 'KP',
        alpha_3: 'PRK',
        alpha_numeric_code: '408'
      },
      capital: {
        name: 'Pyongyang',
        woe_id: 1079132
      }
    }, {
      name: 'Kosovo',
      woe_id: 0,
      ISO: {
        alpha_2: 'KR',
        alpha_3: 'KOR',
        alpha_numeric_code: '410'
      },
      capital: {
        name: 'Pristina',
        woe_id: 536151
      }
    }, {
      name: 'Kuwait',
      woe_id: 0,
      ISO: {
        alpha_2: 'KW',
        alpha_3: 'KWT',
        alpha_numeric_code: '414'
      },
      capital: {
        name: 'Kuwait City',
        woe_id: 1940631
      }
    }, {
      name: 'Kyrgyzstan',
      woe_id: 0,
      ISO: {
        alpha_2: 'KG',
        alpha_3: 'KGZ',
        alpha_numeric_code: '417'
      },
      capital: {
        name: 'Bishkek',
        woe_id: 1969888
      }
    }, {
      name: 'Lao People\'s Democratic Republic',
      woe_id: 0,
      ISO: {
        alpha_2: 'LA',
        alpha_3: 'LAO',
        alpha_numeric_code: '418'
      },
      capital: {
        name: 'Vientiane',
        woe_id: 1140612
      }
    }, {
      name: 'Latvia',
      woe_id: 0,
      ISO: {
        alpha_2: 'LV',
        alpha_3: 'LVA',
        alpha_numeric_code: '428'
      },
      capital: {
        name: 'Riga',
        woe_id: 854823
      }
    }, {
      name: 'Lebanon',
      woe_id: 0,
      ISO: {
        alpha_2: 'LB',
        alpha_3: 'LBN',
        alpha_numeric_code: '422'
      },
      capital: {
        name: 'Beirut',
        woe_id: 1960307
      }
    }, {
      name: 'Lesotho',
      woe_id: 0,
      ISO: {
        alpha_2: 'LS',
        alpha_3: 'LSO',
        alpha_numeric_code: '426'
      },
      capital: {
        name: 'Maseru',
        woe_id: 1352389
      }
    }, {
      name: 'Liberia',
      woe_id: 0,
      ISO: {
        alpha_2: 'LR',
        alpha_3: 'LBR',
        alpha_numeric_code: '430'
      },
      capital: {
        name: 'Monrovia',
        woe_id: 1350536
      }
    }, {
      name: 'Libyan Arab Jamahiriya',
      woe_id: 0,
      ISO: {
        alpha_2: 'LY',
        alpha_3: 'LBY',
        alpha_numeric_code: '434'
      },
      capital: {
        name: 'Tripoli',
        woe_id: 1353281
      }
    }, {
      name: 'Liechtenstein',
      woe_id: 0,
      ISO: {
        alpha_2: 'LI',
        alpha_3: 'LIE',
        alpha_numeric_code: '438'
      },
      capital: {
        name: 'Vaduz',
        woe_id: 856440
      }
    }, {
      name: 'Lithuania',
      woe_id: 23424875,
      ISO: {
        alpha_2: 'LT',
        alpha_3: 'LTU',
        alpha_numeric_code: '440'
      },
      capital: {
        name: 'Vilnius',
        woe_id: 479616
      }
    }, {
      name: 'Luxembourg',
      woe_id: 23424881,
      ISO: {
        alpha_2: 'LU',
        alpha_3: 'LUX',
        alpha_numeric_code: '442'
      },
      capital: {
        name: 'Luxembourg',
        woe_id: 979282
      }
    }, {
      name: 'Macau',
      woe_id: 0,
      ISO: {
        alpha_2: 'MO',
        alpha_3: 'MAC',
        alpha_numeric_code: '446'
      },
      capital: {
        name: 'Macau',
        woe_id: 1887901
      }
    }, {
      name: 'Macedonia',
      woe_id: 0,
      ISO: {
        alpha_2: 'MK',
        alpha_3: 'MKD',
        alpha_numeric_code: '807'
      },
      capital: {
        name: 'Skopje',
        woe_id: 482940
      }
    }, {
      name: 'Madagascar',
      woe_id: 0,
      ISO: {
        alpha_2: 'MG',
        alpha_3: 'MDG',
        alpha_numeric_code: '450'
      },
      capital: {
        name: 'Antananarivo',
        woe_id: 1358594
      }
    }, {
      name: 'Malawi',
      woe_id: 0,
      ISO: {
        alpha_2: 'MW',
        alpha_3: 'MWI',
        alpha_numeric_code: '454'
      },
      capital: {
        name: 'Lilongwe',
        woe_id: 1367476
      }
    }, {
      name: 'Malaysia',
      woe_id: 0,
      ISO: {
        alpha_2: 'MY',
        alpha_3: 'MYS',
        alpha_numeric_code: '458'
      },
      capital: {
        name: 'Kuala Lumpur',
        woe_id: 1154781
      }
    }, {
      name: 'Maldives',
      woe_id: 0,
      ISO: {
        alpha_2: 'MV',
        alpha_3: 'MDV',
        alpha_numeric_code: '462'
      },
      capital: {
        name: 'Male',
        woe_id: 2268295
      }
    }, {
      name: 'Mali',
      woe_id: 0,
      ISO: {
        alpha_2: 'ML',
        alpha_3: 'MLI',
        alpha_numeric_code: '466'
      },
      capital: {
        name: 'Bamako',
        woe_id: 1369729
      }
    }, {
      name: 'Malta',
      woe_id: 23424897,
      ISO: {
        alpha_2: 'MT',
        alpha_3: 'MLT',
        alpha_numeric_code: '470'
      },
      capital: {
        name: 'Valletta',
        woe_id: 483559
      }
    }, {
      name: 'Marshall Islands',
      woe_id: 0,
      ISO: {
        alpha_2: 'MH',
        alpha_3: 'MHL',
        alpha_numeric_code: '584'
      },
      capital: {
        name: 'Majuro',
        woe_id: 1064287
      }
    }, {
      name: 'Mauritania',
      woe_id: 0,
      ISO: {
        alpha_2: 'MR',
        alpha_3: 'MRT',
        alpha_numeric_code: '478'
      },
      capital: {
        name: 'Nouakchott',
        woe_id: 1504735
      }
    }, {
      name: 'Mauritius',
      woe_id: 0,
      ISO: {
        alpha_2: 'MU',
        alpha_3: 'MUS',
        alpha_numeric_code: '480'
      },
      capital: {
        name: 'Port Louis',
        woe_id: 1377436
      }
    }, {
      name: 'Mexico',
      woe_id: 23424900,
      ISO: {
        alpha_2: 'MX',
        alpha_3: 'MEX',
        alpha_numeric_code: '484'
      },
      capital: {
        name: 'Mexico City',
        woe_id: 116545
      }
    }, {
      name: 'Micronesia',
      woe_id: 0,
      ISO: {
        alpha_2: 'FM',
        alpha_3: 'FSM',
        alpha_numeric_code: '583'
      },
      capital: {
        name: 'Palikir',
        woe_id: 1062825
      }
    }, {
      name: 'Moldova',
      woe_id: 0,
      ISO: {
        alpha_2: 'MD',
        alpha_3: 'MDA',
        alpha_numeric_code: '498'
      },
      capital: {
        name: 'Chisinau',
        woe_id: 480793
      }
    }, {
      name: 'Monaco',
      woe_id: 23424892,
      ISO: {
        alpha_2: 'MC',
        alpha_3: 'MCO',
        alpha_numeric_code: '492'
      },
      capital: {
        name: 'Monaco',
        woe_id: 483301
      }
    }, {
      name: 'Mongolia',
      woe_id: 0,
      ISO: {
        alpha_2: 'MN',
        alpha_3: 'MNG',
        alpha_numeric_code: '496'
      },
      capital: {
        name: 'Ulaanbaatar',
        woe_id: 2266535
      }
    }, {
      name: 'Montenegro',
      woe_id: 0,
      ISO: {
        alpha_2: 'ME',
        alpha_3: 'MNE',
        alpha_numeric_code: '499'
      },
      capital: {
        name: 'Podgorica',
        woe_id: 536010
      }
    }, {
      name: 'Montserrat',
      woe_id: 0,
      ISO: {
        alpha_2: 'MS',
        alpha_3: 'MSR',
        alpha_numeric_code: '500'
      },
      capital: {
        name: 'Plymouth',
        woe_id: 110875
      }
    }, {
      name: 'Morocco',
      woe_id: 0,
      ISO: {
        alpha_2: 'MA',
        alpha_3: 'MAR',
        alpha_numeric_code: '504'
      },
      capital: {
        name: 'Rabat',
        woe_id: 1539359
      }
    }, {
      name: 'Mozambique',
      woe_id: 0,
      ISO: {
        alpha_2: 'MZ',
        alpha_3: 'MOZ',
        alpha_numeric_code: '508'
      },
      capital: {
        name: 'Maputo',
        woe_id: 1550363
      }
    }, {
      name: 'Myanmar',
      woe_id: 0,
      ISO: {
        alpha_2: 'MM',
        alpha_3: 'MMR',
        alpha_numeric_code: '104'
      },
      capital: {
        name: 'Rangoon',
        woe_id: 1015662
      }
    }, {
      name: 'Namibia',
      woe_id: 0,
      ISO: {
        alpha_2: 'NA',
        alpha_3: 'NAM',
        alpha_numeric_code: '516'
      },
      capital: {
        name: 'Windhoek',
        woe_id: 1466719
      }
    }, {
      name: 'Nauru',
      woe_id: 0,
      ISO: {
        alpha_2: 'NR',
        alpha_3: 'NRU',
        alpha_numeric_code: '520'
      },
      capital: {
        name: 'Yaren',
        woe_id: 1064282
      }
    }, {
      name: 'Nepal',
      woe_id: 0,
      ISO: {
        alpha_2: 'NP',
        alpha_3: 'NPL',
        alpha_numeric_code: '524'
      },
      capital: {
        name: 'Kathmandu',
        woe_id: 2269179
      }
    }, {
      name: 'Netherlands',
      woe_id: 23424909,
      ISO: {
        alpha_2: 'NL',
        alpha_3: 'NLD',
        alpha_numeric_code: '528'
      },
      capital: {
        name: 'Amsterdam',
        woe_id: 727232
      }
    }, {
      name: 'New Caledonia',
      woe_id: 0,
      ISO: {
        alpha_2: 'NC',
        alpha_3: 'NCL',
        alpha_numeric_code: '540'
      },
      capital: {
        name: 'Noumea',
        woe_id: 1049640
      }
    }, {
      name: 'New Zealand',
      woe_id: 23424916,
      ISO: {
        alpha_2: 'NZ',
        alpha_3: 'NZL',
        alpha_numeric_code: '554'
      },
      capital: {
        name: 'Wellington',
        woe_id: 2351310
      }
    }, {
      name: 'Nicaragua',
      woe_id: 0,
      ISO: {
        alpha_2: 'NI',
        alpha_3: 'NIC',
        alpha_numeric_code: '558'
      },
      capital: {
        name: 'Managua',
        woe_id: 153523
      }
    }, {
      name: 'Niger',
      woe_id: 0,
      ISO: {
        alpha_2: 'NE',
        alpha_3: 'NER',
        alpha_numeric_code: '562'
      },
      capital: {
        name: 'Niamey',
        woe_id: 1505949
      }
    }, {
      name: 'Nigeria',
      woe_id: 0,
      ISO: {
        alpha_2: 'NG',
        alpha_3: 'NGA',
        alpha_numeric_code: '566'
      },
      capital: {
        name: 'Abuja',
        woe_id: 1383729
      }
    }, {
      name: 'Niue',
      woe_id: 0,
      ISO: {
        alpha_2: 'NU',
        alpha_3: 'NIU',
        alpha_numeric_code: '570'
      },
      capital: {
        name: 'Alofi',
        woe_id: 1064260
      }
    }, {
      name: 'Norfolk Island',
      woe_id: 0,
      ISO: {
        alpha_2: 'NF',
        alpha_3: 'NFK',
        alpha_numeric_code: '574'
      },
      capital: {
        name: 'Kingston',
        woe_id: 1049697
      }
    }, {
      name: 'Northern Mariana Islands',
      woe_id: 0,
      ISO: {
        alpha_2: 'MP',
        alpha_3: 'MNP',
        alpha_numeric_code: '580'
      },
      capital: {
        name: 'Saipan',
        woe_id: 1062826
      }
    }, {
      name: 'Norway',
      woe_id: 23424910,
      ISO: {
        alpha_2: 'NO',
        alpha_3: 'NOR',
        alpha_numeric_code: '578'
      },
      capital: {
        name: 'Oslo',
        woe_id: 862592
      }
    }, {
      name: 'Oman',
      woe_id: 0,
      ISO: {
        alpha_2: 'OM',
        alpha_3: 'OMN',
        alpha_numeric_code: '512'
      },
      capital: {
        name: 'Muscat',
        woe_id: 2268284
      }
    }, {
      name: 'Pakistan',
      woe_id: 0,
      ISO: {
        alpha_2: 'PK',
        alpha_3: 'PAK',
        alpha_numeric_code: '586'
      },
      capital: {
        name: 'Islamabad',
        woe_id: 2211027
      }
    }, {
      name: 'Palau',
      woe_id: 0,
      ISO: {
        alpha_2: 'PW',
        alpha_3: 'PLW',
        alpha_numeric_code: '585'
      },
      capital: {
        name: 'Melekeok',
        woe_id: 29389597
      }
    }, {
      name: 'Palestinian Territory, Occupied',
      woe_id: 0,
      ISO: {
        alpha_2: 'PS',
        alpha_3: 'PSE',
        alpha_numeric_code: '275'
      },
      capital: {
        name: 'Jerusalem',
        woe_id: 1968222
      }
    }, {
      name: 'Panama',
      woe_id: 0,
      ISO: {
        alpha_2: 'PA',
        alpha_3: 'PAN',
        alpha_numeric_code: '591'
      },
      capital: {
        name: 'Panama City',
        woe_id: 159386
      }
    }, {
      name: 'Papua New Guinea',
      woe_id: 0,
      ISO: {
        alpha_2: 'PG',
        alpha_3: 'PNG',
        alpha_numeric_code: '598'
      },
      capital: {
        name: 'Port Moresby',
        woe_id: 1062005
      }
    }, {
      name: 'Paraguay',
      woe_id: 0,
      ISO: {
        alpha_2: 'PY',
        alpha_3: 'PRY',
        alpha_numeric_code: '600'
      },
      capital: {
        name: 'Asuncion',
        woe_id: 379176
      }
    }, {
      name: 'Peru',
      woe_id: 23424919,
      ISO: {
        alpha_2: 'PE',
        alpha_3: 'PER',
        alpha_numeric_code: '604'
      },
      capital: {
        name: 'Lima',
        woe_id: 418440
      }
    }, {
      name: 'Philippines',
      woe_id: 0,
      ISO: {
        alpha_2: 'PH',
        alpha_3: 'PHL',
        alpha_numeric_code: '608'
      },
      capital: {
        name: 'Manila',
        woe_id: 1199477
      }
    }, {
      name: 'Pitcairn',
      woe_id: 0,
      ISO: {
        alpha_2: 'PN',
        alpha_3: 'PCN',
        alpha_numeric_code: '612'
      },
      capital: {
        name: 'Adamstown',
        woe_id: 1064283
      }
    }, {
      name: 'Poland',
      woe_id: 23424923,
      ISO: {
        alpha_2: 'PL',
        alpha_3: 'POL',
        alpha_numeric_code: '616'
      },
      capital: {
        name: 'Warsaw',
        woe_id: 523920
      }
    }, {
      name: 'Portugal',
      woe_id: 23424925,
      ISO: {
        alpha_2: 'PT',
        alpha_3: 'PRT',
        alpha_numeric_code: '620'
      },
      capital: {
        name: 'Lisbon',
        woe_id: 742676
      }
    }, {
      name: 'Puerto Rico',
      woe_id: 0,
      ISO: {
        alpha_2: 'PR',
        alpha_3: 'PRI',
        alpha_numeric_code: '630'
      },
      capital: {
        name: 'San Juan',
        woe_id: 161685
      }
    }, {
      name: 'Qatar',
      woe_id: 23424930,
      ISO: {
        alpha_2: 'QA',
        alpha_3: 'QAT',
        alpha_numeric_code: '634'
      },
      capital: {
        name: 'Doha',
        woe_id: 1940517
      }
    }, {
      name: 'Republic of Congo',
      woe_id: 0,
      ISO: {
        alpha_2: 'CG',
        alpha_3: 'COG',
        alpha_numeric_code: '178'
      },
      capital: {
        name: 'Brazzaville',
        woe_id: 1279685
      }
    }, {
      name: 'Romania',
      woe_id: 23424933,
      ISO: {
        alpha_2: 'RO',
        alpha_3: 'ROU',
        alpha_numeric_code: '642'
      },
      capital: {
        name: 'Bucharest',
        woe_id: 868274
      }
    }, {
      name: 'Russia',
      woe_id: 23424936,
      ISO: {
        alpha_2: 'RU',
        alpha_3: 'RUS',
        alpha_numeric_code: '643'
      },
      capital: {
        name: 'Moscow',
        woe_id: 2122265
      }
    }, {
      name: 'Rwanda',
      woe_id: 0,
      ISO: {
        alpha_2: 'RW',
        alpha_3: 'RWA',
        alpha_numeric_code: '646'
      },
      capital: {
        name: 'Kigali',
        woe_id: 1511263
      }
    }, {
      name: 'Saint Helena',
      woe_id: 0,
      ISO: {
        alpha_2: 'SH',
        alpha_3: 'SHN',
        alpha_numeric_code: '654'
      },
      capital: {
        name: 'Jamestown',
        woe_id: 1418852
      }
    }, {
      name: 'Saint Kitts and Nevis',
      woe_id: 0,
      ISO: {
        alpha_2: 'KN',
        alpha_3: 'KNA',
        alpha_numeric_code: '659'
      },
      capital: {
        name: 'Basseterre',
        woe_id: 161849
      }
    }, {
      name: 'Saint Lucia',
      woe_id: 0,
      ISO: {
        alpha_2: 'LC',
        alpha_3: 'LCA',
        alpha_numeric_code: '662'
      },
      capital: {
        name: 'Castries',
        woe_id: 162005
      }
    }, {
      name: 'Saint Pierre and Miquelon',
      woe_id: 0,
      ISO: {
        alpha_2: 'PM',
        alpha_3: 'SPM',
        alpha_numeric_code: '666'
      },
      capital: {
        name: 'Saint-Pierre',
        woe_id: 1410240
      }
    }, {
      name: 'Saint Vincent and The Grenadines',
      woe_id: 0,
      ISO: {
        alpha_2: 'VC',
        alpha_3: 'VCT',
        alpha_numeric_code: '670'
      },
      capital: {
        name: 'Kingstown',
        woe_id: 329564
      }
    }, {
      name: 'Samoa',
      woe_id: 0,
      ISO: {
        alpha_2: 'WS',
        alpha_3: 'WSM',
        alpha_numeric_code: '882'
      },
      capital: {
        name: 'Apia',
        woe_id: 980858
      }
    }, {
      name: 'San Marino',
      woe_id: 0,
      ISO: {
        alpha_2: 'SM',
        alpha_3: 'SMR',
        alpha_numeric_code: '674'
      },
      capital: {
        name: 'San Marino',
        woe_id: 532373
      }
    }, {
      name: 'Sao Tome and Principe',
      woe_id: 0,
      ISO: {
        alpha_2: 'ST',
        alpha_3: 'STP',
        alpha_numeric_code: '678'
      },
      capital: {
        name: 'Sao Tome',
        woe_id: 1441680
      }
    }, {
      name: 'Saudi Arabia',
      woe_id: 23424938,
      ISO: {
        alpha_2: 'SA',
        alpha_3: 'SAU',
        alpha_numeric_code: '682'
      },
      capital: {
        name: 'Riyadh',
        woe_id: 1939753
      }
    }, {
      name: 'Senegal',
      woe_id: 0,
      ISO: {
        alpha_2: 'SN',
        alpha_3: 'SEN',
        alpha_numeric_code: '686'
      },
      capital: {
        name: 'Dakar',
        woe_id: 1411986
      }
    }, {
      name: 'Serbia',
      woe_id: 0,
      ISO: {
        alpha_2: 'RS',
        alpha_3: 'SRB',
        alpha_numeric_code: '688'
      },
      capital: {
        name: 'Belgrade',
        woe_id: 532697
      }
    }, {
      name: 'Seychelles',
      woe_id: 0,
      ISO: {
        alpha_2: 'SC',
        alpha_3: 'SYC',
        alpha_numeric_code: '690'
      },
      capital: {
        name: 'Victoria',
        woe_id: 1411024
      }
    }, {
      name: 'Sierra Leone',
      woe_id: 0,
      ISO: {
        alpha_2: 'SL',
        alpha_3: 'SLE',
        alpha_numeric_code: '694'
      },
      capital: {
        name: 'Freetown',
        woe_id: 1419467
      }
    }, {
      name: 'Singapore',
      woe_id: 23424948,
      ISO: {
        alpha_2: 'SG',
        alpha_3: 'SGP',
        alpha_numeric_code: '702'
      },
      capital: {
        name: 'Singapore',
        woe_id: 1062617
      }
    }, {
      name: 'Sint Maarten',
      woe_id: 0,
      ISO: {
        alpha_2: 'MF',
        alpha_3: 'MAF',
        alpha_numeric_code: '663'
      },
      capital: {
        name: 'Marigot',
        woe_id: 80765
      }
    }, {
      name: 'Sint Maarten',
      woe_id: 0,
      ISO: {
        alpha_2: 'MF',
        alpha_3: 'MAF',
        alpha_numeric_code: '663'
      },
      capital: {
        name: 'Philipsburg',
        woe_id: 151970
      }
    }, {
      name: 'Slovakia',
      woe_id: 0,
      ISO: {
        alpha_2: 'SK',
        alpha_3: 'SVK',
        alpha_numeric_code: '703'
      },
      capital: {
        name: 'Bratislava',
        woe_id: 818717
      }
    }, {
      name: 'Slovenia',
      woe_id: 0,
      ISO: {
        alpha_2: 'SI',
        alpha_3: 'SVN',
        alpha_numeric_code: '705'
      },
      capital: {
        name: 'Ljubljana',
        woe_id: 530634
      }
    }, {
      name: 'Solomon Islands',
      woe_id: 0,
      ISO: {
        alpha_2: 'SB',
        alpha_3: 'SLB',
        alpha_numeric_code: '090'
      },
      capital: {
        name: 'Honiara',
        woe_id: 1020496
      }
    }, {
      name: 'Somalia',
      woe_id: 0,
      ISO: {
        alpha_2: 'SO',
        alpha_3: 'SOM',
        alpha_numeric_code: '706'
      },
      capital: {
        name: 'Mogadishu',
        woe_id: 1428499
      }
    }, {
      name: 'South Africa',
      woe_id: 23424942,
      ISO: {
        alpha_2: 'ZA',
        alpha_3: 'ZAF',
        alpha_numeric_code: '710'
      },
      capital: {
        name: 'Pretoria',
        woe_id: 1586638
      }
    }, {
      name: 'South Georgia and The South Sandwich Islands',
      woe_id: 0,
      ISO: {
        alpha_2: 'GS',
        alpha_3: 'SGS',
        alpha_numeric_code: '239'
      },
      capital: {
        name: 'King Edward Point',
        woe_id: 23424955
      }
    }, {
      name: 'South Korea',
      woe_id: 23424868,
      ISO: {
        alpha_2: 'SS',
        alpha_3: 'SSD',
        alpha_numeric_code: '728'
      },
      capital: {
        name: 'Seoul',
        woe_id: 1132599
      }
    }, {
      name: 'Spain',
      woe_id: 23424950,
      ISO: {
        alpha_2: 'ES',
        alpha_3: 'ESP',
        alpha_numeric_code: '724'
      },
      capital: {
        name: 'Madrid',
        woe_id: 766273
      }
    }, {
      name: 'Sri Lanka',
      woe_id: 0,
      ISO: {
        alpha_2: 'LK',
        alpha_3: 'LKA',
        alpha_numeric_code: '144'
      },
      capital: {
        name: 'Colombo',
        woe_id: 2189783
      }
    }, {
      name: 'Sudan',
      woe_id: 0,
      ISO: {
        alpha_2: 'SD',
        alpha_3: 'SDN',
        alpha_numeric_code: '736'
      },
      capital: {
        name: 'Khartoum',
        woe_id: 1433559
      }
    }, {
      name: 'Suriname',
      woe_id: 0,
      ISO: {
        alpha_2: 'SR',
        alpha_3: 'SUR',
        alpha_numeric_code: '740'
      },
      capital: {
        name: 'Paramaribo',
        woe_id: 377227
      }
    }, {
      name: 'Svalbard and Jan Mayen',
      woe_id: 0,
      ISO: {
        alpha_2: 'SJ',
        alpha_3: 'SJM',
        alpha_numeric_code: '744'
      },
      capital: {
        name: 'Longyearbyen',
        woe_id: 537831
      }
    }, {
      name: 'Swaziland',
      woe_id: 0,
      ISO: {
        alpha_2: 'SZ',
        alpha_3: 'SWZ',
        alpha_numeric_code: '748'
      },
      capital: {
        name: 'Mbabane',
        woe_id: 1563426
      }
    }, {
      name: 'Sweden',
      woe_id: 23424957,
      ISO: {
        alpha_2: 'SE',
        alpha_3: 'SWE',
        alpha_numeric_code: '752'
      },
      capital: {
        name: 'Stockholm',
        woe_id: 906057
      }
    }, {
      name: 'Switzerland',
      woe_id: 23424957,
      ISO: {
        alpha_2: 'CH',
        alpha_3: 'CHE',
        alpha_numeric_code: '756'
      },
      capital: {
        name: 'Bern',
        woe_id: 781788
      }
    }, {
      name: 'Syrian Arab Republic',
      woe_id: 0,
      ISO: {
        alpha_2: 'SY',
        alpha_3: 'SYR',
        alpha_numeric_code: '760'
      },
      capital: {
        name: 'Damascus',
        woe_id: 1947122
      }
    }, {
      name: 'Taiwan',
      woe_id: 23424971,
      ISO: {
        alpha_2: 'TW',
        alpha_3: 'TWN',
        alpha_numeric_code: '158'
      },
      capital: {
        name: 'Taipei',
        woe_id: 2306179
      }
    }, {
      name: 'Tajikistan',
      woe_id: 0,
      ISO: {
        alpha_2: 'TJ',
        alpha_3: 'TJK',
        alpha_numeric_code: '762'
      },
      capital: {
        name: 'Dushanbe',
        woe_id: 2213336
      }
    }, {
      name: 'Tanzania',
      woe_id: 0,
      ISO: {
        alpha_2: 'TZ',
        alpha_3: 'TZA',
        alpha_numeric_code: '834'
      },
      capital: {
        name: 'Dar es Salaam',
        woe_id: 1443415
      }
    }, {
      name: 'Thailand',
      woe_id: 23424960,
      ISO: {
        alpha_2: 'TH',
        alpha_3: 'THA',
        alpha_numeric_code: '764'
      },
      capital: {
        name: 'Bangkok',
        woe_id: 1225448
      }
    }, {
      name: 'Timor-leste',
      woe_id: 0,
      ISO: {
        alpha_2: 'TL',
        alpha_3: 'TLS',
        alpha_numeric_code: '626'
      },
      capital: {
        name: 'Dili',
        woe_id: 1047376
      }
    }, {
      name: 'Togo',
      woe_id: 0,
      ISO: {
        alpha_2: 'TG',
        alpha_3: 'TGO',
        alpha_numeric_code: '768'
      },
      capital: {
        name: 'Lome',
        woe_id: 1440110
      }
    }, {
      name: 'Tokelau',
      woe_id: 0,
      ISO: {
        alpha_2: 'TK',
        alpha_3: 'TKL',
        alpha_numeric_code: '772'
      },
      capital: {
        name: 'Atafu',
        woe_id: 23424963
      }
    }, {
      name: 'Tonga',
      woe_id: 0,
      ISO: {
        alpha_2: 'TO',
        alpha_3: 'TON',
        alpha_numeric_code: '776'
      },
      capital: {
        name: 'Nuku\'alofa',
        woe_id: 1062813
      }
    }, {
      name: 'Trinidad and Tobago',
      woe_id: 0,
      ISO: {
        alpha_2: 'TT',
        alpha_3: 'TTO',
        alpha_numeric_code: '780'
      },
      capital: {
        name: 'Port of Spain',
        woe_id: 380213
      }
    }, {
      name: 'Tunisia',
      woe_id: 0,
      ISO: {
        alpha_2: 'TN',
        alpha_3: 'TUN',
        alpha_numeric_code: '788'
      },
      capital: {
        name: 'Tunis',
        woe_id: 1442746
      }
    }, {
      name: 'Turkey',
      woe_id: 0,
      ISO: {
        alpha_2: 'TR',
        alpha_3: 'TUR',
        alpha_numeric_code: '792'
      },
      capital: {
        name: 'Ankara',
        woe_id: 2343732
      }
    }, {
      name: 'Turkmenistan',
      woe_id: 0,
      ISO: {
        alpha_2: 'TM',
        alpha_3: 'TKM',
        alpha_numeric_code: '795'
      },
      capital: {
        name: 'Ashgabat',
        woe_id: 1935520
      }
    }, {
      name: 'Turks and Caicos Islands',
      woe_id: 0,
      ISO: {
        alpha_2: 'TC',
        alpha_3: 'TCA',
        alpha_numeric_code: '796'
      },
      capital: {
        name: 'Grand Turk',
        woe_id: 23424962
      }
    }, {
      name: 'Tuvalu',
      woe_id: 0,
      ISO: {
        alpha_2: 'TV',
        alpha_3: 'TUV',
        alpha_numeric_code: '798'
      },
      capital: {
        name: 'Funafuti',
        woe_id: 1064289
      }
    }, {
      name: 'Uganda',
      woe_id: 0,
      ISO: {
        alpha_2: 'UG',
        alpha_3: 'UGA',
        alpha_numeric_code: '800'
      },
      capital: {
        name: 'Kampala',
        woe_id: 1451962
      }
    }, {
      name: 'Ukraine',
      woe_id: 23424976,
      ISO: {
        alpha_2: 'UA',
        alpha_3: 'UKR',
        alpha_numeric_code: '804'
      },
      capital: {
        name: 'Kyiv',
        woe_id: 924938
      }
    }, {
      name: 'United Arab Emirates',
      woe_id: 23424738,
      ISO: {
        alpha_2: 'AE',
        alpha_3: 'ARE',
        alpha_numeric_code: '784'
      },
      capital: {
        name: 'Abu Dhabi',
        woe_id: 1940330
      }
    }, {
      name: 'United Kingdom',
      woe_id: 23424975,
      ISO: {
        alpha_2: 'GB',
        alpha_3: 'GBR',
        alpha_numeric_code: '826'
      },
      capital: {
        name: 'London',
        woe_id: 44418
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Albany',
        woe_id: 2352646
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Annapolis',
        woe_id: 2354877
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Atlanta',
        woe_id: 2357024
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Augusta',
        woe_id: 2357379
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Austin',
        woe_id: 2357536
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Baton Rouge',
        woe_id: 2359991
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Bismarck',
        woe_id: 2364681
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Boise',
        woe_id: 2366355
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Boston',
        woe_id: 2367105
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Charleston',
        woe_id: 2378317
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Cheyenne',
        woe_id: 2379552
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Columbia',
        woe_id: 2383552
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Columbus',
        woe_id: 2383660
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Concord',
        woe_id: 2384019
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Denver',
        woe_id: 2391279
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Des Moines',
        woe_id: 2391446
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Dover',
        woe_id: 2393370
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Frankfort',
        woe_id: 2406903
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Harrisburg',
        woe_id: 2418046
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Hartford',
        woe_id: 2418244
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Helena',
        woe_id: 2419761
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Honolulu',
        woe_id: 2423945
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Indianapolis',
        woe_id: 2427032
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Jackson',
        woe_id: 2428184
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Jefferson City',
        woe_id: 2428866
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Juneau',
        woe_id: 2430300
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Lansing',
        woe_id: 2436453
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Lincoln',
        woe_id: 2439482
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Little Rock',
        woe_id: 2440351
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Madison',
        woe_id: 2443945
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Montgomery',
        woe_id: 2453369
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Montpelier',
        woe_id: 2453516
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Nashville',
        woe_id: 2457170
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Oklahoma City',
        woe_id: 2464592
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Olympia',
        woe_id: 2465478
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Phoenix',
        woe_id: 2471390
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Pierre',
        woe_id: 2471666
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Providence',
        woe_id: 2477058
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Raleigh',
        woe_id: 2478307
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Richmond',
        woe_id: 2480894
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Sacramento',
        woe_id: 2486340
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Saint Paul',
        woe_id: 2487129
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Salem',
        woe_id: 2487384
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Salt Lake City',
        woe_id: 2487610
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Santa Fe',
        woe_id: 2488867
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Springfield',
        woe_id: 2498306
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Tallahassee',
        woe_id: 2503713
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Topeka',
        woe_id: 2507158
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Trenton',
        woe_id: 2507854
      }
    }, {
      name: 'United States',
      woe_id: 23424977,
      ISO: {
        alpha_2: 'US',
        alpha_3: 'USA',
        alpha_numeric_code: '840'
      },
      capital: {
        name: 'Washington D.C.',
        woe_id: 2514815
      }
    }, {
      name: 'Uruguay',
      woe_id: 0,
      ISO: {
        alpha_2: 'UY',
        alpha_3: 'URY',
        alpha_numeric_code: '858'
      },
      capital: {
        name: 'Montevideo',
        woe_id: 468052
      }
    }, {
      name: 'Uzbekistan',
      woe_id: 0,
      ISO: {
        alpha_2: 'UZ',
        alpha_3: 'UZB',
        alpha_numeric_code: '860'
      },
      capital: {
        name: 'Tashkent',
        woe_id: 2272113
      }
    }, {
      name: 'Vanuatu',
      woe_id: 0,
      ISO: {
        alpha_2: 'VU',
        alpha_3: 'VUT',
        alpha_numeric_code: '548'
      },
      capital: {
        name: 'Port-Vila',
        woe_id: 1050907
      }
    }, {
      name: 'Venezuela',
      woe_id: 0,
      ISO: {
        alpha_2: 'VE',
        alpha_3: 'VEN',
        alpha_numeric_code: '862'
      },
      capital: {
        name: 'Caracas',
        woe_id: 395269
      }
    }, {
      name: 'Vietnam',
      woe_id: 23424984,
      ISO: {
        alpha_2: 'VN',
        alpha_3: 'VNM',
        alpha_numeric_code: '704'
      },
      capital: {
        name: 'Hanoi',
        woe_id: 91888417
      }
    },
    {
      name: 'Vietnam',
      woe_id: 23424984,
      ISO: {
        alpha_2: 'VN',
        alpha_3: 'VNM',
        alpha_numeric_code: '704'
      },
      capital: {
        name: 'Ho Chi Minh City',
        woe_id: 1252431
      }
    }, {
      name: 'Virgin Islands, British',
      woe_id: 0,
      ISO: {
        alpha_2: 'VI',
        alpha_3: 'VIB',
        alpha_numeric_code: '092'
      },
      capital: {
        name: 'Road Town',
        woe_id: 329616
      }
    },
    {
      name: 'Virgin Islands, U.S.',
      woe_id: 0,
      ISO: {
        alpha_2: 'VI',
        alpha_3: 'VIR',
        alpha_numeric_code: '850'
      },
      capital: {
        name: 'Charlotte Amalie',
        woe_id: 329667
      }
    }, {
      name: 'Virgin Islands, U.S.',
      woe_id: 0,
      ISO: {
        alpha_2: 'VI',
        alpha_3: 'VIR',
        alpha_numeric_code: '850'
      },
      capital: {
        name: 'Gustavia',
        woe_id: 80675
      }
    }, {
      name: 'Wallis and Futuna',
      woe_id: 0,
      ISO: {
        alpha_2: 'WF',
        alpha_3: 'WLF',
        alpha_numeric_code: '876'
      },
      capital: {
        name: 'Mata-Utu',
        woe_id: 1064134
      }
    }, {
      name: 'Western Sahara',
      woe_id: 0,
      ISO: {
        alpha_2: 'EH',
        alpha_3: 'ESH',
        alpha_numeric_code: '732'
      },
      capital: {
        name: 'Laayoune',
        woe_id: 1466769
      }
    }, {
      name: 'Yemen',
      woe_id: 0,
      ISO: {
        alpha_2: 'YE',
        alpha_3: 'YEM',
        alpha_numeric_code: '887'
      },
      capital: {
        name: 'Sanaa',
        woe_id: 1958237
      }
    }, {
      name: 'Zambia',
      woe_id: 0,
      ISO: {
        alpha_2: 'ZM',
        alpha_3: 'ZMB',
        alpha_numeric_code: '894'
      },
      capital: {
        name: 'Lusaka',
        woe_id: 1569006
      }
    }, {
      name: 'Zimbabwe',
      woe_id: 0,
      ISO: {
        alpha_2: 'ZW',
        alpha_3: 'ZWE',
        alpha_numeric_code: '716'
      },
      capital: {
        name: 'Harare',
        woe_id: 1467052
      }
    }
  ];
}
